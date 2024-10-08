import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./locales/i18n.ts";
import "bootstrap-icons/font/bootstrap-icons.css";
import Provider from "./store/povider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider>
        <App />
      </Provider>
    </I18nextProvider>
  </StrictMode>
);
