

const Withdraw = () => {
	const submithandle = (e)=>{
		e.preventDefault()
	}
	return (
		<div>
			<form 
			onSubmit={submithandle}
			className="flex flex-col gap-3 shadow-lg p-5">
				<div>
					<h2 className="text-2xl">Withdrawal account</h2>
					<p className="text-red-500">24 hours withdrawal</p>
				</div>
				<div className="p-3 bg-gray-100 w-full rounded-xl">
					<p>Total Balance</p>
					<p className="text-xl font-semibold cl">0.00 USDT</p>
				</div>
				<div>
					<p>Withdrawal Method : USDT</p>
				</div>
				<div>
					<input className="bg-gray-100 w-full rounded-xl py-3 px-4 outline-none" type="text" placeholder="Quota 2.8-99999" />
				</div>
				<div>
					<textarea className="bg-gray-100 w-full rounded-xl px-4 py-2 outline-none resize-none" cols="30" rows="3" placeholder="Tron Address"></textarea>
				</div>
				<div>
					<input className="bg-gray-100 w-full -mt-2 rounded-xl py-3 px-4 outline-none" type="password" placeholder="Password"/>
				</div>
				<div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-center text-white py-2 rounded-full">
					<button className="w-full" type="submit">Confirm</button>
				</div>
			</form>
		</div>
	)
}

export default Withdraw