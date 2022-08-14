import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const NewBlog = () => {
    const [title, setTitle] = useState('')
    const [stateOfOrigin, setStateOfOrigin] = useState('')
    const [body, setBody] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    let handleSubmit = (event) => {
        event.preventDefault();
        const blog = { title, stateOfOrigin, body };
        setIsLoading(true)
        // console.log(blog);
        fetch('https://my-json-server.typicode.com/hacidmind/foodDb/blogs', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsLoading(false);
            navigate('/')
        })
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Your Title..." value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">State Of Origin</label>
                    <input type="text" className="form-control" id="State Of Origin" placeholder="The State Of Origin..." value={stateOfOrigin} onChange={(e)=> setStateOfOrigin(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Body" className="form-label">Body</label>
                    <textarea className="form-control" id="Body" rows="5" placeholder='Body....' value={body} onChange={(e) => setBody(e.target.value)} ></textarea>
                </div>
                <div className="d-grid gap-2">
                    {!isLoading && <button className="btn btn-primary" type="submit">Submit</button>}
                </div>
                {isLoading && <button disabled className="btn btn-primary" type="submit">Submit</button>}
            </form>
        </div>
    );
}

export default NewBlog;
