import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Row, Table , Button} from 'reactstrap';
import axios from 'axios';
// import firebase from './../../config/fbConfig'

// function UserRow(props) {
//   const promo = props.promo
//   const promoLink = `/promoss/${promo.id}`

//   const getBadge = (status) => {
//     return status === 'Active' ? 'success' :
//       status === 'Inactive' ? 'secondary' :
//         status === 'Pending' ? 'warning' :
//           status === 'Banned' ? 'danger' :
//             'primary'
//   }

//   return (
//     <tr key={promo.id.toString()}>
//       <th scope="row"><Link to={promoLink}>{promo.id}</Link></th>
//       <td><Link to={promoLink}>{promo.name}</Link></td>
//       <td>{promo.registered}</td>
//       <td>{promo.role}</td>
//       {/* <td><Link to={userLink}><Badge color={getBadge(user.status)}>{user.status}</Badge></Link></td> */}
//     </tr>
//   )
// }

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
  const getButton= (status) => {
    return status === 'Belum Di Respon' ? <Button color="success">Respon</Button> :
      '-'
  }
  const {dimas} = props
  return (
    <tr>
      {/* <th scope="row"><Link to={userLink}>{user.id}</Link></th> */}
      <td><Link to={"pemesanan/"+dimas} user={user}>{user.namaLengkap}</Link></td>
      {/* <td>{user.namaLengkap}</td> */}
      <td>{user.alamatPenjemputan}</td>
      <td>{user.notelp}</td>
      <td>{user.catatan}</td>
      <td>{user.statusPesanan}</td>
      <td>{getButton(user.statusPesanan)}</td>
    </tr>
  )
}



class Pemesananku extends Component {
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
        // this.setState( data );
        console.log(data)
        // this.setState({ personku: response });
      });
    // var starCountRef = firebase.database().ref('Requests');
    // starCountRef.on('value', function (snapshot) {
    //   console.log(snapshot.val());
    //   const messageObject = snapshot.val();

    //   if (messageObject) {
    //     const messageList = Object.keys(messageObject).map(key => ({
    //       ...messageObject[key],
    //       uid: key,
    //     }));

    //     this.setState({
    //       messages: messageList
    //     });
    //   } else {
    //     this.setState({ messages: null });
    //   }
    // });

  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12} m={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Pemesanan
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>

                      {/* <th scope="col">nama</th> */}
                      <th scope="col">Nama </th>
                      <th scope="col">Alamat</th>
                      {/* {/* <th scope="col">role</th> */}
                      <th scope="col">No Telp</th>
                      <th scope="col">catatan</th>
                      <th scope="col">statusPesanan</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.personku.map((user, index) =>
                      // <UserRow key={index} user={user} />
                      <PromoTable key={index} user={user} dimas={index}/>
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

export default Pemesananku;
