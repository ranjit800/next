// "use client"
// import Header from '@/Components/Header'
// import { MyContext } from '@/Helper/Context'
// import React, { useContext } from 'react'

// const page = () => {
//   const user = useContext(MyContext)
//   console.log(user)

//   return (

//     <div>

//       {user}
//       <Header/>
//     </div>

//   )
// }

// export default page
// "use client"
// import  {MyContext}  from '@/Helper/Context'
// import React, { useContext } from 'react'

// const page = () => {
//   const user = useContext(MyContext)
//   console.log(user)
//   return (
//     <div>
//       {user}
//     </div>
//   )
// }

// export default page



// "use client"
// import React from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const page = () => {

//   const notify = () => {

//     toast.success('Noty Ho Raha Ha-kay BKL', {
//       position: "top-right",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",

//       });

//   }
//   return (
//     <div>
//       <button onClick={notify} >
//         Login
//       </button >
//       <ToastContainer/>
//     </div>
//   )
// }

// export default page

"use client"

import axios from 'axios'
import React, { useState } from 'react'
const page = () => {
  const [userdata, setuserdata] = useState("")
  const getdata = async () => {
    const res = await axios.get("https://picsum.photos/v2/list")
    setuserdata(JSON.stringify(res.data))
  }
  return (
    <div>
      Deployment <br />
      <button onClick={getdata}>Click</button>
      <br />
    
      <hr />
      {userdata}
    </div>
  )
}

export default page
