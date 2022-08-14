import {useEffect, useState} from 'react';

const Example = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        // Data
        fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json())
        // .then((data)=>console.log(data))
            .then((data) => {
            setData(data)
        })
    }, [])
    return (
        <div>
            <h1>Data From JSON PlaceHolder</h1>
            {data.map((item) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                    </div>
            ))}
        </div>
    );
}

export default Example;
