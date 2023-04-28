// import AboutImage from '../assets/aboutImg.png';
import BillDune from '../assets/research_bill_dune.webp';
import Elizabeth from '../assets/research_elizabeth.webp';
import Iman from '../assets/research_iman.webp';
import Michael from '../assets/research_michael.webp';
import Olaf from "../assets/research_olaf.webp";
import Pranab from "../assets/research_pranab.webp";
import Richard from "../assets/research_richard.webp";
import Thomas from "../assets/research_thomas.webp";
// import Chokyl from "../assets/board_chokyl.webp";
// import Piet from "../assets/board_piet.png";
const Research = () => {
  return (
    <>
      <section className="content aboutContent">
        <div className="container">
          <div className="row researcher mt-4 mb-2">
            <div className="col-10 mx-auto text-center">
              <h2 className="title mb-3">Research Team</h2>
            </div>
            <div className="col-6 col-sm-5 mx-sm-auto col-md-3">
          <img
            src={BillDune}
            className="img-fluid"
            alt="Bill Duane"
          />
          <h5>Bill Duane</h5>
        </div>
        <div className="col-6 col-sm-5 mx-sm-auto col-md-3">
          <img
            src={Elizabeth}
            className="img-fluid"
            alt="Bill Duane"
          />
          <h5>Dr. Elizaveta Solomonova</h5>
        </div>
        <div className="col-6 col-sm-5 mx-sm-auto col-md-3">
          <img
            src={Iman}
            className="img-fluid"
            alt="Bill Duane"
          />
          <h5>Dr. Iman Gurung</h5>
        </div>
        <div className="col-6 col-sm-5 mx-sm-auto col-md-3">
          <img
            src={Michael}
            className="img-fluid"
            alt="Bill Duane"
          />
          <h5>Dr. Michael Levin</h5>
        </div>
        <div className="col-6 col-sm-5 mx-sm-auto col-md-3">
          <img
            src={Olaf}
            className="img-fluid"
            alt="Bill Duane"
          />
          <h5>Dr. Olaf Witkowski</h5>
        </div>
        <div className="col-6 col-sm-5 mx-sm-auto col-md-3">
          <img
            src={Pranab}
            className="img-fluid"
            alt="Bill Duane"
          />
          <h5>Dr. Pranab Das</h5>
        </div>
        <div className="col-6 col-sm-5 mx-sm-auto col-md-3">
          <img
            src={Richard}
            className="img-fluid"
            alt="Bill Duane"
          />
          <h5>Dr. Richard Watson</h5>
        </div>
        <div className="col-6 col-sm-5 mx-sm-auto col-md-3">
          <img
            src={Thomas}
            className="img-fluid"
            alt="Bill Duane"
          />
          <h5>Dr. Thomas Doctor</h5>
        </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Research;
