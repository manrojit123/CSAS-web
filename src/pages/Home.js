import React, { Component } from "react";
import HomeImage from "../assets/homeImage.png";
import StartImage from "../assets/start.png";
import SeeMore from "../assets/seemorebtn.png";
import GifAnimation from "../assets/video.gif";

class Home extends Component {
  state = {
    isActive: false,
  };

  componentDidMount() {
    document.body.style.overflow = "hidden";
  }


  toggleActive() {
    this.setState({isActive: !this.isActive })
    document.body.style.overflow = "scroll";
    setTimeout(() => {
      document.getElementById("gifimage").classList.add("hidegif");
    }, 3200);
  }

  render() {
    
    return (
      <>
        <section className="content homeContent">
          <div id="mainOverlay">
            <div
              className={
                this.state.isActive ? "active start-overlay" : "start-overlay"
              }
            >
              <img src={StartImage} alt="" className="overlay-image" />
              <img
                src={SeeMore}
                alt=""
                className="start-overlay-button"
                onClick={() => this.toggleActive()}
              />
            </div>
          </div>

          <div className="video-overlay" id="gifimage">
            <img src={GifAnimation} alt="Your GIF" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="title">Welcome to CSAS</h1>
              </div>
              <div className="col-12">
                <img src={HomeImage} className="homeImage" alt="" />
                <p>
                  The Center for the Study of Apparent Selves (CSAS) is an
                  international research institute located in Kathmandu, Nepal,
                  that serves as a hub for interdisciplinary research and
                  teaching across the world.
                </p>
                <p>
                  CSAS seeks to develop, study, and test models of intelligence
                  that are ethically and aesthetically fulfilling and can be
                  applied across a broad range of current and emerging
                  substrates.
                </p>
                <p>
                  Through collaborative research, grant awarding, teaching,
                  outreach and public engagement, CSAS brings together projects,
                  institutions, and individuals. The projects that we lead or
                  participate in can be seen to converge in a vision of humans
                  as interconnected, transformative, and dynamic
                  beings—profoundly capable of care. Inspired and informed by
                  this emergent vision, CSAS seeks to cultivate understanding
                  of, and means for, human flourishing that are applicable to a
                  broad range of societal and environmental contexts—health,
                  education, peacebuilding, caring for the biosystem, etc.
                </p>
                <p>
                  As a research network with global participation and a physical
                  presence in Kathmandu, Nepal, CSAS is also inspired by the
                  Himalayas—a region that since ancient times has been a
                  fountainhead of spiritual and philosophical traditions, many
                  of which are still studied and practiced to this day. Yet this
                  region is also extremely vulnerable to global warming and
                  environmental degradation (often leading to scarcity of
                  resources and communal conflict) as well as geopolitical
                  clashes of interest that impact billions in South and East
                  Asia, and so also the world at large. In this way, our
                  immediate environment abounds with rich resources for human
                  flourishing, just as it presents powerful challenges. Our aim
                  is then to learn from and respond to our environment—with
                  scientific rigor and spiritual depth.
                </p>
              </div>
              <div className="col-6"></div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
