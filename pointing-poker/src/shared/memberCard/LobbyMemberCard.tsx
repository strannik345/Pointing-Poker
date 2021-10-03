import React from 'react';
import './memberCard.scss'
import '@fontsource/roboto';
import { Avatar, Card, Typography, IconButton } from '@material-ui/core';
import BlockOutlinedIcon from '@material-ui/icons/BlockOutlined';
import { ICardSize } from '../../interfaces/card';
import { IUser } from '../membersList/membersList';
import { useParams } from 'react-router';
import { AnyAsyncThunk } from '@reduxjs/toolkit/dist/matchers';
import { socketReducer } from '../../store/reducers/socket';
import { useTypedSelector } from '../../store/hooks/hooks';

interface CardProp {
  size: ICardSize;
  userInfo: IUser;
}

export const LobbyMemberCard: React.FC<CardProp> = ({size, userInfo}) => {
  const params = useParams<any>()  
  const {socket} = useTypedSelector(state => state.socket)


    const deletePlayer = () => {
      if (socket.OPEN) {
        console.log(`deleting: ${userInfo}`)
        socket.send(JSON.stringify({
          id: params.id,
          method: 'delete-player',
          msg: {...userInfo}
        }))
      }
    }

    return (
      <>
      <Card className = {"member-card " + (size.isSmall ? 'member-card__small' : '')} style={userInfo.isScrumMaster? {border:"2px solid gold", boxShadow: 'none'} : {}} >
        <Avatar className = "avatar" 
            style={
            {color: '#ffffff',  
            backgroundColor: '#60DABF', 
            boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
            width: (size.isSmall  ? '30px' : '48px'), 
            height: (size.isSmall  ? '30px' : '48px')}
            } >OP</Avatar>
            <div>{ !size.isSmall  &&
              <Typography variant="subtitle1">
                {userInfo.name}
              </Typography>}
              <Typography variant="h5">
                {userInfo.name}
              </Typography>
              <Typography variant="caption">
                {userInfo.position}
              </Typography>
            </div>
            {
              !userInfo.isScrumMaster ?
              <IconButton aria-label="delete" className = "delete" onClick={deletePlayer}>
                <BlockOutlinedIcon style={{ fontSize: (size.isSmall  ? 26 : 56) }}/>
              </IconButton>
              : null
            }
            
      </Card>
      </>
    );
}