import React, { useContext } from 'react';
import { GlobalContext } from '../state/GlobalContext';
import Timer from '../components/Timer';

export default function Navbar () {

  let { globalState, setGlobalState } = useContext(GlobalContext);

  const onDownload = () => {
    let arraybuff = globalState.db.export();

    let blob = new Blob([arraybuff]);
    let a = document.createElement("a");
    document.body.appendChild(a);

    a.href = window.URL.createObjectURL(blob);
    a.download = "sql.db";
    
    a.onclick = function () {
      setTimeout(function () {
        window.URL.revokeObjectURL(a.href);
      }, 1500);
    };
    a.click();
  };

  const onFile = (e) => {

    if (e && e.target && e.target.files[0]) {

      let dbFile = e.target.files[0];
      let lindex = dbFile.name.lastIndexOf('.');
      let extension = dbFile.name.slice(lindex);

      if (extension === '.db') {
        let { SQL } = globalState;

        let r = new FileReader();
        r.onload = function () {

          try {
            let Uints = new Uint8Array(r.result);
            let db = new SQL.Database(Uints);
            setGlobalState({ ...globalState, db });
          } catch (error) {}
        }
        r.readAsArrayBuffer(dbFile);
      }
    }
  }

  return (<>

    <Timer />

    <button className="btn btn-dark d-small-none ml-3" onClick={() => { document.getElementById('db-file-upload').click(); }}>
      <i className="fa fa-file-upload"></i>
    </button>

    <button className="btn btn-dark d-small-none ml-3" onClick={onDownload}>
      <i className="fa fa-download"></i>
    </button>

    <input type="file" onChange={onFile} id="db-file-upload" />
  </>);
}