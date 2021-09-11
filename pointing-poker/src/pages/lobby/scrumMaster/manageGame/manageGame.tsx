import React from 'react';
import './manageGame.scss';
import { Typography, Button, Container, Box} from '@material-ui/core';
export const ManageGame: React.FC =()=> {
    return(<>
        <Container className="manage-game">
            <Typography >Link to lobby:</Typography>
            <Box className="link-to-lobby">
                <Typography className = "link-to-lobby--text">http://pockerplanning.c...</Typography>
                <Button className = "button" variant="contained" color="primary">Copy</Button>
            </Box> 
            <Box className="manage-game-buttons">
                <Button  className ="button button__contained " variant="contained" color="primary">Start game</Button>
                <Button  className ="button button__outlined " variant="outlined" >Cancel game</Button>
            </Box>
        </Container>
    </>);
}