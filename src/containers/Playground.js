import React from "react";
import initSqlJs from "sql.js";
import sqlFormatter from "sql-formatter";

import CodeEditor from '../components/CodeEditor';
import Table from '../components/Table';
import createInitTables from "../util/examples";
import Snackbar from "../components/Snackbar";
import { GlobalContext } from "../state/GlobalContext";
import SplitPane from "../components/SplitPane";
import Navbar from "./Navbar";

export default class Playground extends React.Component {

  constructor () {
    super();
    this.state = {
      db: null,
      err: null,
      results: null,
      editorVal: createInitTables(),
      tables: null,
      tableAnCols: null
    };
    this.onEditorChange = this.onEditorChange.bind(this);
    this.onExecute = this.onExecute.bind(this);
    this.onBeautify = this.onBeautify.bind(this);
  }

  componentDidMount () {
    initSqlJs()
      .then(SQL => {
        this.setState({ db: new SQL.Database() });
        this.onExecute(this.state.editorVal);

        let local = localStorage.getItem('siql-query');
        this.setState({ ...this.state, editorVal: local || '' });
      })
      .catch(err => this.setState({ err }));

    window.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.keyCode === 13) {
        this.onExecute(this.state.editorVal);
      }

      if (e.ctrlKey && e.altKey && e.keyCode === 70) {
        this.onBeautify();
      }
    });
  }

  onExecute () {
    let results = null, tables = null, tableAnCols = null;
    try {
      // The sql is executed synchronously on the UI thread. 
      // You may want to use a web worker
      results = this.state.db.exec(this.state.editorVal); // an array of objects is returned
      let getTables = this.state.db.exec(`select name from sqlite_master where type='table'`);

      if (getTables && getTables.length > 0 && getTables[0].values.length > 0) {
        tables = getTables[0].values.flat();

        // get table colums
        tableAnCols = tables.map(table => {
          let res = this.state.db.exec(`select * from ${table}`);
          return { name: table, columns: res[0].columns }
        });
      }

      this.context.setGlobalState({ tables, tableAnCols });
      this.setState({ ...this.state, results, tables, tableAnCols, err: null });
    } catch (e) {
      this.setState({ ...this.state, err: e })
    }
  }

  onEditorChange (v, e, value) {
    if (value && value.length > 10) {
      this.setState({ ...this.state, editorVal: value });
      localStorage.setItem('siql-query', this.state.editorVal);
    }
  }

  onBeautify () {
    let res = sqlFormatter.format(this.state.editorVal, { indent: '    ' });
    this.setState({ ...this.state, editorVal: res });
  }

  render () {
    let { db, err, results, editorVal } = this.state;
    if (!db) return <pre>Loading...</pre>;
    return (
      <main className="col-sm-12 col-md-9 col-xl-10 mb-5 pl-md-5 bd-content">

        <nav className="mb-3 d-flex">
          <button className="btn btn-warning mr-3" onClick={this.onExecute}>
            <i className="fa fa-play"></i> Run Code</button>
          <button className="btn btn-dark" onClick={this.onBeautify}>
          <i className="fa fa-stream"></i> Format Code</button>

          <Navbar />
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