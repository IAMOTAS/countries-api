import { FormControl, InputAdornment, InputLabel, MenuItem, Paper, Select, Stack, TextField } from '@mui/material'
import { Search } from '@mui/icons-material';

const SearchMethods = () => {
  return 
    <Stack flexDirection={'row'} flexWrap={'15vh'} minHeight={'15vh'} justifyContent={'space-between'}alignItems={'center'} my={2} gap={2}>

    <Paper elevation={1} sx={{width:380}}>
        <TextField variant='outlined' placeholder='Search for country' fullWidth inputProps={{startAdornment:(<InputAdornment position='start' ><Search /></InputAdornment>)}}/>
    </Paper>
      <Paper elevation={1} sx={{minWidth:100}}>

        <FormControl fullWidth>
            <InputLabel color='secondary'>Filter by Region </InputLabel>
            <Select value={0} label = 'Filter by Region '>
                <MenuItem value= {0}>All</MenuItem>
                <MenuItem value= {1}>Africa</MenuItem>
                <MenuItem value= {2}>America</MenuItem>
                <MenuItem value= {3}>Asia</MenuItem>
                <MenuItem value= {4}>Europe</MenuItem>
                <MenuItem value= {5}>oceania</MenuItem>
            </Select>
        </FormControl>
      </Paper>
    </Stack>
  
}

export default SearchMethods
