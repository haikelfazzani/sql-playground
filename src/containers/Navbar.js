import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../state/GlobalContext';
import SelectFont from '../components/SelectFont';

const DropdownMenu = ({ cols }) => (
  <>{cols.map((col, i) => <span className="dropdown-item" key={'colt' + i}>{col}</span>)}</>
);

export default function Navbar () {

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

  return (<>

    <SelectFont />

    {globalState.tableAnCols
      && Object.keys(globalState.tableAnCols).map((keyTable, i) => {
        let table = globalState.tableAnCols[keyTable];

        return <div className="dropdown ml-3" key={table.name}>

          <button className="btn btn-dark" type="button" onClick={() => { onTableClick(i); }}>
            <span><i className="fa fa-table"></i> {table.name}</span>
            <i className={"fa ml-2 " + (treeView && treeView[i] && treeView[i].show ? "fa-caret-up" : "fa-caret-down")}></i>
          </button>

          <div className="dropdown-menu"
            style={{ display: treeView && treeView[i] && treeView[i].show ? 'block' : 'none' }}>
            <DropdownMenu
              cols={table.columns}
            />
          </div>
        </div>
      })}

  </>);
}