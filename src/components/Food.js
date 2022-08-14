import {useState} from 'react'

const Food = ({ food, time, classes }) => {
    let [diet, setDiet] = useState('')

    let handleClick = () => {
        setDiet(`My favourite food is ${food} and it is ${classes}. It takes ${time} to cook`)
    }

    return (
        <div>
            <p>Food: {food} </p>
            <p>Class: {classes} </p>
            <p>Time to cook: {time} </p>
            <button onClick={handleClick}>My Favourite food</button>
            <p>{diet}</p>
            <hr />
        </div>
    );
}

export default Food;
