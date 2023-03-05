import React from "react";

function AboutMe() {
  return (
    <div>
      <img
        className="img2"
        alt="2"
        src="./img/edubackground.jpg"
        style={{ top: "90px", left: "0px" }}
      />
      <div
        className="column is-half my-auto"
        data-aos="fade-right"
        data-aos-duration={1500}
        data-aos-delay={500}
      >
        <div className="column">
          <h1 className="animate1">
            Hello , I'm Nisal <br />
          </h1>
          <h1 className="animate2"> A Freelance Web Designer </h1>
        </div>
      </div>
      <div className="columns is-desktop">
        <div className="column">
          <img className="myimg" alt="myimg" src="./img/iam.png" />
        </div>
      </div>
      <p
        className="text5"
        style={{ position: "absolute", top: "450px", left: "600px" }}
      >
        I’ m a web designer, I have no any experience in working field as a Wed
        designer, However I am learning web designing on the internet. It's
        better to develop my skills. Currently I am working as a member in
        Rotaract Club in University of Colombo School of Computing (UCSC).
      </p>
      <a href="https://www.google.com" target="_blank" rel="noreferrer">
        <div
          className="rect1"
          style={{ position: "absolute", top: "650px", left: "600px" }}
        >
          <p
            className="text3"
            style={{ position: "absolute", top: "17px", left: "50px" }}
          >
            Let's Get Started
          </p>
        </div>
      </a>
      <a href="https://ugvle.ucsc.cmb.ac.lk/" target="_blank" rel="noreferrer">
        <div
          className="rect2"
          style={{ position: "absolute", top: "650px", left: "940px" }}
        >
          <p
            className="text4"
            style={{ position: "absolute", top: "17px", left: "50px" }}
          >
            See My Projects
          </p>
        </div>
      </a>
      <h1
        className="title is-1"
        style={{ position: "absolute", top: "1000px", left: "40px" }}
      >
        About Me
      </h1>
      <div
        className="block"
        style={{
          position: "absolute",
          top: "1100px",
          left: "40px",
          width: "800px",
          textAlign: "justify",
        }}
      >
        I am an undergraduate student studying Information Systems with a focus
        on web development. I have a strong foundation in scripting, and styling
        languages such as PHP, C, JavaScript, HTML, CSS.In addition to that , I
        followed English Course in E-soft Metro Campus. I also completed English
        Language and Literiture Intermediate Level in Aquinas College Higher
        Studies. Further more , I have already completed Business Level 1
        Charted Accountancy Degree in CA Sri Lanka.
        <br /> <br />I have worked on developing and maintaining web
        applications for various personal projects such as my School , Private
        classes.I have no any experience on working in industry but I hope to
        work with your business and I will able to keep my work clearly and
        helpful.
      </div>
      <figure
        className="image is-128x128"
        style={{
          position: "absolute",
          top: "900px",
          left: "900px",
          height: "600px",
          width: "600px",
        }}
      >
        <img className="is-rounded" src="./img/aboutme.jpg" alt="Myimg3" />
      </figure>
    </div>
  );
}

export default AboutMe;
