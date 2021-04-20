import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Registration from './Registration';
import { store } from './Redux/store';

export class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Registration />
        </Provider>
      </div>
    );
  }
}

export default App;
