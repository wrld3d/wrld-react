import React, { useEffect, useRef, useState } from "react";

import Wrld from "wrld.js";

import { withDefaultProps } from "../helpers/withDefaultProps";

const defaultContainerId = "wrld-react-map";
let nextMapId = 0;

type WrldMapProps = React.PropsWithChildren<{
  apiKey: string;
  containerId: string;
  containerStyle?: React.CSSProperties;
  mapOptions?: Wrld.MapOptions;
  onInitialStreamingComplete?: (map: Wrld.Map) => void;
  onMapMount?: (map: Wrld.Map) => void;
}>;

const WrldMap: React.FC<WrldMapProps> = ({
  apiKey,
  children,
  containerId: _containerId,
  containerStyle,
  mapOptions,
  onInitialStreamingComplete,
  onMapMount
}: WrldMapProps) => {
  const [mounted, setMounted] = useState(false);
  const [containerId, setContainerId] = useState(_containerId);
  const divRef = useRef<HTMLDivElement>(null);
  let map: Wrld.Map;

  let elementContainerId = containerId;
  if (!mounted) {
    const existingElement = document.getElementById(elementContainerId);
    if (existingElement !== null) {
      if (containerId !== defaultContainerId) {
        console.warn(`WrldMap: An element is already using the id: "${containerId}", the containerId prop must be a unique value.`);
      }
      else {
        setContainerId(`${defaultContainerId}-${nextMapId}`);
        ++nextMapId;
      }
    }
  }

  useEffect(() => {
    setMounted(true);
    map = Wrld.map(containerId, apiKey, mapOptions);
    registerEvents(map);
    if (onMapMount) onMapMount(map);

    return () => {
      if (map) {
        unregisterEvents(map);
        map.remove();
      }
    };
  }, []);

  const registerEvents = (map: Wrld.Map) => {
    if (onInitialStreamingComplete) {
      map.on("initialstreamingcomplete", _onInitialStreamingComplete);
    }
  };

  const unregisterEvents = (map: Wrld.Map) => {
    if (onInitialStreamingComplete) {
      map.off("initialstreamingcomplete", _onInitialStreamingComplete);
    }
  };

  const _onInitialStreamingComplete = (): void => {
    if (onInitialStreamingComplete) onInitialStreamingComplete(map);
  };

  return (
    <div
      id={containerId}
      style={{
        position: "relative",
        ...containerStyle
      }}
      ref={divRef}
    >
      {children}
    </div>
  );
};

const defaultProps = {
  containerId: defaultContainerId,
  constianerStyle: {
    width: "600px",
    height: "400px"
  },
  mapOptions: {}
};

export default withDefaultProps(defaultProps, WrldMap);
