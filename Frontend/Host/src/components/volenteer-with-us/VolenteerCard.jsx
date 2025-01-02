
import React from 'react'

const VolenteerCard = () => {
  return (
    <div
      className="w-full h-[64vh]  flex items-center justify-center bg-cover bg-center relative bg-customBlue "
      style={{ backgroundImage: "URL(https://demo.joomshaper.com/2017/hope/images/2017/09/13/become-a-volunteer-bg.png)", flexDirection:"column",gap:"20px", paddingTop:"100px", paddingBottom:"70px" }}
    >
      <h1 className="relative z-10 text-white text-center text-[4rem]  font-black tracking-tight leading-snug">
        Become a Volunteer
      </h1>
      <h4 className=" relative z-10 text-white text-center text-[1.6rem]  font-black tracking-tight leading-snug" style={{fontWeight:"400"}}>
        Join us for a better life and beautiful future
      </h4>
      <button className="relative z-10 text-black text-center text-[1.1rem] font-black tracking-tight leading-snug hover: bg-black " style={{backgroundColor:"white", padding:"15px 38px", fontWeight:"700", marginTop:"40px", borderRadius:"4px"}}>Join Us Now</button>
    </div>
  )
}

export default VolenteerCard