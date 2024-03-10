import { Link } from 'react-router-dom'

const Dog = ({ dog }) => {
    return (
        <>
            <h3>{ dog.name }</h3>
            <img src={ dog.src }></img>
            <button>
                Meet <Link to={`/${dog.name}`}>
                    {dog.name}
                </Link>!
            </button>
        </>
    );
};

export default Dog