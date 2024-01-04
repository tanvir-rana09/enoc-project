import TaskCard from "./TaskCard"

const TaskHall = () => {
	const cards =[
		{
			img:"https://nice-oil.vip/upload/678f0280dea9fc2a420d31e4a486a42d.webp",
			dollar:99.00,
		},
		{
			img:"https://nice-oil.vip/upload/c797e8a153e47989de8c021f38403e4d.webp",
			dollar:199.00,
		},
		{
			img:"https://nice-oil.vip/upload/6a6036521b08af60ef96d31a771aa234.webp",
			dollar:299.00,
		},
		{
			img:"https://nice-oil.vip/upload/d525354b13460ecdc02b7bbf58cb7b07.webp",
			dollar:399.00,
		},
		{
			img:"https://nice-oil.vip/upload/f73f50de18b0e84726c25b2b9c62408f.webp",
			dollar:499.00,
		},
		{
			img:"https://nice-oil.vip/upload/09665c1c892c9685ecdeee8a5cede147.webp",
			dollar:599.00,
		},
		
		{
			img:"https://nice-oil.vip/upload/66992565dcb2e79711601bb6dc9a5af1.webp",
			dollar:699.00,
		},
		{
			img:"https://nice-oil.vip/upload/7d3e4d2c4a100b85d01aaf1971a16942.webp",
			dollar:799.00,
		},
		{
			img:"https://nice-oil.vip/upload/4c3998e390d9ff57aa21b36fefe9d21a.webp",
			dollar:899.00,
		}
	]
  return (
	<div>
		<div>
			<h1 className='text-2xl my-5'>Task Hall</h1>
			<div className="flex flex-col gap-4 mb-5">
				{
					cards.map((item,i)=>{
						return <TaskCard key={i} index={i} img={item.img} dollar={item.dollar}/>
					})
				}
			</div>
		</div>
	</div>
  )
}

export default TaskHall