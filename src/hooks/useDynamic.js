import React, { useRef } from "react";

const useDynamic = (fn, type = "useEffect") => {
  const _fn = useRef(fn);

  React[type](() => {
    _fn.current && _fn.current();
  }, []);
};

export default useDynamic;
