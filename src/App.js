import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Comments from './components/Comments';
import BookList from "./components/BookList";
import fantasy from "./data/ListOfBooks/fantasy.json";


class App extends React.Component {
  state = {
      selected: null,
  };

  setSelected = (asin) => {
      this.setState({
          selected: asin,
      });
  };

  render() {
      return (
    <div className="App">
      <h1>StriveBooks!</h1>
      <Container>
        <Row  className="justify-content-between">
          <Col className="col-9 mt-2" id="DisplayBook">
            <h2>"We are all props in a larger simulation"  
              - Socrates
            </h2>
            <BookList ListOfBooks={fantasy}/>
          </Col>
          <Col id="CommentSection">
            <h2>Comments Section</h2>
            <Comments book={this.state.selected}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
}
export default App;
