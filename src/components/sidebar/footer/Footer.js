import React from "react";
import GithubIcon from "../../../../public/assets/icons/GithubIcon";
import InstagramIcon from "../../../../public/assets/icons/InstagramIcon";
import LinkedinIcon from "../../../../public/assets/icons/LinkedinIcon";
import TwitterIcon from "../../../../public/assets/icons/TwitterIcon";
import { FooterIconContainer, FooterWrapper } from "./style";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterIconContainer>
        <button>
          <a href="https://github.com/Pauliski" target="_blank">
            <GithubIcon />
          </a>
        </button>
        <LinkedinIcon />
        <button>
          <a href="https://www.instagram.com/arokoolapaul/" target="_blank">
            <InstagramIcon />
          </a>
        </button>
        <TwitterIcon />
      </FooterIconContainer>
    </FooterWrapper>
  );
};

export default Footer;
