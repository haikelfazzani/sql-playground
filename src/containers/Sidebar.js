import React, { useState } from 'react';
import Alert from '../components/Alert';

import sqlquestions from '../util/data/sqlquestions';
import lessons from '../util/data/lessons';

export default function Sidebar () {

  const [state, setState] = useState({
    currLessonIndex: -1
  });

  const onLessonClick = (idx) => {
    setState({ ...state, currLessonIndex: idx });
  }

  return (<div className="col-md-3 col-xl-2 bd-sidebar vh-100 position-sticky overflow-auto p-0 sidebar">

    <div className="w-100 bg-dark text-warning pl-4 py-2 ltsp2">
      <i className="fa fa-database mr-2"></i>SQLite
    </div>

    <ul className="list-group">
      {lessons.map((l, i) => <li
        className="list-group-item bg-dark"
        key={'lesson' + i}
        onClick={() => { onLessonClick(i) }}>
        {l.lesson}
        <Alert lesson={l.lesson} img={l.img} desc={l.desc} show={state.currLessonIndex === i} />
      </li>)}
    </ul>

    <div className="w-100 bg-success pl-4 py-2">
      <i className="fa fa-brain mr-2"></i>Practice
    </div>

    <ul className="list-group">
      {sqlquestions.map((l, i) => {
        i = i + lessons.length
        return <li
          className="list-group-item bg-dark"
          key={'question' + i}
          onClick={() => { onLessonClick(i) }}>
          {l.lesson}
          <Alert lesson={l.lesson} img={l.img} desc={l.desc} show={state.currLessonIndex === i} />
        </li>
      })}
    </ul>

  </div>);
}