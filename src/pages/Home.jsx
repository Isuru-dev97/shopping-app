import React from "react";
import BlackLayout from "../Layout/BlackLayout";
import blackhoddi from "../assets/store/blackhoddi.jpg";
import bluehoddi from "../assets/store/bluehoddi.jpg";
import redhoddi from "../assets/store/redhoddi.jpg";
import greenhoddi from "../assets/store/greenhoddi.jpg";
import Container from "../components/Container";

function Home() {
  return (
    <BlackLayout>
      <section className="secone">
        <Container>
          <div className="grid grid-cols-4 justify-center items-center w-full gap-4 mt-2">
            <div className="box inline-block  bg-gray-900 text-slate-50 mt-6 rounded-b-3xl">
              <img className="rounded-t-3xl " src={blackhoddi} alt="" />
              <h3 className="text-2xl pt-2 px-28">Hoddi</h3>
              <p className="text-xl pt-2 px-24">Price : $500</p>
              <button className="mt-4 px-3 pb-2 pt-2 mb-4 ml-24 rounded-lg ... bg-gray-50 text-black">
                Add to cart
              </button>
            </div>
            <div className="box inline-block   bg-gray-900 text-slate-50 mt-6 rounded-b-3xl">
              <img className="rounded-t-3xl" src={bluehoddi} alt="" />
              <h3 className="text-2xl pt-2 px-28">Hoddi</h3>
              <p className="text-xl pt-2 px-24">Price : $500</p>
              <button className="mt-4 px-3 pb-2 pt-2 mb-4 ml-24 rounded-lg ... bg-gray-50 text-black">
                Add to cart
              </button>
            </div>
            <div className="box inline-block   bg-gray-900 text-slate-50 mt-6 rounded-b-3xl">
              <img className="rounded-t-3xl" src={redhoddi} alt="" />
              <h3 className="text-2xl pt-2 px-28">Hoddi</h3>
              <p className="text-xl pt-2 px-24">Price : $500</p>
              <button className="mt-4 px-3 pb-2 pt-2 mb-4 ml-24 rounded-lg ... bg-gray-50 text-black">
                Add to cart
              </button>
            </div>
            <div className="box inline-block   bg-gray-900 text-slate-50 mt-6 rounded-b-3xl">
              <img className="rounded-t-3xl" src={greenhoddi} alt="" />
              <h3 className="text-2xl pt-2 px-28">Hoddi</h3>
              <p className="text-xl pt-2 px-24">Price : $500</p>
              <button className="mt-4 px-3 pb-2 pt-2 mb-4 ml-24 rounded-lg ... bg-gray-50 text-black">
                Add to cart
              </button>
            </div>
          </div>
        </Container>
      </section>
    </BlackLayout>
  );
}

export default Home;
