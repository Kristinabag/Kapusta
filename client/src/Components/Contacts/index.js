import { useState } from 'react';
import emailjs from 'emailjs-com';
import './style.css';

function Contacts() {
  const [name, setName] = useState('');
  const [nameStyle, setNameStyle] = useState('');
  const [email, setEmail] = useState('');
  const [emailStyle, setEmailStyle] = useState('');
  const [subject, setSubject] = useState('');
  const [subjectStyle, setSubjectStyle] = useState('');
  const [message, setMessage] = useState('');
  const [messageStyle, setMessageStyle] = useState('');

  const nameHandler = (e) => {
    setName(e.target.value);
    setNameStyle('');
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
    if (name.trim() && email.trim() && subject.trim() && message.trim()) {
      emailjs.sendForm('service_3uqdw1z', 'template_cihblpo', e.target, `${process.env.REACT_APP_API_EMAILJS}`)
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      e.target.reset();
    }
  };

  return (
    <div className="contacts">
      <h1>Contact Us</h1>
      <form className="d-flex flex-column justify-content-center" onSubmit={sendEmail}>
        <input onChange={nameHandler} value={name} type="text" className={`form-control ${nameStyle} my-1`} placeholder="Введите имя ..." name="name" />
        <input onChange={emailHandler} value={email} type="email" className={`form-control ${emailStyle} my-1`} placeholder="Электронная почта ..." name="email" />
        <input onChange={subjectHandler} value={subject} type="text" className={`form-control ${subjectStyle} my-1`} placeholder="Тема ..." name="subject" />
        <textarea onChange={messageHandler} value={message} className={`form-control ${messageStyle} my-1`} rows="4" name="message" placeholder="Введите сообщение ..." />
        <div className="invalid-feedback">Пожалуйста, заполните все поля ...</div>
        <button type="submit" className="btn btn-primary my-1">Submit</button>
      </form>
    </div>
  );
}

export default Contacts;
