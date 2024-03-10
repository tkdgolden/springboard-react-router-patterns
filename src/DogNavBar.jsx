import { Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

const DogNavBar = ({ dogs }) => {

    return (
        <nav className="NavBar" style={{ justifyContent:'space-evenly', display:'flex', width:'100vw' }}>
            <Link to="/dogs">All Dogs Page</Link>
            {dogs.map(dog => 
                <Link to={`/dogs/${dog.name}`} key={uuid()}>
                    {dog.name}
                </Link>
            )}
        </nav>
    );
};

export default DogNavBar