import { useState } from 'react'
import allColors from './allColors';

/**
 * This component renders a form for the user to fill in each part of speech box.
 * @param {function} submitForm allows this component to call the parent component
 * (MadLib)'s function.
 */
const ColorForm = ({ submitForm }) => {
    const INITIAL_STATE = "";
    const [fData, setFormData] = useState(INITIAL_STATE);

    /**
     * update state, which will cause a rerender so changes are controlled
     * @param {evt} evt from onChange
     */
    const handleChange = evt => {
        const { value } = evt.target;
        setFormData(fData => (value));
    };

    /**
     * form validation and submission by calling parent function submitForm and sending fData from state
     * @param {evt} evt from onSubmit
     */
    const handleSubmit = evt => {
        evt.preventDefault();

        if (fData) {
            submitForm(fData);
            setFormData(INITIAL_STATE);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <select name="color" id="color" onChange={handleChange}>
                {allColors.map(color => <option value={color} key={color}>{color}</option>)}
            </select>
            <button>Create Color</button>
        </form>
    );
};

export default ColorForm
