import React from 'react';
import './scrumMaster.scss';
import '@fontsource/ruda';
import { MembersList } from '../../../components/membersList/membersList';
import { LobbyInfo } from '../../../components/lobbyInfo/lobbyInfo';
export const TeamMember: React.FC =()=> {
    return(<>
        <LobbyInfo isMaster = {true}/>
        <MembersList/>
    </>);
}