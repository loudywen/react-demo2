import React, { Component } from "react";
import "./directory-menu.styles.scss";
import { MenuItem } from "../../components/menu-item/menu-item.component";

class DirectoryMenu extends Component {
  render() {
    return (
      <div className="directory-menu">
        <MenuItem title="HATS" />
        <MenuItem title="JACKETS" />
        <MenuItem title="SNEAKES" />
        <MenuItem title="WOMENS" />
        <MenuItem title="MENS" />
      </div>
    );
  }
}

export default DirectoryMenu;
