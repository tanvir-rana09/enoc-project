import { BiSupport } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
const Head = () => {
  return (
    <div>
      <div className="flex justify-between bg-primary px-2 py-3">
        <div className="flex items-center gap-2">
          <img className="w-10 rounded-full" src="https://nice-oil.vip/upload/19826e696a5085db9f7f0ea3ae507ede.webp"/>
          <h1 className="uppercase font-semibold tracking-widest text-white text-xl">enoc</h1>
        </div>
        <div className="flex items-center gap-3 text-white  ">
          <span className="bg-gray-400/60 p-2 rounded-full cursor-pointer"><TfiEmail /></span>
          <span className="bg-gray-400/60 p-2 rounded-full cursor-pointer"><BiSupport /></span>
        </div>
      </div>
    </div>
  )
}

export default Head