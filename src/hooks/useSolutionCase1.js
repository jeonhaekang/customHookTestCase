import { useEffect } from "react";

const useSolutionCase1 = (fn) => {
  useEffect(() => {
    fn && fn();
  }, [fn]);
};

export default useSolutionCase1;
