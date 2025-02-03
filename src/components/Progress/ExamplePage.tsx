import { useEffect, useState } from "react";
import Progress from ".";

const sleep = async (time: number): Promise<void> =>
  await new Promise((resolve) => setTimeout(() => resolve(), time));

const ExamplePage = () => {
  const [stop, setStop] = useState<boolean>(false);
  const getUserData = async () => {
    // User api 호출 ....
    await sleep(3000);
    setStop(true);
  };
  useEffect(() => {
    getUserData();
  }, []);
  return <Progress stop={stop} />;
};

export default ExamplePage;
