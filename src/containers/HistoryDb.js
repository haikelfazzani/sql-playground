import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../state/GlobalContext';

export default function HistoryDb () {

  const { globalState } = useContext(GlobalContext);
  const [state, setState] = useState({ tables: null, show: false });

  useEffect(() => {
    if (globalState.db) {
      let getTables = globalState.db.exec("select * from sqlite_master where type='table'");

      let sqlQueries = [];
      getTables[0].values.forEach(q => { sqlQueries.push(q.reverse()[0]); });

      setState({ ...state, tables: sqlQueries });
    }
  }, [globalState.isRunning, globalState.db]);

  return (<>
    <div className="db-history LeftStretch"
      style={{ display: state.show ? 'block' : 'none' }}>

      <button className="btn btn-warning btn-block mb-3 d-small-none"
        onClick={() => { setState({ ...state, show: !state.show }) }}>
        <i className="fa fa-database"></i> History tables creations
    </button>

      {state.tables && state.tables.map((t, i) => {
        return <pre key={'table' + i}>{t}</pre>
      })}
    </div>

    <button className="btn btn-warning btn-open-history d-small-none"
      onClick={() => { setState({ ...state, show: !state.show }) }}>
      <i className="fa fa-table"></i>
    </button>
  </>);
}