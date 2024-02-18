import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Component/Router/Router.jsx";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
// require ("dotenv").config()
import english from '/public/lang/en.json'
import arabic from '/public/lang/ar.json'
import indonesia from '/public/lang/id.json'
import russian from '/public/lang/ru.json'
import turkce from '/public/lang/tr.json'
import francais from '/public/lang/fr.json'
import espanol from '/public/lang/es.json'
import deutsch from '/public/lang/de.json'


i18next.init({
  lng: "en",
  resources: {
    en: {
    common: english
    },
  
  ar: {
   common:arabic
  },
  id: {
   common:indonesia
  },
  de: {
   common:deutsch
  },
  es: {
   common:espanol
  },
  tr: {
   common:turkce
  },
  fr: {
   common:francais
  },
  ru: {
   common:russian
  },
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18next}>
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  </I18nextProvider>
);
