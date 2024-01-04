import { useState } from "react"
import Button from "./Button"


const TaskCom = () => {
	const [show, setShow] = useState(true)


	return (
		<div className="to-white from-70% bg-gradient-to-b from-primary py-5 relative flex flex-col items-center h-44">
			<div className="bg-[#0141E5] w-[95%] m-auto px-2 py-5 rounded-xl text-white -mt-2">
				<div>

				</div>
				<div className="flex justify-around">
					<div className="flex flex-col items-center">
						<p>All tasks for today</p>
						<p>0</p>
					</div>
					<div className="flex flex-col items-center">
						<p>Today Remaining Task</p>
						<p>0</p>
					</div>
				</div>
			</div>
			<div className="bg-white absolute w-[95%] top-32 shadow-lg p-2 rounded-lg">
				<div className="flex justify-around mb-5">
					<button className={show ? 'text-primary font-semibold' : ''} onClick={() => setShow(true)}>In progress</button>
					<button className={show ? '' : 'text-primary font-semibold'} onClick={() => setShow(false)}>Completed</button>
				</div>
				<div>
					{
						show ? 
						<div className="flex flex-col justify-end items-end gap-3">
							<div className="flex bg-gray-200 p-3 gap-2 rounded-xl ">
								<div className="w-32 rounded-lg overflow-hidden">
									<img src="https://nice-oil.vip/upload/e3ce65120e94bf16995d4fe75902da35.webp" />
								</div>
								<div className=" flex flex-col text-justify">
									<p>Forward the link to the registration platform and you will be rewarded</p>
									<div className="flex justify-between text-sm">
									<p className="text-gray-400">Task Benefits</p>
									<p className="text-green-500">0.50 USDT</p>
									</div >
								</div>
							</div>
							<Button text='To Complete'/>
						</div> : <p className="text-center ">No Data</p>
					}
				</div>
			</div>
		</div>
	)
}

export default TaskCom