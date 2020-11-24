import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import ACTION_CREATORS from '../../redux/actions/user';

function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  const handlerEmail = (e) => setEmail(e.target.value);
  const handlerName = (e) => setName(e.target.value);
  const handlerPass = (e) => setPass(e.target.value);

  const { from } = location.state || { from: { pathname: '/' } };

  const registration = () => {
    if (email.trim() && pass.trim()) {
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
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
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
          <legend><h2>Registration</h2></legend>
          <div className="form-group">
            <input onChange={handlerEmail} value={email} type="email" className="form-control" placeholder="Введите свой email" />
            <input onChange={handlerName} value={name} type="text" className="form-control" placeholder="Введите свое имя" />
            <input onChange={handlerPass} value={pass} type="password" className="form-control" placeholder="Придумайте пароль" />
          </div>
          <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
