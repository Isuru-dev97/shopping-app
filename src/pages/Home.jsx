import React from "react";
import BlackLayout from "../Layout/BlackLayout";
import Container from "../components/Container";
import CartContainer from "../components/CartContainer";

function Home() {
  return (
    <BlackLayout>
      <section className="secone">
        <Container>
          <CartContainer />
        </Container>
      </section>
    </BlackLayout>
  );
}

export default Home;
