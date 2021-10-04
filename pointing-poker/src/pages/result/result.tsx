import { Button, Container } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { IIssue } from '../../interfaces/IScramInfo';
import { useTypedSelector } from '../../store/hooks/hooks';
import { Statistic } from '../game/scramMaster/statistic';
import { IssueCard } from '../lobby/scrumMaster/issueCard/issueCard';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingBottom: "100px",
    }
  })
)
export const Result: React.FC =()=> {
    const {issues, cardValues} = useTypedSelector(state => state.gameSettings);
    const [downloadLink, setDownloadLink] = useState('')
    const classes = useStyles();
    let list: string[] = [];
    const makeTextFile = () => {
        issues.map(issue =>{
            list.push(issue.title);
            list[list.length-1]= `${list[list.length-1]} :\n`
            cardValues.map(val => {
                list[list.length-1]= `${list[list.length-1]} ${val} - %;`
            })

        });
        const data = new Blob([list.join('\n')], { type: 'text/plain' })
        if (downloadLink !== '') window.URL.revokeObjectURL(downloadLink)
        setDownloadLink(window.URL.createObjectURL(data))
      }
    return(
        <Container className={classes.container}>
            <Button className ="button button__contained " variant="contained" color='primary'
            style={{alignSelf:"end"}}
            download='list.txt'href={downloadLink} onClick={makeTextFile}>
                save result
            </Button>
            {issues.map((issue: IIssue, index) =>{
                    return <div id="result">
                                <IssueCard isActive = {false} key={index+1}
                                    isNew={false} setOpenIssueModal={()=>{}} isMaster = {false} issue={issue} isGame = {false}/>
                                <Statistic/>
                        </div>
            })}
        </Container>);
}