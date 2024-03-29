import React from "react";
import { connect } from "react-redux";

import "./directory-menu.styles.scss";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import MenuItem from "../../components/menu-item/menu-item.component";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
