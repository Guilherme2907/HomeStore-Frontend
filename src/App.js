import React from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "react-router-dom";

import Sidebar from "./Components/Sidebar/Sidebar";
import TopBar from "./Components/TopBar/TopBar";
import Header from "./Components/Header/Header";
import GlobalStyles from "./styles/global";
import Footer from "./Components/Footer/Footer";
import Content from "./Components/Content/Content";
import history from "./services/history";
import { ProductProvider } from "./store/ProductContext";
import Routes from "./routes/routes";

function App() {
  return (
    <Router history={history}>
      <ProductProvider history={history}>
        <Container>
          <TopBar />
          <Header />
          <Row>
            <Sidebar />
            <Content>
              <Routes />
            </Content>
          </Row>
          <Footer />
        </Container>
        <GlobalStyles />
      </ProductProvider>
    </Router>
  );
}

export default App;
