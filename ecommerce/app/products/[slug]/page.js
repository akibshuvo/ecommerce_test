'use client'

import ProductsDetails from '@/components/productsDetails';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';



const SingleProDetails = ({ params }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/v1/product/singlepros/${params.slug}`);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [params.slug]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    

<Container>

      {data.map(item => (
        <>
       <ProductsDetails images={item.avatar}/>
        <h1>{item.productName}---{item._id}</h1>
        </>
      ))}

</Container>
  );
};

export default SingleProDetails;