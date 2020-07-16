import React from 'react';
import './list.scss';
import { Issue } from '../Components/Issue';
import { Droppable } from 'react-beautiful-dnd';
import { Modal } from './Modal';

export class List extends React.Component {

  render() {
    return (
      <div className="col-xl-4">
        <div className="card">
          <div className="card-body">
            <div className="container">
              <div className="row">
                <div className="col-auto h4">
                  {this.props.column.title}
                </div>
                <Modal columnId={this.props.column.id} addTaskHandler={this.props.addTaskHandler}/>
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
      </div>
    );
  }


}