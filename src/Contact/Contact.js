import '../Contact/Contact.scss';
import PageHeader from '../PageHeader/PageHeader.js';

function Contact() {
  return (
    <div className='contact'>
      <PageHeader page='CONTACT'/>
      <div className='email-container'>
        <img className="point-flower" src={`${process.env.PUBLIC_URL}/point-flower.png`} />
        <p>Email me at alexa.vsdb@gmail.com</p>
        <img className="point-flower" src={`${process.env.PUBLIC_URL}/point-flower.png`} />
      </div>
      <div className='link-container'>
        <a className="button" href="">Linkedin</a>
        <a className="button" href="">GitHub</a>
      </div>
    </div>
  );
}

export default Contact;