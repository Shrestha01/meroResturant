import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "dev-hfcjxegc10c0fhfr.us.auth0.com";
const clientID = "CLYWn9D0Hs0quRQmi9yhBUTaX4BOuIMi";

createRoot(document.getElementById("root")).render(
  <Auth0Provider
     domain="dev-hfcjxegc10c0fhfr.us.auth0.com"
     clientId="1iwoPbSjPtwNaAfJFk68eigCA53Ud4s9"
   // domain="dev-hfcjxegc10c0fhfr.us.auth0.com"
  //  clientId="CLYWn9D0Hs0quRQmi9yhBUTaX4BOuIMi"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <StrictMode>
      <App />
    </StrictMode>
  </Auth0Provider>
);
