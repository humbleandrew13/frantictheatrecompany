import { Grid } from '@mui/material';
import ImageCarousel from './photos/Carousel';
import './App.css';

function Main() {
  return (
    <>
    
    <Grid container>
    <div className="banner-container">
      <Grid item xs>
        <img className="banner" src={require("./imgs/FranticTheatreCo_Banner.jpg")} alt="FTC Banner" />
      </Grid>
    </div>
    </Grid>
    <Grid container>
      <div className="image-container">
      <Grid item xs>
        <ImageCarousel />
        </Grid>
      </div>
    </Grid>
    </>
  );
}

export default Main;
