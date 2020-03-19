import React from "react";
import { connect, useSelector } from "react-redux";

import "./collection.styles.scss";

import { selectCollection } from "../../redux/shop/shop.selectors";
import ProductItem from "../../components/product-item/product-item.component";

import "./collection.styles.scss";

const CollectionPage = ({ match }) => {
  const collection = useSelector(state =>
    selectCollection(match.params.collectionId)(state)
  );
  console.log("collection", collection);
  const { title, items } = collection;
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

export default CollectionPage;
