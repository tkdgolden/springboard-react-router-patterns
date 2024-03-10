import { useParams } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

const DogDetails = ({ dogs }) => {

    const { name } = useParams();
    const dog = dogs.filter((dog) => dog.name.toLowerCase() === name.toLowerCase())[0];

    return (
        <>
            <h1>{dog.name}</h1>
            <img src={dog.src}></img>
            <p>Age: {dog.age}</p>
            <ul>
                {dog.facts.map(fact => <li key={uuid()}>{fact}</li>)}
            </ul>
        </>
    );
};

export default DogDetails