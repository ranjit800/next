// "use client"
// import React, { createContext } from 'react'
// export const MyContext = createContext()

// const Context = ({ children }) => {
//     const username = "Ranjit jana"
//     return (
//         <div>
//             <MyContext.Provider value={username}>
//                 {children}
//             </MyContext.Provider>
//         </div>
//     )
// }

// export default Context
// "use client"
// import React, { createContext } from 'react'
// export const MyContext = createContext()

// const Context = ({ children }) => {
//     const username = "ranjit jana"
//     return (
//         <div>
//             <MyContext.Provider value={username}>
//                 {children}
//             </MyContext.Provider>
//         </div>
//     )
// }

// export default Context

"use client"
import React, { createContext } from 'react'
export const MyContext = createContext()

const Context = ({ children }) => {
    const username = "ranjit jana"
    return (
        <div>
            <MyContext.Provider value={username}>
                {children}
            </MyContext.Provider>
        </div>
    )
}

export default Context