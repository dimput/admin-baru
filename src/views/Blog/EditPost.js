import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table, Container } from 'reactstrap';
import Editorku from "./Editorku";
import SidebarActions from "./SidebarActions";
import SidebarCategories from "./SidebarCategories.js";
import axios from 'axios';

class EditPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personku: []

        }
    }
    componentDidMount() {
        const { user } = this.props;
        axios
            .get("https://antarwisata-1dd73.firebaseio.com/blogs/" + this.props.match.params.id + ".json")
            .then(response => {
                // const data = Object.values(response.data);
                this.setState({ personku: response.data });
            });
    }

    hello= (e) => {
        console.log("hello"+e)
    }
    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xl={12} m={12}>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i>Edit Post
              </CardHeader>
                            <CardBody>
                                <Container fluid className="main-content-container px-4 pb-4">
                                    {/* Page Header */}

                                    <Row>
                                        {/* Editor */}
                                        <Col lg="12" md="12">
                                            <Editorku user={this.state.personku} />
                                        </Col>

                                        {/* Sidebar Widgets */}
                                        <Col lg="3" md="12">
                                            {/* <SidebarActions/> */}
                                            {/* <SidebarCategories /> */}
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

export default EditPost;
