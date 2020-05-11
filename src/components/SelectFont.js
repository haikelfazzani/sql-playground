import React, { useState } from 'react';

const fontSizes = ['10px', '12px', '14px', '16px', '18px', '20px', '22px', '24px'];

export default function SelectFont () {

  const [state, setState] = useState({ fontSize: '16px', showDrop: false });

  const onFont = (font) => {
    document.querySelector('.CodeMirror').style.fontSize = font;
    setState({ ...state, fontSize: font, showDrop: false });
  }

  return (
    <div className="dropdown ml-3">
      <button className="btn btn-dark dropdown-toggle" type="button"
        onClick={() => { setState({ ...state, showDrop: !state.showDrop }) }}>
        {state.fontSize}
      </button>

      <div className="dropdown-menu" style={{ display: state.showDrop ? 'block' : 'none' }}>
        {fontSizes.map(f => <span
          className={"dropdown-item " + (state.fontSize === f ? "bg-primary" : "")}
          key={f}
          onClick={() => { onFont(f) }}>{f}
        </span>)}
      </div>

    </div>
  );
}