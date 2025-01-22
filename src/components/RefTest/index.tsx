import { useRef, useState } from "react";

const RefTest = () => {
  const countRef = useRef(0);
  const [render, setRender] = useState(false);
  let countVar = 0;

  console.log("렌더링 후 Ref ", countRef.current);
  console.log("렌더링 후 Var ", countVar);

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref up ", countRef.current);
  };

  const increaseVar = () => {
    countVar = countVar + 1;
    console.log("Var up ", countVar);
  };

  const doRender = () => {
    setRender(!render);
  };

  return (
    <>
      <header>
        <p>Ref: {countRef.current}</p>
        <p>Var: {countVar}</p>

        <div>
          <button onClick={increaseRef}>ref up</button>
          <button onClick={increaseVar}>Var up</button>
          <button onClick={doRender}>Render</button>
        </div>
      </header>
    </>
  );
};

export default RefTest;
