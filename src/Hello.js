import React from 'react'

const Hello = ( props ) => {
    console.log(props)
    const { name } = props
    return ( 
        <h1>Hello, { name }</h1>
     );
}
 
export default Hello;