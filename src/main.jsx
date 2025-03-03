import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GlobalContext } from "./Global/GlobalContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Store from "./service/Store.js";
import { Provider } from "react-redux";

const persistor = persistStore(Store);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
          <GlobalContext>
            <App />
          </GlobalContext>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
