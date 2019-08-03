import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios';

import usersData from './UsersData'

function UserRow(props) {
  const user = props.user
  const userLink = `/users/${user.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={user.id.toString()}>
      <th scope="row"><Link to={userLink}>{user.id}</Link></th>
      <td><Link to={userLink}>{user.name}</Link></td>
      <td>{user.registered}</td>
      <td>{user.role}</td>
      {/* <td><Link to={userLink}><Badge color={getBadge(user.status)}>{user.status}</Badge></Link></td> */}
    </tr>
  )
}

//baru
function UserTable(props) {
  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }
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
      <td>{user.nama}</td>
      <td>{user.telp}</td>
      <td><Link to=""><Badge color={getBadge(user.status)}>{user.status}</Badge></Link></td>
    </tr>
  )
}



class Users extends Component {
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
      .get("https://antarwisata-1dd73.firebaseio.com/Users.json")
      .then(response => {
        const data = Object.values(response.data);
        this.setState({ personku: data });
      });
  }

  render() {
    const data = this.state;
    // const tampilData = this.state.personku!=null? "isi" : "kosong";
    // const userList = usersData.filter((user) => user.id < 10)
    // const userList = data.usersFirebase.filter((user) => user.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12} m={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      {/* <th scope="col">nama</th> */}
                      <th scope="col">name</th>
                      <th scope="col">No Telp</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.personku.map((user, index) =>
                      // <UserRow key={index} user={user} />
                      <UserTable key={index} user={user} />
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

export default Users;
