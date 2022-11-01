import { useEffect } from "react";

const useDepsSolutionCase1 = (fn, deps) => {
  useEffect(() => {
    fn && fn();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useDepsSolutionCase1;
