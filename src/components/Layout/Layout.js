import React from "react";
import Aux from "../../hoc/hocaux";
import './Layout.css';

const layout = (props) => (
  <Aux>
    <div>Toolbar, sideDrawer, backddrop</div>
    <main className="content">{props.children}</main>
  </Aux>
);

export default layout;
