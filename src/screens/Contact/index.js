import React from "react";

function Contact() {
  return (
    <div>
      <div>
        <h1
          className="title is-1"
          style={{
            position: "absolute",
            top: "2960px",
            left: "480px",
            color: "black",
          }}
        >
          &lt;&lt;&lt;&lt; CONTACT &gt;&gt;&gt;&gt;
        </h1>
      </div>
      <section className="contactbox"></section>
      <span style={{ backgroundColor: "black" }}>
        {/*Contact me*/}
        <section
          className="section is-medium"
          style={{
            position: "absolute",
            left: "350px",
            top: "2900px",
            height: "100px",
            width: "800px",
          }}
        >
          <div className="title is-1 title-edu has-text-centered"></div>
          <div>
            <form className="box is-box-contact" style={{}}>
              <div className="field mt-5">
                <label className="label" style={{ color: "black" }}>
                  Your Name
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="Name"
                    placeholder="Nisal Wishwajith"
                  />
                </div>
              </div>
              <br />
              <div className="field">
                <label className="label" style={{ color: "black" }}>
                  Your Email
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    placeholder="wishwajithnisal@gmail.com"
                  />
                </div>
              </div>
              <br />
              <div className="field">
                <label className="label" style={{ color: "black" }}>
                  Message
                </label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Type your message here..."
                    defaultValue={""}
                  />
                </div>
              </div>
              <br />
              <div className="buttons is-right">
                <button
                  className="button is-projects pl-5 pr-5"
                  style={{ backgroundColor: "rgb(128, 114, 253)" }}
                >
                  Send
                </button>
              </div>
              <div className="buttons is-right">
                <input
                  type="reset"
                  className="button is-projects pl-5 pr-5"
                  style={{
                    position: "absolute",
                    left: "480px",
                    top: "625px",
                    backgroundColor: "rgb(252, 69, 255)",
                  }}
                  defaultValue="Delete"
                />
              </div>
            </form>
          </div>
        </section>
      </span>
      <img
        src="./img/phone.png"
        alt="1"
        style={{
          position: "absolute",
          top: "3730px",
          left: "495px",
          height: "40px",
          width: "40px",
        }}
      />
      <img
        src="./img/email.png"
        alt="2"
        style={{
          position: "absolute",
          top: "3730px",
          left: "850px",
          height: "30px",
          width: "30px",
        }}
      />
      <img
        src="./img/fb.png"
        alt="3"
        style={{
          position: "absolute",
          top: "3780px",
          left: "500px",
          height: "30px",
          width: "30px",
        }}
      />
      <img
        src="./img/Instagram.png"
        alt="4"
        style={{
          position: "absolute",
          top: "3780px",
          left: "850px",
          height: "30px",
          width: "30px",
        }}
      />
      <p style={{ position: "absolute", top: "3735px", left: "535px" }}>
        +94 71 571 4175
      </p>
      <a
        href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMvWJCMKRTRbgVccThjtqmThPBMtKzZhFBfFcnhgdTPHfKcWtlwzShGpNgpswrxfWMZgKk"
        target="_blank"
        rel="noreferrer"
      >
        <p style={{ position: "absolute", top: "3730px", left: "890px" }}>
          wishwajithnisal@gmail.com
        </p>
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100069813968886"
        target="_blank"
        rel="noreferrer"
      >
        <p style={{ position: "absolute", top: "3780px", left: "540px" }}>
          Nisa WIshwajith
        </p>
      </a>
      <a
        href="https://www.instagram.com/nisalwishwajith/"
        target="_blank"
        rel="noreferrer"
      >
        <p style={{ position: "absolute", top: "3780px", left: "890px" }}>
          Nisal_wishawjith
        </p>
      </a>
      <img
        src="./img/last.png"
        alt="5"
        style={{
          position: "absolute",
          top: "3800px",
          left: "1px",
          width: "1500px",
        }}
      />
    </div>
  );
}

export default Contact;
