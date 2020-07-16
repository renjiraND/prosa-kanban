import React from 'react';
import './App.scss';
import './main.scss'
import './Components/sidebar.scss';
import { taskData } from './data';
import { List } from './Components/List';
import { Sidebar } from './Components/Sidebar';
import { DragDropContext } from 'react-beautiful-dnd';
import { ReactComponent as Logo } from './logo-prosa.svg';
import { ReactComponent as Pic } from './logo.svg';
import { KebabHorizontalIcon } from '@primer/octicons-react';

class App extends React.Component {

  state = taskData; 

  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    
    if(!destination) {
      return;
    }

    if(
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if(start === finish){
      const newTaskIds = Array.from(start.taskIds);

      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      }

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      }
      
      this.setState(newState);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);

    const newStart = {
      ...start,
      taskIds: startTaskIds
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);

    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      }
    }
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <Sidebar />
        <div className="container-fluid main">
          <div className="container-fluid title-bar mt-3">
            <div className="row h-100 align-items-center m-0 px-4">
              <div className="col-auto p-0">
                <Logo style={{maxWidth: "50px"}} />
              </div>
              <div className="col-auto h2">
                Kanban Prosa
              </div>
              <button className="col-auto rounded-circle title-menu">
                <KebabHorizontalIcon size={14} className="m-auto"/>
              </button>
              <div className="col-auto col-md">
                <div className="row justify-content-end">
                  <Pic className="rounded-circle member img-fluid"/>
                  <div className="col-auto rounded-pill num-members py-1 h-100">
                    1 Members
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row px-2">
            <DragDropContext onDragEnd={this.onDragEnd}>
              {this.state.columnOrder.map((columnId) => {
                const column = this.state.columns[columnId];
                const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])
                return (
                  <List key={column.id} column={column} tasks={tasks} />
                );
              })}
            </DragDropContext>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
