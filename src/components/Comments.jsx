

import React from "react";
import { ListGroup, Spinner, Button, Alert } from "react-bootstrap";
import SingleComment from "./SingleComment";
import AddComment from "./AddComment";

let uri = `https://striveschool-api.herokuapp.com/api/comments/`;
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzczOGE4NjNhN2ZjNDAwMTU5N2VjMzAiLCJpYXQiOjE2Njk2NDQxNTMsImV4cCI6MTY3MDg1Mzc1M30.wpz1VD2aB0I0qQUaD_rooZ3CsmEe9vovMMcg0XCryxk`;
const opts = {
    headers: {
        Authorization: `Bearer ${token}`,
    },
};

class Comments extends React.Component {
    state = {
        comments: [],
        error: "",
        isLoading: true,
    };

    fetchComments = async () => {
        this.setState({
            ...this.state,
            isLoading: false,
            error: "",
        });
        if (this.props.book) {
            try {
                let response = await fetch(uri + this.props.book, opts);

                if (response.ok) {
                    let data = await response.json();

                    this.setState({
                        ...this.state,
                        comments: data,
                        isLoading: false,
                    });
                } else {
                    this.setState({
                        ...this.state,
                        error: "Error fetching comments",
                        isLoading: false,
                    });
                }
            } catch (e) {
                this.setState({
                    ...this.state,
                    error: JSON.stringify(e),
                    isLoading: false,
                });
            }
        } else {
            this.setState({
                ...this.state,
                error: "No book selected",
                isLoading: false,
            });
        }
    };

    componentDidMount() {
        this.fetchComments();
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.book !== this.props.book) {
            this.fetchComments();
        }
    };

    render() {
        return (
            <>
                <hr />
                {this.state.isLoading && <Spinner animation="grow" />}

                {!this.state.isLoading && !this.state.error && (
                    <>
                        <AddComment
                            fetchComments={this.fetchComments}
                            asin={this.props.book}
                        />
                        <p>Comments</p>
                        <ListGroup variant="flush">
                            {this.state.comments.length ? (
                                this.state.comments.map((comment, i) => (
                                    <SingleComment comment={comment} />
                                ))
                            ) : (
                                <p>No comments found</p>
                            )}
                        </ListGroup>
                    </>
                )}

                {this.state.error && (
                    <Alert variant="danger">{this.state.error}</Alert>
                )}
            </>
        );
    }
}

export default Comments