import React from 'react';
import './issue.scss';

export class Issue extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      issue_id: null,
      title: "Improve accuracy of the voice to text model that is very cool to this date",
      asignee: null,
      start_date: '2020-01-26T13:51:50.417-07:00',
      end_date: null,
      tags: "A",
    };

    this.getTagname = this.getTagname.bind(this);
    this.getDaysAgo = this.getDaysAgo.bind(this);
    
  }

  dragStart = e => {
    const target = e.target;

    setTimeout(() => {
      target.style.display = "none";
    },0)
    e.preventDefault();
  }

  dragOver = e => {
    e.stopPropagation();
  }

  render() {
    return (
      <div className="container-fluid issue-card py-3 my-2"
        onDragStart={this.dragStart}
        onDragOver={this.dragOver}
        draggable={true}>
        <div className="container">
          <div className="row">
            <div className="title col h6">
              {this.state.title}
            </div>
          </div>
          <div className="row">
              <div className="col-auto">
                <div className="text-center tags">
                  {this.state.tags.toUpperCase()}
                </div>
              </div>
              <div className="px-0 col-auto">
                <div className={"text-center tagname " + this.getTagname(this.state.tags).toLowerCase()}>
                  <div className="container">
                    {this.getTagname(this.state.tags)}
                  </div>
                </div>
              </div>

            <div className="col">
              <div className="days w-100">
                {this.getDaysAgo(this.state.start_date)}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }

  getDaysAgo(start_date) {
    var created_date = new Date(start_date);
    var today = new Date();
    var days_passed = Math.floor((today.getTime() - created_date.getTime()) / (1000 * 3600 * 24))
    return days_passed > 0 ? days_passed + " days ago" : "today"
  }

  getTagname(tag) {
    tag = tag.toLowerCase(tag);
    switch (tag) {
      case "a":
        return "RESEARCH"
      case "b":
        return "BACKEND"
      case "c":
        return "DESIGN"
      default:
        break;
    }
  }

}
