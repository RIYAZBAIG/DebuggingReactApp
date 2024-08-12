import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Grid, CardContent } from '@mui/material';

const ShopProducts = () => {
  const [data, setData] = useState([]);
  const [searchQuery,setSearchQuery] = useState("")

  const getData = async () => {
    try {
      const result = await axios.get("https://fakestoreapi.com/carts?userId=1");
      setData(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

 const handleSearchChange = (e)=>{
    setSearchQuery(e.target.value)
 }

// const filteredData= data.filter((item)=>{
// item.title.toLowerCase().includes(searchQuery.toLowerCase)
// })

  return (
    <React.Fragment >
      <h1>Hello ShopProducts here...</h1>
      <input type="search" name="" id=""  placeholder='search here....' value={searchQuery} onChange={handleSearchChange}  />
      <button>Click me</button>
      <Grid container spacing={2}  >
        {data.slice(0,6).map((item, ind) => (
          <div key={ind} className='A'>
             <div >
            <Card style={{position:"relative", display:"flex", marginTop:"50px", marginRight:"50px"}}>
              <CardContent>
                <h1>{item.id}</h1>
                <h1>{item.userId}</h1>
                <h1>{item.date}</h1>
                <h1>Products:</h1>
                <ul>
                  {item.products.map((product, index) => (
                    <li key={index}>
                      <h2>{product.title}</h2>
                      <p>{product.description}</p>
                      <p>Price: ${product.price}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            </div>
          </div>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default ShopProducts;
