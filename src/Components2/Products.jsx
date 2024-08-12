import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Card, CardContent, Button, Badge } from "@mui/material";
import styled from "@emotion/styled";

const CardWrapper = styled(Grid)`
  display: flex;
  justify-content: center;
`;

function Products() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    console.log(result.data);
    setData(result.data);
  };
const Login =()=>{
  console.log("Login ID" );
}
  useEffect(() => {
    getData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <React.Fragment>
      <h1>Hello Products shopee here...</h1>
      <div style={{position:"relative", marginLeft:"-700px"}}>
      <Button  color="warning" onClick={Login}  >Login here...</Button>
      </div>
      <input
        type="text"
        placeholder="search here..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button>Click me</button>
      <Grid container spacing={2}>
        {filteredData.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <Badge badgeContent={item.price} color="primary">
              <CardWrapper>
                <Card sx={{ bgcolor: "coral" }}>
                  <CardContent>
                    <b>{item.title}</b>
                    <img
                      src={item.image}
                      width="100%"
                      height="200"
                      alt={item.title}
                    />
                    <h1>₹/${item.price}</h1>
                  </CardContent>
                </Card>
              </CardWrapper>
            </Badge>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

export default Products;
