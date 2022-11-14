import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  FooterLogo,
  Instagram,
  Twitter,
} from "../../assests";
import { footerLinks } from "../../data/footerLinks";

const Footer = () => {
  return (
    <footer className="bg-footerbg w-full min-h-[20.125rem] px-5 py-10 md:px-14 xl:px-0">
      <div className="text-white flex flex-col gap-7 justify-center w-full max-w-[1200px] m-auto ">
        {/* Footer Top content */}

        <div className="flex flex-col gap-10 lg:gap-20 md:flex-row md:flex-wrap md:justify-between">
          {/* Footer Top Left */}
          <div className="flex flex-col gap-10 lg:gap-24">
            <div className="w-full max-w-[10rem] md:max-w-[14.5rem]">
              <img
                src={FooterLogo}
                alt="metabnb-logo"
                className="w-full object-contain"
              />
            </div>
            <div className="flex gap-10 items-center">
              <Facebook />
              <Instagram />
              <Twitter />
            </div>
          </div>

          {/* Site Links */}

          <div className="flex gap-10 flex-wrap lg:gap-28 justify-between">
            {footerLinks.map((item, id) => {
              return (
                <div clasName="flex flex-col" key={id}>
                  <h1 className="font-bold text-lg mb-6">{item.title}</h1>
                  <div className="flex flex-col gap-4">
                    {item.links.map((link, id) => {
                      return (
                        <Link
                          to={link}
                          key={id}
                          className="font-normal text-sm"
                        >
                          {link}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <p className="text-base font-normal">&#169; 2022 Metabnb</p>
      </div>
    </footer>
  );
};

export default Footer;
