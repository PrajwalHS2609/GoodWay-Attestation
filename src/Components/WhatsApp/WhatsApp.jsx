import React from "react";
import "./WhatsApp.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "./../../vid_img/goodWayFavicon.ico";

const WhatsApp = () => {
  // let [visible, setVisible] = useState();
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setVisible(true);
  //     setTimeout(() => {
  //       setVisible(false);
  //     }, 10000); // Hide after 5 seconds
  //   }, 10000); // Show every 10 seconds

  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, []);
  return (
    <div className="whatsAppContainer">
      {/* <div className="whatsAppContent">Hello</div> */}
      {/* <a href="https://wa.me/919742232700?text=Hello" >
        <img src={whatsApp} alt="" />
      </a> */}
      <FloatingWhatsApp
        phoneNumber="919148889666"
        accountName="GoodWay Attestation"
        avatar={logo} // Optional
        statusMessage="Typically replies within 5 min" // Optional
        chatMessage="Welcome to Goodway Attestation! Need expert attestation services? We’re here to help! Call Now ~ 9148889666" // Optional
        placeholder="Type a message..." // Optional
      />
    </div>
  );
};

export default WhatsApp;
