import React from "react";

import { Wrld, WrldMap } from "wrld-react";

declare class WrldIndoorControl {
  constructor(elementId: string, map: Wrld.Map);
}

const App = () => {
  return (
    <div>
      <WrldMap
        apiKey={"your_api_key_here"}
        containerStyle={{
          width: "600px",
          height: "400px"
        }}
        mapOptions={{
          center: [56.459604, -2.977816],
          indoorsEnabled: true
        }}
        onMapMount={(map) => {
          new WrldIndoorControl("wrld-indoor-control", map);
        }}
      >
        <div
          id={"wrld-indoor-control"}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            bottom: "40px"
          }}
        >
        </div>
      </WrldMap>
    </div>
  );
};

export default App;