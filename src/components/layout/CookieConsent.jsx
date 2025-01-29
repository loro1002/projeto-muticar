import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieConsentComponent = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Aceitar"
      cookieName="user_cookie_consent"
      style={{
        background: "#2B373B", // Cor de fundo personalizada
        color: "#fff",
        fontSize: "14px",
        padding: "12px 16px", // Padding ajustado para boa aparência
        textAlign: "center",
        borderRadius: "8px", // Borda arredondada
        position: "relative",
        zIndex: 1000, // Garantir que fique acima de outros elementos
      }}
      buttonStyle={{
        backgroundColor: "#F97316", // Laranja bonito
        color: "#fff",
        borderRadius: "20px",
        padding: "8px 20px",
        fontSize: "14px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        border: "none",
        marginTop: "10px", // Distância entre a mensagem e o botão
      }}
      expires={365}
      overlay={true} // Exibir uma sobreposição para destacar o consentimento
    >
      <div style={{ fontSize: "14px", marginBottom: "8px" }}>
        <strong>Este site usa cookies</strong> para melhorar a sua experiência de navegação. Ao continuar, você concorda com o uso de cookies.
      </div>
      <button
        onClick={() => window.location.reload()} // Exemplo de ação após consentimento
        style={{
          backgroundColor: "#F97316",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "20px",
          fontWeight: "bold",
          border: "none",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
      >
        Aceitar
      </button>
    </CookieConsent>
  );
}

export default CookieConsentComponent;
