import React from 'react';
import Navigation from "./components/navigation";
import "bootstrap3/dist/css/bootstrap.min.css";
import "./scss/style.scss";


export default function App({ children }) {

  return (
    <div className="App">
      <Navigation />
      <div>{children}</div>
    </div>
  )
}
