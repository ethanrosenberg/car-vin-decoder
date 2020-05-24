import React, {Component} from 'react';
import { Form, Button, FormControl, InputGroup } from 'react-bootstrap';
import NavigationBar from './NavigationBar'
import Search from './Search'
import Container from 'react-bootstrap/Container';
class MainContainer extends Component{
  constructor(){
    super()
  }

  render(){

    return (
      <>
      <NavigationBar />
      <h1 style={{ "paddingTop": '20px' }}>VIN Decoder</h1>
      <Search />
      </>
    )
  }
}

export default MainContainer
