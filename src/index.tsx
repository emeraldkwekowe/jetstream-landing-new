import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import AppLoader from "./components/AppLoader/AppLoader";

//TODO: Remove this delay, you have seen the loader enough.
const Landing = lazy(() =>
  new Promise((resolve) => setTimeout(resolve, 5000)).then(
    () => import("./pages/Landing/Landing")
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  //TODO: Fix this guy abeg, remove or something
  // <React.StrictMode>
  <Suspense fallback={<AppLoader />}>
    <Landing />
  </Suspense>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
