import React from 'react';
import './styles.css';

const Main = (props) => {
  return (
    <main> 
      { props.children }
    </main>
  );
};

export default Main;
