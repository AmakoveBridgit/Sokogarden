import React from 'react'

import { useState ,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const GetProducts = () => {

  // initialize our hooks
  const[loading,setLoading]=useState("")
  const[error,setError]=useState("")
  const[products,setProducts]=useState([])
  const [search, setSearch] = useState("")

  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(search.toLowerCase())
  )

  const navigate=useNavigate()

  const image_url="https://bridgit.alwaysdata.net/static/images/"

  // create a function to fetch data from the api

  const fetchProducts=async()=>{
    setLoading("Please wait as we retrieve your products")

    try {

    const response=await axios.get("http://bridgit.alwaysdata.net/api/getproductdetails")

    console.log("The response is",response);
    
    setProducts(response.data)
    setLoading("")
      
    } catch (error) {
      setLoading("")
      setError(error.message)
      
    }

    // call our api

  }
  // end of function where we call useEffect

  useEffect(()=>{
    fetchProducts()
  },[])


  return (
    <div className='row'>
      <h1>Available products</h1>


<div className="row justify-content-center">
  <div className="col-md-6">
    <input
      type="text"
      placeholder="🔍 Search products..."
      className="form-control card shadow"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>
</div>



      <p className='text-warning'>{loading}</p>
      <p className='text-danger'>{error}</p>

    

      {/* calling .map to iterate through each item */}

      {/* {products.map((product)=>( */}
        {filteredProducts.map((product) => (

      <div className='col-md-3 justify-content-center'>

        <div className='card shadow mt-5'>

          <img src={image_url +product.product_photo} alt="cake" className='product_img mt-3' />

          <div className='card-body'>

            <h5 className='text-success'>{product.product_name}</h5>
            <p className='text-secondary'>{product.product_description}</p>
            <p className='text-warning'>{product.product_cost}</p>
            <input type="button" className='btn btn-secondary w-100' value="Purchase Now" onClick={()=>navigate("/mpesa",{state:{product}})} />


          



          </div>



        </div>




      </div>

))}

    </div>
  )
}

export default GetProducts