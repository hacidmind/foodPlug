import {Link} from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">FoodPlug</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link" to="/newblog">New Blog</Link>
                            <Link className="nav-link" to="/food">Food</Link>
                            <Link className="nav-link" to="/example">Example</Link>
                            <Link className="nav-link" to="/cars">Cars</Link>
                        </div>
                    </div>
                </div>
            </nav>
           
        </div>
    );
}

export default Nav;
