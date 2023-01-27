import {useEffect, useState} from "react"

const Profile = (props) => {
    const [count, setCount] = useState(0)
    useEffect(()=> {
        // API Call
        // console.log("useEffect");
        const timer = setInterval(() => {
            console.log("NAMASTE REACT OP ");
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    });
    // console.log("render from function.");
    return (
        <div>
            <h2>Profile Component</h2>
            <h2>Hello, {props.name}</h2>
            <h3>Count: {count}</h3>
            <button onClick={
                () => {
                    setCount(1)
                }
            }>Set Count
            </button>
        </div>
    )
}

export default Profile;