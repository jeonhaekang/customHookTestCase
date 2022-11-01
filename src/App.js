import "./App.css";
import { useCallback, useState } from "react";
import useWrong from "./hooks/useWrongCase1";
import useSolutionCase1 from "./hooks/useSolutionCase1";
import useSolutionCase2 from "./hooks/useSolutionCase2";
import useDepsSolutionCase1 from "./hooks/useDepsSolutionCase1";
import useSolution from "./hooks/useSolution";
import useDynamic from "./hooks/useDynamic";

function solution() {
  console.log("solution1");
}

function App() {
  const [state, setState] = useState(0);

  useWrong(() => {
    console.log("wrong case1");
  }, []);

  useSolutionCase1(solution);

  useSolutionCase1(
    useCallback(() => {
      console.log("solution2");
    }, [])
  );

  useSolutionCase2(() => {
    console.log("solution3");
  });

  useDepsSolutionCase1(() => {
    console.log("deps solution1");
  }, []);

  useSolution(() => {
    console.log("solution");
  }, []);

  useDynamic(() => {
    console.log("dynamic useEffect");
  });

  useDynamic(() => {
    console.log("dynamic useLayoutEffect");
  }, "useLayoutEffect");

  return (
    <div className="App">
      <button
        onClick={() => {
          setState((prev) => prev + 1);
        }}
      >
        re-render
      </button>
    </div>
  );
}

export default App;
