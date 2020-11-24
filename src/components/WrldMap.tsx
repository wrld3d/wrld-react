import React, { useEffect, useRef } from "react";

import Wrld from "wrld.js";

import { withDefaultProps } from "../helpers/withDefaultProps";

type WrldMapProps = React.PropsWithChildren<{
  apiKey: string;
  containerId: string;
  contianerStyle?: React.CSSProperties;
  mapOptions?: Wrld.MapOptions;
  onInitialStreamingComplete?: (map: Wrld.Map) => void;
  onMapMount?: (map: Wrld.Map) => void;
}>;

const WrldMap: React.FC<WrldMapProps> = ({
  apiKey,
  children,
  containerId,
  contianerStyle,
  mapOptions,
  onInitialStreamingComplete,
  onMapMount
}: WrldMapProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  let map: Wrld.Map;

  useEffect(() => {
    map = Wrld.map(containerId, apiKey, mapOptions);
    registerEvents(map);
    if (onMapMount) onMapMount(map);

    return () => {
      unregisterEvents(map);
      divRef.current?.childNodes.forEach((child) => {
        if ((child as Element).id.indexOf("wrld-map-container") === 0) {
          divRef.current?.removeChild(child);
        }
      });
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
        ...contianerStyle
      }}
      ref={divRef}
    >
      {children}
    </div>
  );
};

const defaultProps = {
  containerId: "wrld-react-map",
  constianerStyle: {
    width: "600px",
    height: "400px"
  },
  mapOptions: {}
};

export default withDefaultProps(defaultProps, WrldMap);
