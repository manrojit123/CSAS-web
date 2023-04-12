// import AboutImage from '../assets/aboutImg.png';
import BillDune from '../assets/research_bill_dune.png';
import Elizabeth from '../assets/research_elizabeth.png';
import Iman from '../assets/research_iman.png';
import Michael from '../assets/research_michael.png';
import Olaf from "../assets/research_olaf.png";
import Pranab from "../assets/research_pranab.png";
import Richard from "../assets/research_richard.png";
import Thomas from "../assets/research_thomas.png";
// import Chokyl from "../assets/board_chokyl.png";
// import Piet from "../assets/board_piet.png";
const Research = () => {
  return (
    <>
      <section class="content aboutContent">
        <div class="container">
          <div class="row researcher mt-4 mb-2">
            <div class="col-10 mx-auto text-center">
              <h2 class="title mb-3">Research Team</h2>
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
        </div>
      </section>
    </>
  );
};

export default Research;
