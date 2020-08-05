import { connect } from 'react-redux'
import { getFormValues } from "redux-form"
import get from "lodash/get"

import * as actions from "./action"

const mapStateToProps = (state) => {
  const { usersData } = state
  const { isModalOpen, dashboardData, selectedFromDate, startTime, endTime, value } =  usersData
  const dataList = get(dashboardData, "data.members", []) || []
  const dashboardFetching = get(dashboardData, "isFetching", false)
  /*const saveSuccess = get(todoData, "saveData.data.status", "") === "200"
  const updateSuccess = get(todoData, "updatedData.data.status", "") === "200"
  const deleteSuccess = get(todoData, "deletedData.data.status", "") === "200"
  const formData = getFormValues("todoForm")(state)*/


  return {
    dataList,
    dashboardFetching,
    isModalOpen,
    selectedFromDate,
    startTime,
    endTime,
    value,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDashboardDataRequest: () => dispatch(actions.getDashboardData.request()),
    getAllDataReq: () => dispatch(actions.getDashboardData.request()),
    setModalVisibility: (data) => dispatch(actions.setModalVisibility(data)),
    setSelectedDate: (data) => dispatch(actions.setSelectedDate(data)),
    setStartTime: (data) => dispatch(actions.setStartTime(data)),
    setEndTime: (data) => dispatch(actions.setEndTime(data)),
    setTimeRange: (data) => dispatch(actions.setTimeRange(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)