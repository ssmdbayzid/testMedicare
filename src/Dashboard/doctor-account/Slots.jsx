import moment from "moment"
import { BsTrash } from "react-icons/bs"


const Slots = ({slots, setSlots}) => {
  
  const remove = (id) =>{
    const removeSlot = slots.filter((item)=> item.id !== id)
    setSlots(removeSlot)
  }
  const time = "12:00"
  console.log(moment(time, "HH:mm"))
  
  return (<div className="relative overflow-x-auto my-10">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                   Day
                </th>
                <th scope="col" className="px-6 py-3">
                    Starting Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Ending  Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Delete
                </th>
            </tr>
        </thead>
        <tbody>
            {slots.map((data, index)=><tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {data.day}
                </th>
                <td className="px-6 py-4">
                    {moment(data.startingTime, "HH:mm").format("hh:mm A")}
                </td>
                <td className="px-6 py-4">
                {moment(data.endingTime, "HH:mm").format("hh:mm A")}
                </td>

                <td className="px-6 py-4">
                <div
                onClick={()=>remove(data.id)}
                title="Remove Qualification"
                className="w-8 rounded-full h-8 bg-red-200 hover:bg-red-500 text-white flex items-center justify-center cursor-pointer">
                <BsTrash className="text-lg"/>
                </div>
                </td>
            </tr>)}
           
        </tbody>
    </table>
</div>)
}

export default Slots

/* 
            */