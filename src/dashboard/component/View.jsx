import React from "react";
import "../style/View.css"; 
const View = () => {
  return (
    <div className="confirmation-page">
      <h2>Confirmation Email Sent</h2>
      <p>
        An email has been sent to your account to confirm your registration.
        Please click on the link provided in the email to activate your
        account.
      </p>
    </div>
  );
};

export default View;
