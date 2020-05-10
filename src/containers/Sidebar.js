import React, { useState } from 'react';
import lessons from '../util/lessons';
import Alert from '../components/Alert';

export default function Sidebar () {

  const [state, setState] = useState({
    currLessonIndex: -1
  });

  const onLessonClick = (idx) => {
    setState({ ...state, currLessonIndex: idx });
  }

  return (<div className="sidebar bg-light border-right overflow-auto">

    <div className="w-100 bg-dark text-light pl-4 py-2">
      <i className="fa fa-database mr-2"></i>SQLite
    </div>

    <ul className="list-group">
      {lessons.map((l, i) => <li
        className="list-group-item"
        key={'lesson' + i}
        onClick={() => { onLessonClick(i) }}>
        {l.lesson}
        <Alert lesson={l.lesson} img={l.img} desc={l.desc} show={state.currLessonIndex === i} />
      </li>)}
    </ul>

  </div>);
}