import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { IntlProvider } from "react-intl";
import { locale, messages } from "./pages/constant";

createRoot(document.getElementById("root")).render(
  <IntlProvider locale={locale} messages={messages[locale]}>
    <StrictMode>
      <App />
    </StrictMode>
  </IntlProvider>
);
