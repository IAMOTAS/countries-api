import { LightMode, DarkMode } from '@mui/icons-material';
import { Paper, Stack, Typography } from "@mui/material";
import React from 'react';

type HeaderProps = {
    themeSwitch: boolean;
    setThemeSwitch: (value: boolean) => void;
};

const Header: React.FC<HeaderProps> = ({ themeSwitch, setThemeSwitch }) => {
    const fontStyle = { fontFamily: 'Nunito Sans', fontSize: { lg: '1rem', md: '0.9rem', sm: '0.9rem', xs: '0.8rem' } };

    return (
        <Paper elevation={1}>
            <Stack flexDirection={'row'} justifyContent={'space-around'} alignItems={'center'} py={1.5}>
                <Typography fontFamily={'Nunito Sans'} fontWeight={800} sx={{ fontSize: { lg: '1.8rem', md: '1.5rem', sm: '1rem', xs: '0.09rem' } }}>
                    where in the world?
                </Typography>
                <Stack
                    flexDirection={'row'}
                    alignItems={'center'}
                    gap={0.5}
                    sx={{ cursor: 'pointer' }}
                    onClick={() => setThemeSwitch(!themeSwitch)}
                >
                    {themeSwitch ? <DarkMode sx={fontStyle} /> : <LightMode sx={fontStyle} />}
                    {themeSwitch ? <Typography sx={fontStyle}>Darkmode</Typography> : (
                        <Typography sx={fontStyle}>Light Mode</Typography>
                    )}
                </Stack>
            </Stack>
        </Paper>
    );
};

export default Header;
