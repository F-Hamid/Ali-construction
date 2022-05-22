import React from "react";
import "../SASS/components/footer.scss";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footerContact">
        <i
          className="fa-brands fa-facebook"
          href="https://www.facebook.com/"
        ></i>
        <i
          className="fa-brands fa-linkedin"
          href="https://www.linkedin.com/"
        ></i>
        <i
          className="fa-brands fa-whatsapp"
          href="https://web.whatsapp.com/"
        ></i>
      </div>
      <span>2022@Created by A.Lahmar</span>
    </section>
  );
};

export default Footer;
