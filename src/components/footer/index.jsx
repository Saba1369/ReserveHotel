import React from "react";

const icons = ["linkedin", "facebook", "youtube", "instagram", "twitter"];
const Footer = () => {
  return (
    <div className="footer w-full h-[250px] bg-center bg-no-repeat bg-cover">
      <div className="bg-sky-950 w-full h-full opacity-[0.9] text-white text-2xl text-center grid items-center grid-cols-2 p-[3rem]">
        <p>Phone Support</p>
        <p>Follow Us</p>
        <p style={{ color: "#63FCD3" }}>+ 98 912 925 4713</p>
        <div className="flex gap-2 justify-center">
          {icons.map((icon, index) => (
            <a
              href="#"
              key={index}
              className="border border-transparent rounded transition-all duration-500 hover:border-white"
            >
              <img src={require(`../../assets/icons/${icon}.png`)} alt={icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
