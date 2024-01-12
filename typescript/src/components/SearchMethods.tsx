import React from 'react';
import { FormControl, InputAdornment, InputLabel, MenuItem, Paper, Select, Stack, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';

type SearchMethodsProps = {
    setSearch: (value: string) => void;
    filter: string;
    setFilter: (value: string) => void;
};

const SearchMethods: React.FC<SearchMethodsProps> = ({ setSearch, filter, setFilter }) => {
    return (
        <Stack
            flexDirection={'row'}
            flexWrap={'wrap'}
            minHeight={'15vh'}
            justifyContent={'space-between'}
            alignItems={'center'}
            my={2}
            gap={2}
        >
            <Paper elevation={1} sx={{ width: 380 }}>
                <TextField
                    variant='outlined'
                    placeholder='Search for country'
                    fullWidth
                    inputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <Search />
                            </InputAdornment>
                        ),
                    }}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Paper>
            <Paper elevation={1} sx={{ minWidth: 100 }}>
                <FormControl fullWidth>
                    <InputLabel color='secondary'>Filter by Region </InputLabel>
                    <Select value={filter} label='Filter by Region ' onChange={(e) => setFilter(e.target.value as string)}>
                        <MenuItem value={'all'}>All</MenuItem>
                        <MenuItem value={'/region/africa'}>Africa</MenuItem>
                        <MenuItem value={'/region/america'}>America</MenuItem>
                        <MenuItem value={'/region/asia'}>Asia</MenuItem>
                        <MenuItem value={'/region/europe'}>Europe</MenuItem>
                        <MenuItem value={'/region/oceania'}>Oceania</MenuItem>
                    </Select>
                </FormControl>
            </Paper>
        </Stack>
    );
};

export default SearchMethods;
