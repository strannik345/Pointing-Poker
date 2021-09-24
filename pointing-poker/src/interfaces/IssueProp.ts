import { IIssue } from "./IScramInfo";

export interface IssueProp{
    isNew: boolean;
    setOpenIssueModal:(value: React.SetStateAction<boolean>) => void;
    issue: IIssue;
    isGame: boolean;
    isActive: boolean;
}
export interface ICreateIssueProp{
    setIsOpen(isopen: boolean): void;
}