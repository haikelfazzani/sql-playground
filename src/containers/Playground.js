import React from "react";
import { GlobalContext } from "../state/GlobalContext";
import initSqlJs from "sql.js";
import sqlFormatter from "sql-formatter";

import CodeEditor from '../components/CodeEditor';
import Table from '../components/Table';
import createInitTables from "../util/createInitTables";
import Snackbar from "../components/Snackbar";

import SplitPane from "../components/SplitPane";
import SelectFont from "../components/SelectFont";
import Navbar from "./Navbar";

export default class Playground extends React.Component {

  constructor () {
    super();
    this.state = {
      err: null,
      results: null,
      editorVal: createInitTables(),
      tables: null,
      tableAnCols: null
    };
    this.onEditorChange = this.onEditorChange.bind(this);
    this.onExecute = this.onExecute.bind(this);
    this.onBeautify = this.onBeautify.bind(this);
    this.onClear = this.onClear.bind(this);
  }

  componentDidMount () {
    initSqlJs()
      .then(SQL => {
        // create init tables: teams and players => show them as html tables
        this.context.setGlobalState({ db: new SQL.Database(), SQL });
        this.onExecute();

        let local = localStorage.getItem('siql-query');
        this.setState({ ...this.state, editorVal: local || '' });
      })
      .catch(err => this.setState({ err }));

    window.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.keyCode === 13) { this.onExecute(); }
      if (e.ctrlKey && e.altKey && e.keyCode === 70) { this.onBeautify(); }
      if (e.ctrlKey && e.altKey && e.keyCode === 67) { this.onClear(); }
    });
  }

  onEditorChange (v, e, value) {
    if (value && value.length > 10) {
      this.setState({ ...this.state, editorVal: value });
      localStorage.setItem('siql-query', this.state.editorVal);
    }
  }

  onExecute () {
    let results = null, tables = null, tableAnCols = null;
    let { globalState, setGlobalState } = this.context;

    try {
      results = globalState.db.exec(this.state.editorVal);
      this.setState({ ...this.state, results, tables, tableAnCols, err: null });

      setGlobalState({ ...globalState, isRunning: !globalState.isRunning });
    } catch (e) {
      this.setState({ ...this.state, err: e });
    }
  }

  onBeautify () {
    let res = sqlFormatter.format(this.state.editorVal, { indent: '    ' });
    this.setState({ ...this.state, editorVal: res });
  }

  onClear() {this.setState({...this.state, editorVal:''}); }

  render () {
    let { err, results, editorVal } = this.state;
    if (!this.context.globalState.db) return <pre>Loading...</pre>;
    return (
      <main className="col-sm-12 col-md-9 col-xl-10 mb-5 pl-md-5 bd-content">

        <nav className="mb-3 d-flex justify-content-between">

          <div className="d-flex">
            <button className="btn btn-warning mr-3" onClick={this.onExecute}>
              <i className="fa fa-play"></i> Run</button>

            <button className="btn btn-dark d-small-none mr-3" onClick={this.onBeautify}>
              <i className="fa fa-stream"></i> Beautify
            </button>

            <button className="btn btn-dark d-small-none" onClick={this.onClear}>
              <i className="fa fa-trash"></i> clear
            </button>
          </div>

          <div className="d-flex">
            <Navbar />

            <SelectFont />
            <a className="btn btn-dark ml-3" href="https://github.com/haikelfazzani/kody-web-editor">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </nav>


        <div className="playground">

          <SplitPane>
            <div className="editor"><CodeEditor onChange={this.onEditorChange} value={editorVal} /></div>

            <div className="row">
              {results
                ? results.map(({ columns, values }, id) => <div key={id} className="col">
                  <Table columns={columns} values={values} />
                </div>) // results contains one object per select statement in the query
                : ""
              }
            </div>
          </SplitPane>
        </div>

        <Snackbar txt={(err || "").toString()} show={err} />
      </main>
    );
  }
}

Playground.contextType = GlobalContext;