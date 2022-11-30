import { Grid, Divider, Link } from '@mui/material';

function Header() {
    return (

<Grid container>
        <Grid item xs />
        <Grid item xs />
        <Divider orientation="vertical" flexItem />
        <Grid item xs>
          <Link color="white" underline="none" href="/">Home</Link>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs>
          <Link color="white" underline="none" href="/about">About</Link>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs>
          <Link color="white" underline="none" href="/productions">Productions</Link>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs />
        <Grid item xs />
      </Grid>
    )
}

export default Header;