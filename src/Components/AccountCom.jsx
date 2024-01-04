

const AccountCom = ({ icon, text }) => {
	return (
		<div>
			<div className="flex flex-col items-center gap-1">
				<span className="bg-primary p-3 text-3xl flex justify-center items-center rounded-full text-slate-100 ">{icon}</span>
				<p className="text-sm ">{text}</p>
			</div>
		</div>
	)
}

export default AccountCom