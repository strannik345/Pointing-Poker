import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import { useActions } from '../../../store/hooks/useAction';
import { IMessage } from '../../../interfaces/chat';
import axios from '../../../services/api';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     wrapForm : {
//         display: "flex",
//         justifyContent: "center",
//         width: "95%",
//         margin: `${theme.spacing(0)} auto`
//     },
//     wrapText  : {
//         width: "100%"
//     },
//     button: {
//         margin: theme.spacing(1),
//     },
//   })
// );


export const SendText = () => {
    // const [content, setContent] = useState('');
    // const onSaveMessage = async () => {
    //     await axios.post(`/api/new-message`,{
    //     id: +(new Date()),
    //     user_id: 1,
    //     text: content}
    //     )
    // }

    // const classes = useStyles();
    return (
        <>
            {/* <form className={classes.wrapForm}  noValidate autoComplete="off" >
            <TextField
                id="standard-text"
                label="text"
                className={classes.wrapText}
                value = {content}
                onChange={e => setContent(e.target.value)}
            />
            <Button variant="contained" color="primary" 
                    className={classes.button}
                    onClick = {onSaveMessage}>
                <SendIcon />
            </Button>
            </form> */}
        </>
    )
}


