import React from 'react'
import Link from 'next/link'
import Button from 'react-bootstrap/Button';

const Catagory = async () => {
    const data = await fetch('http://localhost:8000/api/v1/product/allCatagry').then((res) =>
      // { cache: 'force-cache' }
        res.json()
      )
  
      
  
      return (
        <ul>
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <>
            
            <Button  variant="primary"> <Link href={`/catagories/${item._id}`}>{item.productname}</Link>{item.productname}</Button>{' '}
            {/* <li key={index}> <Link href={`/catagories/${item._id}`}>{item.productname}</Link> */}
              {/* {item.subcatelist && item.subcatelist.length > 0 && (
                <div className='bg-blue-300 w-fit'>
                  <h4>subCate:</h4>
                  <ul>
                    {item.subcatelist.map((subitem,ii) => (
                      <li key={ii}>{subitem.productname}</li>
                    ))}
                  </ul>
                </div>
              )} */} 
            {/* </li> */}
            </>
          ))
        ) : (
          <li>No categories available</li>
        )}
      </ul>
      
      );
}

export default Catagory