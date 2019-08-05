import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
import axios from 'axios';
import CurrencyFormat from 'react-currency-format';

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
const cost = user.Tiket !=0 ? <CurrencyFormat value={user.Tiket} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /> : "Free";
  return (

    <tr>
 
      <td>{user.Id}</td>
      <td>{user.Nama_Wisata}</td>
      <td style={{width:"500px"}}>{user.Alamat}</td>
      <td>{cost}</td>
      <td><Link to={"WisataEdit/"+user.Id}><Button color="primary">Edit</Button></Link></td>
      <td><Button color="danger" size="sm"><i className="material-icons">delete</i></Button></td>
    </tr>
  )
}



class Wisataku extends Component {
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
      .get("https://antarwisata-1dd73.firebaseio.com/List.json")
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
                      <th scope="col">id</th>
                      <th scope="col">nama wisata</th>
                      <th scope="col">Alamat</th>
                      <th scope="col">Tiket</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Hapus</th>
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

export default Wisataku;
