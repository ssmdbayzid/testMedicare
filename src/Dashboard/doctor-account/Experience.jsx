import { BsTrash } from "react-icons/bs"

const Experience = ({qualification, setQualification}) => {
  
  const remove = (id) =>{
    const updateQuakification = qualification.filter((item)=> item.id !== id)
    setQualification(updateQuakification)
  }
  return (<div className="relative overflow-x-auto my-10">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                   Degree
                </th>
                <th scope="col" className="px-6 py-3">
                    University
                </th>
                <th scope="col" className="px-6 py-3">
                    Start Date
                </th>
                <th scope="col" className="px-6 py-3">
                    End Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Delete
                </th>
            </tr>
        </thead>
        <tbody>
            {qualification.map((data, index)=> <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {data.degree}
                </th>
                <td className="px-6 py-4">
                    {data.university}
                </td>
                <td className="px-6 py-4">
                    {data.startDate}
                </td>
                <td className="px-6 py-4">
                    {data.endDate}
                </td>
                <td className="px-6 py-4">
                <div
                onClick={()=>remove(data.id)}
                title="Remove Qualification"
                className="w-8 rounded-full h-8 bg-red-200 hover:bg-red-500 text-white flex items-center justify-center cursor-pointer">
                <BsTrash className="text-lg"/ >
                </div>
                </td>
            </tr>)}
           
        </tbody>
    </table>
</div>)
}

export default Experience