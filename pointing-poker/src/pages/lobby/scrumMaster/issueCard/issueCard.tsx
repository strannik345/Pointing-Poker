import React, { useState } from 'react';
import '../../../../shared/memberCard/memberCard.scss';
import './issueCard.scss';
import '@fontsource/roboto';
import { Card, Typography, IconButton, Box, makeStyles, Theme, createStyles } from '@material-ui/core';
import { IssueProp } from '../../../../interfaces/IssueProp';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import EditIcon from '@material-ui/icons/Edit';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    active: {
      backgroundColor:"rgba(96, 218, 191, 0.46)"
  },
  issueInGame: {
    width: "-webkit-fill-available"
  }}));
export const IssueCard: React.FC<IssueProp> = (props:IssueProp) => {
    const {isNew, setOpenIssueModal, issue, isGame, isActive, isMaster} = props;
    const classes = useStyles();
    const card =  <Card className = {`issue-card ${isActive && classes.active} ${isGame && classes.issueInGame}`}>
    <Typography variant="h5">
      {issue.title}
    </Typography>
    <Typography variant="h5">
      {issue.priority}
    </Typography>
    {!isGame ?
    <Box className='issue-card--actions'>
      <IconButton aria-label="edit">
        <EditIcon/>
      </IconButton>
      <IconButton color="secondary" aria-label="delete">
        <DeleteIcon/>
      </IconButton>
    </Box>: isMaster ? 
     <IconButton color="secondary" aria-label="delete">
      <DeleteIcon/>
    </IconButton> : ""
    }
  </Card>
  const newCard = <Card className = {`issue-card ${isGame && classes.issueInGame}`}>
    {console.log(`${isGame}`)}
        <Typography variant="h5">
          {issue.title}
        </Typography>
        <IconButton aria-label="add" onClick = {() => setOpenIssueModal(prev => !prev)}>
          <AddIcon/>
        </IconButton>
      </Card>
    
    return (
      <>
      {isNew ? newCard : card}
      </>
    )
}