import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios';
import PromosData from './PromosData'

class BlogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personku: []

    }
  }
  componentDidMount() {
    axios
      .get("https://antarwisata-1dd73.firebaseio.com/blogs/"+this.props.match.params.id+".json")
      .then(response => {
        const data = Object.values(response.data);
        this.setState({ personku: response.data });
      });
  }
  render() {

    const promo = PromosData.find(promo => promo.id.toString() === this.props.match.params.id)

    const PromoDetails = promo ? Object.entries(promo) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>Promo id: {this.props.match.params.id}</strong>
              </CardHeader>
              <CardBody>
                <Table responsive striped hover>
                  <tbody>
                    <tr>
                      <td>Judul</td>
                      <td><strong>{this.state.personku.judul}</strong></td>
                    </tr>
                    <tr>
                      <td>Author</td>
                      <td><strong>{this.state.personku.author}</strong></td>
                    </tr>
                    <tr>
                      <td>Tanggal dibuat</td>
                      <td><strong>{this.state.personku.date}</strong></td>
                    </tr>
                    <tr>
                      <td>IP</td>
                      <td><strong>{this.state.personku.ip_address}</strong></td>
                    </tr>
                    {/* {
                         PromoDetails.map(([key, value]) => {
                          return (
                            <tr key={key}>
                              <td>{`${key}:`}</td>
                              <td><strong>{value}</strong></td>
                            </tr>
                          )
                        })
                      } */}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default BlogDetail;
