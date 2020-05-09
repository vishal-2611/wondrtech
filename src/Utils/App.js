import React from "react";
import PhotoList from "../Containers";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
function App() {
  return (
    <>
      <Container fluid>
        <header>
          <h1 className="text-center">Photos Gallery</h1>
        </header>
        <PhotoList />
      </Container>
    </>
  );
}

export default App;
