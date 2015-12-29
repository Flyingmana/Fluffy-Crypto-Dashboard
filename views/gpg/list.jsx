'use babel';

import React from 'react';
import gpg from 'gpg';

export default class GpgList extends React.Component {

    constructor(props) {
      super(props)
      this.state = { list: null };
    }

  componentDidMount() {
    gpg.call('',['--fingerprint'], (a,b) => {
      this.setState({list: b.toString()});
    });
  }

  render() {

    let keys = this.state.list;
    console.log(keys);

    let message;

    if (keys === null) {
      message = 'empty List'
    } else {
      message = 'result of gpg --fingerprint:'
    }

    return <div>
      <h4>{message}</h4>
      <div style={{whiteSpace: 'pre'}}>
        {keys}
      </div>

    </div>;
  }
}
