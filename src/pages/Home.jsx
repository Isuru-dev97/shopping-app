import React from "react";
import BlackLayout from "../Layout/BlackLayout";
import Container from "../components/Container";
import StoreContainer from "../components/StoreContainer";

function Home() {
  return (
    <BlackLayout>
      <section className="secone">
        <Container>
          <StoreContainer />
        </Container>
      </section>
    </BlackLayout>
  );
}

export default Home;
