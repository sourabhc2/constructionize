import React from "react";
import emailjs from "emailjs-com";

export const FormContact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1cfxjmr",
        "template_ajqli8o",
        e.target,
        "user_t7eUYxljVexqnRhD9ryRJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="col-md-6">
      <div className="themesflat-headings style-2 clearfix">
        <h2 className="heading">CONTACT US</h2>
        <div className="sep has-width w80 accent-bg clearfix" />
        <p className="sub-heading">
          Are you interested in finding out how Construction Construction
          Services can make your project. For more information on our services
          please contact us.
        </p>
      </div>
      <div
        className="themesflat-spacer clearfix"
        data-desktop={36}
        data-mobile={35}
        data-smobile={35}
      />
      <div className="themesflat-contact-form style-2 clearfix">
        <form
          action="#"
          onSubmit={sendEmail}
          method="post"
          className="form-submit contact-form wpcf7-form dzForm"
        >
          <span className="wpcf7-form-control-wrap your-name ">
            <input
              type="text"
              tabIndex={1}
              id="Name"
              name="dzName"
              defaultValue={""}
              className="wpcf7-form-control"
              placeholder="Name*"
              required
            />
          </span>
          <span className="wpcf7-form-control-wrap your-phone">
            <input
              type="text"
              tabIndex={2}
              id="phone"
              name="dzPhone"
              defaultValue={""}
              className="wpcf7-form-control"
              placeholder="Phone"
            />
          </span>
          <span className="wpcf7-form-control-wrap your-email">
            <input
              type="email"
              tabIndex={3}
              id="email"
              name="dzEmail"
              defaultValue={""}
              className="wpcf7-form-control"
              placeholder="Your Email*"
              required
            />
          </span>
          <span className="wpcf7-form-control-wrap your-subject">
            <input
              type="text"
              tabIndex={4}
              id="subject"
              name="dzSubject"
              defaultValue={""}
              className="wpcf7-form-control"
              placeholder="Subject"
            />
          </span>
          <span className="wpcf7-form-control-wrap your-message">
            <textarea
              name="dzMessage"
              tabIndex={5}
              cols={40}
              rows={10}
              className="wpcf7-form-control wpcf7-textarea"
              placeholder="Message*"
              required
              defaultValue={""}
            />
          </span>
          <span className="wrap-submit">
            <input
              type="submit"
              defaultValue="SEND US"
              className="submit wpcf7-form-control wpcf7-submit"
              id="submit"
              name="submit"
            />
          </span>
        </form>
      </div>
      <div
        className="themesflat-spacer clearfix"
        data-desktop={80}
        data-mobile={60}
        data-smobile={60}
      />
    </div>
  );
};

export default FormContact;
