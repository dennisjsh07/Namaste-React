import { useState } from "react"

const User = (props)=>{
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);
    const {name} = props
    return (
        <div className="user-card">
            <h3>Count: {count}</h3>
            <h3>Count2: {count2}</h3>
            <h3>Name: {name}</h3>
            <h3>Location: Bengaluru</h3>
            <h3>Contact: dennisjsh07</h3>
        </div>
    )
}

export default User