import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, subject, message }) => {
  let mailToSend =
    "mailto:" + mailto + "?Subject=" + subject + "&body=" + message;

  return (
    <Link
      to="#"
      className="button_submit"
      onClick={(e) => {
        window.location.href = mailToSend;
        e.preventDefault();
      }}
    >
      Envoyer
    </Link>
  );
};

export default ButtonMailto;
