import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/eclipse.css';

import 'codemirror/mode/sql/sql';

import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/sql-hint';

import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/fold/foldgutter.css'

import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/xml-fold';

import 'codemirror/addon/comment/comment';


export default function Editor ({ onChange, value }) {

  const onKeyDown = (editor, event) => {

    if (event.ctrlKey && (event.keyCode === 58 || event.keyCode === 191)) {
      editor.execCommand('toggleComment')
    }

    if (!event.ctrlKey && event.keyCode > 64 && event.keyCode < 123) {
      setTimeout(() => { editor.showHint(); }, 250);
    }
  }

  return (
    <CodeMirror
      autoCursor={false}
      onChange={onChange}
      value={value}
      onKeyDown={onKeyDown}
      options={{
        mode: 'sql',
        theme: 'eclipse',
        lineNumbers: true,
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
      }}
    />
  );

}