import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios';
import PromosData from './DetailPemesanan'

class DetailPemesanan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personku: []

    }
  }
  componentDidMount() {
    axios
      .get("https://antarwisata-1dd73.firebaseio.com/Requests/"+this.props.match.params.id+".json")
      .then(response => {
        const data = (response.data.detailPesanans[0]);
        // console.log(data);
        this.setState({ personku: data });
      });
  }
  render() {

    // const promo = PromosData.find(promo => promo.id.toString() === this.props.match.params.id)

    // const PromoDetails = promo ? Object.entries(promo) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]

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
                      <td>Nama Paket</td>
                      <td><strong>{this.state.personku.namaPaket}</strong></td>
                    </tr>
                    <tr>
                      <td>Id Paket</td>
                      <td><strong>{this.state.personku.idPaket}</strong></td>
                    </tr>
                    <tr>
                      <td>Jenis Kenderaan</td>
                      <td><strong>{this.state.personku.idKenderaan}</strong></td>
                    </tr>
                    <tr>
                      <td>Tanggal </td>
                      <td><strong>{this.state.personku.keterangan}</strong></td>
                    </tr>
                    <tr>
                      <td>Harga</td>
                      <td><strong>{this.state.personku.harga}</strong></td>
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

export default DetailPemesanan;
