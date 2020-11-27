/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import style from './style.module.css';
import ModalContacts from '../ModalContacts';

function Contacts() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  /* to set invalid style for empty inputs */
  const [nameStyle, setNameStyle] = useState('');
  const [emailStyle, setEmailStyle] = useState('');
  const [subjectStyle, setSubjectStyle] = useState('');
  const [messageStyle, setMessageStyle] = useState('');

  /* for Modal */
  const [isOpenModal, setIsOpenModal] = useState(false);

  const nameHandler = (e) => {
    setName(e.target.value);
    setNameStyle(''); // when we start typing we remove invalid style
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
    setEmailStyle('');
  };
  const subjectHandler = (e) => {
    setSubject(e.target.value);
    setSubjectStyle('');
  };
  const messageHandler = (e) => {
    setMessage(e.target.value);
    setMessageStyle('');
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setNameStyle('is-invalid');
    }
    if (!email.trim()) {
      setEmailStyle('is-invalid');
    }
    if (!subject.trim()) {
      setSubjectStyle('is-invalid');
    }
    if (!message.trim()) {
      setMessageStyle('is-invalid');
    }
    /* success and sending an email to kapusta.bukran@gmail.com */
    if (name.trim() && email.trim() && subject.trim() && message.trim()) {
      emailjs.sendForm('service_3uqdw1z', 'template_cihblpo', e.target, `${process.env.REACT_APP_API_EMAILJS}`)
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsOpenModal(true);
    }
  };

  /* when click appears other than modal window */
  const overlayHandlerClick = () => {
    setIsOpenModal(false);
  };

  /* on Escape we can exit modal window */
  const overlayHandlerKey = (e) => {
    if (e.key === 'Escape') {
      setIsOpenModal(false);
    }
  };

  /* adding eventlistener for espace key press */
  useEffect(() => {
    document.addEventListener('keyup', overlayHandlerKey, false);
    /* removing listener after leaving this component */
    return () => {
      document.removeEventListener('keyup', overlayHandlerKey, false);
    };
  }, []);
  return (
    <>
      {/* modal window */}
      {isOpenModal && (
        <>
          <div onClick={overlayHandlerClick} className={style.overlay} />
          <ModalContacts>
            <div className={`${style.modal} alert alert-dismissible alert-success`}>
              <button onClick={overlayHandlerClick} type="button" className="close" data-dismiss="alert">&times;</button>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <strong>Сообщение успешно отправлено!</strong>
                <Link to="/" className="btn btn-success mt-2" type="button">На главную</Link>
              </div>
            </div>
          </ModalContacts>
        </>
      )}
      {/* contact component itself */}
      <div className={style.contacts}>
        {/* <h1>Связаться с нами</h1> */}
        <form className="d-flex flex-column justify-content-center form" onSubmit={sendEmail}>
          <input onChange={nameHandler} value={name} type="text" className={`form-control ${nameStyle} my-1`} placeholder="Введите имя ..." name="name" />
          <input onChange={emailHandler} value={email} type="email" className={`form-control ${emailStyle} my-1`} placeholder="Электронная почта ..." name="email" />
          <input onChange={subjectHandler} value={subject} type="text" className={`form-control ${subjectStyle} my-1`} placeholder="Тема ..." name="subject" />
          <textarea onChange={messageHandler} value={message} className={`form-control ${messageStyle} my-1`} rows="4" name="message" placeholder="Введите сообщение ..." />
          {/* empty input error window popup */}
          <div className="invalid-feedback">
            <div className="alert alert-dismissible alert-danger">
              <strong>О, черт!</strong>
              {' '}
              Заполните, пожалуйста, все поля ...
            </div>
          </div>
          <button type="submit" className="btn btn-primary my-1">Отправить</button>
        </form>
      </div>
    </>
  );
}

export default Contacts;
