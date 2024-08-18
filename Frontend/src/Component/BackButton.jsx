import { Link } from 'react-router-dom';

function BackButton({ destination = "/" }) {
    return (
        <div className='d-flex'>
            <Link to={destination}>
                <button className="btn btn-primary" type="">Back</button>
            </Link>
        </div>
    );
}

export default BackButton
