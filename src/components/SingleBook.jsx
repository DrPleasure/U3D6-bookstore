import { Component } from "react";
import Card from "react-bootstrap/Card";
import MyBadge from "./MyBadge";
import CommentArea from "./CommentArea";


class SingleBook extends Component {
  state = {
    selectedBook: false,
  };

  toggleBook = () => {
    this.setState((prevState) => ({ selectedBook: !prevState.selectedBook }));
  };

  render() {
    const { selectedBook } = this.state;
    return (
      <Card
        onClick={this.toggleBook}
        className={`${
          selectedBook
            ? "card-border mb-3 mt-2 card-hover card-grow"
            : "mb-3 mt-2 card-hover"
        }`}
        bg="secondary"
        text="light"
        style={{ height: "45rem" }}
      >
        <Card.Img
          variant="top"
          src={this.props.book.img}
          key={this.props.book.asin}
          className="imgTop"
        />
        <Card.Body>
          <Card.Header>{this.props.book.title}</Card.Header>
          <MyBadge $ color="warning" currency="£" text={this.props.book.price}/>
        </Card.Body>

        {selectedBook && (
          <div>
            <CommentArea asin={this.props.book.asin} />
          </div>
        )}
        {/* <div>
          <AddComment asin={this.props.book.asin} />
        </div>   */}
      </Card>
    );
  }
}

export default SingleBook;