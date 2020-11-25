import emailjs from 'emailjs-com';
import './style.css';

function Contacts() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3uqdw1z', 'template_cihblpo', e.target, `${process.env.REACT_APP_API_EMAILJS}`)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <div className="contacts">
      <h1>Contact Us</h1>
      <form className="d-flex flex-column justify-content-center" onSubmit={sendEmail}>
        <input type="text" className="form-control my-1" placeholder="Введите имя ..." name="name" />
        <input type="email" className="form-control my-1" placeholder="Email ..." name="email" />
        <input type="text" className="form-control my-1" placeholder="Subject ..." name="subject" />
        <textarea className="form-control my1" rows="4" name="message" placeholder="Type your message here ..." />
        <button type="submit" className="btn btn-primary my-1">Submit</button>
      </form>
    </div>
  );
}

export default Contacts;
