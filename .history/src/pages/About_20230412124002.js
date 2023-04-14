import AboutImage from '../assets/aboutImg.png';
import BillDune from '../assets/research_bill_dune.png';
import Elizabeth from '../assets/research_elizabeth.png';
import Iman from '../assets/research_iman.png';
import Michael from '../assets/research_michael.png';
import Olaf from "../assets/research_olaf.png";
import Pranab from "../assets/research_pranab.png";
import Richard from "../assets/research_richard.png";
import Thomas from "../assets/research_thomas.png";
import Chokyl from "../assets/board_chokyl.png";
import Piet from "../assets/board_piet.png";
const About = () => {
    return <>
    <section className="content aboutContent">
    <div className="container">
      <div className="row">
        <div className="col-12 col-xl-10 mx-auto ">
          <h1 className="title">About US</h1>
        </div>
        <div className="col-12 col-xl-10 mx-auto ">
          <p>
            CSAS seeks to bring together thought leaders from the spheres of
            biology, Buddhism, education, medicine, psychology, and the sciences
            of information and cognition. We are committed to conduct
            multidisciplinary research comprehensively, critically and
            constructively.
          </p>
        </div>
        <div className="col-12 col-xl-10 mx-auto ">
          <p>
            <img
              src={AboutImage}
              className="img-fluid "
              alt=""
            />
          </p>
        </div>
        <div className="col-12 col-xl-10 mx-auto ">
          <p>
            <span className="fw-600">Comprehensively</span>, since members of CSAS
            collaborate continuously over extended periods of time, seeking to
            engender mutual knowledge transfers, with the view to concrete
            application within science, religion and society-at-large.
          </p>
          <p>
            <span className="fw-600">Critically</span>, because the recognition of
            conceptual opaqueness, operational weaknesses, or mismatches between
            aspiration and practice within one’s own community and its
            interfaces with human society and the global ecosystem remain
            explicit objectives.
          </p>
          <p>
            <span className="fw-600">Constructively</span>, because our aim is to
            describe, critique, and model caring intelligences in ways that map
            to concepts in biology, Buddhism and cognitive science and are
            relevant for the development of AI.
          </p>
        </div>
      </div>
      <div className="row researcher mt-4 mb-2">
        <div className="col-12 col-xl-10 mx-auto  text-center">
          <h2 className="title mb-3">Research Team</h2>
        </div>
        <div className="col-3">
          <img
            src={BillDune}
            className="img-fluid"
            alt="Bill Duane"
          />
          <h5>Bill Duane</h5>
        </div>
        <div className="col-3">
          <img
            src={Elizabeth}
            className="img-fluid"
            alt="Bill Duane"
          />
          <h5>Dr. Elizaveta Solomonova</h5>
        </div>
        <div className="col-3">
          <img
            src={Iman}
            className="img-fluid"
            alt="Bill Duane"
          />
          <h5>Dr. Iman Gurung</h5>
        </div>
        <div className="col-3">
          <img
            src={Michael}
            className="img-fluid"
            alt="Bill Duane"
          />
          <h5>Dr. Michael Levin</h5>
        </div>
        <div className="col-3">
          <img
            src={Olaf}
            className="img-fluid"
            alt="Bill Duane"
          />
          <h5>Dr. Olaf Witkowski</h5>
        </div>
        <div className="col-3">
          <img
            src={Pranab}
            className="img-fluid"
            alt="Bill Duane"
          />
          <h5>Dr. Pranab Das</h5>
        </div>
        <div className="col-3">
          <img
            src={Richard}
            className="img-fluid"
            alt="Bill Duane"
          />
          <h5>Dr. Richard Watson</h5>
        </div>
        <div className="col-3">
          <img
            src={Thomas}
            className="img-fluid"
            alt="Bill Duane"
          />
          <h5>Dr. Thomas Doctor</h5>
        </div>
      </div>

      <div className="row trustees mt-4 mb-2 mx-auto justify-content-center">
        <div className="col-12 col-xl-10 mx-auto  text-center">
          <h2 className="title mb-3">Board of Trustees</h2>
        </div>
        <div className="col-3">
          <img
            src={Iman}
            className="img-fluid"
            alt="Bill Duane"
          />
          <h5>Dr. Iman Gurung</h5>
        </div>
        <div className="col-3">
          <img
            src={Pranab}
            className="img-fluid"
            alt="Bill Duane"
          />
          <h5>Dr. Pranab Das</h5>
        </div>
        <div className="col-3">
          <img
            src={Thomas}
            className="img-fluid"
            alt="Bill Duane"
          />
          <h5>Dr. Thomas Doctor</h5>
        </div>
      </div>

      <div className="row board mt-4 mb-2 mx-auto ">
        <div className="col-12 col-xl-10 mx-auto  text-center">
          <h2 className="title mb-3">Advisory Board</h2>
        </div>
        <div className="col-6 mx-auto">
          <div className="row">
             <div className="col-6 mx-auto text-center">
          <img
            src={Chokyl}
            className="img-fluid"
            alt="Bill Duane"
          />
          <h5>Chökyi Nyima Rinpoche</h5>
          <span className="text-center d-block">Lineage Holder in the Kagyu and</span>
          <span className="text-center d-block">Nyingma schools of </span>
          <span className="text-center d-block">Himalayan Buddhism</span>
        </div>
       
        <div className="col-6 mx-auto text-center">
          <img
            src={Piet}
            className="img-fluid"
            alt="Bill Duane"
          />
          <h5>Dr. Thomas Doctor</h5>
          <span className="text-center d-block">Professor of Astrophysics,</span>
            <span className="text-center d-block">    Head of the Program in Interdisciplinary Studies, Institute for Advanced Study, Princeton</span>
        </div>
          </div>
        </div>
       
      </div>
    </div>
  </section>
    
    </>;
  };
  
  export default About;