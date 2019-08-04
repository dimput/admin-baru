import React, { Component } from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput, Col, Row, CardHeader, ListGroup, Button, ListGroupItem } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import firebase from './../../config/fbConfig'
import axios from 'axios';

class Editor extends Component {
  constructor(props) {
    super(props);
    firebase.database().ref('infoDataBlogs/jumlah').on('value', function (snapshot) {
      console.log(snapshot.val());
    });
    this.setState({
      judul: "",
      kontent: "",
      jumlah: null,
    })
  }

  formatDate() {
    var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year].join('/');
  }

  componentDidMount() {
    axios
      .get("https://api6.ipify.org/?format=json")
      .then(response => {
        const data = Object.values(response.data);
        this.setState(
          response.data
        );
      });
    axios
      .get("https://antarwisata-1dd73.firebaseio.com/infoDataBlogs.json")
      .then(response => {
        const data = Object.values(response.data);
        this.setState({
          infoData: response.data,
          date: this.formatDate()
        });
      });
  }

  handleDraft = (e) => {
    console.log("Draft : " + this.state);
    firebase.database().ref('blogs/' + this.state.infoData.jumlah).set({
      judul: this.state.judul,
      kontent: this.state.kontent,
      id: this.state.infoData.jumlah + 1,
      status: "Draft",
      date: this.state.date,
      konten: this.state.kontent,
      ip_address : this.state.ip
    });
    firebase.database().ref('infoDataBlogs/').set({
      jumlah: this.state.infoData.jumlah + 1
    });
  }
  handlePublish = (e) => {
    console.log("Publish : " + this.state.judul);
    firebase.database().ref('blogs/' + this.state.infoData.jumlah).set({
      judul: this.state.judul,
      kontent: this.state.kontent,
      id: this.state.infoData.jumlah + 1,
      status: "Publish",
      date: this.state.date,
      konten: this.state.kontent,
      ip_address : this.state.ip
    });
    firebase.database().ref('infoDataBlogs/').set({
      jumlah: this.state.infoData.jumlah + 1
    });
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      judul: e.target.value
    })
  }
  handleChangeku = value => {
    console.log(value);
    this.setState({
      kontent: value
    })
  }
  render() {
    return (
      <Row>
        <Col lg="9" md="12">
          <Card small className="mb-3">
            <CardBody>
              <Form className="add-new-post">
                <FormInput size="lg" className="mb-3" placeholder="Your Post Title" onChange={this.handleChange} />
                <ReactQuill className="add-new-post__editor mb-1" onChange={this.handleChangeku} />
              </Form>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3" md="12">
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
                  <Button color="info" size="sm" onClick={this.handleDraft}>
                    Save Draft
                  </Button>
                  <Button color="primary" size="sm" className="ml-auto" onClick={this.handlePublish}>
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

export default Editor;
