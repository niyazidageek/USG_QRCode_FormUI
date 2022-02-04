import { styled } from '@mui/material/styles';

const MainWrapper = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    height: '100vh'
}));

export default MainWrapper;
