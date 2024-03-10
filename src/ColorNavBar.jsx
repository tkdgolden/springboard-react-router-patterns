import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const ColorNavBar = ({ colors }) => {

    return (
        <nav className="NavBar" style={{ 
                justifyContent:'space-evenly', 
                display:'flex', 
                width:'100vw' 
            }}>
            <Link to="/colors">All Colors Page</Link>
            <Link to="/colors/new">New Color</Link>
            {colors.map(color => 
                <Link to={`/colors/${color}`} key={color}>
                    {color}
                </Link>
            )}
        </nav>
    );
};

export default ColorNavBar