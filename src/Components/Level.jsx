import Button from "./Button"
import MiniItem from "./MiniItem"
import { RiArrowRightDoubleFill } from "react-icons/ri";
const Level = ({num,icon,color}) => {
	return (
		<div className="relative px-3">
			<div className={`p-5 flex bg-gradient-to-r ${color} rounded-xl text-white gap-3`}>
				<div className="flex justify-around w-full bg-gray-800/15 rounded-2xl py-3">
					<MiniItem text='Team Size' color='text-white' dollar='0' />
					<MiniItem text='Team Recharge' color='text-white' dollar='$0.00' />
				</div>
				<div className=" flex flex-col gap-2">
					<p className="text-xl text-center font-semibold uppercase tracking-widest">Level {num}</p>
					<Button text='Details' icon={<RiArrowRightDoubleFill />} />
				</div>
			</div>
			<div className="absolute z-50 -inset-3">
				<img className="w-14" src={icon} />
			</div>
		</div>
	)
}

export default Level