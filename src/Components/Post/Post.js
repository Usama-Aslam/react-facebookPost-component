import React, { Component } from 'react';
import './../../App.css';
import FacebookImage from "react-fb-image-grid";


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    avatar: {
        backgroundColor: red[500],
    },

});

class Post extends React.Component {

    render() {
        const { classes, avatar, image, createdBy, createdAt, description, likes } = this.props;

        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" src={avatar} className={classes.avatar}>
                        </Avatar>
                    }
                    // action={
                    //     <IconButton>
                    //         <MoreVertIcon />
                    //     </IconButton>
                    // }
                    title={createdBy}
                    subheader={createdAt}
                />
                <CardContent>
                    <Typography component="p">
                        {description}
                    </Typography>
                </CardContent>
                {/* <CardMedia
                    className={classes.media}
                >
                </CardMedia> */}
                <div className='postImages'>
                    <FacebookImage width={100} images={image} />
                </div>
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton>

                </CardActions>
            </Card>
        );
    }
}

Post.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Post);

// class Post extends Component {
//     render() {
//         const {image}=this.props
//         return (
//             <div>

//                

//             </div>
//         );
//     }
// }

// export default Post;
