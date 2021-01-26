import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import useStyles from "./styles";
import { Container, ThemeProvider } from "@material-ui/core";

// import Routes from "./components/Routes";
import Header from "./components/Header.js/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import NotFound from "./components/NotFoundPage/NotFound";
import theme from "./components/Theme/Theme";
// import theme from "./components/Theme";

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Container maxWidth="lg">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/*" component={NotFound} />
            </Switch>
          </Container>
        </BrowserRouter>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;