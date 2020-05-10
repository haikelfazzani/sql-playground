import React from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/mode-sql";

/*eslint-disable no-alert, no-console */
import "ace-builds/src-noconflict/ext-language_tools";

export default function CodeEditor ({ value, onChange }) {

  return <AceEditor
    mode="sql"
    theme="dracula"
    onChange={onChange}
    value={value}
    name="ace-picode-editor"
    fontSize="14px"
    showPrintMargin={true}
    showGutter={true}
    highlightActiveLine={false}

    width="100%"
    editorProps={{ $blockScrolling: true }}
    setOptions={{
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      showLineNumbers: true,
      tabSize: 2,
      useWorker: true
    }}
  />;
}