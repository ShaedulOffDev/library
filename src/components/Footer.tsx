import { FaceBook, Instagram, LinkedIn } from "../assets";

const Footer = () => {
  return (
    <div
      className="bg-[#1D1F21] w-full text-center pb-2 footer cont"
      style={{ boxShadow: "inset 0 5px 60px #111" }}
    >
      <div className="w-full py-5 grid-cols-2 grid items-center max-[991px]:grid-cols-1">
        <h2 className="uppercase text-white text-[2rem] text-center tracking-widest font-semibold">
          <i className="fa fa-book-open"></i>Library
        </h2>
        <ul className="footer-socials flex justify-center">
          <li className="footer-socials__item">
            <a target="_blank" href="https://instagram.com/shaedul_off">
              <img className="w-[100px] max-[500px]:w-[75px]" src={Instagram} alt="Instagram"/>
            </a>
          </li>
          <li className="footer-socials__item">
            <a target="_blank" href="https://www.facebook.com/ShaedulOff">
              <img className="w-[100px] max-[500px]:w-[75px]" src={FaceBook} alt="Facebook"/>
            </a>
          </li>
          <li className="footer-socials__item">
            <a target="_blank" href="https://www.linkedin.com/in/shaedul-off">
              <img className="w-[100px] max-[500px]:w-[75px]" src={LinkedIn} alt="LinkedIn"/>
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full bg-gray-600 h-[.1px] rounded"></div>
      <p className="mt-5">
        Made by{" "}
        <a
          target="_blank"
          href="https://shaedul-off.vercel.app"
          className="underline"
        >
          Shaedul_Off
        </a>
      </p>
    </div>
  );
};

export default Footer;
