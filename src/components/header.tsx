import React from "react";
import "../css/index.css";

class Header extends React.Component {
  render() {
    return (
      <div>
      {/*[&>a]:float-left [&>a]:text-center [&>a]:text-[25px] [&>a]:transition-transform [&>a]:duration-[0.2s] [&>a]:px-4 [&>a]:py-3.5 [&>a]:hover:text-[#FF4093] scale-110*/}
      <nav className="w-9/12 mx-auto mt-3 font-WorkSansxLight overflow-hidden list-none no-underline">
        <div className="[&>a]:float-left">
        <a className="font-WorkSansRegular text-[25px] hover:text-[#FF7F1D] hover:scale-110 hover:transition-transform hover:duration-[0.2s]" href="/index.html">DanMae</a>
        <div className="float-right [&>a]:text-[25px] [&>a]:text-center [&>a]:px-4 [&>a]:py-3.5">
          <a className="hover:text-[#FF7F1D] hover:scale-110 hover:transition-transform hover:duration-[0.2s]" href="/index.html">home</a>
          <a className="hover:text-[#FF4093] hover:scale-110 hover:transition-transform hover:duration-[0.2s]" href="/portfolio.html">portfolio</a>
          <a className="hover:text-[#FF7F1D] hover:scale-110 hover:transition-transform hover:duration-[0.2s]" href="/about.html">about</a>
          <a className="hover:text-[#FF4093] hover:scale-110 hover:transition-transform hover:duration-[0.2s]" href="/contact.html">contact</a>
        </div>
        </div>
      </nav>
      </div>
    );
  }
}

export default Header;
