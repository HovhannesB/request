import { useEffect, useRef } from "react";
import config from "../config";

const useLegacyEffect = (cb: any, deps: any) => {
  const isMountedRef = useRef(config.environment !== "development");

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return undefined;
    }

    return cb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useLegacyEffect;
