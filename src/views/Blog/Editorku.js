import React, { Component } from "react";
import ReactQuill from "react-quill";
import {
  Card, CardBody, CardHeader, Form, FormInput, Button, Col, Row,
  ListGroup,
  ListGroupItem
} from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

class Editorku extends Component {
  constructor(props) {
    super(props);
    this.state = {
      konten: "",
      judul: ""
    };
    this.wow = ""
  }
  judul(){
    const { user } = this.props;
    console.log("judul"+user.judul)
    return user.judul
  }
  renderIsi = (e) => {
    e.preventDefault();
    console.log(this.wow)
    this.setState({
      konten:this.wow
    })
  }

  handleChange = value => {
    console.log(value);
    this.wow = value;
  }

  render() {
    const { user } = this.props;
    const kontenku = user.konten;
    return (
      <Row>
        <Col lg={9}>
            <Card small className="mb-3">
              <Form className="add-new-post" onSubmit={this.renderIsi}>
              <CardBody>
                <FormInput size="lg" className="mb-3" placeholder="Your Post Title" value={this.judul()}/>
                <ReactQuill className="add-new-post__editor mb-1" value={user.konten} onChange={this.handleChange} />
              </CardBody>
              </Form>
            <br />
          </Card>
        </Col>
        <Col lg={3}>
          <Card small className="mb-3">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Actions</h6>
            </CardHeader>

            <CardBody className="p-0">
              <ListGroup flush>
                <ListGroupItem className="p-3">
                  <span className="d-flex mb-2">
                    <i className="material-icons mr-1">flag</i>
                    <strong className="mr-1">Status:</strong> Draft
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex px-3 border-0">
                  <Button color="info" size="sm">
                    Save Draft
                  </Button>
                  <Button color="primary" size="sm" className="ml-auto" onClick={this.renderIsi}>
                    Publish
                  </Button>
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }

}

export default Editorku;
