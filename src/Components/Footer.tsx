import logo from "/logo.svg";
import fb from "/icon-facebook.svg";
import twitter from "/icon-twitter.svg";
import ig from "/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-10 bg-gray-200 py-10 md:mt-20 md:flex-row md:justify-between md:px-30">
      <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between md:gap-30">
        <div className="w-15">
          <img src={logo} alt="Company logo" />
        </div>
      </div>
      <nav className="text-my-gray-700">
        <ul className="flex flex-col gap-4 text-center md:flex-row md:gap-15">
          <li>FAQS</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Press Kit</li>
          <li>Install Guide</li>
        </ul>
      </nav>
      <div>
        <ul className="flex gap-10">
          <li>
            <img src={fb} alt="Facebook logo" />
          </li>
          <li>
            <img src={twitter} alt="Twitter logo" />
          </li>
          <li>
            <img src={ig} alt="Instagram logo" />
          </li>
        </ul>
      </div>
    </footer>
  );
}
