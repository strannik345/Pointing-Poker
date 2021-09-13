import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import { useActions } from '../../../store/hooks/useAction';




const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapForm : {
        display: "flex",
        justifyContent: "center",
        width: "95%",
        margin: `${theme.spacing(0)} auto`
    },
    wrapText  : {
        width: "100%"
    },
    button: {
        margin: theme.spacing(1),
    },
  })
);


export const SendText = () => {
    const [content, setContent] = useState('');
    const onContentChanged = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setContent(e.target.value);
        
    }
    const { postMessage } = useActions();
    const onSaveMessage = () => {
        postMessage({
        id: 1,
        user_id: 1,
        text: content}
        )
    }

    const classes = useStyles();
    return (
        <>
            <form className={classes.wrapForm}  noValidate autoComplete="off" 
            >
            <TextField
                id="standard-text"
                label="text"
                className={classes.wrapText}
                onChange={onContentChanged}
            />
            <Button variant="contained" color="primary" 
                    className={classes.button}
                    onClick = {onSaveMessage}>
                <SendIcon />
            </Button>
            </form>
        </>
    )
}
function e(e: any) {
    throw new Error('Function not implemented.');
}

