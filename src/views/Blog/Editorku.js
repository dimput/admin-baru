import React, { Component } from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

class Editorku extends Component {
  renderIsi() {
    console.log("asu")
    return "asu"
  }
  render() {
    const {user} = this.props;
    const kontenku = user.konten;
    return (
      <Card small className="mb-3">
        <CardBody>
          <Form className="add-new-post">
            <FormInput size="lg" className="mb-3" placeholder="Your Post Title" value={user.judul}/>
            <ReactQuill className="add-new-post__editor mb-1" value={user.konten}/>
          </Form>
        </CardBody>
      </Card>
    );
  }

}

export default Editorku;
