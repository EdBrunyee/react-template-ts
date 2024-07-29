import { spendTableProps } from "../types"


export const SpendTable: React.FC<spendTableProps> = ({spendData }) => {

  const headers = spendData.length > 0 ? Object.keys(spendData[0]) : [];
  
  return (
    <div className="flex flex-col w-[100%] overflow-x-auto p-4">
      <table className="shadow-md">
        <thead className="bg-yellow-400 text-white">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {spendData.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.merchant}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.amount}</td>
              <td className="px-6 py-4 whitespace-nowrap w-[40%] text-wrap">{item.description}</td>
              <td className="px-6 py-4 whitespace-nowrap">{new Date(item.date).toLocaleDateString()}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status === 'approved' ? 'bg-green-100 text-green-800' : item.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}