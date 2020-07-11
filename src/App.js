import React from 'react';
import './App.scss';
import './Components/sidebar.scss';
import { List } from './Components/List';
import { Sidebar } from './Components/Sidebar';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      lists : [
        {
          list_id: 0,
          list_name: "Backlog",
          issues: []
        },
        {
          list_id: 1,
          list_name: "To Do",
          issues: []
        },
        {
          list_id: 2,
          list_name: "Done",
          issues: []
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">

        <Sidebar />

        <header className="App-header main">
          <div className="d-flex">
            {this.state.lists.map((list_data,i) => (
              <div className="col px-4">
                <List data={list_data} />
              </div>
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
