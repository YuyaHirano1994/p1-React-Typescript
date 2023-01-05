import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer>
      <hr />
      <ul className="link-list">
        <li id="ig">
          <a href="https://www.instagram.com/i_am_hey/" target="_blank" rel="noreferrer">
            <Icon icon="akar-icons:instagram-fill" />
          </a>
        </li>
        <li id="github">
          <a href="https://github.com/YuyaHirano1994" target="_blank" rel="noreferrer">
            <Icon icon="akar-icons:github-fill" />
          </a>
        </li>
        <li id="linkedin">
          <a href="https://www.linkedin.com/in/yuya-hirano-9605a5247/" target="_blank" rel="noreferrer">
            <Icon icon="akar-icons:linkedin-box-fill" />
          </a>
        </li>
        <li id="resume">
          <a
            href="https://docs.google.com/document/d/1VAN6QC48I2LpRTR3v4zbU8_aWCt4TmvCyP41JdAs73U/edit?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="carbon:document" />
          </a>
        </li>
      </ul>

      <h3>© Yuya Hirano 2023. All Rights Reserved.</h3>
    </footer>
  );
};

export default Footer;
