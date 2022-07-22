import React from "react";
import Card from "@material-ui/core/Card"
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles'


function CardPokemon(props){

    //other.dream_world.front_default

return(
    <div class="media">
        <Card sx={{ maxWidth: 350 }}>
            <CardHeader
                avatar={
                <Avatar background-color="primary">
                    {props.id}
                </Avatar>
                }
                title={(props.name).toUpperCase()}
                subheader={`Principal-Type:${props.types[0].type.name}`}
            />
            <CardMedia className={props.media}
                component="img"

                image={props.img.front_default} 
                alt={`Imagen del pokemon:${props.name}`}
            />
            <CardContent>
                <Typography variant="body1" color="secondary">
                    Experiencia Base:{props.exp}
                </Typography>
                <Typography variant="body2" color="primary">
                    HP:{props.stats[0].base_stat}
                </Typography>
                <Typography variant="body2" color="primary">
                    Attack:{props.stats[1].base_stat}
                </Typography>
                <Typography variant="body2" color="primary">  
                    Defense:{props.stats[2].base_stat}
                </Typography>
                <Typography variant="body2" color="primary">
                    Special-Attack:{props.stats[3].base_stat}
                </Typography>
                <Typography variant="body2" color="primary">
                    Special-Defense:{props.stats[4].base_stat}
                </Typography>
                <Typography variant="body2" color="primary">
                    Speed:{props.stats[5].base_stat}
                </Typography>
            </CardContent>
        </Card>
    </div>
    )
}

export default withStyles({

    media:{
        minHeight: "100px",
    },

})(CardPokemon);