import { FaSackDollar } from "react-icons/fa6";
import { ImExit } from "react-icons/im";
import { FaDownload } from "react-icons/fa";
import { PiBuildingsFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import AccountCom from "./AccountCom";
const Acoounts = () => {
	const data=[
		{
			link:'recharge',
			icon:<FaSackDollar/>,
			text:'Recharge'
		},
		{
			link:'withdraw',
			icon:<ImExit />,
			text:'Withdraw'
		},
		{
			link:'',
			icon:<FaDownload />,
			text:'App'
		},
		{
			link:'',
			icon:<PiBuildingsFill />,
			text:'Company Profile'
		}
	]
  return (
	<div className="bg-gradient-to-b from-primary to-white from-[70%] py-5">
		<div className="flex justify-around w-[95%] m-auto bg-[#CCDAFF] rounded-2xl py-4">
			{
				data.map((item,i)=>{
					return <Link to={item.link} key={i}>
						<AccountCom icon={item.icon} text={item.text}/>
					</Link>
				})
			}
		</div>
	</div>
  )
}

export default Acoounts