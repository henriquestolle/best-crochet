import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./CookiesConsent.css";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookieConsent", "accepted", { expires: 365 });
    setShowConsent(false);
  };

  return (
    showConsent && (
      <div className="cookie-consent">
        <p>
          Este site utiliza cookies para melhorar a experiência do usuário. Ao
          continuar navegando, você concorda com o uso de cookies.
        </p>
        <button onClick={handleAccept}>Aceitar</button>
      </div>
    )
  );
};

export default CookieConsent;
