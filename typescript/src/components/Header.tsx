


import { Paper, Stack, Typography } from "@mui/material";


type HeaderProps = {
    themeSwitch: boolean;
    setThemeSwitch: (value: boolean) => void; // Assuming setThemeSwitch is a function that takes a boolean
};

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <Paper elevation={1}>
      <Stack flexDirection={'row'} justifyContent={'space-around'} alignItems={'center'} py={1.5}>
        <Typography fontFamily={'Nunito Sans'} fontWeight={800} sx={{ fontSize: { lg: '1.8rem', md: '1.5rem', sm: '1rem', xs: '0.09rem' } }}>
          where in the world?
        </Typography>
      </Stack>
    </Paper>
  );
}

export default Header;