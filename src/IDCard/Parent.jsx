import React, { Component } from 'react'
import Child from './Child';

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputvalue1: "", inputvalue2: "", inputvalue3: "", inputvalue4: "", inputvalue5: "",
      inputvalue6: "", inputvalue7: "", inputvalue8: "", inputvalue9: "", inputvalue10: "",
      inputvalue11: "", arr: [],
      photo: null,
      photoPreview: null
    };
  }

  i1 = (e) => { this.setState({ inputvalue1: e.target.value }) }
  i2 = (e) => { this.setState({ inputvalue2: e.target.value }) }
  i3 = (e) => { this.setState({ inputvalue3: e.target.value }) }
  i4 = (e) => { this.setState({ inputvalue4: e.target.value }) }
  i5 = (e) => { this.setState({ inputvalue5: e.target.value }) }
  i6 = (e) => { this.setState({ inputvalue6: e.target.value }) }
  i7 = (e) => { this.setState({ inputvalue7: e.target.value }) }
  i8 = (e) => { this.setState({ inputvalue8: e.target.value }) }
  i9 = (e) => { this.setState({ inputvalue9: e.target.value }) }
  i10 = (e) => { this.setState({ inputvalue10: e.target.value }) }
  i11 = (e) => { this.setState({ inputvalue11: e.target.value }) }

  handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      this.setState({
        photo: file,
        photoPreview: URL.createObjectURL(file)
      });
    }
  }

  click = () => {
    const {
      inputvalue1, inputvalue2, inputvalue3, inputvalue4, inputvalue5,
      inputvalue6, inputvalue7, inputvalue8, inputvalue9, inputvalue10,
      inputvalue11, photoPreview
    } = this.state;

    const formdata = {
      inputvalue1, inputvalue2, inputvalue3, inputvalue4, inputvalue5,
      inputvalue6, inputvalue7, inputvalue8, inputvalue9, inputvalue10,
      inputvalue11, photoPreview
    };

    this.setState((prevstate) => ({
      arr: [...prevstate.arr, formdata],
    }));
  }

  render() {
    return (
      <div id='main'>
        <h1>STUDENT ID CARD</h1><br />
        <div id='second'>
          <div id='box1'>
            <label>FirstName:</label>
            <input type="text" placeholder='Enter Your FirstName' onChange={this.i1} value={this.state.inputvalue1} /><br /><br />
            <label>LastName:</label>
            <input type="text" placeholder='Enter Your LastName' onChange={this.i2} value={this.state.inputvalue2} /><br /><br />
            <label>Reg No:</label>
            <input type="text" placeholder='Enter Your Reg No' onChange={this.i3} value={this.state.inputvalue3} /><br /><br />
            <label>Degree:</label>
            <input type="text" placeholder='Enter Your Degree' onChange={this.i4} value={this.state.inputvalue4} /><br /><br />
            <label>Branch:</label>
            <input type="text" placeholder='Enter Your Branch' onChange={this.i5} value={this.state.inputvalue5} /><br /><br />
          </div>

          <div id='box2'>
            <label>Academic Year:</label>
            <input type="Number" placeholder='Enter Your Academic Year' onChange={this.i6} value={this.state.inputvalue6} /><br /><br />
            <label>Mobile No:</label>
            <input type="Number" placeholder='Enter Your Mobile No' onChange={this.i7} value={this.state.inputvalue7} /><br /><br />
            <label>Email Id:</label>
            <input type="text" placeholder='Enter Your Email Id' onChange={this.i8} value={this.state.inputvalue8} /><br /><br />
            <label>Blood Group:</label>
            <input type="text" placeholder='Enter Your Blood Group' onChange={this.i9} value={this.state.inputvalue9} /><br /><br />
            <label>Address:</label>
            <input type="text" placeholder='Enter Your Address' onChange={this.i10} value={this.state.inputvalue10} /><br />
          </div><br />
        </div>

        <div id='box3'>
          <label>Select Your Passport Size Photo</label><br /><br />
          <input
            id='pic'
            type='file'
            accept='image/*'
            onChange={this.handlePhotoChange}
          /><br /><br />
          {this.state.photoPreview &&
            <img src={this.state.photoPreview} alt="Preview" width="120" height="150" />}
          <br /><br />
          <button type='button' onClick={this.click}>Submit</button>
        </div>

        <div>
          <Child x={this.state.arr} />
        </div>
      </div>
    )
  }
}
