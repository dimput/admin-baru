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
      .get("https://antarwisata-1dd73.firebaseio.com/agents/"+this.props.match.params.id+".json")
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

  getAlamat(){
    if(this.state.mutiara){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.mutiara.alamat
    }
  }
  getId(){
    if(this.state.mutiara){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.mutiara.id
    }
  }
  getNama(){
    if(this.state.mutiara){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.mutiara.pemilik
  }}
  getTanggal(){
    if(this.state.mutiara){
      // console.log(this.state.dimas.namaLengkap + "adaaa")
      return this.state.mutiara.bergabung_sejak
  }}
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
              <strong>Edit From</strong> Data Wisata
            </CardHeader>
            <CardBody>
              <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
              <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">id</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getId()}/>
                    <FormText className="help-block">Please enter your email</FormText>
                  </Col>
                </FormGroup>
                
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">Nama Pemilik</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getNama()}/>
                    <FormText className="help-block">Please enter your email</FormText>
                  </Col>
                </FormGroup>
                
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">Alamat</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email" value={this.getAlamat()}/>
                    <FormText className="help-block">Please enter your email</FormText>
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
          </Card>

        </Col>
      </Row>
     
        );
}
}

export default WisataEdit;