import Dog from './Dog'

const DogList = ({ dogs }) => {
    return (
        <>
            {dogs.map(dog => <Dog dog={dog} key={dog.name} />)}
        </>
    );
};

export default DogList