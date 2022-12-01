import React from 'react';
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import Headers from './Headers';
import Content from './Content';
import Footer from './Footer';

class App extends React.Component {
  render(){
    return(
      <div className='m-auto'>
        <Headers />
        <br></br><br></br>
        <Content />
        <br></br><br></br>
        <Footer />
      </div>
    );
  }
}

export default App;
