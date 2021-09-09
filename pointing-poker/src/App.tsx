import React from 'react';
import { CreateIssueModal } from './components/createIssueModal/createIssueModal';
import { KickModal } from './components/kickModal/kickModal';
import { ScrumMaster } from './pages/lobby/scrumMaster/scrumMaster';
import { TeamMember } from './pages/lobby/teamMember/teamMember';
function App() {
  return (
    <div>
      <CreateIssueModal/>
    </div>
  );
}

export default App;
