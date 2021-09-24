import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Paper, TextField } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: "80vw",
      height: "50vh",
      maxWidth: "400px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    container: {
      width: "30vw",
      minHeight: "80vh",
      maxHeight:"100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      // position: "relative",
      // top: "0",
      // right: "0"
    },
  })
);

export default function Score() {
  const classes = useStyles();
  
  return (
    <div className={classes.container}>
      <Paper className={classes.paper} >
        Score
      </Paper>
    </div>
  );
}