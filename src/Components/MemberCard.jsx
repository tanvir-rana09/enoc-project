

const MemberCard = ({dollar,mail}) => {
  return (
	<div>
		<div className="bg-slate-200 p-2 rounded-xl m-1">
			<p className="text-xl font-semibold tracking-wider text-blue-500/90">+${dollar}.00</p>
			<p className="text-sm text-gray-500">{mail}</p>
		</div>
	</div>
  )
}

export default MemberCard