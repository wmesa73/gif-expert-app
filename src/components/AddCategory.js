import React, { useState } from 'react';
import PropTypes from 'prop-types';
//en el parametro de AddCategory desestructuro el props y cojo el parametro
//categories.
const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange  = (e)=>{
        //console.log(e.target.value);
        setInputValue(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (inputValue.trim().length > 2){
            setCategories(cats => [inputValue,...cats]);
            setInputValue('');
        }
        
    }
  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
        />
    </form>
  )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
