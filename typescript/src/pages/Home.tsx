import { Container, filledInputClasses } from "@mui/material"
 import SearchMethods from '../components/SearchMethods';
 import Countries from '../components/Countries';
import { useState } from "react";

 
 const Home = () => {

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

   return 
     <Container maxWidth ={'lg'}>

      <SearchMethods setSearch={setSearch} filter={filter} setFilter = {setFilter}/>
      <Countries  search ={search} filter={filter} />

     </Container>
       
   
 };
 
 export default Home
 