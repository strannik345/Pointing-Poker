import React from 'react';
import './memberCard.scss'
import '@fontsource/roboto';
import { Avatar, Card, Typography, IconButton } from '@material-ui/core';
import BlockOutlinedIcon from '@material-ui/icons/BlockOutlined';
import { ICardSize } from '../../interfaces/card';
import { IUser } from '../membersList/membersList';

interface CardProp {
  size: ICardSize;
  userInfo: IUser;
}

export const LobbyMemberCard: React.FC<CardProp> = ({size, userInfo}) => {
    
    return (
      <>
      <Card className = {"member-card " + (size.isSmall ? 'member-card__small' : '')} >
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
            <IconButton aria-label="delete" className = "delete">
              <BlockOutlinedIcon style={{ fontSize: (size.isSmall  ? 26 : 56) }}/>
            </IconButton>
      </Card>
      </>
    );
}