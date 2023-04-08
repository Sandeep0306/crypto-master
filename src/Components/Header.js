import React from 'react'
import { Select,Typography,MenuItem,AppBar,Container,Toolbar, FormControl } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CryptoState } from '../CryptoContext';

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const Header = () => {

  const {currency, setCurrency} = CryptoState();


  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container className='pb-2'>
          <Toolbar>
            <Typography variant= "h5" style={ {fontWeight:"900", fontFamily: "Montserrat",flex:"1" ,color: "gold",cursor:"pointer"} }>
Crypto Master
            </Typography>
            <FormControl>
            <Select
           variant="outlined"
           labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={currency}
    style={{ width: 90, height: 40, marginLeft: 15,color: "black",backgroundColor:"white"}}
    onChange={(e) => setCurrency(e.target.value)}
  >
            <MenuItem value={"USD"}>USD</MenuItem>
    <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
            </FormControl>
           
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header;
