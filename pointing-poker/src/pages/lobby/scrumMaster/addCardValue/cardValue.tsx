import { Typography, TextField, IconButton, Paper} from "@material-ui/core";
import { ChangeEvent, useState } from "react";
import { ICardValueProp } from "../../../../interfaces/ICardValueProp"
import { useTypedSelector } from "../../../../store/hooks/hooks";
import CreateIcon from '@material-ui/icons/Create';
import { ScramInfoActionTypes } from "../../../../interfaces/IScramInfo";
import { useDispatch } from "react-redux";

export const CardValue: React.FC<ICardValueProp>=(prop: ICardValueProp)=> {
    const { scoreTypeShort } = useTypedSelector(state => state.gameSettings);
    const {cardValue, index} = {...prop};
    const [editMode, enableEditMode] = useState(false);
    const dispatch = useDispatch();
    const hadleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>{
        dispatch({type: ScramInfoActionTypes.EDIT_CARD_VALUE, id: index, payload: e.target.value}); 
    }
    return <div className = "game-card">
                <Paper className = "card" onClick = {() => editMode && enableEditMode(editMode => !editMode)}> 
                {
                    editMode 
                    ? <TextField value={cardValue} required type='text' 
                    style={{width: '40%'}}
                    onChange ={(e) => {hadleChange(e)}}/> 
                    : <span 
                    style={{width: '40%'}}> {cardValue} </span>
                }
                    <IconButton aria-label="edit" style={{marginLeft: "10px"}}>
                        <CreateIcon  onClick = {() => enableEditMode(editMode => !editMode)}/>
                    </IconButton>
                    <Typography style={{ fontSize: 60, marginLeft: "10px" }}>{scoreTypeShort}</Typography>
                </Paper>
            </div>
}