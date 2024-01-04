import { RiArrowRightDoubleFill } from "react-icons/ri";
import { BiSolidLock } from "react-icons/bi";

const TaskCard = ({img,dollar,index}) => {
  return (
	<div>
    <div className="flex bg-gray-200 rounded-2xl items-center">
      <div className="relative ">
        <img className="w-32 p-2" src={img} />
        <div className="rounded-2xl absolute top-0 left-0 bg-slate-600/50 w-full h-full flex justify-center items-center text-4xl text-white"><BiSolidLock /></div>
      </div>
      <div className="px-2">
        <p className="text-sm text-gray-400">Unlock amount</p>
        <p className="text-xl font-semibold">${dollar}.00</p>
        <p className="text-primary font-semibold text-sm">VIP {index+1}</p>
        <div className="text-2xl"><RiArrowRightDoubleFill /></div>
      </div>
    </div>
  </div>
  )
}

export default TaskCard