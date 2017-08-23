import React, { Component } from 'react';
import base64 from 'base-64';
import { FormControl,FormGroup, Button, NavItem,Table, Nav,ListGroup,ListGroupItem,list } from 'react-bootstrap';
var unirest = require('unirest');

let counterTest = 0;

export default class TableComponent extends Component {

  constructor() {
        super();
        this.state = { items: [] };
  }


  componentDidMount() {
    let encodePassord = "apiuser:password";
    let authBase64 = base64.encode(encodePassord);
    console.log("Authorization:  " + authBase64);

    let authString = "Basic YXBpdXNlcjpwYXNzd29yZA==";

    var Request = unirest.get('https://techpros-cv-srv-dev.herokuapp.com/consultants/listall');
    Request.followRedirect(true);
    Request.header('Accept', 'application/json')
        .auth({
            user: 'apiuser',
            pass: 'password',
            sendImmediately: true
        })
        .end(function (response) {
            console.log(response.body);
    });

    console.log('Vi er forbi');
    }

  render() {
    return(
      <div>
        <br/><br/>
        <h1>Tom</h1>
        <h3>Tom</h3>
      </div>
    )
  }
}
