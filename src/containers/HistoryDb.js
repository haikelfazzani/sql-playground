import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../state/GlobalContext';
import SidebaWrapper from '../components/SidebaWrapper';

export default function HistoryDb () {

  const { globalState } = useContext(GlobalContext);
  const [state, setState] = useState({ tables: null, show: false });

  useEffect(() => {
    try {
      let getTables = globalState.db.exec("select * from sqlite_master where type='table'");

      let sqlQueries = [];
      getTables[0].values.forEach(q => { sqlQueries.push(q.reverse()[0]); });

      setState({ ...state, tables: sqlQueries });
    } catch (error) {

    }
  }, [globalState.isRunning, globalState.db]);

  return (
    <SidebaWrapper show={globalState.isNavOpen}>
      {state.tables && state.tables.map((t, i) => <pre key={'table' + i}>{t}</pre>)}
    </SidebaWrapper>
  );
}