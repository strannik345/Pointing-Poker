import { Container } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { MembersList } from '../../shared/membersList/membersList';
import { useTypedSelector } from '../../store/hooks/hooks';
import Chat from './chat/chat';
import { ScrumMaster } from './scrumMaster/scrumMaster';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
        // width: "100vw",
        height: "80vh",
        minHeight: '2150px',
        marginBottom: '70px',
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingBottom: "100px",
    }
  })
)
export const Lobby: React.FC =()=> {
    const classes = useStyles();
    const { isScrumMaster } = useTypedSelector(state => state.player)
    return(
        <>
          <Switch>
            <Route path='/lobby/:id'>
              <Container className={classes.container}>
                {
                  isScrumMaster ? 
                    <ScrumMaster/> 
                    :
                    <MembersList scramMaster={false}/>
                }                
                <Chat/>
              </Container>
            </Route>
            <Redirect to={`/lobby/f${(+new Date()).toString(16)}`} />
          </Switch>
        </>
        );
}