# wrld-react

> A React Component for wrld.js

[![NPM](https://img.shields.io/npm/v/wrld-react.svg)](https://www.npmjs.com/package/wrld-react)

## Install

```bash
npm install --save wrld-react
```

## Usage

```tsx
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
```

## License

BSD © [wrld3d](https://github.com/wrld3d)

See [LICENSE.md](LICENSE.md) for details.
