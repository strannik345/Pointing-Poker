import React, { useEffect, useState } from 'react';
import './manageGame.scss';
import { Typography, Button, Container, Box} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../store/hooks/hooks';
import { useParams } from 'react-router';
import { Link, useHistory } from 'react-router-dom';

interface Params {
    id: string;
}

export const ManageGame: React.FC =()=> {
    const [gameID, setGameID] = useState<string>('');
    const dispatch = useDispatch();
    const params: Params = useParams();
    useEffect(()=>{
        // getGameID()
        console.log(params)
    },[])
    const history = useHistory();
    // const getGameID = async() => {
    //     const response = await fetch(`${process.env.REACT_APP_SERVER}/api/start-new-game`);
    //     const gameID = await response.json();
    //     dispatch({type:'CHANGE_GameURL', payload: {gameURL: gameID.gameID }});
    //     console.log(gameID);
    //     setGameID(`${process.env.REACT_APP_SERVER}/api/get-all-users?gameID=${gameID.gameID}`);
    // }
    return(<>
        <Container className="manage-game">
            <Typography >Game ID</Typography>
            <Box className="link-to-lobby" >
                <Typography className = "link-to-lobby--text" style={{height: "1.5rem", width: "-webkit-fill-available"}}>{params.id}</Typography>
                <Button className = "button" variant="contained" color="primary">Copy</Button>
            </Box> 
            <Box className="manage-game-buttons">
                <Link to = '/game'> 
                    <Button  className ="button button__contained " variant="contained" color="primary">Start game</Button>
                </Link>
                <Button  className ="button button__outlined " variant="outlined" >Cancel game</Button>
            </Box>
        </Container>
    </>);
}