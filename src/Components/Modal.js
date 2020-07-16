import React from 'react';
import './modal.scss';
import { PlusIcon } from '@primer/octicons-react'

export class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title:'',
      tags:'Research',
      asignee:'',
      start:'',
      end:'',
    }
    this.initial = this.state;
  }


  handleChange = (event) => {
    const value = event.target.value;
    const formId = event.target.id;
    this.setState({
      ...this.state,
      [formId]: value
    })
  }

  render() {
    return (
      <div className="col align-items-center">
        <div className="row justify-content-end">
          <button className="add-task rounded-pill p-2" data-toggle="modal" data-target="#addTaskModal">
            <span className="px-1">
              <PlusIcon size={14} className="align-middle" />
            </span>
            Add Task
          </button>
        </div>

        <div className="modal fade" id="addTaskModal" tabIndex="-1" role="dialog" aria-labelledby="addTaskModal" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title" id="exampleModalLongTitle">New Task</h5>
              </div>
              <div className="modal-body">
              <form>
                <div className="form-group">
                  <label className="form-label" htmlFor="title">Title</label>
                  <input type="text" className="form-control form-control-sm" id="title" value={this.state.title} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="tags">Tags</label>
                  <select className="form-control form-control-sm" id="tags" value={this.state.tags} onChange={this.handleChange}>
                    <option>Research</option>
                    <option>Backend</option>
                    <option>Design</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="asignee">Asignee</label>
                  <input type="text" className="form-control form-control-sm" id="asignee"  value={this.state.asignee} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="start">Start Date</label>
                  <input type="date" className="form-control form-control-sm" id="start" value={this.state.start} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="end">End Date</label>
                  <input type="date" className="form-control form-control-sm" id="end" value={this.state.end} onChange={this.handleChange}/>
                </div>
                <div className="d-flex justify-content-center">
                  <button onClick={() => {
                      this.props.addTaskHandler(this.state, this.props.columnId)
                      setTimeout(() => {
                        this.setState(this.initial);
                      },0.1)
                    }} 
                    className="btn btn-primary" data-dismiss="modal">Add Task</button>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
