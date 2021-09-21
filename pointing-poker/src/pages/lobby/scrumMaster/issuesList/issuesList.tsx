import React, { useEffect, useState } from 'react';
import './../../lobby.scss';
import '@fontsource/ruda';
import { Typography, Container, Modal } from '@material-ui/core';
import { IssueCard } from '../issueCard/issueCard';
import { CreateIssueModal } from '../createIssueModal/createIssueModal';
import { IIssue } from '../../../../interfaces/IScramInfo';
import { useTypedSelector } from '../../../../store/hooks/hooks';
export const IssuesList: React.FC =()=> {
    const issues = useTypedSelector(state => state.gameSettings.issues);
    const [openIssueModal, setOpenIssueModal] = useState<boolean>(false);
    return(<>
    <Container>
        <Container style={{width: '1000px', paddingTop: "100px"}}>
            <Typography className = "lobby--title lobby--title__primary">Issuess:</Typography>
        </Container>
        <Container className = "team-members" >
            {
                issues.map((issue: IIssue) =>{
                    return <IssueCard key = {+new Date()}
                    isNew={false} setOpenIssueModal={setOpenIssueModal} issue = {issue}/>
                })
            }
            <IssueCard key = {+new Date()} isNew={true} setOpenIssueModal={setOpenIssueModal}
             issue={{id: "0", title: "add new issue", link: "", priority:""}}/>
        </Container>
        <Modal open={openIssueModal} onClose={() => setOpenIssueModal(prev => !prev)}>
            <CreateIssueModal setIsOpen={setOpenIssueModal}/>
        </Modal>
        </Container>
    </>)
}