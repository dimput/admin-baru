import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios';
import PromosData from './DetailPemesanan'
import CurrencyFormat from 'react-currency-format';

class DetailPemesanan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personku: []

    }
  }
  componentDidMount() {
    axios
      .get("https://antarwisata-1dd73.firebaseio.com/Requests.json")
      .then(response => {
        const data = Object.values(response.data);
        this.setState({ personku: data });
        // console.log("dimas : " + this.state.personku[0])
        // console.log(this.state.personku[0])
        this.setState({
          // dimas: Object.values(this.state.personku[0])
          dimas: this.state.personku[this.props.match.params.id]
        })
      });
  }

  getNama(){
    if(this.state.dimas){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.dimas.namaLengkap
    }
  }
  getPaketName(){
    if(this.state.dimas){
      // console.log(this.state.dimas.detailPesanans[0].namaPaket + "adaaa")
      return this.state.dimas.detailPesanans[0].namaPaket
    }
  }
  getHarga(){
    if(this.state.dimas){
      // console.log(this.state.dimas.detailPesanans[0].namaPaket + "adaaa")
      return this.state.dimas.detailPesanans[0].harga
    }
  }
  getTanggal(){
    if(this.state.dimas){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.dimas.detailPesanans[0].keterangan
    }
  }
  getNoTelp(){
    if(this.state.dimas){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.dimas.notelp
    }
  }
  getJenis(){
    if(this.state.dimas){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.dimas.detailPesanans[0].idKendaraan
    }
  }
  render() {
    if(this.state.dimas){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
    }
    // const promo = PromosData.find(promo => promo.id.toString() === this.props.match.params.id)

    // const PromoDetails = promo ? Object.entries(promo) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]
    const { user } = this.props;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>Paket Name: {this.getPaketName()}</strong>
              </CardHeader>
              <CardBody>
                <Table responsive striped hover>
                  <tbody>
                    <tr>
                      <td>Nama Customer</td>
                      <td><strong>{this.getNama()}</strong></td>
                    </tr>
                    <tr>
                      <td>Jenis Kenderaan</td>
                      <td><strong>{this.getJenis()}</strong></td>
                    </tr>
                    <tr>
                      <td>No Telp </td>
                      <td><strong>{this.getNoTelp()}</strong></td>
                    </tr>
                    <tr>
                      <td>Tanggal </td>
                      <td><strong>{this.getTanggal()}</strong></td>
                    </tr>
                    <tr>
                      <td>Harga</td>
                      <td><strong><CurrencyFormat value={this.getHarga()} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /></strong></td>
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
