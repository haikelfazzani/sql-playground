import React, { useContext } from 'react';
import { GlobalContext } from '../state/GlobalContext';

export default function FormOpenFile () {

  let { globalState, setGlobalState } = useContext(GlobalContext);

  const onOepnFile = (e) => {  // open db file (.db)

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
          } catch (error) { }
        }
        r.readAsArrayBuffer(dbFile);
      }
    }
  }

  return <input
    type="file"
    onChange={onOepnFile}
    id="db-file-upload"
    data-toggle="tooltip"
    data-placement="bottom"
    title="Upload Databse .sql"
  />;
}