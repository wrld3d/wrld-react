# wrld-react

> A React Component for wrld.js

[![NPM](https://img.shields.io/npm/v/wrld-react.svg)](https://www.npmjs.com/package/wrld-react)

## Install

```bash
npm install --save wrld-react
```

## JavaScript Usage

```jsx
/* globals WrldIndoorControl */

import { WrldMap } from "wrld-react";

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
```

```html
<!-- Add this stylesheet to the head -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.1/leaflet.css" rel="stylesheet"/>

<!-- Add this stylesheet and these scripts to the head if you wish to use the WrldIndoorControl widget -->
<link href="https://cdn-webgl.wrld3d.com/wrldjs/addons/resources/latest/css/wrld.css" rel="stylesheet"/>
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"></script>
<script src="https://cdn-webgl.wrld3d.com/wrldjs/addons/indoor_control/latest/indoor_control.js"></script>
```

## TypeScript Usage

If you are using TypeScript you will need to add declarations for any widgets you wish to use. We are working to add these declarations to so you won't have to.

```tsx
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
```

## License

BSD © [wrld3d](https://github.com/wrld3d)

See [LICENSE.md](LICENSE.md) for details.
