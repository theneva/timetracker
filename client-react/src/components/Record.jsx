import React from 'react';

export default class Record extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <h3>{this.props.record.task}</h3>
        <span>{this.props.record.minutes} minutes</span>
      </div>
    );
  }
};
