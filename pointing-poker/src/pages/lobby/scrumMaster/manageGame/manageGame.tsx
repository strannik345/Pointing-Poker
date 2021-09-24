import React, { useEffect, useState } from 'react';
import './manageGame.scss';
import { Typography, Button, Container, Box} from '@material-ui/core';
import { useDispatch } from 'react-redux';

export const ManageGame: React.FC =()=> {
    const [gameID, setGameID] = useState<string>('');
    const dispatch = useDispatch();
    useEffect(()=>{
        // getGameID()
    },[])

    // const getGameID = async() => {
    //     const response = await fetch(`${process.env.REACT_APP_SERVER}/api/start-new-game`);
    //     const gameID = await response.json();
    //     dispatch({type:'CHANGE_GameURL', payload: {gameURL: gameID.gameID }});
    //     console.log(gameID);
    //     setGameID(`${process.env.REACT_APP_SERVER}/api/get-all-users?gameID=${gameID.gameID}`);
    // }
    return(<>
        <Container className="manage-game">
            <Typography >Link to lobby:</Typography>
            <Box className="link-to-lobby" >
                <Typography className = "link-to-lobby--text" style={{height: "1.5rem", width: "-webkit-fill-available"}}>gameID</Typography>
                <Button className = "button" variant="contained" color="primary">Copy</Button>
            </Box> 
            <Box className="manage-game-buttons">
                <Button  className ="button button__contained " variant="contained" color="primary">Start game</Button>
                <Button  className ="button button__outlined " variant="outlined" >Cancel game</Button>
            </Box>
        </Container>
    </>);
}