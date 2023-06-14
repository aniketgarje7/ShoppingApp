import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import SingleProduct from "../SingleProduct";
import InputCheck from "../InputCheck/InputCheck";
import "./home.css";
import { CartContext } from "../../Context/context";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../../firebase";

const Home = () => {
  const {
    state: { products },
    filterState,
    user,
    dispatch,
  } = CartContext();
  const { ascending, discending, fastDelivery, stars, query } = filterState;
  let productsDummy = [];
  if (query !== "") {
    productsDummy =
      productsDummy.length === 0 ? products.filter((pr) => pr.Name.toLowerCase().includes(query.toLowerCase())) : productsDummy.filter((pr) => pr.Name.toLowerCase().includes(query.toLowerCase()));
    console.log(query);
  }
  if (!discending && ascending) {
    productsDummy = productsDummy.length === 0 ? products.sort((a, b) => a.price - b.price) : productsDummy.sort((a, b) => a.price - b.price);
  }
  if (!ascending && discending) {
    productsDummy = productsDummy.length === 0 ? products.sort((a, b) => b.price - a.price) : productsDummy.sort((a, b) => b.price - a.price);
  }
  if (fastDelivery) {
    productsDummy = productsDummy.length === 0 ? products.filter((pr) => pr.delivery === 1) : productsDummy.filter((pr) => pr.delivery === 1);
  }
  if (stars !== 0) {
    productsDummy = productsDummy.length === 0 ? products.filter((pr) => pr.rating >= stars) : productsDummy.filter((pr) => pr.rating >= stars);
  }
  if (!ascending && !discending && !fastDelivery && stars === 0 && query === "") {
    productsDummy = [...products];
  }
  useEffect(() => {
    if (user) {
      const data = doc(db, "products", user.uid);
      var unsuscribe = onSnapshot(data, (product) => {
        if (product.exists()) {
          dispatch({ type: "FIREBASECART", payload: [...product.data().products] });
        }
      });
      return () => {
        unsuscribe();
      };
    }
    console.log("inside login");
  }, [user]);
  return (
    <div className="container-fluid">
      <div className="row">
      <div className="id col-lg-3 ">
        <InputCheck />
      </div>
      <div className="col-lg-9">
      <Row className="justify-content-center ">
        {productsDummy.map((single, index) => {
          return <SingleProduct single={single} key={index} />;
        })}
      </Row>
      </div>
      </div>
    </div>
  );
};

export default Home;
