import React, {useState } from 'react';
import './../../lobby.scss';
import '@fontsource/ruda';
import { Typography, Container, Modal } from '@material-ui/core';
import { IssueCard } from '../issueCard/issueCard';
import { CreateIssueModal } from '../createIssueModal/createIssueModal';
import { IIssue } from '../../../../interfaces/IScramInfo';
import { useTypedSelector } from '../../../../store/hooks/hooks';
import { IIssueListProp } from '../../../../interfaces/IIssueListProp';
export const IssuesList: React.FC<IIssueListProp> =(props:IIssueListProp)=> {
    const issues = useTypedSelector(state => state.gameSettings.issues);
    const [openIssueModal, setOpenIssueModal] = useState<boolean>(false);
    const {isGame, activeIssue} = {...props};
    return(<>
    <Container>
        <Container style={{}}>
            <Typography className = "lobby--title lobby--title__primary">Issuess:</Typography>
        </Container>
        <Container className = "team-members" >
            {
                issues.map((issue: IIssue, index) =>{
                    return <IssueCard isActive = {index === activeIssue} key={index}
                        isNew={false} setOpenIssueModal={setOpenIssueModal} issue={issue} isGame = {isGame}/>
                })
            }
            <IssueCard  isNew={true} setOpenIssueModal={setOpenIssueModal} isActive ={false}
                issue={{ id: "0", title: "add new issue", link: "", priority: "" }} isGame={false}/>
        </Container>
        <Modal open={openIssueModal} onClose={() => setOpenIssueModal(prev => !prev)}>
            <CreateIssueModal setIsOpen={setOpenIssueModal}/>
        </Modal>
        </Container>
    </>)
}