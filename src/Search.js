import React from 'react';

import { Form, Button, FormControl, Container, InputGroup, ListGroup, Row, Col } from 'react-bootstrap'


import ReactDOM from 'react-dom';

// First way to import
import { ClipLoader } from "react-spinners";


 class Search extends React.Component {
   constructor() {
     super()

     this.state = {
       results: [],
       success : '',
       searchText: ''
     }


   }


   handleSearchChange = event => {
    this.setState({
      searchText: event.target.value
    });
  }


   formBg = { backgroundColor: '#c6e2ff' };



  render() {

    const search = () => {

      fetch('https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/' + this.state.searchText + '?format=json')
        .then(r => r.json())
        .then(response => {

          console.log(response.Results)

          this.setState({
            results: response.Results,
            success: true
          })

        })
    }

    const handleSearchSubmit = event => {
      event.preventDefault()
      search()

  }





    const divStyle = {
      marginLeft: '20px',
    };

    const formInputStyle = {
      height: '80px',
      width: '500px',
      fontSize: '30px'

    };

    const submitStyle = {
      backgroundColor: '#54BCB9'
    };


    return (

      <div className="submitPromo">

      <Row className="justify-content-md-center">
        <div class="row">
          <form class="form-inline my-2 my-lg-0 ml-auto" onSubmit={handleSearchSubmit} role="form" id="form-buscar">
            <div class="form-group">
              <div class="input-group">
              <input id="1" class="form-control" onChange={this.handleSearchChange} type="text" name="query" placeholder="Enter your VIN number..."  required/>
              <span class="input-group-btn">

              <button class="btn btn-success" type="submit">
              <i class="glyphicon glyphicon-search" aria-hidden="true"></i> Search
              </button>

              </span>
              </div>
            </div>
          </form>
        </div>



      </Row>

      <Container>
      <br></br>
      <Row>
      <Col></Col>
        <Col xs={5}>
        <ListGroup>
        {
          this.state.results.map((item, index) => {
            if(item["Value"] != null) {
              return <ListGroup.Item><strong>{item["Variable"]}</strong>: {item["Value"]}</ListGroup.Item>
            }
                })
        }

        </ListGroup>

        </Col>
        <Col></Col>
      </Row>
    </Container>




      </div>




    )

}
}


export default Search
