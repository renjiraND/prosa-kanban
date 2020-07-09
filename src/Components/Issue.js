import React from 'react';
import './issue.scss';

export class Issue extends React.Component(){

  constructor(props) {
    super(props);
    this.state = {
      issue_id: null,
      title: null,
      asignee: null,
      start_date: null,
      end_date: null,
      tags: null,
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="container"></div>
      </div>
    );
  }
}
