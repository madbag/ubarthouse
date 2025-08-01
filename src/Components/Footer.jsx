import React from "react";

const Footer = () => {
  const socials = [
    { name: "LinkedIn", link: "https://www.linkedin.com", icon: "" },
    { name: "Instagram", link: "https://www.instagram.com", icon: "" },
    { name: "Email", link: "mailto:baligausha@gmail.com", icon: "" },
  ];
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="text-2xl font-extrabold tracking-[-0.075em]">
        Usha Baliga
      </div>
      <div className="flex gap-4">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            className="p-2 hover:text-blue-500"
          >
            {social.name} {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
