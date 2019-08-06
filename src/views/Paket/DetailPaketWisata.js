import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios';
import PromosData from './DetailPaketWisata'
import CurrencyFormat from 'react-currency-format';

class DetailPaketWisata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personku: []

    }
  }
  componentDidMount() {
    axios
      .get("https://antarwisata-1dd73.firebaseio.com/Paket_wisata/"+this.props.match.params.id+".json")
      .then(response => {
        const data = Object.values(response.data);
        this.setState({ personku: data });
        // console.log("dimas : " + this.state.personku[0])
        // console.log(this.state.personku[0])
        this.setState({
          // dimas: Object.values(this.state.personku[0])
          mutiara: response.data
        })
      });
  }

  getCatatan(){
    if(this.state.mutiara){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.mutiara.Catatan
    }
  }
  getIdPaket(){
    if(this.state.mutiara){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.mutiara.IdPaket
    }
  }
  getFasilitasPenginapan(){
    if(this.state.mutiara){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.mutiara.FasilitasPenginapan
    }
  }
  getFasilitasTiket(){
    if(this.state.mutiara){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.mutiara.FasilitasTiket
    }
  }
  getFasilitasTransportasi(){
    if(this.state.mutiara){
      // console.log(this.state.dimas.detailPesanans[0].namaPaket + "adaaa")
      return this.state.mutiara.FasilitasTransportasi
    }
  }
  getHarga(){
    if(this.state.mutiara){
      // console.log(this.state.dimas.detailPesanans[0].namaPaket + "adaaa")
      return this.state.mutiara.Harga
    }
  }
  getNama(){
    if(this.state.mutiara){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.mutiara.Nama_Wisata
  }
}
  getTiket(){
    if(this.state.mutiara){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.mutiara.Tiket
    }
  }
  getIdKendaraan(){
    if(this.state.mutiara){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.mutiara.IdKendaraan
    }
  }
  getInformasi(){
    if(this.state.mutiara){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.mutiara.Informasi
    }
  }
  getJadwalHari1(){
    if(this.state.mutiara){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.mutiara.JadwalHari1
    }
  }
  getJadwalHari2(){
    if(this.state.mutiara){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.mutiara.JadwalHari2
    }
  }
  getJadwalHari3(){
    if(this.state.mutiara){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.mutiara.JadwalHari3
    }
  }
  getKeterangan(){
    if(this.state.mutiara){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.mutiara.Keterangan
    }
  }
  
  getNamaPaket(){
    if(this.state.mutiara){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.mutiara.NamaPaket
    }
  }
  
  getimage(){
    if(this.state.mutiara){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.mutiara.image
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
                <strong><i className="icon-info pr-1"></i>Paket Name: {this.getNamaPaket()}</strong>
              </CardHeader>
              <CardBody>
                <Table responsive striped hover>
                  <tbody>
                    <tr>
                      <td>id Paket</td>
                      <td><strong>{this.getIdPaket()}</strong></td>
                    </tr>
                    <tr>
                      <td>Jenis Kenderaan</td>
                      <td><strong>{this.getIdKendaraan()}</strong></td>
                    </tr>
                    <tr>
                      <td>Jadwal Hari1 </td>
                      <td><strong>{this.getJadwalHari1()}</strong></td>
                    </tr>
                    <tr>
                      <td>Jadwal Hari2 </td>
                      <td><strong>{this.getJadwalHari2()}</strong></td>
                    </tr>
                    <tr>
                      <td>Jadwal Hari3 </td>
                      <td><strong>{this.getJadwalHari3()}</strong></td>
                    </tr>
                    <tr>
                      <td>Keterangan </td>
                      <td><strong>{this.getKeterangan()}</strong></td>
                    </tr>
                    <tr>
                      <td>Harga</td>
                      <td><strong><CurrencyFormat value={this.getHarga()} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /></strong></td>
                    </tr>
                    <tr>
                      <td>Fasilitas Penginapan </td>
                      <td><strong>{this.getFasilitasPenginapan()}</strong></td>
                    </tr>
                    <tr>
                      <td>Fasilitas Tiket </td>
                      <td><strong>{this.getFasilitasTiket()}</strong></td>
                    </tr>
                    <tr>
                      <td>Fasilitas Transportasi </td>
                      <td><strong>{this.getFasilitasTransportasi()}</strong></td>
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

export default DetailPaketWisata;
