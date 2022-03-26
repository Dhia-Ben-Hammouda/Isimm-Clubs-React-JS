import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <footer>
      <div className="up">
        For more information follow us on :
      </div>

      <div className="med">
        <IconContext.Provider value={{ color: "white", size: "2.5rem" }}>
        <a href="https://www.facebook.com/ISIMM-Institut-Sup%C3%A9rieur-dInformatique-et-de-Math%C3%A9matiques-de-Monastir-105890621413094" target="_blank">
            <FaFacebook />
          </a>

          <a href="https://www.linkedin.com/school/isimm/" target="_blank">
            <FaLinkedin />
          </a>

          <a href="https://github.com/Dhia-Ben-Hammouda" target="_blank">
            <FaGithub />
          </a>

          <a href="https://www.youtube.com/channel/UCkM5tiG4nbR0ZkI6-sdFkDg" target="_blank">
            <FaYoutube />
          </a>
        </IconContext.Provider>
      </div>

      <div className="down">
        Copyright &copy; 2021 ISIMM All rights reserved
      </div>
    </footer>
  );
}

export default Footer;