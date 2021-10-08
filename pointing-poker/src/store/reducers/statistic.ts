import { IssueStatistic, StatisticProp } from "../../interfaces/IssueStatistic";

export const defaultStatistic:StatisticProp ={
    gameStatistic: [],
    issueStatistic: [],
    index: null
}
export interface StatisticAction {
    type: string;
    payload: IssueStatistic[][]; 
  }
export const statisticReducer = (state = defaultStatistic, action: StatisticAction) => {
    switch (action.type) {
      case 'SET_STATISTIC':
        return {...state, gameStatistic: state.gameStatistic.concat(action.payload)};
      default:
        return state;
    }
  }