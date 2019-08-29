import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Alert,
  Row,
} from 'reactstrap';
import axios from 'axios';
import firebase from './../../config/fbConfig'

class WisataEdit extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
    };
  }

  componentDidMount() {
    axios
      .get("https://antarwisata-1dd73.firebaseio.com/Paket_wisata/"+this.props.match.params.id+".json")
      .then(response => {
        // this.setState({ personku: response.data });
        // console.log("dimas : " + this.state.personku[0])
        // console.log(this.state.personku[0])
        this.setState(
          // dimas: Object.values(this.state.personku[0])
          response.data
        )
      });
  }

  getCatatan(){
    if(this.state.Catatan){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.Catatan
    }
  }
  getIdPaket(){
    if(this.state.IdPaket){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.IdPaket
    }
  }
  getFasilitasPenginapan(){
    if(this.state.FasilitasPenginapan){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.FasilitasPenginapan
    }
  }
  getFasilitasTiket(){
    if(this.state.FasilitasTiket){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.FasilitasTiket
    }
  }
  getFasilitasTransportasi(){
    if(this.state.FasilitasTransportasi){
      // console.log(this.state.dimas.detailPesanans[0].namaPaket + "adaaa")
      return this.state.FasilitasTransportasi
    }
  }
  getHarga(){
    if(this.state.Harga){
      // console.log(this.state.dimas.detailPesanans[0].namaPaket + "adaaa")
      return this.state.Harga
    }
  }
  getNama(){
    if(this.state.Nama_Wisata){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.Nama_Wisata
  }
}
  getTiket(){
    if(this.state.Tiket){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.Tiket
    }
  }
  getIdKendaraan(){
    if(this.state.IdKendaraan){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.IdKendaraan
    }
  }
  getInformasi(){
    if(this.state.Informasi){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.Informasi
    }
  }
  getJadwalHari1(){
    if(this.state.JadwalHari1){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.JadwalHari1
    }
  }
  getJadwalHari2(){
    if(this.state.JadwalHari2){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.JadwalHari2
    }
  }
  getJadwalHari3(){
    if(this.state.JadwalHari3){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.JadwalHari3
    }
  }
  getKeterangan(){
    if(this.state.Keterangan){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.Keterangan
    }
  }
  
  getNamaPaket(){
    if(this.state.NamaPaket){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.NamaPaket
    }
  }
  
  getimage(){
    if(this.state.image){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.image
    }
  }
  
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  handleSubmit = () => {
    console.log("submit jing");
    console.log(this.state);
    firebase.database().ref("Paket_wisata/"+this.state.IdPaket).update(this.state);
    this.setCode();
  }

  handleChange = (e) => {
    console.log(e.target.id + " : " + e.target.value);
    this.setState({
      [e.target.id] : e.target.value
    })

  }

  setCode = () => {
    this.setState({
      code: true
    })
  }
  renderCode(){
    if (this.state.code) {
      return <Alert color="success">Data berhasil disimpan !</Alert>
    }
  }

  render() {
    return (
        <Row>
        <Col xs="24" md="12">
          <Card>
            <CardHeader>
              <strong>Edit From</strong> Paket Wisata
            </CardHeader>
            <CardBody>
              <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                {this.renderCode()}

                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">NamaPaket</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="text" id="NamaPaket" name="email-input" autoComplete="email" value={this.getNamaPaket()} onChange={this.handleChange} />
           
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Kendaraan</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="text" id="IdKendaraan" name="text-input" placeholder="Text" value={this.getIdKendaraan()} onChange={this.handleChange}/>
                   
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">Keterangan</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="Keterangan" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getKeterangan()} onChange={this.handleChange}/>
                   
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">Informasi</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="Informasi" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getInformasi()} onChange={this.handleChange}/>
                   
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">Harga</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="Harga" name="email-input" placeholder="Enter Email"  displayType={'text'} thousandSeparator={true} prefix={'Rp '}  autoComplete="email" value={this.getHarga()} onChange={this.handleChange}/>
                    
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">Jadwal 1</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="JadwalHari1" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getJadwalHari1()} onChange={this.handleChange}/>
                   
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">Jadwal 2</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="JadwalHari2" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getJadwalHari2()} onChange={this.handleChange}/>
                   
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">Jadwal 3</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="JadwalHari3" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getJadwalHari3()} onChange={this.handleChange}/>
                    
                  </Col>
                </FormGroup>
                
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">Catatan</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="Catatan" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getCatatan()} onChange={this.handleChange}/>
                   
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">FasilitasPenginapan</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="FasilitasPenginapan" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getFasilitasPenginapan()} onChange={this.handleChange}/>
                   
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">FasilitasTiket</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="FasilitasTiket" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getFasilitasTiket()} onChange={this.handleChange}/>
                    
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">FasilitasTransportasi</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="FasilitasTransportasi" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getFasilitasTransportasi()} onChange={this.handleChange}/>
                   
                  </Col>
                </FormGroup>
                
              </Form>
            </CardBody>
            <CardFooter>
              <Button type="submit" size="sm" color="primary" onClick={this.handleSubmit}><i className="fa fa-dot-circle-o"></i> Submit</Button>
              <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
            </CardFooter>
          </Card>

        </Col>
      </Row>
     
        );
}
}

export default WisataEdit;