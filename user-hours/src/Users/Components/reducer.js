import { initialState, reducer } from "shared/util"
import * as actions from "./action"

const initialObj = {
  empData: initialState,
  dashboardData: initialState,
  updatedData: initialState,
  deletedData: initialState,
  isModalOpen: false,
  selectedFromDate: new Date(),
  startTime: "00:00",
  endTime: "00:00",
  value: {
    start: "00:00",
    end: "00:00",
  }
}

const userReducer = (state = initialObj, action) => {
  switch (action.type) {
    /*case actions.saveData.REQUEST:
    case actions.saveData.SUCCESS:
    case actions.saveData.FAILURE:
    case actions.saveData.CLEAR:
      return {
        ...state,
        saveData: reducer(state.savedData, action, actions.saveData)
      }
    case actions.updateData.REQUEST:
    case actions.updateData.SUCCESS:
    case actions.updateData.FAILURE:
    case actions.updateData.CLEAR:
      return {
        ...state,
        updatedData: reducer(state.updatedData, action, actions.updateData)
      }*/
    case actions.getDashboardData.REQUEST:
    case actions.getDashboardData.SUCCESS:
    case actions.getDashboardData.FAILURE:
    case actions.getDashboardData.CLEAR:
      return {
        ...state,
        dashboardData: reducer(state.dashboardData, action, actions.getDashboardData)
      }
    /*case actions.deleteData.REQUEST:
    case actions.deleteData.SUCCESS:
    case actions.deleteData.FAILURE:
    case actions.deleteData.CLEAR:
      return {
        ...state,
        deletedData: reducer(state.updatedData, action, actions.deleteData)
      }*/
    case actions.SET_MODAL_VISIBILITY:
      return {
        ...state,
        isModalOpen: action.data,
      }
    case actions.SELECTED_DATE:
      return {
        ...state,
        selectedFromDate: action.data,
      }
    case actions.START_TIME:
      return {
        ...state,
        startTime: action.data,
      }
    case actions.END_TIME:
      return {
        ...state,
        endTime: action.data,
      }
    case actions.TIME_RANGE:
      return {
        ...state,
        value: {...action.data},
      }
    default:
      return state
  }
}

export default userReducer
