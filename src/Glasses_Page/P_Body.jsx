import React from "react";
import P_Footer from "./P_Footer";

const P_Body = (props) => {
  const { glasses, handleGlasses, layer, handleLayer } = props;
  return (
    <div className="relative border-4 border-blue-100">
      <div className="relative w-full h-full">
        <img
          src="./images/glassesImage/bg.jpg"
          alt
          srcSet
          classname="absolute top-0 left-0 w-full opacity-40"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="flex justify-around relative">
          {/* //*after */}
          <div className="w-1/4 relative border-4 border-red-100">
            <img
              src="./images/glassesImage/model.jpg"
              alt=""
              className="w-full"
            />
            <img
              src={glasses}
              className="absolute"
              style={{ left: "21%", top: "25%", width: "60%" }}
              alt=""
              srcset=""
            />
            {/* //*layer  */}
            {layer}
          </div>
          {/* //*be4 */}
          <div className="w-1/4 relative">
            <img
              src="./images/glassesImage/model.jpg"
              alt=""
              className="absolute w-full"
            />
          </div>
        </div>
      </div>
      <P_Footer
        glasses={glasses}
        handleGlasses={handleGlasses}
        handleLayer={handleLayer}
      ></P_Footer>
    </div>
  );
};

export default P_Body;
