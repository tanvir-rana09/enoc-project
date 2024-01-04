
const Button = ({text,icon=null}) => {
  return (
	<div>
		<button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-1 rounded-full flex items-center">{text} {icon}</button>
	</div>
  )
}

export default Button