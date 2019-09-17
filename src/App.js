import React,{PureComponent} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Counter from './components/Counter';
import reducers from './reducers';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends PureComponent {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <div style={styles}>
          <h2>REACT REDUX {'\u2728'}</h2>
          <div>
            <Counter />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App

