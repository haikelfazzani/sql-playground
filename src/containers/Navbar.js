import React, { useContext } from 'react';
import { GlobalContext } from '../state/GlobalContext';
import Timer from '../components/Timer';
import SelectFont from '../components/SelectFont';
import FormSavePaste from './FormSavePaste';
import FormOpenFile from './FormOpenFile';

export default function Navbar ({ onExecute, onBeautify, onClear }) {

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

  const onOpenNav = () => {
    setGlobalState({ ...globalState, isNavOpen: !globalState.isNavOpen })
  }

  return (
    <nav className="mb-3 d-flex justify-content-between">

      <div className="d-flex">
        <button className="btn btn-warning mr-3"
          onClick={onExecute}
          data-toggle="tooltip" data-placement="bottom" title="Ctrl + Enter">
          <i className="fa fa-play"></i> Run</button>

        <button className="btn btn-dark mr-3" onClick={onBeautify}
          data-toggle="tooltip" data-placement="bottom" title="Ctrl + Alt + F">
          <i className="fa fa-stream"></i>
        </button>

        <button className="btn btn-dark mr-3" onClick={onClear}
          data-toggle="tooltip" data-placement="bottom" title="Clear Editor">
          <i className="fa fa-trash"></i>
        </button>

        <button className="btn btn-dark" onClick={onOpenNav}
          data-toggle="tooltip" data-placement="bottom" title="Tables">
          <i className="fas fa-table"></i>
        </button>
      </div>

      <div className="d-flex">        

        <FormSavePaste />

        <button className="btn btn-dark d-small-none ml-3"
          onClick={() => { document.getElementById('db-file-upload').click(); }}>
          <i className="fa fa-file-upload"></i>
        </button>

        <button className="btn btn-dark d-small-none ml-3" onClick={onDownload}
          data-toggle="tooltip" data-placement="bottom" title="Download Code">
          <i className="fa fa-download"></i>
        </button>

        <FormOpenFile />

        <SelectFont />

        <Timer />

        <a className="btn btn-dark ml-3" href="https://github.com/haikelfazzani/sql-playground">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </nav>);
}