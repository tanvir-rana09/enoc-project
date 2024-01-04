import VipCard from "../Components/VipCard"

const Vip = () => {
  const data = [
    {
      img: "https://nice-oil.vip/upload/678f0280dea9fc2a420d31e4a486a42d.webp",
      dollar1: 2.99,
      dollar2: 99.00,
      dollar3: 59.00,
    },
    {
      img: "https://nice-oil.vip/upload/c797e8a153e47989de8c021f38403e4d.webp",
      dollar1: 14.99,
      dollar2: 450.00,
      dollar3: 150.00,
    },
    {
      img: "https://nice-oil.vip/upload/6a6036521b08af60ef96d31a771aa234.webp",
      dollar1: 74.99,
      dollar2: 2250.00,
      dollar3: 370.00,
    },
    {
      img: "https://nice-oil.vip/upload/d525354b13460ecdc02b7bbf58cb7b07.webp",
      dollar1: 299.99,
      dollar2: 9000.00,
      dollar3: 1300.00,
    },
    {
      img: "https://nice-oil.vip/upload/f73f50de18b0e84726c25b2b9c62408f.webp",
      dollar1: 699.99,
      dollar2: 21000.00,
      dollar3: 2999.00,
    },
    {
      img: "https://nice-oil.vip/upload/09665c1c892c9685ecdeee8a5cede147.webp",
      dollar1: 1499,
      dollar2: 50999.00,
      dollar3: 6499.00,
    },

    {
      img: "https://nice-oil.vip/upload/66992565dcb2e79711601bb6dc9a5af1.webp",
      dollar1: 4100.00,
      dollar2: 123000.00,
      dollar3: 15100.00,
    },
    {
      img: "https://nice-oil.vip/upload/7d3e4d2c4a100b85d01aaf1971a16942.webp",
      dollar1: 10000.00,
      dollar2: 300000.00,
      dollar3: 35100.00,
    },
    {
      img: "https://nice-oil.vip/upload/4c3998e390d9ff57aa21b36fefe9d21a.webp",
      dollar1: 25000.00,
      dollar2: 750000.00,
      dollar3: 80100.00,
    }
  ]
  return (
    <div className="to-white from-70% bg-gradient-to-b from-primary py-5 relative flex flex-col items-center h-64">
      <h1 className="bg-white/15 text-white w-full text-right pr-3 py-2">Upgrade log</h1>
      <div className="w-full flex flex-col gap-5 mt-5 pb-24">
        {
          data.map((item, i) => {
            return <VipCard key={i} num={i + 1} dollar1={item.dollar1} dollar3={item.dollar3} dollar2={item.dollar2} img={item.img} />
          })
        }
      </div>
    </div>
  )
}

export default Vip