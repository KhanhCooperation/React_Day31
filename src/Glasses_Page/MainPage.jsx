import React, { useState } from "react";
import P_Header from "./P_Header";
import P_Body from "./P_Body";
import data from "./dataGlasses.json";
const MainPage = () => {
  //*use state change glasses
  const [glasses, changeGlasses] = useState("./images/glassesImage/v1.png");
  const handleGlasses = (item) => {
    changeGlasses(`./images/glassesImage/${item}.png`);
  };
  //*Use state change Layer data
  const [layer, changeLayer] = useState(
    <div
      className="absolute w-full bottom-0 bg-pink-100 bg-opacity-40"
      style={{ height: "40%" }}
    >
      <div className="">
        <h4 className="text-xl font-bold">{data[0].name}</h4>
        <p>Price: {data[0].price}</p>
        <p>Des: {data[0].desc}</p>
      </div>
    </div>
  );
  const handleLayer = (id) => {
    {
      data.map((item) => {
        if (id == item.id) {
          return (
            <div
              className="absolute w-full bottom-0 bg-pink-100 bg-opacity-40"
              style={{ height: "40%" }}
            >
              <div className="">
                {" "}
                jjnjn
                <h4 className="text-xl font-bold">{item.name}</h4>
                <p>Price: {item.price}</p>
                <p>Des: {item.desc}</p>
              </div>
            </div>
          );
        }
      });
    }
  };
  return (
    <div>
      <P_Header></P_Header>
      <P_Body
        layer={layer}
        handleLayer={handleLayer}
        glasses={glasses}
        handleGlasses={handleGlasses}
      ></P_Body>
    </div>
  );
};

export default MainPage;
