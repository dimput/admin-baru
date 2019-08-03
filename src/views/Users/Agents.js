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
  const user = props.user

  return (
    <tr>
      {/* <th scope="row"><Link to={userLink}>{user.id}</Link></th> */}
      {/* <td><Link to={userLink}>{user.nama}</Link></td> */}
      <td>{user.id}</td>
      <td>{user.pemilik}</td>
      <td>{user.email}</td>
      <td>{user.alamat}</td>
      <td>{user.bergabung_sejak}</td>
      {/* <td><Link to={userLink}><Badge color={getBadge(user.status)}>{user.status}</Badge></Link></td> */}
    </tr>
  )
}



class Agents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personku: []

    }
  }
  componentDidMount() {
    axios
      .get("https://antarwisata-1dd73.firebaseio.com/agents.json")
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
                <i className="fa fa-align-justify"></i> Agents 
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Pemilik</th>
                      <th scope="col">Email</th>
                      <th scope="col">Alamat<small className="text-muted">street</small></th>
                      <th scope="col">Bergabung</th>
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

export default Agents;
