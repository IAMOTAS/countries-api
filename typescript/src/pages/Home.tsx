import { Container } from "@mui/material"
 import SearchMethods from '../components/SearchMethods';
 import Countries from '../components/Countries';
 const Home = () => {
   return 
     <Container maxWidth ={'lg'}>

      <SearchMethods />
      <Countries />

     </Container>
       
   
 };
 
 export default Home
 