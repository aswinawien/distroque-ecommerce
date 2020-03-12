import React from "react";
import { connect } from "react-redux";

import "./collection.styles.scss";

import { selectCollection } from "../../redux/shop/shop.selectors";
import ProductItem from "../../components/product-item/product-item.component";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  console.log(collection);
  return (
    <React.Fragment>
      <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
          {items.map(item => (
            <ProductItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
