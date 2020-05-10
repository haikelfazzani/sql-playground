
import React, { useState } from 'react';
import Split from 'react-split';

export default function SplitPane ({ children, direction = "vertical" }) {

  const [sizes] = useState(() => {
    let localSizes = localStorage.getItem('siql-split-spane');
    return localSizes ? JSON.parse(localSizes) : [50, 50];
  });

  const onDragEnd = v => {
    //localStorage.setItem('siql-split-spane', JSON.stringify(v));
  }

  return <Split sizes={sizes}
    onDragEnd={onDragEnd}
    minSize={0}
    gutterSize={5}
    gutterAlign="center"
    direction={direction}
  >
    {children}
  </Split>;
}