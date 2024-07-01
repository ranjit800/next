import React from 'react'

const Nav = (props) => {
    console.log(props.num)
    return (
        <div className='bg-green-600 p-2'>
            Navigation bar {props.num}
        </div>
    )
}

export default Nav