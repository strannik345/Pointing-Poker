import { Container, Paper, Typography } from "@material-ui/core";
import React from "react";

export const NoMatchPage: React.FC = () => {
  return ( 
    <Container maxWidth="md" style={{height: '80vh', minHeight: '600px', marginBottom: '70px'}}>
      <Paper elevation={3} style={{height: '100%', maxHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}} >
        <Typography component='h2' variant='h1' color='textSecondary' style={{textTransform: 'uppercase'}}>404</Typography>
        <Typography component='h2' variant='h3' color='textPrimary' >Page not found :(</Typography>
      </Paper>
    </Container>
  )
}