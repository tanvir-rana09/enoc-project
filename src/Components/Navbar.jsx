import { RiHome3Line } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { RiVipDiamondLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div >
      <nav className="flex justify-center w-full">
        <ul className="flex justify-between items-center shadow-xl px-5 fixed z-50 top-[93%] left-38 bg-white py-4 sm:w-[46rem] w-full border">
          <li >
            <NavLink className={({isActive})=>isActive?`flex items-center flex-col font-extendfont7 text-primary`:`flex items-center flex-col font-extendfont7`} to=''>
              <RiHome3Line size={24}/>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive?`flex items-center flex-col font-extendfont7 text-primary`:`flex items-center flex-col font-extendfont7`}  to='task'>
              <FaTasks size={20}/>
              Task
            </NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive?`flex items-center flex-col font-extendfont7 text-primary`:`flex items-center flex-col font-extendfont7`}  to='team'>
              <HiUserGroup size={20}/>
              Team
            </NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive?`flex items-center flex-col font-extendfont7 text-primary`:`flex items-center flex-col font-extendfont7`}  to='vip'>
              <RiVipDiamondLine size={20}/>
              VIP
            </NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive?`flex items-center flex-col font-extendfont7 text-primary`:`flex items-center flex-col font-extendfont7`}  to='me'>
              <CgProfile size={23}/>
              me
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar