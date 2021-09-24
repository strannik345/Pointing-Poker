import React, { useState } from 'react';
import '../../../../shared/memberCard/memberCard.scss';
import './issueCard.scss';
import '@fontsource/roboto';
import { Card, Typography, IconButton, Box } from '@material-ui/core';
import { IssueProp } from '../../../../interfaces/IssueProp';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import EditIcon from '@material-ui/icons/Edit';

export const IssueCard: React.FC<IssueProp> = (props:IssueProp) => {
    const {isNew, setOpenIssueModal, issue} = props;
    const card =  <Card className = "issue-card" style={{marginBottom:"10px"}}>
    <Typography variant="h5">
      {issue.title}
    </Typography>
    <Typography variant="h5">
      {issue.priority}
    </Typography>
    <Box className='issue-card--actions'>
      <IconButton aria-label="edit">
        <EditIcon/>
      </IconButton>
      <IconButton color="secondary" aria-label="delete">
        <DeleteIcon/>
      </IconButton>
    </Box>
  </Card>
  const newCard = <Card className = "issue-card">
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