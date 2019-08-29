import React, { Component } from "react";
import ReactQuill from "react-quill";
import {
  Card, CardBody, CardHeader, Form, FormInput, Button, Col, Row,
  ListGroup,
  ListGroupItem,
  Alert
} from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import axios from 'axios';
import firebase from './../../config/fbConfig'

class Editorku extends Component {
  constructor(props) {
    super(props);
    this.state = {
      konten: "",
      judul: "",
      code : false
    };
    this.wow = ""
  }
  renderIsi = (e) => {
    const { user } = this.props;
    e.preventDefault();
    firebase.database().ref("blogs/"+user).update({
      "judul":this.state.judul,
      "konten":this.state.konten,
      "status" :"Publish"
    });
    this.saveBerhasil();
  }

  renderDraft = (e) => {
    const { user } = this.props;
    e.preventDefault();
    firebase.database().ref("blogs/"+user).update({
      "judul":this.state.judul,
      "konten":this.state.konten,
      "status" :"Draft"
    });
    this.saveBerhasil();
  }

  saveBerhasil = () => {
    this.setState({
      code: true
    })
  }
  renderCode(){
    if (this.state.code) {
      return <Alert color="success">Data berhasil disimpan !</Alert>
    }
  }

  componentDidMount() {
    // const { match } = this.props;
    const { user } = this.props;
    axios
      .get("https://antarwisata-1dd73.firebaseio.com/blogs/" + user + ".json")
      .then(response => {
        // const data = Object.values(response.data);
        // console.log(response.data)
        this.setState(response.data);
      });
    // axios.get('https://curio-box.firebaseio.com/gambar/' + match.params.id + '.json')
    //     .then(res => {
    //         const gambar = res.data;
    //         console.log(gambar);
    //         this.setState({ gambar });
    //     })
    // .then(res => {
    //     console.log("asu" + this.state.gambar.image);
    //     storage.ref('images').child(this.state.gambar.image).getDownloadURL().then(url => {
    //         console.log(url);
    //         this.setState({
    //             url: url
    //         });
    //     });
    // })
  }

  handleChange = value => {
    // console.log(value);
    this.setState({
      konten:value
    })
  }
  
  handleChangeku = (e) => {
    // console.log(e.target.value);
    this.setState({
      judul:e.target.value
    })
  }

  render() {
    const { user } = this.props;
    // const kontenku = user.konten;


    let judul = this.state;
    let $judulku = null;
    if (judul.judul) {
      $judulku = judul;
    }
    // const hasil = $judulku ? "isi" : "kosong";
    return (
      <Row>
        <Col lg={9}>
          <Card small className="mb-3">
            <Form className="add-new-post" onSubmit={this.renderIsi}>
              <CardBody>
                <FormInput size="lg" className="mb-3" value={this.state.judul} onChange={this.handleChangeku} />
                <FormInput size="lg" className="mb-3" value={this.state.image} onChange={this.handleChangeku} />
                 <ReactQuill className="add-new-post__editor mb-1" value={this.state.konten} onChange={this.handleChange} />
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
                    <strong className="mr-1">Status:</strong> {this.state.status}
                  </span>
                  <span className="d-flex mb-2">
                    <i className="material-icons mr-1">people</i>
                    <strong className="mr-1">Author:</strong> {this.state.author}
                  </span>
                  <span className="d-flex mb-2">
                    {this.renderCode()}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex px-3 border-0">
                  <Button color="info" size="sm" onClick={this.renderDraft}>
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
