import Head from "next/head";
import Image from "next/image";
import PSDCarousel from "./PSDCarousel";
import MTPTCarousel from "./MTPTCarousel";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tagpros</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/TagprosEdLogoOnly.webp" />
      </Head>
      <main className="">
        <div>
          <section className="hero1Container">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <h1 className="hero1H1">Supplemental learning for students.</h1>
              <h1 className="hero1H12">Career advancement for teachers.</h1>
            </div>
            <div className="hero1ButtonHolder">
              <div className="hero1ButtonContainer">
                <button className="hero1Button">Post School Jobs</button>
                <button className="hero1Button">
                  Professional Development
                </button>
              </div>
              <div className="hero1ButtonContainer">
                <button className="hero1Button">Career Opportunities</button>
                <button className="hero1Button">Find Kid's Classes</button>
              </div>
            </div>
          </section>
          <section className="gabAIContainer">
            <div className="gabAIBackground">
              <div className="gabAIContentMobile">
                <div className="gabAIContentMobileHand">
                  <b
                    className="gabAIText ms-2 mt-3"
                    style={{
                      letterSpacing: "2px",
                      paddingLeft: "4vw",
                      paddingTop: "4vw",
                    }}
                  >
                    IN DEVELOPMENT
                  </b>
                  <img
                    className="gabAILogo ms-2"
                    src="/GabAI-LogoTrim.webp"
                    style={{ paddingLeft: "4vw" }}
                  />
                  <p
                    className="gabAIText  ms-2 mb-0"
                    style={{ paddingLeft: "4vw" }}
                  >
                    We believe education should keep up with the speed of
                    technological advancements.
                  </p>
                </div>

                <p
                  className="gabAIText  ms-2"
                  style={{ paddingLeft: "4vw", paddingBottom: "4vw" }}
                >
                  One of our upcoming projects is the use of Artificial
                  Intelligence in developing curriculums and lesson plans, to
                  enhance teacher and student learning.
                </p>
              </div>
              <div className="gabAIHandContainer">
                <div className="gabAIHand">
                  <div className="gabAIContent">
                    <b
                      className="gabAIText  ms-5"
                      style={{ letterSpacing: "5px" }}
                    >
                      IN DEVELOPMENT
                    </b>
                    <img
                      className="gabAILogo ms-5"
                      src="/GabAI-LogoTrim.webp"
                    />
                    <p className="gabAIText ms-5">
                      We believe education should keep up with the speed of
                      technological advancements. One of our upcoming projects
                      is the use of Artificial Intelligence in developing
                      curriculums and lesson plans, to enhance teacher and
                      student learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="nrpContainer">
            <div className="backgroundImage">
              <div className="nrpMobileHeader">
                NATIONAL REMEDIATION PROGRAM 2023
              </div>
              <div className="imageOverlay">
                <div className="nrpTextbox">
                  <div className="nrpHeader">
                    NATIONAL REMEDIATION <br /> PROGRAM 2023
                  </div>
                  <div className="nrpText">
                    <p>
                      For our nonprofit organization, we aim to provide quality
                      high-dosage tutoring to students in public schools around
                      the Philippines, in an effort to combat the learning loss
                      brought by the pandemic.
                    </p>
                  </div>
                  <div className="linkButton">
                    <button className="linkText">Visit Tagpros.org</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="Hero1Container"></section>
          <section className="aboutUsContainer">
            <div className="d-flex flex-column align-items-center justify-content-center w-100 h-100">
              <div className="aboutUsBackground">
                <div className="aboutUsWave">
                  <div className="row aboutUsContent">
                    <div className="col" style={{ paddingLeft: "8vw" }}>
                      <h1>ABOUT US</h1>
                      <div className="borderline"></div>
                      <p className="aboutUsText">
                        Tagpros is a K-12 supplemental learning and recruitment
                        platform. We aim to connect students with expect
                        teachers worlwide, and provide local and international
                        career opportunities to teachers, through our
                        partnerships with school districts and various
                        institutions around the world.
                      </p>
                      <button className="aboutUsButton">Learn More</button>
                    </div>
                    <div
                      className="col ytContainer"
                      style={{ paddingRight: "3vw" }}
                    >
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/NraS2OpfHO0?si=Pxo65yArlj2iNm3b"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="ytContainerMobile">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/NraS2OpfHO0?si=Pxo65yArlj2iNm3b"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="carouselContainer">
                      <div className="row">
                        <div
                          className="col"
                          style={{ paddingLeft: "7vw", paddingTop: "2vw" }}
                        >
                          <PSDCarousel />
                        </div>

                        <div className="col" style={{ paddingRight: "4vw" }}>
                          <MTPTCarousel />
                        </div>
                      </div>
                    </div>
                    <div className="carouselContainerMobile">
                      <PSDCarousel />
                    </div>
                    <div className="carouselContainerMobile">
                      <MTPTCarousel />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
