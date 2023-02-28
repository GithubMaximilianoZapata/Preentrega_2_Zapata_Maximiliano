import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProd] = useState();
  useEffect(() => {
    fetch("../products.json")
      .then((res) => res.json())
      .then((res) => setProd(res.find(e => e.id === parseInt(itemId))))
      .catch((error) => console.log(error))
  }, [itemId]);
  return (
    <>
      {typeof producto === "undefined" ? <div class="d-flex justify-content-center"><div class="spinner-border" role="status"> <span class="visually-hidden">Loading...</span></div></div> : <ItemDetail prod={producto} />}
    </>);
};
export default ItemDetailContainer;