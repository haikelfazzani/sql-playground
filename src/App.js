import React from 'react';
import Playground from './containers/Playground';
import Sidebar from './containers/Sidebar';

import './styles.css';

export default function App () {
  return (
    <div className="app">
      <Sidebar />
      <Playground />
    </div>
  );
}