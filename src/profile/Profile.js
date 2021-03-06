import React  from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import profileInformationImg from '../images/cards/card-01.jpg';

import Barchat from '../profile/Barchart';

import Piechart from '../profile/Piechart'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });
function Profile(){
    const classes = useStyles();
    return(
        <div>


<h1> Work Experience</h1>
{/* <Barchat></Barchat> */}
<Piechart></Piechart>

<h1> Projects</h1>
           
<div className="flex-container">

    <div> <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={profileInformationImg}
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
            </Card>  </div>

            <div> <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={profileInformationImg}
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
            </Card>  </div>
            <div> <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={profileInformationImg}
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
            </Card>  </div>
            <div> <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={profileInformationImg}
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
            </Card>  </div>


</div>
<div className="flex-container">
    <div> <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={profileInformationImg}
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
            </Card>  </div>

            <div> <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={profileInformationImg}
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
            </Card>  </div>
            <div> <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={profileInformationImg}
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
            </Card>  </div>
            <div> <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={profileInformationImg}
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
            </Card>  </div>


</div>







        </div>
    )

}
export default Profile;