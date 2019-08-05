import React, { Component } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
import axios from 'axios';

class Tambah extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      date : this.formatDate()
    };
  }

  componentDidMount() {
    console.log("selamat datang di tambah")
  }

  formatDate() {
    var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year].join('/');
  }

  getAlamat() {
    if (this.state.mutiara) {
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.mutiara.address
    }
  }
  getId() {
    if (this.state.mutiara) {
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.mutiara.id
    }
  }
  getNama() {
    if (this.state.mutiara) {
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.mutiara.owner
    }
  }
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState } });
  }

  handeChange(e){
    console.log(e.target.id + " : " + e.target.value)
  }

  render() {
    // JIKA AGENT
    const parameter1 = (this.props.match.params.id == "Agent") ? (
      <div>
      <CardBody>
        <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
          <FormGroup row>
            <Col md="3">
              <Label htmlFor="email-input">Nama Pemilik</Label>
            </Col>
            <Col xs="12" md="9">
              <Input type="text" id="owner" name="name" placeholder="Masukkan Nama Pemilik" autoComplete="name"/>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md="3">
              <Label htmlFor="email-input">Alamat</Label>
            </Col>
            <Col xs="12" md="9">
              <Input type="text" id="address" name="address" placeholder="Masukkan Alamat Usaha"/>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md="3">
              <Label htmlFor="email-input">Email</Label>
            </Col>
            <Col xs="12" md="9">
              <Input type="email" id="email" name="email-input" placeholder="Masukkan Email" autoComplete="email"/>
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
        <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
        <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
      </CardFooter>
      </div>
    ) : "";

    // JIKA INVESTOR
    const parameter2 = (this.props.match.params.id == "Investor") ? (
      <div>
      <CardBody>
        <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
          <FormGroup row>
            <Col md="3">
              <Label htmlFor="email-input">Company</Label>
            </Col>
            <Col xs="12" md="9">
              <Input type="text" name="company" id="company" placeholder="Masukkan Nama Company" autoComplete="name" onChange={this.handeChange}/>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md="3">
              <Label htmlFor="email-input">Email</Label>
            </Col>
            <Col xs="12" md="9">
              <Input type="email" id="email" name="email-input" placeholder="Masukkan Email" autoComplete="email" onChange={this.handeChange}/>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md="3">
              <Label htmlFor="email-input">Invest</Label>
            </Col>
            <Col xs="12" md="9">
              <Input type="number" name="invest" placeholder="Masukkan Total Invest" id="invest" onChange={this.handeChange}/>
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
        <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
        <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
      </CardFooter>
      </div>
    ) : "";

    // JIKA TEMPAT WISATA
    const tempatWisata = (this.props.match.params.id == "TempatWisata") ? (
      <div>
      <CardBody>
        <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
          <FormGroup row>
            <Col md="3">
              <Label htmlFor="email-input">Nama Lengkap</Label>
            </Col>
            <Col xs="12" md="9">
              <Input type="text" id="email-input" name="name" placeholder="Masukkan Nama Pemilik" autoComplete="name"/>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md="3">
              <Label htmlFor="email-input">Alamat</Label>
            </Col>
            <Col xs="12" md="9">
              <Input type="text" id="email-input" name="address" placeholder="Masukkan Alamat Usaha"/>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md="3">
              <Label htmlFor="email-input">Email</Label>
            </Col>
            <Col xs="12" md="9">
              <Input type="email" id="email-input" name="email-input" placeholder="Masukkan Email" autoComplete="email"/>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md="3">
              <Label htmlFor="email-input">Password</Label>
            </Col>
            <Col xs="12" md="9">
              <Input type="password" name="password" placeholder="Masukkan Password" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md="3">
              <Label htmlFor="file-input">Foto 4x4</Label>
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
        <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
        <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
      </CardFooter>
      </div>
    ) : "";
    
       // JIKA PAKET WISATA
    const paketWisata = (this.props.match.params.id == "PaketWisata") ? (
      <div>
      <CardBody>
        <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
          <FormGroup row>
            <Col md="3">
              <Label htmlFor="email-input">Nama Lengkap</Label>
            </Col>
            <Col xs="12" md="9">
              <Input type="text" id="email-input" name="name" placeholder="Masukkan Nama Pemilik" autoComplete="name"/>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md="3">
              <Label htmlFor="email-input">Alamat</Label>
            </Col>
            <Col xs="12" md="9">
              <Input type="text" id="email-input" name="address" placeholder="Masukkan Alamat Usaha"/>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md="3">
              <Label htmlFor="email-input">Email</Label>
            </Col>
            <Col xs="12" md="9">
              <Input type="email" id="email-input" name="email-input" placeholder="Masukkan Email" autoComplete="email"/>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md="3">
              <Label htmlFor="email-input">Password</Label>
            </Col>
            <Col xs="12" md="9">
              <Input type="password" name="password" placeholder="Masukkan Password" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md="3">
              <Label htmlFor="file-input">Foto 4x4</Label>
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
        <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
        <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
      </CardFooter>
      </div>
    ) : "";
    
    return (
      <Row>
        <Col xs="24" md="12">
          <Card>
            <CardHeader>
              <strong>Tambah </strong> Data {this.props.match.params.id}
            </CardHeader>
            
            {parameter1}
            {parameter2}
            {tempatWisata}
            {paketWisata}

          </Card>

        </Col>
      </Row>

    );
  }
}

export default Tambah;