import React from 'react';
import { Styled } from 'create-react-web-component';
import { propTypes } from './componentProperties';
import styles from './App.css';

const App = (props) => {
  return (
    <Styled styles={styles}>
      <div className='react-app'>
        React App v. 16.10.2
        <h3 className='tag'> Some test text </h3>
      </div>
    </Styled>
  );
};

App.propTypes = propTypes;

export default App;
