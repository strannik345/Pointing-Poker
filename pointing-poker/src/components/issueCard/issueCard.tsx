import React from 'react';
import '../memberCard/memberCard.scss';
import './issueCard.scss';
import '@fontsource/roboto';
import { Card, Typography, IconButton, Box } from '@material-ui/core';
import { IIssue } from '../../types/IIssue';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import EditIcon from '@material-ui/icons/Edit';

export const IssueCard: React.FC<IIssue> = ({isNew = true}) => {
    const card =  <Card className = "issue-card">
    <Typography variant="h5">
      Issue 542
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
          Create new issue
        </Typography>
        <IconButton aria-label="add">
          <AddIcon/>
        </IconButton>
      </Card>
    
    return (
      <>
      {isNew ? newCard : card}
      </>
    )
}