import { useEffect, useState } from "react";
import Progress from ".";

const ExamplePage = () => {
  const [stop, setStop] = useState<boolean>(false);
  const getUserData = () => {
    // User api 호출 ....
    setStop(true);
  };
  useEffect(() => {
    getUserData();
  }, []);
  return <Progress stop={stop} />;
};

export default ExamplePage;
