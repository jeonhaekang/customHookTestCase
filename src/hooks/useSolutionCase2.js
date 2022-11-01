import { useEffect, useRef } from "react";

const useSolutionCase2 = (fn) => {
  const _fn = useRef(fn);
  _fn.current = fn;

  useEffect(() => {
    _fn.current && _fn.current();
  }, []);
};

export default useSolutionCase2;
