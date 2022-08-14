import BlogList from './BlogList';
import useCustomHook from '../useCustomHook'


const Blog = () => {
   
    const {data:blogs, isLoading, isError} = useCustomHook('https://my-json-server.typicode.com/hacidmind/foodDb/blogs')
    return (
        <div>
            {blogs && <BlogList blogs={blogs}  />}

            {isLoading ? <div className="container text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div> : ""}

            {isError && <div className="container text-center"><div class="alert alert-danger" role="alert">
                Error Fetching Data!
            </div></div>}
        </div>
    );
}

export default Blog;
