import DogList from './DogList'
import DogDetails from './DogDetails'
import DogNavBar from './DogNavBar'
import React from 'react'
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import defaultProps from './defaultProps'
import { useState } from 'react'
import ColorNavBar from './ColorNavBar'
import ColorList from './ColorList'
import ColorForm from './ColorForm'
import ColorPage from './ColorPage'

const App = () => {
    const navigate = useNavigate();
    const [colors, setColors] = useState(["red", "blue"]);

    const addColor = (newColor) => {
        setColors(colors => [newColor, ...colors]);
        navigate(`/colors`);
    };

    return (
        <>
            <DogNavBar dogs={defaultProps.dogs} />
            <ColorNavBar colors={colors} />
            <Routes>
                <Route exact path="/dogs" element={ <DogList dogs={defaultProps.dogs} /> }></Route>
                <Route path="/dogs/:name" element={ <DogDetails dogs={defaultProps.dogs} /> }></Route>
                <Route path="/dogs/*" element={ <Navigate to='/dogs' /> } />
                <Route exact path="/colors" element={ <ColorList colors={colors}/> } />
                <Route path="/colors/new" element={ <ColorForm submitForm={addColor} /> } />
                <Route path="/colors/:color" element={ <ColorPage colors={colors} /> } />
                <Route path="/colors/*" element={ <ColorList /> } />
            </Routes>
        </>
    );
};

export default App