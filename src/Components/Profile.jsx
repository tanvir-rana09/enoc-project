import { FaSackDollar } from "react-icons/fa6";
import { ImExit } from "react-icons/im";
import { Link } from "react-router-dom";
import Button from './Button';
import AccountCom from "./AccountCom";
import { BsGraphUpArrow } from "react-icons/bs";
const Profile = () => {
	const data = [
		{
			link: '/recharge',
			icon: <FaSackDollar />,
			text: 'Recharge'
		},
		{
			link: '/withdraw',
			icon: <ImExit />,
			text: 'Withdraw'
		},
		{
			link: '',
			icon: <BsGraphUpArrow />,
			text: 'Financial Records'
		},
		
	]
	return (
		<div className="to-white from-70% bg-gradient-to-b from-primary py-5 h-56 flex flex-col gap-5">
			<div className="flex items-center justify-between text-white ">
				<div className="flex flex-col items-start gap-1">
					<h1 className="sm:text-2xl">Hi,tanvir.rana.soikat@gmail.com</h1>
					<p className="from-[#FBB07B] bg-gradient-to-r to-yellow-600 py-0.5 px-3 rounded-full">VIP0</p>
				</div>
				<div><Button text='Account' /></div>
			</div>
			<div className="flex justify-around bg-gray-100/5 w-[95%] m-auto rounded-2xl py-5 text-white">
				<div className="flex flex-col items-center">
					<p>Total Balance (USDT)</p>
					<p>0</p>
				</div>
				<div className="flex flex-col items-center">
					<p>Recharge Amount (USDT)</p>
					<p>0</p>
				</div>
			</div>
			<div className="flex justify-around w-[95%] m-auto bg-white shadow-lg rounded-2xl py-4">
				{
					data.map((item, i) => {
						return <Link to={item.link} key={i}>
							<AccountCom icon={item.icon} text={item.text} />
						</Link>
					})
				}
			</div>
		</div>
	)
}

export default Profile