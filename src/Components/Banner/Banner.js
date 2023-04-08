import { Container,Typography } from "@mui/material";
import Carousel from "./Carousel";


const Banner = () => {
  return (
    <div style={{backgroundImage: "url(./banner2.jpg)",height:"400px"}}>
<Container className="h-96 flex flex-col pt-5 justify-around">
<div className="flex h-2/5 flex-col justify-center text-center">
    <Typography className="text-white" variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",color: "gold"}}>
             Crypto Master
           </Typography>   
           <Typography
            variant="subtitle2"
            style={{
              color: "white",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
    </div>
    <Carousel/>
</Container>
    </div>
    
  );
}

export default Banner;
