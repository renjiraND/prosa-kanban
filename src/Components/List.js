import React from 'react';
import './list.scss';
import { Issue } from '../Components/Issue';
import { PlusIcon } from '@primer/octicons-react';

export class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list_id: null,
      list_name: "Backlog",
      issues: []
    };
    
  }

  handleButton(e) {
    console.log(e);
  }

  drop = e => {
    e.preventDefault();
    
  }

  dragOver = e => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="container card p-3"
        onDrop={this.drop}
        onDragOver={this.dragOver}>
        <div className="container">
          <div className="row">
            <div className="col h4">
              {this.props.data.list_name}
            </div>
            <div className="col-auto align-items-center">
              <button className="add-task p-2" onClick={this.handleButton()}>
                <div className="d-inline-block">
                  <PlusIcon size={16} />
                </div>
                <div className="d-inline-block button-info px-1">
                  Add Task
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <Issue />
          </div>
          <div className="row">
            <Issue />
          </div>
          <div className="row">
            <Issue />
          </div>
        </div>
      </div>
    );
  }


}
