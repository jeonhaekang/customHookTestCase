import { useEffect } from "react";

const Test = (props) => {
  const { cb } = props;

  useEffect(() => {
    console.log("test component mount");

    return () => {
      console.log("test component unmount");
    };
  }, [cb]);

  return <div>테스트 컴포넌트</div>;
};

export default Test;
