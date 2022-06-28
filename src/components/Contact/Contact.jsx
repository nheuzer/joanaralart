import TitleContact from "../Title/TitleContact.jsx";
import React from "react";
import { useState } from "react";
import NavBar from "../NavBar/NavBar.jsx";
import ButtonMailto from "../ButtonMailTo/ButtonMailTo.jsx";

const Contact = () => {
  const to_mail = "privepianoschool@gmail.com";
  const subject = "Message envoyé depuis le site Joanaralart";
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <NavBar />
      <TitleContact />
      <div className="login-box">
        <form>
          <div className="user-box">
            <input
              type="text"
              name="from_name"
              placeholder="Nom"
              value={toSend.from_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="user-box">
            <input
              type="text"
              name="message"
              placeholder="Message"
              value={toSend.message}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <ButtonMailto
              mailto={to_mail}
              subject={subject}
              message={toSend.message}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
