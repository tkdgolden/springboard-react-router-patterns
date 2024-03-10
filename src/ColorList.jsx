import { Link } from 'react-router-dom'

const ColorList = ({ colors }) => {
    return (
        <ul>
            {colors.map(color => <li key={color} ><Link to={`/colors/${color}`} key={color} >{color}</Link></li>)}
        </ul>
    );
};

export default ColorList