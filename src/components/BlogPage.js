import {  useParams, useNavigate } from 'react-router-dom';
import useCustomHook from '../useCustomHook'

const BlogPage = () => {
    const { id } = useParams();
    const { data: blogs, isLoading, isError } = useCustomHook(`https://my-json-server.typicode.com/hacidmind/foodDb/blogs/${id}`)
    const navigate = useNavigate()

    const handleDelete = () => {
        fetch(`https://my-json-server.typicode.com/hacidmind/foodDb/blogs/${id}`, {
            method: "DELETE"
        }).then(() => {
            navigate('/')
        })
    }
    return (
        <div className="container">

            {isLoading ? <div className="container text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div> : ""}

            {isError && <div className="container text-center"><div class="alert alert-danger" role="alert">
                Error Fetching Data!
            </div></div>}

            {
                <>
                    <h1>{blogs.title}</h1>
                    <p>State Of Origin: {blogs.stateOfOrigin}</p>
                    <p>{blogs.body}</p>
                    <br />
                    <div className="float-end">
                        <button onClick={handleDelete} className="btn btn-danger">Delete</button>
                    </div>
                </>

            }
        </div>
    );
}

export default BlogPage;
