import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { ScaleLoader } from 'react-spinners';
import { toast } from 'react-hot-toast';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

const CountryDetails: React.FC = () => {
  const [countryDetail, setCountryDetail] = useState<any>();
  const [loading, setLoading] = useState(true);
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  const fetchCountryByName = async () => {
    try {
      const { data } = await axios.get(``);
      if (Array.isArray(data) && data.length > 0) {
        setCountryDetail(data[0]);
        setLoading(false);
      } else {
        setLoading(false);
        toast.error('Country details not found');
      }
    } catch (error) {
      console.error('Error while fetching country details:', error);
      navigate(-1);
      setLoading(false);
      toast.error('Error while fetching country details');
    }
  };
  

  useEffect(() => {
    fetchCountryByName();
  }, [params.id]);

  return (
    <Container maxWidth={'lg'}>
      <Stack flexDirection={'row'} alignItems={'center'} minHeight={'15vh'}>
        <Paper elevation={2}>
          <Button
            sx={{ textTransform: 'none', px: 3 }}
            component={Link}
            to='/'
            color='secondary'
          >
            <ArrowBack />
            Back
          </Button>
        </Paper>
      </Stack>
      {loading ? (
        <Stack minHeight={'60vh'} alignItems={'center'} justifyItems={'center'}>
          <ScaleLoader color='lightcoral' />
        </Stack>
      ) : (
        <Stack
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          flexWrap={'wrap'}
        >
          <Box
            component={'img'}
            src={countryDetail?.flags?.png} // Updated to use optional chaining
            sx={{
              width: { lg: '35%', md: '35%', sm: '100%', xs: '100%' },
            }}
          />
          <Box
            sx={{ width: { lg: '55%', md: '55%', sm: '100%', xs: '100%' } }}
          >
            <Typography
              variant='h4'
              fontWeight={800}
              fontFamily={'Nunito Sans'}
              my={3}
            >
              {countryDetail?.name?.common}
            </Typography>
            {/* ... rest of the code */}
            <Stack
              flexDirection={'row'}
              alignItems={'center'}
              flexWrap={'wrap'}
              gap={2}
              my={3}
            >
              <Typography fontWeight={600} fontFamily={'Nunito Sans'}>
                Border Countries:{''}
              </Typography>
              {countryDetail?.borders === undefined
                ? 'N/A'
                : countryDetail?.borders.map((border: string, index: number) => (
                    <Paper elevation={2} key={index}>
                      <Button
                        sx={{ textTransform: 'none', px: 3 }}
                        component={Link}
                        to={`/countrydetails/${border}`}
                        color='secondary'
                      >
                        {border}
                      </Button>
                    </Paper>
                  ))}
            </Stack>
          </Box>
        </Stack>
      )}
    </Container>
  );
};

export default CountryDetails;
