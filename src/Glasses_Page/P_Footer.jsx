import React from "react";

const P_Footer = (props) => {
  const { glasses, handleGlasses, handleLayer } = props;
  return (
    <div
      className="absolute bg-white"
      style={{
        bottom: "0",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className=" grid grid-cols-6  gap-4" style={{ height: "30%" }}>
        <img
          src="./images/glassesImage/g1.jpg"
          className=" cursor-pointer"
          style={{ alignSelf: "center" }}
          onClick={() => {
            handleGlasses(`v1`);
            handleLayer(1);
          }}
        />
        <img
          src="./images/glassesImage/g2.jpg"
          className=" cursor-pointer"
          style={{ alignSelf: "center" }}
          onClick={() => {
            handleGlasses(`v2`);
            handleLayer(2);
          }}
        />
        <img
          src="./images/glassesImage/g3.jpg"
          className=" cursor-pointer"
          style={{ alignSelf: "center" }}
          onClick={() => {
            handleGlasses(`v3`);
            handleLayer(3);
          }}
        />
        <img
          src="./images/glassesImage/g4.jpg"
          className=" cursor-pointer"
          style={{ alignSelf: "center" }}
          onClick={() => {
            handleGlasses(`v4`);
            handleLayer(4);
          }}
        />
        <img
          src="./images/glassesImage/g5.jpg"
          className=" cursor-pointer"
          style={{ alignSelf: "center" }}
          onClick={() => {
            handleGlasses(`v5`);
            handleLayer(5);
          }}
        />
        <img
          src="./images/glassesImage/g6.jpg"
          className=" cursor-pointer"
          style={{ alignSelf: "center" }}
          onClick={() => {
            handleGlasses(`v6`);
            handleLayer(6);
          }}
        />
        <img
          src="./images/glassesImage/g7.jpg"
          className=" cursor-pointer"
          style={{ alignSelf: "center" }}
          onClick={() => {
            handleGlasses(`v7`);
            handleLayer(7);
          }}
        />
        <img
          src="./images/glassesImage/g8.jpg"
          className=" cursor-pointer"
          style={{ alignSelf: "center" }}
          onClick={() => {
            handleGlasses(`v8`);
            handleLayer(8);
          }}
        />
        <img
          src="./images/glassesImage/g9.jpg"
          className=" cursor-pointer"
          style={{ alignSelf: "center" }}
          onClick={() => {
            handleGlasses(`v9`);
            handleLayer(9);
          }}
        />
      </div>
    </div>
  );
};

export default P_Footer;
