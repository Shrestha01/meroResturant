import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "dev-hfcjxegc10c0fhfr.us.auth0.com";
const clientID = "DyS4ezlitExuSSTmDDBCT0O69RppALoP";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-31k7gebzz3xgoxsk.au.auth0.com"
      clientId="42n1MMkKgiwjtz538Uq34beSBD9gCOhZ"
      authorizationParams={{
        redirectd_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
