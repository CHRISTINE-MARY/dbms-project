import React, { Component } from 'react';
import logo from '../images/image0.png';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TYPE: '',
      username: '',
      password: '',
      defaultuser: '',
      defaultpass: '',
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleTypeChange = (event) => {
    this.setState({ TYPE: event.target.value });
  };

  login = () => {
    const { username, password } = this.state;
    
    if (username && password) {
      this.setState({ defaultuser: '', defaultpass: '' });
      console.log(username, password);
      // Add login logic here
    } else {
      if (!username) {
        this.setState({ defaultuser: '*Required' });
      }
      if (!password) {
        this.setState({ defaultpass: '*Required' });
      }
    }
  };

  render() {
    const { TYPE, username, password, defaultuser, defaultpass } = this.state;

    return (
      <div className="login p-10">
        {/* logo */}
        <div className="logo w-40 h-40">
          <img src={logo} alt="Logo" />
        </div>

        <div className="container flex items-center justify-center">
          <div className="box bg-white px-5 py-10 sm:w-1/2 lg:w-1/3 h-auto items-center flex justify-center rounded-md flex-col">
            <h1 className="text-4xl font-black text-gray-600 mb-10">Login</h1>

            {/* dropdown */}
            <div className="w-full">
              <FormControl variant="outlined" className="w-1/2">
                <InputLabel>I'm a</InputLabel>
                <Select value={TYPE} onChange={this.handleTypeChange} label="Type">
                  <MenuItem value="retailer">Retailer</MenuItem>
                  <MenuItem value="supplier">Supplier</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="distributor">Distributor</MenuItem>
                  {/* Add more options here */}
                </Select>
              </FormControl>
            </div>

            {/* input username */}
            <div className="w-5/6 relative mt-6">
              <FontAwesomeIcon icon={faUser} className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-4" />
              <input
                type="text"
                value={username}
                onChange={this.handleUsernameChange}
                className="border-gray-300 border w-full h-10 px-12 rounded-lg focus:border-gray-500 focus:outline-none"
                placeholder="Username"
              />
              <span className="text-red-500 text-xs">{defaultuser}</span>
            </div>

            {/* input password */}
            <div className="w-5/6 relative mt-4">
              <FontAwesomeIcon icon={faLock} className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-4" />
              <input
                type="password"
                value={password}
                onChange={this.handlePasswordChange}
                maxLength={10}
                className="border-gray-300 border w-full h-10 px-12 rounded-lg focus:border-gray-500 focus:outline-none"
                placeholder="Password"
              />
              <span className="text-red-500 text-xs">{defaultpass}</span>
            </div>

            {/* signup */}
            <div className="mt-4 relative w-full">
              <a href="#" className="text-secondary underline text-sm absolute right-2">New retailer? Sign Up</a>
            </div>

            {/* login button */}
            <div className="mt-10">
              <button
                type="button"
                onClick={this.login}
                className="border border-secondary px-16 py-3 text-2xl rounded-full font-bold text-secondary hover:bg-secondary hover:text-white transition-all ease-in duration-75"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
