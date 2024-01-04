import Button from "./Button"

const Recharge = () => {
	return (
		<div className="flex flex-col gap-5 justify-center items-center shadow-lg rounded-md py-5 px-3">
			<div className="shadow-lg">
				<img title="TYdn2CAiyLWLnZg67dfgtpURPJSZ3TwFLdaZN" src="https://chart.googleapis.com/chart?cht=qr&chl=MAILTO%3Atanvir.rana.soikat%40gmail.com%20&chs=180x180&choe=UTF-8&chld=L|2" alt="qr code" />
			</div>
			<div className="w-full flex bg-gray-100 rounded-full pl-5 ">
				<input className="w-full" type="text" value='TYdn2CAiyLWLnZg67dfgtpURPJSZ3TwFLdaZN' disabled />
				<Button text='copy' />
			</div>
			<div className="flex flex-col gap-3 text-sm">
				<p className="text-center">Please do not recharge other non-TRC20 (USDT) assets. The funds will arrive in your account in about 1 to 3 minutes after recharging.</p>
				<p className="text-center text-red-500">If it has not arrived for a long time, please refresh this page</p>
			</div>
			<div>
				<Button text='Recharge Complated' />
			</div>
		</div>
	)
}

export default Recharge