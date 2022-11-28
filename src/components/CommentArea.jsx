import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzczOGE4NjNhN2ZjNDAwMTU5N2VjMzAiLCJpYXQiOjE2Njk2NDQxNTMsImV4cCI6MTY3MDg1Mzc1M30.wpz1VD2aB0I0qQUaD_rooZ3CsmEe9vovMMcg0XCryxk"

          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({ comments: data });
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  componentDidMount() {
    this.fetchComments();
  }
  render() {
    console.log(this.props.asin);
    console.log(this.props);
    return (
      <div>
        <ListGroup>
          {this.state.comments.map((element, i) => (
            <ListGroup.Item key={i}>
              {element.comment} {element.rate}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default CommentArea;