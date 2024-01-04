import Accounts from '../Components/Acoounts'
import Carousel from '../Components/Carousel'
import FloatingTexts from "../Components/FloatingTexts"
import MemberList from '../Components/MemberList'
import TaskHall from '../Components/TaskHall'


const Home = () => {
  return (
	<div className='mb-24'>
		<FloatingTexts/>
		<Accounts/>
		<Carousel/>
		<TaskHall/>
		<MemberList/>
	</div>
  )
}

export default Home