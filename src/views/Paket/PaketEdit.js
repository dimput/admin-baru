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
  Row,
} from 'reactstrap';
import axios from 'axios';

class WisataEdit extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  componentDidMount() {
    axios
      .get("https://antarwisata-1dd73.firebaseio.com/Paket_wisata/"+this.props.match.params.id+".json")
      .then(response => {
        this.setState({ personku: response.data });
        // console.log("dimas : " + this.state.personku[0])
        // console.log(this.state.personku[0])
        this.setState({
          // dimas: Object.values(this.state.personku[0])
          mutiara: this.state.personku
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
  
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
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
              <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">id </Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getIdPaket()}/>
                    
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">NamaPaket</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getNamaPaket()}/>
           
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Kenderaan</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="text" id="text-input" name="text-input" placeholder="Text" value={this.getIdKendaraan()}/>
                   
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">Keterangan</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getKeterangan()}/>
                   
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">Informasi</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getInformasi()}/>
                   
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">Harga</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="email-input" name="email-input" placeholder="Enter Email"  displayType={'text'} thousandSeparator={true} prefix={'Rp '}  autoComplete="email" value={this.getHarga()}/>
                    
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">Jadwal 1</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getJadwalHari1()}/>
                   
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">Jadwal 2</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getJadwalHari2()}/>
                   
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">Jadwal 3</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getJadwalHari3()}/>
                    
                  </Col>
                </FormGroup>
                
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">Catatan</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getCatatan()}/>
                   
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">FasilitasPenginapan</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getFasilitasPenginapan()}/>
                   
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">FasilitasTiket</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getFasilitasTiket()}/>
                    
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">FasilitasTransportasi</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getFasilitasTransportasi()}/>
                   
                  </Col>
                </FormGroup>
                
              </Form>
            </CardBody>
            <CardFooter>
              <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
              <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
            </CardFooter>
          </Card>

        </Col>
      </Row>
     
        );
}
}

export default WisataEdit;