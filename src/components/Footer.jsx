import React from 'react';
import { BottomNavigation, Typography } from '@material-ui/core';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FolderIcon from '@material-ui/icons/Folder';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <>
            <div>
                <footer>
                    <Typography variant='h6' align='center' gutterBottom>
                        Footer
                    </Typography>
                    <BottomNavigation value={''} className={classes.root}>
                        <BottomNavigationAction
                            label='Recents'
                            value='racents'
                            icon={<RestoreIcon />}
                        />
                        <BottomNavigationAction
                            label='Favorites'
                            value='favorites'
                            icon={<FavoriteIcon />}
                        />
                        <BottomNavigationAction
                            label='Nearby'
                            value='nearby'
                            icon={<LocationOnIcon />}
                        />
                        <BottomNavigationAction
                            label='Folder'
                            value='folder'
                            icon={<FolderIcon />}
                        />
                    </BottomNavigation>
                    <Typography
                        align='center'
                        color='textSecondary'
                        component='p'
                        variant='subtitle1'
                    >
                        Online store React JS Material UI made in Martyn
                        Voroniak
                    </Typography>
                </footer>
            </div>
        </>
    );
};

export default Footer;
