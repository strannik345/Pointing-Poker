import React from 'react';
import './memberCard.scss'
import '@fontsource/roboto';
import { Avatar, Card, Typography, IconButton } from '@material-ui/core';
import BlockOutlinedIcon from '@material-ui/icons/BlockOutlined';
export const MemberCard: React.FC = () => {
    return (
      <>
      <Card className = "member-card">
        <Avatar className = "avatar" 
            style={
            {color: '#ffffff',  
            backgroundColor: '#60DABF', 
            boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
            width: '48px', 
            height: '48px'}
            } >OP</Avatar>
            <div>
              <Typography variant="subtitle1">
              IT’S YOU
              </Typography>
              <Typography variant="h5">
              IT’S YOU
              </Typography>
              <Typography variant="caption">
              sinior software engeneer
              </Typography>
            </div>
            <IconButton aria-label="delete">
              <BlockOutlinedIcon style={{ fontSize: 56 }}/>
            </IconButton>
      </Card>
      </>
    );
}