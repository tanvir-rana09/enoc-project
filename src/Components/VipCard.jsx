import Button from './Button'
import icon from '../assets/Images/vip-pass.png'
const VipCard = ({ num, dollar1, dollar2, dollar3, img }) => {
	return (
		<div>
			<div className='mx-auto relative overflow-hidden rounded-2xl bg-gray-100 w-[95%]'>
				<div className='flex justify-between '>
					<div className='flex justify-between items-center p-3 pt-9 gap-3 w-full'>
						<div>
							<img className='w-24' src={img} />
						</div>
						<div className='flex flex-col justify-between w-full gap-1'>
							<div className='flex justify-between items-center border-b text-sm py-1.5'>
								<p>Daily tasks</p>
								<p className=' font-semibold'>1</p>
							</div>
							<div className='flex justify-between items-center border-b text-sm py-1.5'>
								<p>Simple interest</p>
								<p className='text-green-500 font-semibold'>${dollar1}</p>
							</div>
							<div className='flex justify-between items-center border-b text-sm py-1.5'>
								<p>Daily profit</p>
								<p className=' font-semibold'>${dollar1}</p>
							</div>
							<div className='flex justify-between items-center border-b text-sm py-1.5'>
								<p>The total profit</p>
								<p className=' font-semibold'>${dollar2}</p>
							</div>
							<div className='w-full flex justify-center mt-2 -ml-[2rem]'>
								<Button text={`$${dollar3} USDT Unlock Now`} />
							</div>
						</div>
					</div>
				</div>
				<div className='flex items-center absolute -top-3 left-0 w-full justify-between'>
					<div>
						<img className='w-14' src={icon} />
					</div>
					<div className='text-xl px-5 py-1 rounded-bl-2xl font-semibold bg-[#fe9e3f] text-[#E20E64] -mt-1'>{num}</div>
				</div>
			</div>

		</div>
	)
}

export default VipCard