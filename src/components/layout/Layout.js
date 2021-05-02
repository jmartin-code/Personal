import { Fragment } from "react";
import Footer from "./Footer";

import Header from "./Header";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
