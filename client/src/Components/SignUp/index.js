import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import ACTION_CREATORS from '../../redux/actions/user';
import style from './style.module.css';

function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  /* for handling empty inputs with "invalid input" style - ref: https://bootswatch.com/sketchy/ */
  const [emailStyle, setEmailStyle] = useState('');
  const [nameStyle, setNameStyle] = useState('');
  const [passStyle, setPassStyle] = useState('');

  /* for handling existing email error */
  const [existingEmail, setExistingEmail] = useState(false);

  const handlerEmail = (e) => {
    setEmail(e.target.value);
    setEmailStyle('');
    if (existingEmail) setExistingEmail(false);
  };
  const handlerName = (e) => {
    setName(e.target.value);
    setNameStyle('');
  };
  const handlerPass = (e) => {
    setPass(e.target.value);
    setPassStyle('');
  };

  const { from } = location.state || { from: { pathname: '/' } };

  const registration = () => {
    if (!email.trim()) {
      setEmailStyle('is-invalid');
    }
    if (!name.trim()) {
      setNameStyle('is-invalid');
    }
    if (!pass.trim()) {
      setPassStyle('is-invalid');
    }
    if (email.trim() && pass.trim() && name.trim()) {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      let data = {
        email,
        name,
        pass,
      };

      data = JSON.stringify(data);

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
      };

      fetch('http://localhost:3000/user/registration', requestOptions)
        .then((response) => {
          console.log('response.status', response.status);
          if (response.status === 409) {
            console.log('got in here');
            setExistingEmail(true);
            setEmailStyle('is-invalid');
            return;
          }
          response.json();
        })
        .then((result) => {
          // console.log(result);
          dispatch(ACTION_CREATORS.LOGIN({
            accessToken: result.accessToken,
            refreshToken: result.refreshToken,
          }));
          dispatch(ACTION_CREATORS.SET_NAME(result.name));
          history.replace(from);
        })
        .catch((error) => console.log('error', error));
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    registration();
    console.log('Registration');
  };

  return (
    <>
      <div className="form">
        <form onSubmit={handlerSubmit} className="signup">
          <input onChange={handlerEmail} value={email} type="email" className={`${emailStyle} form-control`} placeholder="Введите свой email" />
          {existingEmail && <div className={`${style.existingEmail} invalid-feedback`}>Sorry, the email already exists. Try another?</div>}
          <input onChange={handlerName} value={name} type="text" className={`${nameStyle} form-control`} placeholder="Введите свое имя" />
          <input onChange={handlerPass} value={pass} type="password" className={`${passStyle} form-control`} placeholder="Придумайте пароль" />
          {!existingEmail && (
          <div className="invalid-feedback">
            <div className="alert alert-dismissible alert-danger">
              <strong>О, черт!</strong>
              {' '}
              Заполните, пожалуйста, все поля ...
            </div>
          </div>
          )}
          <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
