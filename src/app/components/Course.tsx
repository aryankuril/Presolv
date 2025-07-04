"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from './Button';
import { useRouter } from "next/navigation";
import { Avatar, Typography, IconButton, Button as MUIButton } from "@mui/material";

const Course = ({ username = "User" }) => {
  const [darkMode, setDarkMode] = useState(true);
  const router = useRouter(); 

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-black", "text-white");
      document.body.classList.remove("bg-white", "text-black");
    } else {
      document.body.classList.add("bg-white", "text-black");
      document.body.classList.remove("bg-black", "text-white");
    }
  }, [darkMode]);

  const handleToggle = () => setDarkMode(!darkMode);

  const completion = 50;

  const modules = [
    { id: 1, title: "Unravelling the Past: ADR and ODR through History", duration: "21 Mins", free: true },
    { id: 2, title: "ODR in Action: Integrating ODR into Daily Life", duration: "21 Mins", free: true },
    { id: 3, title: "The Art of Negotiation: Navigating Conflicts through ODR", duration: "21 Mins", free: true },
    { id: 4, title: "Mediation Magic: Unlocking Resolution Possibilities", duration: "21 Mins", free: false },
    { id: 5, title: "Virtual Resolution: Exploring ODR in the Arbitration Landscape", duration: "21 Mins", free: false },
    { id: 6, title: "Building Bridges, Not Walls: The Digital Toolbox", duration: "21 Mins", free: false },
    { id: 7, title: "Embracing the Future: Innovations in ODR", duration: "21 Mins", free: false },
  ];

  const caseAlerts = [
    { id: 1, text: "Unravelling the Past: ADR and ODR through History", img: "/images/case.png" },
    { id: 2, text: "Unravelling the Past: ADR and ODR through History", img: "/images/case.png" },
    { id: 3, text: "Unravelling the Past: ADR and ODR through History", img: "/images/case.png" },
    { id: 4, text: "Unravelling the Past: ADR and ODR through History", img: "/images/case.png" },
  ];

  return (

           <div className={`min-h-screen ${darkMode ? "dark-text" : "light-text"}`}>
         
         {/* Header */}
         <div className="containerr flex justify-between items-center w-full px-4 sm:px-6 py-3 bg-transparent flex-wrap">
     
     {/* Left Logo */}
     <div 
       className="flex items-center space-x-1 cursor-pointer mb-2 sm:mb-0" 
       onClick={() => router.push("/")}
     >
       {darkMode ? (
         <Image src="/images/logo.png" alt="Logo" width={140} height={70} className="w-auto h-8 sm:h-10 md:h-12" />
       ) : (
         <Image src="/images/logo-c.png" alt="Logo" width={140} height={70} className="w-auto h-8 sm:h-10 md:h-12" />
       )}
     </div>
   
     {/* Right Icons */}
     <div className="flex items-center space-x-4 sm:space-x-5 flex-wrap">
   
       {/* Home Icon */}
       <div onClick={() => router.push("/")} className="cursor-pointer">
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
           <path 
             d="M29.25 12.99L17.01 0.75C16.49 0.23 15.8 -0.06 15.06 -0.06C14.32 -0.06 13.63 0.23 13.1 0.75L0.87 12.98C-0.21 14.07 -0.21 15.82 0.87 16.89C1.36 17.39 2.01 17.67 2.7 17.7H3.27V26.71C3.27 28.49 4.72 29.94 6.5 29.94H11.29C11.78 29.94 12.17 29.55 12.17 29.06V22C12.17 21.19 12.83 20.53 13.65 20.53H16.47C17.28 20.53 17.94 21.19 17.94 22V29.06C17.94 29.55 18.34 29.94 18.82 29.94H23.61C25.39 29.94 26.84 28.49 26.84 26.71V17.7H27.29C28.03 17.7 28.73 17.42 29.25 16.89C30.32 15.82 30.32 14.07 29.25 12.99Z"
             fill={darkMode ? "white" : "black"}
           />
         </svg>
       </div>
   
       {/* Dark Mode Toggle */}
   <div className="flex flex-col items-center sm:flex-row-reverse sm:items-center sm:space-x-reverse sm:space-x-2 space-y-1 sm:space-y-0">
     
     {/* Toggle Button with Smooth Circle Animation */}
     <button 
       className={`w-14 h-8 rounded-full flex items-center px-1 transition-all duration-300 relative ${darkMode ? "bg-[#007AFF]" : "bg-[#FBB04C]"}`} 
       onClick={handleToggle}
     >
   
       {/* Icon Inside Circle */}
       <div 
         className={`w-6 h-6 rounded-full bg-white flex items-center justify-center absolute top-1 left-1 transition-all duration-300 ${darkMode ? "translate-x-6" : ""}`}
       >
         {darkMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="none">
     <g clip-path="url(#clip0_747_249)">
       <path d="M19.527 11.3772C19.3225 11.3261 19.118 11.3772 18.9391 11.505C18.2746 12.0673 17.5078 12.5274 16.6643 12.8341C15.872 13.1408 15.003 13.2942 14.0829 13.2942C12.0126 13.2942 10.1212 12.4507 8.76656 11.0961C7.41192 9.74144 6.56847 7.85006 6.56847 5.77977C6.56847 4.91075 6.72182 4.0673 6.97741 3.30053C7.25857 2.48263 7.66751 1.74141 8.20426 1.10244C8.43429 0.821284 8.38317 0.412337 8.10202 0.182304C7.9231 0.0545085 7.71863 0.0033901 7.51416 0.0545085C5.34163 0.64237 3.45025 1.94589 2.09561 3.68391C0.792091 5.39638 -0.000244141 7.51779 -0.000244141 9.84368C-0.000244141 12.6296 1.12436 15.16 2.96462 17.0002C4.80488 18.8405 7.33524 19.9651 10.1212 19.9651C12.4726 19.9651 14.6452 19.1472 16.3832 17.7926C18.1468 16.4124 19.4247 14.4443 19.9615 12.1951C20.0893 11.8117 19.8848 11.4539 19.527 11.3772ZM15.6164 16.7191C14.134 17.8948 12.2426 18.6105 10.1723 18.6105C7.74419 18.6105 5.5461 17.6137 3.96143 16.029C2.37676 14.4443 1.37995 12.2462 1.37995 9.81812C1.37995 7.79894 2.04449 5.95868 3.19465 4.47625C3.98699 3.45388 4.9838 2.61043 6.13396 2.02257C6.00617 2.30372 5.87837 2.58487 5.77613 2.89158C5.44386 3.81171 5.29051 4.78296 5.29051 5.80533C5.29051 8.23345 6.28732 10.4571 7.87199 12.0418C9.45666 13.6264 11.6803 14.6232 14.1084 14.6232C15.1819 14.6232 16.2043 14.4443 17.15 14.0865C17.4822 13.9587 17.8145 13.8309 18.1212 13.6776C17.5078 14.8533 16.6643 15.9012 15.6164 16.7191Z" fill="#007AFF"/>
     </g>
     <defs>
       <clipPath id="clip0_747_249">
         <rect width="20" height="20" fill="white" transform="translate(-0.000244141)"/>
       </clipPath>
     </defs>
   </svg>
         ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="none">
     <g clip-path="url(#clip0_733_490)">
       <path d="M13.5451 6.45503C12.6456 5.55556 11.3757 4.97355 10.0001 4.97355C8.62443 4.97355 7.35459 5.5291 6.45511 6.45503C5.55564 7.3545 4.97363 8.62434 4.97363 10C4.97363 11.3757 5.55564 12.6455 6.45511 13.545C7.35459 14.4444 8.62443 15.0265 10.0001 15.0265C11.3757 15.0265 12.6456 14.4709 13.5451 13.545C14.4445 12.6455 15.0265 11.3757 15.0265 10C15.0265 8.62434 14.471 7.3545 13.5451 6.45503ZM12.5927 12.5926C11.9313 13.254 11.0054 13.6508 10.0001 13.6508C8.9948 13.6508 8.06887 13.254 7.4075 12.5926C6.74612 11.9312 6.34929 11.0053 6.34929 10C6.34929 8.99471 6.74612 8.06878 7.4075 7.40741C8.06887 6.74603 8.9948 6.34921 10.0001 6.34921C11.0054 6.34921 11.9313 6.74603 12.5927 7.40741C13.2541 8.06878 13.6509 8.99471 13.6509 10C13.6509 11.0053 13.2541 11.9312 12.5927 12.5926Z" fill="#2B2B2B"/>
       <path d="M19.3123 9.31217H17.2752C16.9049 9.31217 16.5874 9.62963 16.5874 10C16.5874 10.3704 16.9049 10.6878 17.2752 10.6878H19.3123C19.6826 10.6878 20.0001 10.3704 20.0001 10C20.0001 9.62963 19.6826 9.31217 19.3123 9.31217Z" fill="#2B2B2B"/>
       <path d="M9.99984 16.5873C9.62947 16.5873 9.31201 16.9048 9.31201 17.2751V19.3122C9.31201 19.6825 9.62947 20 9.99984 20C10.3702 20 10.6877 19.6825 10.6877 19.3122V17.2751C10.6877 16.9048 10.3702 16.5873 9.99984 16.5873Z" fill="#2B2B2B"/>
       <path d="M17.0633 16.1111L15.6083 14.6561C15.3702 14.3915 14.9205 14.3915 14.6559 14.6561C14.3914 14.9206 14.3914 15.3439 14.6559 15.6085L16.111 17.0635C16.3755 17.328 16.7988 17.328 17.0633 17.0635C17.3279 16.7989 17.3279 16.3757 17.0633 16.1111Z" fill="#2B2B2B"/>
       <path d="M9.99984 0C9.62947 0 9.31201 0.31746 9.31201 0.687831V2.72487C9.31201 3.09524 9.62947 3.4127 9.99984 3.4127C10.3702 3.4127 10.6877 3.09524 10.6877 2.72487V0.687831C10.6877 0.31746 10.3702 0 9.99984 0Z" fill="#2B2B2B"/>
       <path d="M17.0897 2.93651C16.8252 2.67196 16.4019 2.67196 16.1373 2.93651L14.6823 4.39153C14.4177 4.65608 14.4177 5.07936 14.6823 5.34391C14.9204 5.60846 15.3701 5.60846 15.6347 5.34391L17.0897 3.88889C17.3543 3.62434 17.3543 3.20106 17.0897 2.93651Z" fill="#2B2B2B"/>
       <path d="M2.72487 9.31217H0.687831C0.31746 9.31217 0 9.62963 0 10C0 10.3704 0.291005 10.6878 0.687831 10.6878H2.72487C3.09524 10.6878 3.4127 10.3704 3.4127 10C3.4127 9.62963 3.09524 9.31217 2.72487 9.31217Z" fill="#2B2B2B"/>
       <path d="M5.31725 14.6561C5.07915 14.3915 4.62942 14.3915 4.36486 14.6561L2.90984 16.1111C2.64529 16.3757 2.64529 16.7989 2.90984 17.0635C3.17439 17.328 3.59767 17.328 3.86222 17.0635L5.31725 15.6085C5.5818 15.3439 5.5818 14.9206 5.31725 14.6561Z" fill="#2B2B2B"/>
       <path d="M5.31725 4.39153L3.86222 2.93651C3.59767 2.67196 3.17439 2.67196 2.90984 2.93651C2.64529 3.20106 2.64529 3.62434 2.90984 3.88889L4.36486 5.34391C4.62942 5.60846 5.0527 5.60846 5.31725 5.34391C5.5818 5.07936 5.5818 4.65608 5.31725 4.39153Z" fill="#2B2B2B"/>
     </g>
     <defs>
       <clipPath id="clip0_733_490">
         <rect width="20" height="20" fill="white"/>
       </clipPath>
     </defs>
   </svg>
         )}
       </div>
   
     </button>
   
     {/* Mode Text */}
     <span className="text-xs sm:text-base">{darkMode ? "Dark Mode" : "Light Mode"}</span>
   
   </div>
   
   
   
   
       {/* Profile */}
                {/* Profile Avatar */}
          <Avatar
  sx={{
    backgroundColor: 'transparent',
    border: `1px solid ${darkMode ? "#007AFF" : "#FBB04C"}`,
    cursor: "pointer",
    width: 32,
    height: 32,
    fontSize: 14,
    fontWeight: "bold",
    color: darkMode ? "#007AFF" : "#FBB04C",
  }}
  onClick={() => router.push("/profile")}
>
  {username?.charAt(0)?.toUpperCase() || "U"}
</Avatar>
   
     </div>
   </div>
        {/* firstsection  */}
          <div className="containerr lg:mt-10 mt-5 w-full max-w-3xl mx-auto rounded-2xl odr-course-bg ellipse-bg bg-cover bg-center bg-no-repeat flex flex-col md:flex-row justify-between items-start md:items-center px-8 py-8 text-white">

        {/* Left Side */}
        <div className="">
          {/* Heading */}
          <Typography
  variant="h4"
  className="text-center md:text-left capitalize"
  style={{
  
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "40px",
  }}
>
  Mastering Online Dispute Resolution:
  <br />
  Navigating Disputes In The Digital Age
</Typography>


          {/* Rating */}
          <div className="flex items-center space-x-1 mb-3 mt-3">
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
           <span className={`text-sm  ml-2 ${darkMode ? "text-white" : "text-black"}`}>5.0 | 179 reviews</span>
        



          </div>

          {/* Description */}
         <Typography
  variant="h6"
  className="mb-5 max-w-2xl"
  style={{
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "23px",
    letterSpacing: "0.48px",
  }}
>
  This course propels you to the forefront of modern dispute resolution and equips its participants with all the skills and tools necessary to understand, enhance, and master their expertise in ODR.
</Typography>



          {/* Bottom Info Icons */}
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-200 mt-5 ">
  
  <div className="flex items-center space-x-2 ">
    <Image src="/images/tick.png" alt="Module Icon" width={30} height={29} />
    <h6>7 Modules</h6>
  </div>

  <div className="flex items-center space-x-2">
    <Image src="/images/price.png" alt="Certificate Icon" width={30} height={29} />
    <h6>Certificate on completion</h6>
  </div>

  <div className="flex items-center space-x-2">
    <Image src="/images/book.png" alt="Chapters Icon" width={30} height={29} />
    <h6>54 Chapters</h6>
  </div>

  <div className="flex items-center space-x-2">
    <Image src="/images/man.png" alt="Self Paced Icon" width={30} height={29} />
    <h6>Self paced course</h6>
  </div>
</div>
        </div>
        {/* Right Side */}
        <div className="mt-8 md:mt-0 lg:mr-20 mr-0 text-center">
          <h3 className="text-3xl font-semibold mb-2">₹5000</h3>
          <p className="text-gray-300 text-sm mb-4">Start Your ODR Journey</p>
          
          {/* Use your Button component if available */}
          <Button >
            SUBSCRIBE NOW
          </Button>
        </div>
      </div>
   

    {/* second section  */}
      <div className="containerr w-full rounded-2xl  p-6 md:p-10 text-white flex flex-col md:flex-row justify-between gap-10 ">

        {/* Modules Section */}
        <div className="md:w-2/3">
         <Typography
  variant="h5"
  className="mb-6"
  style={{
    color: "#FFF",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "47px",
    textTransform: "capitalize",
  }}
>
  Course Modules
</Typography>


          <div className="space-y-4">

            {modules.map((mod, index) => (
              <div key={mod.id} className={`flex justify-between items-center p-4 rounded-lg border-none mt-0 lg:mt-8 `}>
                <div className="flex items-start space-x-4">
                  <span className="text-white  mt-8 font-semibold">{index + 1}.</span>
                  <div>
                    {mod.free ? (
                  <button className="flex justify-center items-center gap-[18px] flex-shrink-0 w-[92px] h-[23px] px-[9px] py-[3px] rounded-[15px] bg-[#007AFF] text-white text-xs shadow-[inset_0px_6px_4px_0px_rgba(255,255,255,0.25)] hover:bg-blue-600 transition mb-1 animate-[growRightPulse_2s_ease-in-out_infinite]">
  Free Access
</button>


                  ) : (
                    <div className="flex items-center space-x-2 mb-1">
                      <button className="flex justify-center items-center gap-[18px] flex-shrink-0 w-[92px] h-[23px] px-[9px] py-[3px] rounded-[15px] bg-[#81BDFE] text-xs text-black shadow-[inset_0px_6px_4px_0px_rgba(255,255,255,0.25)] hover:bg-blue-500 hover:text-black transition">Unlock Now</button>
                    {/* <Image src="/images/lock.png" alt="Lock Icon" width={14} height={14} /> */}
                    </div>
                  )}

                    
                    <h5 className="text-sm md:text-base">{mod.title}</h5>
                    <button className="text-[16px]  text-[#F9950A] mt-1">{mod.duration}</button>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  {mod.free ? (
                      <button className=""></button>
                    ) : (
                          <div className="flex items-center space-x-2">
                    <button className=""></button>
                    <Image src="/images/lock.png" alt="Lock Icon" width={14} height={14} />
                  </div>
                )}
                {mod.free && (
                  <Image src="/images/Arrow .svg" alt="Arrow Icon" width={12} height={12} />
                )}
              </div>
            </div>
          ))}
       
            <div className="mt-6">
              <Button >
                ENROLL NOW 
              </Button>
            </div>
          </div>
        </div>

        {/* Case Alerts Section */}
        <div className="md:w-1/3">
   <Typography
  variant="h5"
  className="mb-6"
  style={{
    color: "#FFF",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "47px",
    textTransform: "capitalize",
  }}
>
  Case Alerts
</Typography>



           <div className="space-y-4 max-h-80  pr-2 mt-0 lg:mt-12">
            {caseAlerts.map(alert => (
              <div key={alert.id} className="flex items-start space-x-4 p-3 rounded-lg border border-none">
                <Image src={alert.img} alt="Case Image" width={180} height={76} className="rounded" />
                <div>
                  <h6 className="text-sm mb-2">{alert.text}</h6>
                  <MUIButton  
  color="warning" 
  size="small" 
  sx={{ 
    color: '#F9950A',
    fontSize: '13px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    letterSpacing: '0.15px',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationSkipInk: 'auto',
    textDecorationThickness: 'auto',
    textUnderlineOffset: 'auto',
    textUnderlinePosition: 'from-font',
    '&:hover': { textDecoration: 'none' } 
  }}
>
  View Case
</MUIButton>

                </div>
              </div>
            ))}
          </div>

          <div className="mt-50">
            <Button >
              VIEW ALL CASE ALERT 
            </Button>
          </div>
  

      </div>
    </div>

 </div>



  )
}


export default Course