import React from "react";
import "./App.css";
import { CardCarousel } from "card-carousel-reactjs";
function App() {
  return (
    <>
     <div className="flex h-screen justify-center items-center">
        <CardCarousel
          items={[
            <div>Card One</div>,
            <div>Card Two</div>,
            <div>Card Three</div>,
            <div>Card Four</div>,
            <div>Card Five</div>,
            <div>Card Six</div>,
          ]}
        />
     </div>
    </>
  );
}

export default App;
