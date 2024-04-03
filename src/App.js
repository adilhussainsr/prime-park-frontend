import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './css/custom.css';
import './css/ionicons.min.css';
import "src/scss/modal.css";
import io from 'socket.io-client'; 
import $ from 'jquery'; 

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

let socket = null;

const tryFunc = (data) => {

var url      = window.location.href;     // Returns full URL (https://example.com/path/example.html)

  if((url.indexOf('/search') > -1)) {
    return false;
  }
  if((url.indexOf('/search-result') > -1)) {
    return false;
  }

  if((url.indexOf('/login') > -1)) {
    return false;
  }

  
  
  $('.mbody').text('Notification pending for '+ data)
  $('.htext').text('abc'+data);
  $(".btnsm").click();
}

const tryFuncClose = () => {
  $(".btnsmcls").click();
}

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));
const Login = React.lazy(() => import('./views/pages/login'));
const SearchResult = React.lazy(() => import('./views/pages/searchresult'));
const Search = React.lazy(() => import('./views/pages/search'));
const PickupDateSearch = React.lazy(() => import('./views/pages/pickup_date'));
class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        count:0,
      };

  }

  componentDidMount = () => {
    // connect to the socket server
    // socket = io('ws://localhost:5000');
    socket = io('ws://54.144.20.33:5000');

    // when connected, look for when the server emits the updated count
    socket.on('counter updated', function(countFromServer) {
      // set the new count on the client
      //this.setState({count:countFromServer});
      console.log(countFromServer)
    })  

    socket.on('open modal', function(data) {
      // set the new count on the client
      //this.setState({count:countFromServer});
      console.log('open modal',data)
      tryFunc(data);
    })
    
    socket.on('close modal', function(data) {
      // set the new count on the client
      //this.setState({count:countFromServer});
      console.log('close modal',data)
      tryFuncClose();
    });

    $(".snoozefor2min").click(function(){
      
      let datatosend = $('.htext').text();
      socket.emit('snooze clicked',datatosend);
    });
    $(".seenotifiction").click(function(){
        
        let datatosend = $('.htext').text();
        socket.emit('notification clicked',datatosend);
        var origin   = window.location.origin;
        window.location.href = origin + "/#/";
        $(".btnsmcls").click();
    });

  }

  handleClick() {
    // we emit this event that increments the count on the server
    // and the updated count is emitted back via 'counter updated'
    socket.emit('counter clicked');
  }
  

  render() {
    
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/search" name="Search Page" render={props => <Search {...props}/>} />
              <Route  path="/search-result/:id" name="Search Result Page" render={props => <SearchResult {...props}/>} />
              <Route  path="/pickup-date-search" name="Pickup Date Search" render={props => <PickupDateSearch {...props}/>} />
              
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
      
    );
  }
}

export default App;
