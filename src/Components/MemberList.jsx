import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Data from '../assets/Data/MemberData'; // Replace with your data
import MemberCard from './MemberCard'; // Replace with your card component


const MemberList = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentSlide((prevSlide) => (prevSlide + 1) % Data.length);
		}, 3000);

		return () => clearInterval(intervalId);
	}, []);

	// Duplicate items in Data array to fill the last row
	const filledData = [...Data];
	while (filledData.length % 4 !== 0) {
		filledData.push(...Data.slice(0, 4 - (filledData.length % 4)));
	}

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		initialSlide: 0,
		beforeChange: (current, next) => setCurrentSlide(next),
		autoplay: true,
		autoplaySpeed: 3000,
	};

	return (
		<div >
			<h1 className='text-2xl mt-10'>Member List</h1>
			<Slider {...settings}>
				{filledData.map((item, i) => (
					<div key={i}>
						<MemberCard dollar={item.dollar} mail={item.mail} />
					</div>
				))}
			</Slider>
		</div>
	);
};
export default MemberList;
// import { Swiper, SwiperSlide } from 'swiper/react';
// import Data from '../assets/Data/MemberData';
// import MemberCard from './MemberCard';

// const MemberList = () => {
//   return (
//     <div>
//       <h1 className='text-2xl mt-10'>Member List</h1>
//       <Swiper
//         direction="vertical"
//         slidesPerView={2}
//         spaceBetween={30}
//         mousewheel
//         pagination={{ clickable: true }}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         className='grid grid-cols-2 gap-3 py-2 h-[10rem] w-full overflow-hidden'
//       >
//         {Data.map((item, i) => (
//           <SwiperSlide key={i}>
//             <MemberCard dollar={item.dollar} mail={item.mail} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default MemberList;

