import DogList from './DogList'
import DogDetails from './DogDetails'
import NavBar from './NavBar'
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import defaultProps from './defaultProps'

const App = () => {

    return (
        <>
            <NavBar dogs={defaultProps.dogs} />
            <Routes>
                <Route exact path="/dogs" element={ <DogList dogs={defaultProps.dogs} /> }></Route>
                <Route path="/dogs/:name" element={ <DogDetails dogs={defaultProps.dogs} /> }></Route>
                <Route path="*" element={ <Navigate to='/dogs' /> } />
            </Routes>
        </>
    );
};

export default App