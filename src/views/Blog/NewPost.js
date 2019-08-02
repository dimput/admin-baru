import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table, Container } from 'reactstrap';
import axios from 'axios';
import Editor from "./Editor";
import SidebarActions from "./SidebarActions";
import SidebarCategories from "./SidebarCategories.js";

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personku: []

    }
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12} m={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> New Post
              </CardHeader>
              <CardBody>
                <Container fluid className="main-content-container px-4 pb-4">
                  {/* Page Header */}

                  <Row>
                    {/* Editor */}
                    <Col lg="9" md="12">
                      <Editor />
                    </Col>

                    {/* Sidebar Widgets */}
                    <Col lg="3" md="12">
                      <SidebarActions />
                      <SidebarCategories />
                    </Col>
                  </Row>
                </Container>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default NewPost;
