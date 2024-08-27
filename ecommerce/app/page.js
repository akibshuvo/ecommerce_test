import Link from "next/link";
import Catagory from "@/components/catagory";
import Products from "@/components/products";
import Banner from "@/components/banner";


 
export default async function Home() {
 
  
  return (
    <>
  
   <Banner/>
    <Catagory/>  
   <Products/>
    
   </>
  );
}
