import React from 'react';
import { connect } from 'react-redux';
import { setState } from './Redux/action';

function Registration({ state, setState }) {
  const [error, setError] = React.useState('All errror displayed here');
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const validate = () => {
    if (state.fname === '') {
      setError(error + 'Please Enter First Name');
    } else {
      setError(error.replaceAll('Please Enter First Name', ''));
    }
    if (state.lname === '') {
      setError(error + 'Please Enter Last Name');
    } else {
      setError(error.replaceAll('Please Enter Last Name', ''));
    }
    if (state.email === '') {
      setError(error + 'Please Enter Email');
    } else {
      setError(error.replaceAll('Please Enter Email', ''));
    }
    if (state.password === '' && state.password !== state.cpassword) {
      setError(error + 'Please Enter Proper Password');
    } else {
      setError(error.replaceAll('Please Enter Proper Password', ''));
    }
  };
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <table>
        <thead>
          <tr>
            <td colSpan={3}>
              <center>Registration Form</center>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Full Name:</td>
            <td>
              <input
                name="fname"
                value={state.fname}
                onChange={onChange}
                placeholder="First Name"
              />
              <input
                name="lname"
                value={state.lname}
                onChange={onChange}
                placeholder="Last Name"
              />
            </td>
            <td rowSpan={4}>
              <span id="error">{error}</span>
            </td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>
              <input
                name="email"
                value={state.email}
                onChange={onChange}
                placeholder="Email"
                type="email"
              />
            </td>
          </tr>
          <tr>
            <td>Password:</td>
            <td>
              <input
                name="password"
                value={state.password}
                onChange={onChange}
                placeholder="Password"
                type="password"
              />
            </td>
          </tr>
          <tr>
            <td>Confirm Password:</td>
            <td>
              <input
                name="cpassword"
                value={state.cpassword}
                onChange={onChange}
                placeholder="Confirm Password"
                type="password"
              />
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <button onClick={() => validate()}>Validate</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { setState })(Registration);
