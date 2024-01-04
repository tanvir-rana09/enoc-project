


const MiniItem = ({text,dollar,color='text-gray-400'}) => {
	return (
		<div className="place-self-center">
			<p className={color}>{text}</p>
			<p className="text-center font-semibold text-xl">{dollar}</p>
		</div>
	)
}

export default MiniItem