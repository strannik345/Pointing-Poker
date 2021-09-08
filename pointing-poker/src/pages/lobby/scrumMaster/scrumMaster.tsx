import React from 'react';
import './scrumMaster.scss';
import '../teamMember/teamMember.scss'
import '@fontsource/ruda';
import { MembersList } from '../../../components/membersList/membersList';
import { LobbyInfo } from '../../../components/lobbyInfo/lobbyInfo';
import { IssuesList } from '../../../components/issuesList/issuesList';
export const ScrumMaster: React.FC =()=> {
    return(<>
        <LobbyInfo isMaster = {true}/>
        <MembersList/>
        <IssuesList/>
    </>)
}