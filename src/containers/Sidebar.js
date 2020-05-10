import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../state/GlobalContext';

const Columns = ({ cols, show }) => {

  return <ul style={{ display: show ? 'block' : 'none' }} className="fadeIn">
    {cols.map(col => <li key={col} className="ml-3"><i className="fa fa-caret-right"></i> {col}</li>)}
  </ul>
}

export default function Sidebar () {

  const { globalState } = useContext(GlobalContext);

  const [treeView, setTreeView] = useState(null);
  const [currIndex, setCurrIndex] = useState(-1);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (globalState.tableAnCols) {
      let obj = Object.keys(globalState.tableAnCols).map(index => {
        return { index: +index, show: false };
      });
      setTreeView(obj);
    }
  }, [globalState.tableAnCols]);

  const onTableClick = (index) => {
    setShow(!show)
    setCurrIndex(index);
  }

  useEffect(() => {
    if (currIndex !== -1) {
      let items = [...treeView];
      let item = treeView.find(t => t.index === currIndex);
      item.show = !item.show;
      items[currIndex] = item;
      setTreeView(items);
    }
  }, [show]);

  return (<div className="sidebar">

    <div className="w-100 bg-warning text-center py-2 mb-3">
      <i className="fa fa-table"></i> Tables</div>

    <div className="pl-2 pr-2">
      {globalState.tableAnCols && treeView
        && Object.keys(globalState.tableAnCols).map((keyTable, i) => {

          let table = globalState.tableAnCols[keyTable];

          return <div key={table.name} className="mb-3">

            <div onClick={() => { onTableClick(i); }}>
              <i className={"fa " + (treeView[i].show ? "fa-caret-up" : "fa-caret-down")}></i> {table.name}
            </div>

            <Columns
              cols={table.columns}
              show={treeView[i].show}
            />
          </div>
        })}
    </div>
  </div>);
}