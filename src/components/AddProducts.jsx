import React from "react";

import { useState } from "react";
import axios from "axios";




const Addproduct = () => {

    //Initialize product details hooks
    const [product_name, setProductName] = useState("");
    const [product_description, setProductDescription] = useState("");
    const [product_cost, setProductCost] = useState("");
    const [product_photo, setProductPhoto] = useState("");



        // Hooks for information messages
    const [loading, setLoading] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");


     //Submit Function
    const submit = async (e) => {
      //Prevent default actions
      e.preventDefault();
      //update loading hook to show progress
      setLoading("Please wait as we upload your product ");

      //add all updated hooks to data variable
      const data = new FormData();
      data.append("product_name", product_name);
      data.append("product_description", product_description);
      data.append("product_cost", product_cost);
      data.append("product_photo", product_photo);

      //Post data to Backend API
      try {
        const response = await axios.post(
          "http://bridgit.alwaysdata.net/api/addproducts",
          data
        );
        //Set loding message to empty, after a successful POST to API
        setLoading("")
        //Update message hook to successfully Added to notify the user.
        setSuccess(response.data.message);
      //   setMessage(response.data.success);

        // reset the input fields 
        setProductName("");
        setProductDescription("");
        setProductCost("");
        setProductPhoto("");

        //Catch Any server error, i.e internet issues , server errors
      } catch (error) {
        // setError("Failed to add product. Please try again.");
        setError(error.data.message)
      }
    };
  
  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow ">
        <form onSubmit={submit}>

          <p className="text-warning"> {loading}</p>
          <p className="text-success"> {success}</p>
          <p className="text-danger"> {error}</p>
       
           
           
            <h3>Upload Products</h3>
            <input
              type="text"
              placeholder="Enter Product Name"
              className="form-control"
              value={product_name}
              onChange={(e)=>setProductName(e.target.value)}
              required
            /> 
            <br />
           <textarea
              className="form-control"
              placeholder="Describe your Product"
              required
              value={product_description}
              onChange={(e)=>setProductDescription(e.target.value)}
            ></textarea>
            <br />
      
            <input
              type="number"
              placeholder="Enter Product Cost"
              className="form-control"
              value={product_cost}
              onChange={(e)=>setProductCost(e.target.value)}
              required
            />
            <br />
        
             <b>Upload Product photo</b>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              // value={product_photo}
              onChange={(e)=>setProductPhoto(e.target.files[0])}
              required
            />
            <br />
     
          <button type="submit" className="btn btn-warning w-100">
               Upload Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;