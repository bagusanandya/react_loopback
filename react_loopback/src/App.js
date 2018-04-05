import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
class App extends Component {
  constructor(){
    super();
    this.state={
      nm:'',
      eml:'',
      pwd:'',
      kel:''
    }
  }
  klik2(){
    this.setState({nm:this.refs.nama.value,eml:this.refs.email.value,pwd:this.refs.pass.value,kel:this.refs.kelamin.value})
  }
  componentWillUpdate(x,y){
    var data={
      nama:y.nm,
      email:y.eml,
      password:y.pwd,
      kelamin:y.kel
    }
    console.log(data);
    var str=JSON.stringify(data);
    
    let axiosConfig = {
      headers: {
       'Content-Type': 'application/json;charset=UTF-8',
      }
      };
      axios.post('http://localhost:3002/api/Users',str,axiosConfig).then((res)=>{
        console.log("Response server :",res)
      })
    }
  render() {
    return (

      <div className="App">

      <h1 class="display-1">REACT LOOPBACK</h1>


      <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">NAMA</span>
  </div>
  <input ref="nama" type="text" class="form-control" placeholder="Silahkan isi nama anda" aria-label="username" aria-describedby="basic-addon1"/>
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">EMAIL</span>
  </div>
  <input ref="email" type="email" class="form-control" placeholder="email@email.com" aria-label="username" aria-describedby="basic-addon1"/>
</div>

<div class="input-group mb-3">
<div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">PASSWORD</span>
  </div>
  <input ref="pass" type="text" class="form-control" placeholder="Silahkan isi password" aria-label="username" aria-describedby="basic-addon1"/>
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01">JENIS KELAMIN</label>
  </div>


  <select ref="kelamin" class="custom-select" id="inputGroupSelect01">
    <option selected>Pilih Jenis Kelamin</option>
    <option value="pria">Pria</option>
    <option value="wanita">Wanita</option>
  </select>

  
</div>
<button type="button" class="btn btn-danger" onClick={()=>{this.klik2();}}>KIRIM</button>

</div>

    );
  }  }


export default App;
