'use babel';

import React from 'react';
import GpgList from './gpg/list.jsx'

export default class Main extends React.Component {
  render() {
    return <div>
      Hello from React with ES6 :)
      <GpgList/>
    </div>;
  }
}
