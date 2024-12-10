import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./App";

// Thêm Google OAuth Client ID của bạn vào đây
const clientId = "YOUR_GOOGLE_CLIENT_ID";

ReactDOM.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
    </GoogleOAuthProvider>
  </Provider>,
  document.getElementById("root")
);
