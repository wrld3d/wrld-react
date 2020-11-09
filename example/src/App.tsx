import React from "react";

import { WrldMap } from "wrld-react";

const App = () => {
  return (
    <div>
      <WrldMap
        apiKey={"your_api_key_here"}
        contianerStyle={{
          width: "600px",
          height: "400px"
        }}
        onInitialStreamingComplete={(map) => {
          map.setView([56.459, -2.977], 16);
        }}
        mapOptions={{
          center: [56.459604, -2.977816]
        }}
      />
    </div>
  );
};

export default App;
