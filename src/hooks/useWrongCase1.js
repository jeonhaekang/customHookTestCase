import { useEffect } from "react";

const useWrongCase1 = (fn, deps) => {
  useEffect(() => {
    fn && fn();
  }, [deps, fn]);
};

export default useWrongCase1;
