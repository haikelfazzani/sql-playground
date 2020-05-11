import React from 'react';
import Playground from './containers/Playground';
import Sidebar from './containers/Sidebar';

import './styles.css';

export default function App () {
  return (
    <div className="container-fluid">
      <div className="row flex-xl-nowrap">
        <Sidebar />
        <Playground />
      </div>
    </div>
  );
}