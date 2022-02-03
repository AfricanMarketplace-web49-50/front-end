import React, { useState } from "react";

const initialState = {
    name:'',
    price: '',
    description:'',
  }

const AddItem = () => {
  const [formFields, setFormFields] = useState(initialState);

  function handleInputChange(e) {
    setFormFields((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  function handleClick(e) {
    e.preventDefault();
    console.log(formFields);
  }
  return (
    <>
      <div className="AddItems">
        <h1>Add Items</h1>
        <p>Use the form below to add a new item to the marketplace</p>
        <form>
            {/* <label for="name">Name</label> */}
            <label> Name </label>
            <input 
            value= {formFields.name}
            onChange= {handleInputChange}
            type= "text"
            name= "name"
            placeholder= "name"
            />
             {/* <label for="price">Price</label>  */}
            <label> Price </label> 
            <input 
            value={formFields.price}
            onChange={handleInputChange}
            type="text"
            name="price"
            placeholder="price"
            />
            {/* <label for="description">Description</label> */}
            <label> Description </label>
            <input 
            value= {formFields.description}
            onChange= {handleInputChange}
            type= "text"
            name= "description"
            placeholder= "description"
            />
            <button onClick={handleClick}>List Item</button>
        </form>
      </div>
    </>
  );
};

export default AddItem;


