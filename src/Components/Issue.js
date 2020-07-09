import React from 'react';
import './issue.scss';

export class Issue extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      issue_id: null,
      title: "placeholder-title",
      asignee: null,
      start_date: '2020-01-26T13:51:50.417-07:00',
      end_date: null,
      tags: "A",
    };

    this.getTagname = this.getTagname.bind(this);
    this.getDaysAgo = this.getDaysAgo.bind(this);
    
  }

  // A: Research, B: Backend, C: Design

  render() {
    return (
      <div className="container-fluid issue-card py-2">
        <div className="container py-2">
          <div className="row">
            <div className="title col">
              {this.state.title}
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="d-inline-block">
                <div className="text-center tags">
                  {this.state.tags.toUpperCase()}
                </div>
              </div>
              <div className="h-100 d-inline-block px-2">
                <div className={"text-center tagname " + this.getTagname(this.state.tags).toLowerCase()}>
                  <div className="container">
                    {this.getTagname(this.state.tags)}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6">
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
