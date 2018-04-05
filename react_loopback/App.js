import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={
      nm:'',
      eml:'',
      pwd:''
    }
  }
  klik2(){
    this.setState({nm:this.refs.nama.value,eml:this.refs.email.value,pwd:this.refs.pass.value})
  }
  componentWillUpdate(x,y){
    var data={
      nama:y.nm,
      email:y.eml,
      password:y.pwd
    }
    console.log(data);
    var str=JSON.stringify(data);
    
    let axiosConfig = {
      headers: {
       'Content-Type': 'application/json;charset=UTF-8',
      }
      };
      axios.post('http://localhost:3210/api/Users',str,axiosConfig).then((res)=>{
        console.log("Response server :",res)
      })
  }
  render() {
    return (
      <div className="container">
      
            <label htmlFor="exampleInputName">Name</label>
            <input type="text" ref="nama" id="exampleInputName" placeholder="Name"/>
            <br/>
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" ref="email" id="exampleInputEmail1" placeholder="Enter email"/>
            <br/>
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" ref="pass" id="exampleInputPassword1" placeholder="Password"/>
            <br/>
          <button type="submit" className="btn btn-primary"onClick={()=>{this.klik2();}}>Post data</button>
          <h1>{this.state.nm}{this.state.eml}{this.state.pwd}</h1>
      </div>
    );
  }
}

export default App;
