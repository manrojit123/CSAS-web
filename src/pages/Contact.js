import ContactImg from "../assets/contact.png";
import Logo from "../assets/loog.png";
import Location from "../assets/location.svg";
import Phone from "../assets/phone.svg";
import Email from "../assets/email.svg";
import Websi from "../assets/web.svg";

const Contact = () => {
    return <>
      <section className="content contactContent">
    <div className="container">
      <div className="row">
        <div className="col-10 offset-2">
          <h1 className="title">Contact Us</h1>
        </div>
        <div className="col-4 offset-2">
          <img src={ContactImg} className="img-fluid" alt="" />
        </div>
        <div className="col-6">
          <img className="logo" src={Logo} style={{height:'70px'}} alt="logo"/>
          <h4 className="title">Center for the Study of Apparent Selves</h4>
          <div className="contact_icon">
            <img src={Location} className="icon" alt=""/><span
              >Nagpokhari, Kathmandu, Nepal</span
            >
          </div>
          <div className="contact_icon">
            <img src={Phone} className="icon" alt="" /><span
              >+977-9803525252</span
            >
          </div>
          <div className="contact_icon">
            <img src={Email} className="icon" alt="" /><span
              >info@apparentselves.org</span
            >
          </div>
          <div className="contact_icon">
            <img src={Websi} className="icon" alt="" /><span
              >www.apparentselves.org</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
    </>;
  };
  
  export default Contact;