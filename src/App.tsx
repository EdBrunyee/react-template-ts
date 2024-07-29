import React, { useState, useEffect } from "react";
import { spendDataArrayProps } from "./types";
import HeaderComponent from "./components/header";
import { SpendTable } from "./components/spendTable";
import { data } from "./data"; 

const App: React.FC = () => {
  const [spendData, setSpendData] = useState<spendDataArrayProps>([]);

  useEffect(() => {
    // Strangly thunderclient is working but fetch not so Simulating fetching data from an API
    setSpendData(data);
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen items-center bg-[#eeeeee]">
      <div className='bg-[#ffffff] w-full'>
        <HeaderComponent />
      </div>
      <div className='max-w-[73rem] w-full'>
        <SpendTable spendData={spendData} SetSpendData={setSpendData} />
      </div>
    </div>
  );
}

export default App;
