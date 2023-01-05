import React from "react";
import BlackLayout from "../Layout/BlackLayout";
import Container from "../components/Container";
import blackhoddi from "../assets/store/blackhoddi.jpg";
import bluehoddi from "../assets/store/bluehoddi.jpg";
import redhoddi from "../assets/store/redhoddi.jpg";
import greenhoddi from "../assets/store/greenhoddi.jpg";

function Home() {
  return (
    <BlackLayout>
      <section className="secone">
        <div className="Container mx-auto p-4">
          <div className="gridwrapper grid-row-4 justify-center items-center w-full">
            <div className="box inline-block p-2">
              <img className="w-52 h-52" src={blackhoddi} alt="" />
            </div>
            <div className="box inline-block p-2">
              <img className="w-52 h-52" src={bluehoddi} alt="" />
            </div>
            <div className="box inline-block p-2">
              <img className="w-52 h-52" src={redhoddi} alt="" />
            </div>
            <div className="box inline-block p-2">
              <img className="w-52 h-52" src={greenhoddi} alt="" />
            </div>
          </div>
        </div>
      </section>
    </BlackLayout>
  );
}

export default Home;
