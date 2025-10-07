// import React from 'react'
// import image1 from '../../assets/images/homeHero/heroImage1.png'
// import image2 from '../../assets/images/homeHero/heroImage2.png'
// import Title from '../Title/Title'

// const ServicesData = [
//     {
//         Image: image1,
//         title: "Our services",
//         description: "lorem akdfkll aksjdf lasl f kasf ask ldfjfsdkf  "
//     },
//     {
//         Image: image2,
//         title: "Our services",
//         description: "lorem akdfkll aksjdf lasl f kasf ask ldfjfsdkf  "
//     },
//     {
//         Image: image1,
//         title: "Our services",
//         description: "lorem akdfkll aksjdf lasl f kasf ask ldfjfsdkf  "
//     },
//     {
//         Image: image2,
//         title: "Our services",
//         description: "lorem akdfkl orem akdfkll aksjdf lasl f kasf ask"
//     },
// ]

// const HomeServices = () => {

//     return (
//         <div className='bg-bglight dark:bg-bgdark'>
//             <Title title="Our Services" description="Explore our range of IT solutions and executive training programs." />
            
//             <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 py-5 ">
//                 {ServicesData.map((service, index) => (
//                     <div key={index}
//                         className='group p-5 space-y-2  bg-bgdark dark:bg-bglight rounded-sm relative z-10 overflow-hidden transition-all  before:duration-500 before:bg-secondary before:dark:bg-primary  before:absolute before:inset-0 before:-z-10 before:translate-y-full before:hover:translate-y-0 before:transition-all '>

//                         <div className='h-52'>
//                             <img className='w-full h-full object-cover' src={service.Image} alt="" />
//                         </div>
//                         <div>
//                             <h3 className='text-xl text-white group-hover:text-black dark:text-black dark:group-hover:text-white transition-all'>{service.title}</h3>
//                             <p className='text-lightpara group-hover:text-darkpara group-hover:dark:text-lightpara dark:text-darkpara transition-all'>{service.description}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default HomeServices