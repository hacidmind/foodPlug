
import { Link } from 'react-router-dom'
const BlogList = ({ blogs, handleDelete }) => {
    // const blogs = props.blogs
    return (
        <div className="container-fluid" >
        <div className="row">
            {
                blogs.map((food) => (
                    <div className="col-sm-6 mb-2" key={food.id}>
                        <div className="card" style={{}}>
                            <div className="card-body">
                                <h5 className="card-title">{food.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">From <span className="text-info">{food.stateOfOrigin}</span></h6>
                                <p className="card-text text-wrap">{food.body.slice(0, 300)}... </p>
                                <Link to={`/blog/${food.id}`} className="card-link">Read More</Link>
                            </div>
                        </div>
                    </div>

                ))
            }
        </div>
        </div>
    );
}

export default BlogList;

