import React, { useState, useEffect } from "react";
import { spendDataArrayProps } from "./types";
import HeaderComponent from "./components/header";
import { SpendTable } from "./components/spendTable";

const App: React.FC = () => {
  const [spendData, setSpendData] = useState<spendDataArrayProps>([]);

  useEffect(() => {

    const fetchSpendData = async () => {
      const response = await fetch('https://expenses-backend-mu.vercel.app/expenses', {
        method: 'GET',
        headers: {
          'Username': 'edward.brunyee'
        }
      })
      const json = await response.json()

      if (response.ok) {
        setSpendData(json)
      }
    }
    fetchSpendData()
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
