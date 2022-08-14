import { Link } from 'react-router-dom';
import './ErrPage.css'

const ErrPage = () => {
    return (
        <div className="div">
            <div className="error-page-wrap">
                <article className="error-page gradient">
                    <hgroup>
                        <h1>404</h1>
                        <h2>oops! page not found</h2>
                    </hgroup>
                    <Link to="/" title="Back to site" className="error-back">Go Home</Link>
                </article>
            </div>
        </div>
    );
}

export default ErrPage;
