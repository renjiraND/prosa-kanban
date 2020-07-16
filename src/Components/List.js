import React from 'react';
import './list.scss';
import { Issue } from '../Components/Issue';
import { PlusIcon } from '@primer/octicons-react';
import { Droppable } from 'react-beautiful-dnd'

export class List extends React.Component {

  handleButton = e => {
    console.log(e);
  }

  render() {
    return (
      <div className="col-xl-4">
        <div className="container card p-3 m-2">
          <div className="container">
            <div className="row">
              <div className="col h4">
                {this.props.column.title}
              </div>
              <div className="col-auto align-items-center">
                <button className="add-task rounded-pill p-2" onClick={this.handleButton}>
                  <span className="px-1">
                    <PlusIcon size={14} className="align-middle" />
                  </span>
                  Add Task
                </button>
              </div>
            </div>
          </div>
          <Droppable droppableId={this.props.column.id}>
            {provided => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {this.props.tasks.map((task, index) => {
                  if(task !== undefined) {
                    return (
                      <Issue key={task.id} task={task} index={index} />
                    );
                  } else {
                    return (null);
                  }
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    );
  }


}