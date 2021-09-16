import React from 'react';
import './memberCard.scss'
import '@fontsource/roboto';
import { Avatar, Card, Typography, IconButton } from '@material-ui/core';
import BlockOutlinedIcon from '@material-ui/icons/BlockOutlined';
import { ICardSize } from '../../interfaces/card';
import { useTypedSelector } from '../../store/hooks/hooks';

export const MemberCard: React.FC<ICardSize> = ({isSmall = false}) => {
  const player = useTypedSelector(state=>state.player);
    return (
      <>
      <Card className = {"member-card " + (isSmall ? 'member-card__small' : '')} >
        <Avatar className = "avatar" 
            style={
            {color: '#ffffff',  
            backgroundColor: '#60DABF', 
            boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
            width: (isSmall ? '30px' : '48px'), 
            height: (isSmall ? '30px' : '48px')}
            } >OP</Avatar>
            <div>{ !isSmall &&
              <Typography variant="subtitle1">
              {player.lastName}
              </Typography>}
              <Typography variant="h5">
              {player.name}
              </Typography>
              <Typography variant="caption">
              {player.position}
              </Typography>
            </div>
            <IconButton aria-label="delete" className = "delete">
              <BlockOutlinedIcon style={{ fontSize: (isSmall ? 26 : 56) }}/>
            </IconButton>
      </Card>
      </>
    );
}