 import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material";
 import {toast} from 'react-hot-toast';
 import axios from "axios";
 import { useEffect, useState } from "react";
 import {ScaleLoader} from 'react-spinners'

const Countries = ({search, filter}) => {

const [countries, setCountries] = useState([]);
const [loading, setLoading] = useState(true);
useEffect(()=>{
    const fetchCountriesData = async ()=>{

        try{
            const {data} = await axios.get(`'https://restcountries.com/v3.1/all'${filter}`); 
            //console.log(data);
            setCountries(data);
            setLoading(false);
        }catch(error){
            setLoading(false);
            toast.error('Error while fetching data');
        }
    };
    fetchCountriesData();
},[filter]);

  return 
    <Stack flexDirection={'row'} justifyContent={'space-around'} alignItems={'center'} gap={5} flexWrap={'wrap'}>
        {loading ? <ScaleLoader color="lightcoral" /> : countries.filter((searchedCountry)=>{
            return search.towerLowerCase()=== '' ? searchedCountry : searchedCountry.name.common.toLowerCase().includes(search);
        }).map((country, index) =>(
            <Card key={index} sx={{width:250,textDecoration:'none'}} component={Link} to={`countrydetails/${country.name.common}`}>


            <CardActionArea>
                <CardMedia component='img' height='140' image={'country.flags.png'} alt={country.name.common} />
                <CardContent>
                    <Typography gutterBottom fontFamily={'Nunito Sans'}
                    fontSize={'1.1rem'} fontWeight={800}>
                        {country.name.common}
                    </Typography>
                    <Typography fontFamily={'Nunito Sans'}> 
                    <span style={{fontWeight:'600'}}>Population:</span>
                    {country.population}
                    </Typography>
                    <Typography fontFamily={'Nunito Sans'}> 
                    <span style={{fontWeight:'600'}}>Region:</span>
                    {country.religion}
                    </Typography>
                    <Typography fontFamily={'Nunito Sans'} noWrap> 
                    <span style={{fontWeight:'600'}}>Capital:</span>
                    {country.capital}
                    </Typography>
                </CardContent>
            </CardActionArea>

            </Card>
            ))}
    </Stack>
  
};

export default Countries
