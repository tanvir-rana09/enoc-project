import { useEffect, useState } from "react";

const Carousel = () => {
	const images = [
		'https://nice-oil.vip/upload/501df97d28ddcd9bab99d89198d9d172.webp',
		'https://nice-oil.vip/upload/f8bac169a0d0f726d5f6b571c7f37d27.webp',
		'https://nice-oil.vip/upload/e9350493a252144fc1f28c53019de3d5.webp',
		'https://nice-oil.vip/upload/508bfab9969d05f106851b5f0a8e0e4a.webp',
		'https://nice-oil.vip/upload/d928f54684eb844e3f54fa3584ee035c.webp'
	]
	const [currentImage, setCurrentImage] = useState(0);

	const next = () => {
		setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
	};

	useEffect(() => {
		const intervalId = setInterval(next, 3000);

		return () => clearInterval(intervalId);
	}, []);


	return (
		<div className="w-[95%] m-auto rounded-2xl overflow-hidden">
			<div className="flex overflow-hidden h-[15rem] w-full  relative">
				{images.map((image, index) => (
					<div
						key={index}
						className={`opacity-0 transition ease-in-out duration-1000 w-full h-full absolute ${index === currentImage ? 'opacity-100' : ''}`}
					>
						<img className='w-full h-full object-cover' src={image} alt={`Slide ${index + 1}`} />
					</div>
				))}
			</div>
			<div className='flex gap-2 absolute top-[29rem] justify-center items-center w-full'>
				{
					images.map((img, i) => {
						return <div
							onClick={() => setCurrentImage(i)}
							key={i} className={`h-1 w-8 ${currentImage == i ? 'bg-gray-900' : 'bg-gray-500'} z-50 rounded-full transition ease-in-out duration-1000 cursor-pointer`}>

						</div>
					})
				}
			</div>
		</div>

	)
}

export default Carousel