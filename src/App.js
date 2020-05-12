import React from 'react';
import Playground from './containers/Playground';
import Sidebar from './containers/Sidebar';

import './styles.css';
import HistoryDb from './containers/HistoryDb';

export default function App () {
  return (
    <div className="container-fluid">
      <div className="w-100 h-100 row flex-xl-nowrap">
        <Sidebar />
        <Playground />
      </div>

      <HistoryDb />
    </div>
  );
}