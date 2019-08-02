import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios';

function UserRow(props) {
  const promo = props.promo
  const promoLink = `/promoss/${promo.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={promo.id.toString()}>
      <th scope="row"><Link to={promoLink}>{promo.id}</Link></th>
      <td><Link to={promoLink}>{promo.name}</Link></td>
      <td>{promo.registered}</td>
      <td>{promo.role}</td>
      {/* <td><Link to={userLink}><Badge color={getBadge(user.status)}>{user.status}</Badge></Link></td> */}
    </tr>
  )
}

//baru
function PromoTable(props) {
  const user = props.user
  // const userLink = `/users/${user.id}`

  // const getBadge = (status) => {
  //   return status === 'Active' ? 'success' :
  //     status === 'Inactive' ? 'secondary' :
  //       status === 'Pending' ? 'warning' :
  //         status === 'Banned' ? 'danger' :
  //           'primary'
  // }

  return (
    <tr>
      {/* <th scope="row"><Link to={userLink}>{user.id}</Link></th> */}
      {/* <td><Link to={userLink}>{user.nama}</Link></td> */}
      <td>{user.id}</td>
      <td>{user.NamaPaket}</td>
      <td>{user.Catatan}</td>
      <td>{user.FasilitasTiket}</td>
      <td>{user.FasilitasTourGuide}</td>
      <td>{user.FasilitasTransportasi}</td>
      <td>{user.Harga}</td>
      <td>{user.Informasi}</td>
      <td>{user.JadwalHari1}</td>
      <td>{user.JadwalHari2}</td>
      <td>{user.JadwalHari3}</td>
      <td>{user.JadwalHari4}</td>
      <td>{user.JadwalHari5image}</td>
      {/* <td><Link to={userLink}><Badge color={getBadge(user.status)}>{user.status}</Badge></Link></td> */}
    </tr>
  )
}



class Wisata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personku: []

    }
  }

  // fetchDataUsers() {
  //   axios
  //     .get("https://antarwisata-1dd73.firebaseio.com/Promo.json")
  //   // .then(response => {
  //   // const data = Object.values(response.data);
  //   // // console.log("wow: " +data);
  //   // this.setState({ personku: data });
  //   // return <div>hehe {data.image}</div>;
  //   // });
  //   if (this.state.personku[0] != null) {
  //     console.log(this.state.personku[0].image)
  //   }
  // }

  componentDidMount() {
    axios
      .get("https://antarwisata-1dd73.firebaseio.com/Paket_wisata.json")
      .then(response => {
        const data = Object.values(response.data);
        this.setState({ personku: data });
      });
  }

  render() {
    const data = this.state;
    // const tampilData = this.state.personku!=null? "isi" : "kosong";
    // const userList = usersData.filter((user) => user.id < 10)
    // const promoList = promo.promoFirebase.filter((user) => promo.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12} m={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Tempat Wisata
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      {/* <th scope="col">nama</th> */}
                     
                      <th scope="col">Id</th>
                      <th scope="col">Nama Paket</th>
                      <th scope="col"> Catatan </th>
                      <th scope="col">Tiket</th> 
                      <th scope="col">Tour Gade</th>
                      <th scope="col">Transportasi</th>
                      <th scope="col">Harga</th>
                      <th scope="col">Informasi</th>
                      <th scope="col">Hari 1</th>
                      <th scope="col">Hari 2</th>
                      <th scope="col">Hari 3</th>
                      <th scope="col">Hari 4</th>
                      <th scope="col">Hari 5</th>
                      <th scope="col">image</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.personku.map((user, index) =>
                      // <UserRow key={index} user={user} />
                      <PromoTable key={index} user={user} />
                    )}
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

export default Wisata;
