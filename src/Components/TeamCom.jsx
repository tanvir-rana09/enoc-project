import MiniItem from "./MiniItem"
import icon1 from '../assets/Images/badge.png'
import icon2 from '../assets/Images/medal.png'
import icon3 from '../assets/Images/ribbon.png'
import Level from "./Level"
const TeamCom = () => {
	const data =[
		{
			team:"Team Size",
			dollar:0
		},
		{
			team:"Team Recharge",
			dollar:'$0.00'
		},
		{
			team:"Team Withdraw",
			dollar:'$0.00'
		},
		{
			team:"New Team",
			dollar:0
		},
		{
			team:"First Time Recharge",
			dollar:'$0.00'
		},
		{
			team:"First Withdrawal",
			dollar:'$0.00'
		},
	]
	const icons =[
		{
			icon:icon1,
			color:'to-[#FBC833] from-yellow-200'
		},
		{
			icon:icon2,
			color:'to-[#FAA515] from-yellow-300'
		},
		{
			icon:icon3,
			color:'to-[#FD705C] from-yellow-400'
		},
	]
  return (
	<div>
		<div className="grid grid-cols-3 place-items-center bg-gray-200 w-[95%] m-auto rounded-2xl p-3 gap-3 mb-5">
			{
				data.map((item,i)=>{
					return <MiniItem key={i} text={item.team} dollar={item.dollar }/>
				})
			}
		</div>
		<div className="flex flex-col gap-5 mb-20 px-3">
			{
				icons.map((item,i)=>{
					return <Level key={i} num={i+1} icon={item.icon} color={item.color}/>
				})
			}
		</div>
	</div>
  )
}

export default TeamCom