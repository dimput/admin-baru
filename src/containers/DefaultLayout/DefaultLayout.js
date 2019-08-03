import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions'

import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';
import firebase from '../../config/fbConfig.js';

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    // this.database = firebase.database();
    // this.user = firebase.auth().currentUser;
    // console.log(this.user)

    // // console.log(this.state.email)
    // var uid = this.user.uid;
    // var ref = this.database.ref("Users/"+uid);
    // var isAdmin = 0;
    
    // ref.on("value", function (snapshot) {
    //   // console.log(snapshot.val().isAdmin);
    //   // console.log("asuu"+snapshot.val())
    //   console.log("bukan admin"+snapshot.val().isAdmin);
    //   isAdmin= snapshot.val().isAdmin;
    // }, function (errorObject) {
    //   console.log("The read failed: " + errorObject.code);
    // });
    // console.log(isAdmin+"asuu")
    // if(isAdmin==0){
    //   this.props.signOut()
    // }else {
    //   // console.log("admin")
    // }
  }
  componentDidMount(){

  }
  
  // keluar(){

  //   if(isAdmin==0){
  //     this.props.signOut()
  //   }else {
  //     // console.log("admin")
  //   }
  // }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/login' />
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
            <AppSidebarNav navConfig={navigation} {...this.props} router={router}/>
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router}/>
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DefaultLayout)
