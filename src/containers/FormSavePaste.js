import React, { useState } from 'react';
import PastebinService from '../services/PastebinService';

export default function FormSavePaste () {

  const [showDrop, setShowDrop] = useState(false);
  const [pasteUrl, setPasteUrl] = useState(null);

  const onShowDrop = () => {
    setShowDrop(!showDrop)
  }

  const onSavePaste = async (e) => {
    e.preventDefault();
    let code = localStorage.getItem('siql-query');
    let resp = await PastebinService.createPaste(code, e.target.elements[0].value);
    setPasteUrl(resp);
  }

  return (<div>
    <div className="dropdown dropleft">
      <button className="btn btn-dark" type="button" onClick={onShowDrop}>
        <i className="fa fa-save"></i>
      </button>

      <div className="dropdown-menu" style={{
        display: showDrop ? 'block' : 'none', padding: '10px',
        minWidth: "14rem"
      }}>

        <form className="w-100" onSubmit={onSavePaste}>
          <input type="text" className="form-control" placeholder="filename.." required />
          <small className="form-text text-muted fs-10">All documents are stored into Pastebin</small>
          <button className="btn btn-dark btn-block mt-2">
            <i className="fa fa-save"></i> save
          </button>
        </form>

        {pasteUrl && <div className="alert alert-success mt-2 mb-0 fs-12">{pasteUrl}</div>}

      </div>

    </div>
  </div>);
}