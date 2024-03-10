import { useParams, Navigate } from 'react-router-dom'

const ColorPage = ({ colors }) => {
    const { color } = useParams();

    if (colors.includes(color) === false) {
        return <Navigate to="/colors" />
    }

    return (
        <div style={{ backgroundColor:`${color}`}}>
            <h1>{color}</h1>
        </div>
    );
};

export default ColorPage