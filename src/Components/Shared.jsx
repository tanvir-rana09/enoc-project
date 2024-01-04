import { useRef } from 'react'
import Banner from '../assets/Images/Banner.jpg'
import Button from './Button'
const Shared = () => {
	const ref = useRef()
	const ref2 = useRef()
	const copy = () => {
		ref.current.select()
		navigator.clipboard.writeText(ref.current.value);
		alert("Copied Successfully")
		
	}
	const copy2 = () => {
		ref2.current.select()
		navigator.clipboard.writeText(ref2.current.value);
		alert("Copied Successfully")
		
	}
	return (
		<div className="to-white from-70% bg-gradient-to-b from-primary py-5 relative flex flex-col items-center h-64">
			<div className='h-44 w-[95%] rounded-2xl overflow-hidden relative'>
				<img className='w-full h-full object-cover' src={Banner} />
			</div>
			<div className='absolute left-10 top-12 text-white'>
				<p>Invition Code : </p>
				<div className='flex items-center gap-2'>
					<input ref={ref} className='text-3xl bg-transparent w-32' value='52298742' disabled />
					<div onClick={copy}>
						<Button text='Copy' />
					</div>

				</div>
				<p>Share your referral link and start earning</p>
				<div className='flex items-center gap-2'>
					<input ref={ref2} className='text-2xl bg-transparent' value='https://nice-oil.vip/cXztE3' disabled />
					<div onClick={copy2}>
					<Button text='Copy' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Shared