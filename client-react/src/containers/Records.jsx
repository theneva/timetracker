import React from 'react';
import request from 'superagent';

import Record from '../components/Record.jsx';

const recordsUrl = '/api/records';

export default class Records extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      records: [] ,
    };
  }

  componentDidMount() {
    request.get(recordsUrl)
      .end((err, response) => this.setState({ records: response.body }));
  }

  render() {
    return (
      <div>
        {this.state.records.map(record => <Record key={record._id} record={record} />)}
      </div>
    );
  }
}; 
