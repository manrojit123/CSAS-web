import ContactImg from "../assets/contact.webp";
import Logo from "../assets/loog.webp";
import Location from "../assets/location.svg";
import Phone from "../assets/phone.svg";
import Email from "../assets/email.svg";
import Websi from "../assets/web.svg";

const Contact = () => {
    return <>
      <section className="content contactContent">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-10 offset-md-2">
          <h1 className="title">Contact Us</h1>
        </div>
        <div className="col-12 col-md-4 offset-md-2 d-md-visible">
          <img src={ContactImg} className="img-fluid" alt="" />
        </div>
        <div className="col-12 col-md-6">
          <img className="logo logo-contact" src={Logo} style={{height:'70px'}} alt="logo"/>
          <h4 className="title title-contact">Center for the Study of Apparent Selves</h4>
          <div className="contact_icon">
            <img src={Location} className="icon" alt=""/><span
              >Nagpokhari, Kathmandu, Nepal</span
            >
          </div>
          <div className="contact_icon">
            <img src={Phone} className="icon" alt="" /><span
              ><a href="tel:+977-9803525252">+977-9803525252</a></span
            >
          </div>
          <div className="contact_icon">
            <img src={Email} className="icon" alt="" /><span
              ><a href="mailto:info@apparentselves.org">info@apparentselves.org</a></span>
          </div>
          <div className="contact_icon">
            <img src={Websi} className="icon" alt="" /><span
              ><a href="www.apparentselves.org">www.apparentselves.org</a></span>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>;
  };
  
  export default Contact;