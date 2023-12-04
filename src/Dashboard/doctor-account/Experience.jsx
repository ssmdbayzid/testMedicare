import { BsTrash } from "react-icons/bs"

const Experience = ({experiences, setExperiences}) => {
  
  const remove = (id) =>{
    const updateExperiences = experiences.filter((item)=> item.id !== id)
    setExperiences(updateExperiences)
  }

  return (<div className="relative overflow-x-auto my-10">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                   Hospital
                </th>
                <th scope="col" className="px-6 py-3">
                    Position
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
            {experiences.map((data, index)=> <tr key={index} className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-0 py-4 w-[200px] font-medium text-gray-900  dark:text-white">
                    {data.hospital}
                </th>
                <td className="text-center py-4">
                    {data.position}
                </td>
                <td className="text-center py-4">
                    {data.startDate}
                </td>
                <td className="text-center py-4">
                    {data.endDate}
                </td>
                <td className=" text-center py-4">
                <div
                onClick={()=>remove(data.id)}
                title="Remove Experience"
                className="mx-auto w-8 rounded-full h-8 bg-red-200 hover:bg-red-500 text-white flex items-center justify-center cursor-pointer">
                <BsTrash className="text-lg"/ >
                </div>
                </td>
            </tr>)}
           
        </tbody>
    </table>
</div>)
}

export default Experience