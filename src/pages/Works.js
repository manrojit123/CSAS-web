import React, { useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
import Research from "../assets/work_research.png";
import Workshop from "../assets/work_workshop.png";
import Education from "../assets/work_education.png";
import Engagement from "../assets/work_public.png";
import Cross from "../assets/cross.svg";

import slide1 from "../assets/slider/1.png";
import slide2 from "../assets/slider/2.png";
import slide3 from "../assets/slider/3.png";

import slide4 from "../assets/slider/4.png";
import slide5 from "../assets/slider/5.png";
import slide6 from "../assets/slider/6.png";

import slide7 from "../assets/slider/7.png";
import slide8 from "../assets/slider/8.png";
import slide9 from "../assets/slider/9.png";

import slide10 from "../assets/slider/10.png";
import slide11 from "../assets/slider/11.png";
import slide12 from "../assets/slider/12.png";
import slide13 from "../assets/slider/13.png";
import slide14 from "../assets/slider/14.png";
import slide15 from "../assets/slider/15.png";
import slide16 from "../assets/slider/16.png";

import Prev from "../assets/prev.svg";
import Next from "../assets/next.svg";


const Works = () => {
  const [status, setStatus] = useState("");

  const toggleBox = (e) => {
    setStatus(e);
  };

  return (
    <>
      <section className="content aboutContent">
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-10 mx-auto ">
              <h1 className="title">Our Works</h1>
            </div>
            <div className="col-12 col-xl-10 mx-auto ">
              <p>
                Brought on by rapid advances in science and technology, novel
                and hybrid modes of being and engagement are becoming
                increasingly available to us, and so customary notions of
                "human," "animal," and "machine" are turning increasingly opaque
                or impractical: not for abstract philosophical reasons, but
                simply given the profound entanglement between human activities,
                scientific advances, and the ubiquitous influence of technology.
                As seemingly fundamental ideas about identity, meaning, and
                responsibility are in this way called into question, if not
                outright undermined, by the novel situations that we find
                ourselves in, it seems worth our while to consider a broad
                cross-cultural array of human systems for meaning and
                fulfilment.
              </p>
            </div>
            <div className="col-12 col-xl-10 mx-auto text-center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/jtta_5rGsHU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col-12 col-xl-10 mx-auto">
              <p>
                CSAS draws inspiration from Buddhist models of cognitive and
                ethical transformation, taking the idea of the Bodhisattva as
                the starting point. Bodhisattvas are traditionally conceived as
                evolutionary models of caring and insightful engagement that
                transcend the boundaries of species and understand organisms and
                their environments in terms of interdependence and mutual
                integration. We suggest that the frameworks of AI, cognitive
                science, developmental biology, and the Bodhisattva idea can
                serve as touchstones for each other as they carry common or
                compatible aspirations and concerns.
              </p>
            </div>
          </div>

          <div className="row worksTypes mt-4 mb-2">
            <div className="col-3" onClick={() => toggleBox("research")}>
              <div>
                <img src={Research} className="img-fluid" alt="Bill Duane" />
                <h5>Research</h5>
              </div>
            </div>
            <div className="col-3" onClick={() => toggleBox("workshop")}>
              <div>
                <img src={Workshop} className="img-fluid" alt="Bill Duane" />
                <h5>Workshop & Seminars</h5>
              </div>
            </div>
            <div className="col-3" onClick={() => toggleBox("education")}>
              <div>
                <img src={Education} className="img-fluid" alt="Bill Duane" />
                <h5>Education</h5>
              </div>
            </div>
            <div className="col-3" onClick={() => toggleBox("engagement")}>
              <router-link to="/engagement">
                <img src={Engagement} className="img-fluid" alt="Bill Duane" />
                <h5>Public Engagement</h5>
              </router-link>
            </div>
          </div>
          <div className="row workTypesDetails">
            {status === "research" && (
              <div className="col-12">
                Through interdisciplinary study of Buddhist philosophy and
                contemporary science, we seek to conduct research that brings
                understudied Buddhist ideas to a broader scientific community.
                Likewise, we wish to bring the latest ideas in AI, neuroscience,
                evolutionary biology, and regenerative medicine to the attention
                of Buddhist scholars. This will enrich both sides: science
                (improving its application for human flourishing) and Buddhist
                traditions (which have a long history of adaptive value for
                human well-being and fulfilment that can be integrated with
                fundamental scientific discoveries).
                <section className="container ourResearches">
                  <section className="row">
                    <section className="col-8 mx-auto">
                      <h2 className="title mt-4">Our Researches</h2>
                      <ul>
                        <li>
                          Doctor, Thomas. 2020. “True Love for the Artificial?
                          Toward the Possibility of Bodhisattva Relations with
                          Machines.” Journal of Buddhist Ethics vol. 27 2020.
                        </li>
                        <li>
                          Doctor, Thomas, Solomonova, Elizaveta, Duane, Bill,
                          Witkowski, Olaf. 2021. "Can Being Aware of the
                          Illusion of Self Augment an Agent's Affordances:
                          Integrating Buddhist Philosophy, Cognitive Science,
                          and Artificial Life." Proceedings of the ALIFE 2021:
                          The 2021 Conference on Artificial Life. ALIFE 2021:
                          The 2021 Conference on Artificial Life.
                          <a
                            target="_blank" rel="noreferrer"
                            href="https://doi.org/10.1162/isal_a_00465"
                          >
                            https://doi.org/10.1162/isal_a_00465
                          </a>
                        </li>
                        <li>
                          Doctor, Thomas. “Can Being Aware of the Illusion of
                          Self Augment an Agent’s Affordances: Integrating
                          Buddhist Philosophy, Cognitive Science, and Artificial
                          Life”. Video recorded in 2021. ALIFE 2021: The 2021
                          Conference on Artificial Life.
                        </li>
                        <li>
                          CSAS-edited papers presented at CSAS Special Session
                          at ALIFE 2021: “Illusions of Self: Beyond Human,
                          Animal, and Robot”:
                          <ul>
                            <li>
                              Gershenson, Carlos. 2021. “On the Scales of
                              Selves: Information, Life, and Buddhist
                              Philosophy”. Proceedings of the ALIFE 2021: The
                              2021 Conference on Artificia Life. ALIFE 2021: The
                              2021 Conference on Artificial Life. doi:
                              <a
                                target="_blank" rel="noreferrer"
                                href="https://doi.org/10.1162/isal_a_00402"
                              >
                                https://doi.org/10.1162/isal_a_00402
                              </a>
                              .
                            </li>
                            <li>
                              Lopes, Ana Christina. 2021. “Monks, Labs, Cyborgs:
                              the Plasticity of Personhood in Tibetan Buddhism”.
                              Proceedings of the ALIFE 2021: The 2021 Conference
                              on Artificial Life. ALIFE 2021: The 2021
                              Conference on Artificial Life. doi:
                              <a
                                target="_blank" rel="noreferrer"
                                href="https://doi.org/10.1162/isal_a_00455"
                              >
                                https://doi.org/10.1162/isal_a_00455
                              </a>
                              .
                            </li>
                            <li>
                              Siqueiros, José. 2021. “You, Robot: Empathy in a
                              Hybrid World”. Proceedings of the ALIFE 2021: The
                              2021 Conference on Artificial Life. ALIFE 2021:
                              The 2021 Conference on Artificial Life. doi:
                              <a
                                target="_blank" rel="noreferrer"
                                href="https://doi.org/10.1162/isal_a_00465"
                              >
                                https://doi.org/10.1162/isal_a_00465
                              </a>
                              .
                            </li>
                          </ul>
                        </li>
                        <li>
                          Doctor, Thomas, Olaf Witkowski, Elizaveta Solomonova,
                          Bill Duane, and Michael Levin. 2022. “Biology,
                          Buddhism, and AI: Care as the Driver of Intelligence”.
                          Entropy 24, no. 5: 710.
                          <a
                            target="_blank" rel="noreferrer"
                            href="https://doi.org/10.3390/e24050710"
                          >
                            https://doi.org/10.3390/e24050710
                          </a>
                          .
                        </li>
                        <li>
                          Witkowski, Olaf, Schwitzgebel, Eric. 2022 “Ethics of
                          Artificial Life: The Moral Status of Life as It Could
                          Be.” Proceedings of the ALIFE 2022: The 2022
                          Conference on Artificial Life. ALIFE 2022: The 2022
                          Conference on Artificial Life.
                          <a
                            target="_blank" rel="noreferrer"
                            href="https://doi.org/10.1162/isal_a_00531"
                          >
                            https://doi.org/10.1162/isal_a_00531
                          </a>
                          .
                        </li>
                        <li>
                          Witkowski, Olaf, Thomas Doctor, Elizaveta Solomonova,
                          Bill Duane, and Michael Levin. 2023. “Towards an
                          Ethics of Autopoietic Technology: Stress, Care, and
                          Intelligence.” PsyArXiv. February 16.
                          doi:10.31234/osf.io/pjrd2.
                        </li>
                      </ul>
                    </section>
                  </section>
                </section>
              </div>
            )}

            {status === "engagement" && <div>
              From time to time, we organise Workshops and seminars where we bring together Scientists and Buddhist scholars/practiciner can share their ideas. Recently, we have organised “CARE as Driver for Intelligent” workshop (Pictures of Workshop).
              </div>}

            {status === "education" && (
              <div>
                CSAS is developing a Science-Buddhism compendium that could
                become an important resource for the development of mutually
                recognizable curricula in the secular Nepalese school system and
                the country's Buddhist and Vedic monastic schools. As Nepal's
                societal structures transform, the traditional scholarly
                institutions, which have for many centuries focused almost
                exclusively on religious learning, must change and adjust to the
                demands of contemporary society. Thus, when today an eight year
                old girl or boy enters a traditional monastic school system,
                they will over the following years be charged with learning and
                appropriating the contents of an all-round, secular
                education—along with the vast and complex philosophical and
                spiritual learning that is contained in the traditional models.
                For anyone but the rare genius, such a feat is impossible.
                Therefore, in order for the knowledge and insights that are
                carried by traditional Himalayan educational models to survive
                and remain accessible in the world, it becomes imperative that
                we rethink and restructure the contents of both traditional and
                contemporary educational systems, such that, ideally, the two
                can shine a dynamic light on one another. Curriculum Development
              </div>
            )}

            {status === "workshop" && (
              <>
                <div className="popupbox d-flex align-items-center justify-content-center">
                  
                  <span class="cross" onClick={() => toggleBox("")}><img src={Cross} alt=""/></span>
                  
                  <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="7" aria-label="Slide 8"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="8" aria-label="Slide 9"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="9" aria-label="Slide 10"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="10" aria-label="Slide 11"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="11" aria-label="Slide 12"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="12" aria-label="Slide 13"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="13" aria-label="Slide 14"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="14" aria-label="Slide 15"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="15" aria-label="Slide 16"></button>
                    

                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active"><img src={slide1} class="d-block w-100" alt="..."/></div>
                    <div class="carousel-item "><img src={slide2} class="d-block w-100" alt="..."/></div>
                    <div class="carousel-item "><img src={slide3} class="d-block w-100" alt="..."/></div>
                    <div class="carousel-item "><img src={slide4} class="d-block w-100" alt="..."/></div>
                    <div class="carousel-item "><img src={slide5} class="d-block w-100" alt="..."/></div>
                    <div class="carousel-item "><img src={slide6} class="d-block w-100" alt="..."/></div>
                    <div class="carousel-item "><img src={slide7} class="d-block w-100" alt="..."/></div>
                    <div class="carousel-item "><img src={slide8} class="d-block w-100" alt="..."/></div>
                    <div class="carousel-item "><img src={slide9} class="d-block w-100" alt="..."/></div>
                    <div class="carousel-item "><img src={slide10} class="d-block w-100" alt="..."/></div>
                    <div class="carousel-item "><img src={slide11} class="d-block w-100" alt="..."/></div>
                    <div class="carousel-item "><img src={slide12} class="d-block w-100" alt="..."/></div>
                    <div class="carousel-item "><img src={slide13} class="d-block w-100" alt="..."/></div>
                    <div class="carousel-item "><img src={slide14} class="d-block w-100" alt="..."/></div>
                    <div class="carousel-item "><img src={slide15} class="d-block w-100" alt="..."/></div>
                    <div class="carousel-item "><img src={slide16} class="d-block w-100" alt="..."/></div>

                    
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                   <img src={Prev}/>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <img src={Next}/>
                  </button>
                </div></div>
                
                
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
