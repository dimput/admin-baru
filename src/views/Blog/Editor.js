import React, { Component } from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput } from "shards-react";

import "react-quill/dist/quill.snow.css";
import axios from "axios"
import "../../assets/quill.css";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personku: []

    }
  }
  componentDidMount() {
    const {user} = this.props;
    axios
      .get("https://antarwisata-1dd73.firebaseio.com/blogs/"+user+".json")
      .then(response => {
        const data = Object.values(response.data);
        this.setState({ personku: response.data });
      });
  }
  render() {
    return (
      <Card small className="mb-3">
        <CardBody>
          <Form className="add-new-post">
            <FormInput size="lg" className="mb-3" placeholder="Your Post Title" value={this.state.personku.judul} />
            <ReactQuill className="add-new-post__editor mb-1" value={this.state.personku.konten||""}/>
          </Form>
        </CardBody>
      </Card>
    );
  }

}

export default Editor;
