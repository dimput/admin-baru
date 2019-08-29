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
  Alert,
} from 'reactstrap';
import axios from 'axios';
import firebase from './../../config/fbConfig'

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
      .get("https://antarwisata-1dd73.firebaseio.com/List/"+this.props.match.params.id+".json")
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
  

  getAlamat(){
    if(this.state.Alamat){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.Alamat
    }
  }
  getKategoriID(){
    if(this.state.KategoriID){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.KategoriID
    }
  }
  getId(){
    if(this.state.Id){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.Id
    }
  }
  getDeskripsi(){
    if(this.state.Deskripsi){
      // console.log(this.state.dimas.detailPesanans[0].namaPaket + "adaaa")
      return this.state.Deskripsi
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
  getGambar(){
    if(this.state.Gambar){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.Gambar
    }
  }
  getFasilitasMasjid(){
    if(this.state.FasilitasMasjid){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.FasilitasMasjid
    }
  }
  getFasilitasParkir(){
    if(this.state.FasilitasParkir){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.FasilitasParkir
    }
  }
  getFasilitasToilet(){
    if(this.state.FasilitasToilet){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.FasilitasToilet
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
    firebase.database().ref("List/"+this.state.Id).update(this.state);
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
              <strong>Edit From</strong> Data Wisata
            </CardHeader>
            <CardBody>
              <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
              {this.renderCode()}

              <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">id</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="Id" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getId()} />
                   
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">KategoriID</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="KategoriID" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getKategoriID()} onChange={this.handleChange}/>
                   
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Nama Wisata</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="text" id="Nama_Wisata" name="text-input" placeholder="Text" value={this.getNama()} onChange={this.handleChange}/>
                  
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">Alamat</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getAlamat()} onChange={this.handleChange}/>
                  
                  </Col>
                </FormGroup>
                
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">Harga</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="Harga" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getHarga()} onChange={this.handleChange}/>
                   
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">Tiket</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="Tiket" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getTiket()} onChange={this.handleChange}/>
                   
                  </Col>
                </FormGroup>
                
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">Deskripsi</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="Deskripsi" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getDeskripsi()} onChange={this.handleChange}/>
                  
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">Gambar</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="Gambar" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getGambar()} onChange={this.handleChange}/>
               
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label>Fasilitas Masjid</Label>
                  </Col>
                  <Col md="9">
                    <FormGroup check inline>
                      <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" />
                      <Label className="form-check-label" check htmlFor="inline-radio1">Tersedia</Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="option2" />
                      <Label className="form-check-label" check htmlFor="inline-radio2">Belum tersedia</Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Input className="form-check-input" type="radio" id="inline-radio3" name="inline-radios" value="option3" />
                      <Label className="form-check-label" check htmlFor="inline-radio3">Jauh</Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label>Fasilitas Parkir</Label>
                  </Col>
                  <Col md="9">
                    <FormGroup check inline>
                      <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" />
                      <Label className="form-check-label" check htmlFor="inline-radio1">Tersedia</Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="option2" />
                      <Label className="form-check-label" check htmlFor="inline-radio2">Belum tersedia</Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Input className="form-check-input" type="radio" id="inline-radio3" name="inline-radios" value="option3" />
                      <Label className="form-check-label" check htmlFor="inline-radio3">Luas</Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
                 
                <FormGroup row>
                  <Col md="3">
                    <Label>Fasilitas Toilet</Label>
                  </Col>
                  <Col md="9">
                    <FormGroup check inline>
                      <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" />
                      <Label className="form-check-label" check htmlFor="inline-radio1">Tersedia</Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="option2" />
                      <Label className="form-check-label" check htmlFor="inline-radio2">Belum tersedia</Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Input className="form-check-input" type="radio" id="inline-radio3" name="inline-radios" value="option3" />
                      <Label className="form-check-label" check htmlFor="inline-radio3">Bersih Terawat</Label>
                    </FormGroup>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="file-input">File input</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="file" id="file-input" name="file-input" />
                  </Col>
                </FormGroup>
                
                <FormGroup row hidden>
                  <Col md="3">
                    <Label className="custom-file" htmlFor="custom-file-input">Custom file input</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Label className="custom-file">
                      <Input className="custom-file" type="file" id="custom-file-input" name="file-input" />
                      <span className="custom-file-control"></span>
                    </Label>
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
            <CardFooter>
              <Button type="submit" size="sm" color="primary"  onClick={this.handleSubmit}><i className="fa fa-dot-circle-o"></i> Submit</Button>
              <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
            </CardFooter>
          </Card>

        </Col>
      </Row>
     
        );
}
}

export default WisataEdit;