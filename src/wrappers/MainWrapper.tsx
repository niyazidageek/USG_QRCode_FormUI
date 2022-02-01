import { styled } from '@mui/material/styles';

const MainWrapper = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    minHeight: '100vh'
}));

export default MainWrapper;
