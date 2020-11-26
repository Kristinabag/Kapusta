import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import ACTION_CREATORS from '../../redux/actions/user';

function SignIn() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  // const user = useSelector((state) => state.user);
  // console.log(user);

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [emailStyle, setEmailStyle] = useState('');
  const [passStyle, setPassStyle] = useState('');
  const [isWrong, setIsWrong] = useState(false);

  const handlerEmail = (e) => {
    setEmail(e.target.value);
    setEmailStyle('');
  };

  const handlerPass = (e) => {
    setPass(e.target.value);
    setPassStyle('');
  };

  const { from } = location.state || { from: { pathname: '/' } };

  const login = () => {
    if (!email.trim()) {
      setEmailStyle('is-invalid');
    }
    if (!pass.trim()) {
      setPassStyle('is-invalid');
    }
    if (email.trim() && pass.trim()) {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      console.log(pass, email);
      let data = {
        email,
        pass,
      };

      data = JSON.stringify(data);

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
      };

      fetch('http://localhost:3000/user/login', requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log('result', result);
          dispatch(ACTION_CREATORS.LOGIN({
            accessToken: result.accessToken,
            refreshToken: result.refreshToken,
          }));
          dispatch(ACTION_CREATORS.SET_NAME(result.name));
          history.replace(from);
        })
        .catch(() => setIsWrong(true));
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <>
      <div className="form">
        <form onSubmit={handlerSubmit} className="signup">
          <legend><h2>Login</h2></legend>
          <input onChange={handlerEmail} value={email} type="email" className={`form-control ${emailStyle}`} placeholder="Введите свой email" />
          <input onChange={handlerPass} value={pass} type="password" className={`form-control ${passStyle}`} placeholder="Введите пароль" />
          <div className="invalid-feedback">
            <div className="alert alert-dismissible alert-danger">
              <strong>О, черт!</strong>
              {' '}
              Заполните, пожалуйста, все поля ...
            </div>
          </div>
          {isWrong && (
          <div className="alert alert-dismissible alert-danger">
            <strong>О, черт!</strong>
            {' '}
            Неправильный email или пароль ...
          </div>
          )}
          <button type="submit" className="btn btn-primary">Войти</button>
        </form>
      </div>
    </>
  );
}

export default SignIn;
