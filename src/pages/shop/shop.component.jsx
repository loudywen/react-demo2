import React from "react";
import PreviewCollection from "../../components/collection-preview/collection-preview.component";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { selectCollections } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";

// import CollectionPage from "../collection/collection.component";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});
export default connect(mapStateToProps)(ShopPage);
