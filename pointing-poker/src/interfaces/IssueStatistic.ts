export interface IssueStatistic {
    cardValue: number;
    percent: number;
}
export interface StatisticProp {
    index: number | null;
    issueStatistic: IssueStatistic[];
    gameStatistic: IssueStatistic[][];
}