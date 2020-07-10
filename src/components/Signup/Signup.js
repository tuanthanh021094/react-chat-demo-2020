import { withFormik } from 'formik';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as Yup from 'yup';
import { createUser } from '../../actions';
import './Signup.css';

let Signup = (props) => {
  let [load, setLoad] = useState(true);
  let {
    createUser,
    newUser,
    handleChange
  } = props;
  let {
    name,
    phone,
    email,
    password
  } = props.values;

  let [, setCookie,] = useCookies(['userID']);

  const onSignup = async (e) => {
    e.preventDefault();
    if (!name || !phone || !email || !password) {
      return;
    }
    createUser({
      name,
      phone,
      email,
      password
    });
    setLoad(false);
  }

  // set cookie
  if (newUser.user) {
    var { _id } = newUser.user;
    setCookie('userID', _id);
  }

  // show errors
  if (newUser.errors) {
    var { errors } = newUser;
  }
  return (
    <div className="Signup">
      {
        _id ? (
          <Redirect to="/" />
        ) : (
            <form className="Signup-form">
              <div className="Signup-form-icon">
                <span>
                  <img src="https://image.flaticon.com/icons/svg/2948/2948218.svg" width={64} alt=""/>
                </span>
              </div>
              {
                errors ? (
                  <div className="error">
                    <ul>

                      {
                        errors.map(error => <li key={error}>{error}</li>)
                      }
                    </ul>
                  </div>
                ) : (<></>)
              }
              <div className="Signup-form-group">
                <label>Name</label>
                <input type="text"
                  name="name"
                  value={name}
                  placeholder="Please fill a name"
                  onChange={handleChange}
                />
                {
                  props.errors.name && <p>{props.errors.name}</p>
                }
              </div>
              <div className="Signup-form-group">
                <label>Phone</label>
                <input type="text"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                  placeholder="Please fill a phone"
                />
                {
                  props.errors.phone && <p>{props.errors.phone}</p>
                }
              </div>
              <div className="Signup-form-group">
                <label>Email</label>
                <input type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Please fill a email"
                />
                {
                  props.errors.email && <p>{props.errors.email}</p>
                }
              </div>
              <div className="Signup-form-group">
                <label>Password</label>
                <input type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="Please fill a password"
                />
                {
                  props.errors.password && <p>{props.errors.password}</p>
                }
              </div>
              <div className="Signup-form-button">
                {
                  (load || errors) ? (
                    <button onClick={onSignup}>SignUp</button>
                  ) : (
                      <button onClick={onSignup}><i
                        className="fa fa-refresh fa-spin"
                        style={{ marginRight: "5px" }}
                      />SignUp</button>
                    )
                }
              </div>
              <div className="Signup-form-link">
                <a href="/">Login</a>
              </div>
            </form>
          )
      }
    </div>
  )
}


const mapStateToProp = (state) => ({
  newUser: state.user,

});

const mapDispatchToProp = {
  createUser: createUser,
}

Signup = connect(mapStateToProp, mapDispatchToProp)(Signup);

const FormSignup = withFormik({
  mapPropsToValues() {
    return {
      name: '',
      phone: '',
      email: '',
      password: ''
    }
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required('Username is required')
      .min(4, 'Username must have min 4 characters')
      .max(10, 'Username have max 10 characters'),
    phone: Yup.string()
      .required('Phone is required')
      .min(10, 'Phone must have min 10 characters')
      .max(11, 'Phone must hvae max 11 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Email format is required'),
    password: Yup.string()
      .required('Password is required')

  })
})(Signup);

export default FormSignup;