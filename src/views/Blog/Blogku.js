import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
import axios from 'axios';

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

  return (
    <tr key={user.id.toString()}>
      
        {/* <th scope="row"><Link to={userLink}>{user.id}</Link></th> */}
        {/* <td><Link to={userLink}>{user.nama}</Link></td> */}
        <td>{user.id}</td>
        <td><Link to={"blog/"+((user.id)-1).toString()}>{user.judul}</Link></td>
        <td>{user.author}</td>
        <td>{user.date}</td>
        <td>{user.status}</td>
        <td><Link to={"edit/"+((user.id)-1).toString()}><Button color="primary">Edit</Button></Link></td>
      
      {/* <td><Link to={userLink}><Badge color={getBadge(user.status)}>{user.status}</Badge></Link></td> */}
    </tr>
  )
}



class Blogku extends Component {
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
      .get("https://antarwisata-1dd73.firebaseio.com/blogs.json")
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
                <i className="fa fa-align-justify"></i> Blog
                <Link to="/newpost">
                  <Button style={{float:"right"}}>Create Blog</Button>
                </Link>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Judul</th>
                      <th scope="col">Author</th>
                      {/* {/* <th scope="col">role</th> */}
                      <th scope="col">Tanggal</th>
                      <th scope="col">Status</th>
                      <th scope="col">Aksi</th>
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

export default Blogku;
