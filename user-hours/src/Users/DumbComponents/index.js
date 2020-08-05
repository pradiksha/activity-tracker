import React, { Component } from 'react'
import Container from "Users/Components"
import Header from "Users/Common/Header"
import Dashboard from "./Dashboard"
import PeriodsOfActivityModal from "./PeriodsOfActivityModal"
//import TodoModal from "./TodoModal"


const Button = ({ onClick, children, className }) => (
  <button type="button" onClick={onClick} className={`btn ${className}`}>{children}</button>
)

class Users extends Component {

  state = {
    showModal: false,
    selectedData: {},
    isEdit: false,
  }

  componentDidMount() {
    const { getAllDataReq } = this.props
    getAllDataReq()
  }

  componentWillReceiveProps(nextProps) {
    /*const { saveSuccess, saveDataClear, getAllDataReq, dashboardFetching, updateDataClear, updateSuccess, deleteSuccess, deleteDataClear } = nextProps
    if(deleteSuccess) {
      deleteDataClear()
      getAllDataReq()
    }
    if ((saveSuccess || updateSuccess) && !dashboardFetching) {
      saveDataClear()
      updateDataClear()
      this.setState({ showModal: false, selectedData: {} })
      getAllDataReq()
    }*/
  }

  handleShowModal = () => {
    const { setModalVisibility } = this.props
    setModalVisibility(true)
    this.setState({ showModal: true, isEdit: false })
  }

  handleHideModal = () => {
    const { setModalVisibility } = this.props
    setModalVisibility(false)
    this.setState({ showModal: false, isEdit: false, selectedData: {} })
  }

  handleEdit = (value) =>  {
    const { setModalVisibility } = this.props
    setModalVisibility(true)
    this.setState({ selectedData: value, isEdit: true, showModal: true }) }

  render() {
    const {
      dataList,
      dashboardFetching,
      isModalOpen,
      selectedFromDate,
      setSelectedDate,
      startTime,
      endTime,
      setStartTime,
      setEndTime,
      value,
      setTimeRange,
    } = this.props
    console.log("*******************")
    console.log("datalist:", dataList)
    console.log("dashboardFetching:", dashboardFetching)
    return (
      <div>
        <Header />
        <h1>Employees List</h1>
        {!dashboardFetching && <Dashboard list={dataList} onEdit={this.handleEdit}  />}
        <PeriodsOfActivityModal
          show={isModalOpen}
          handleShowModal={this.handleShowModal}
          handleHideModal={this.handleHideModal}
          isEdit={this.state.isEdit}
          selectedData={this.state.selectedData}
          selectedFromDate={selectedFromDate}
          setSelectedDate={setSelectedDate}
          startTime={startTime}
          endTime={endTime}
          setStartTime={setStartTime}
          setEndTime={setEndTime}
          value={value}
          setTimeRange={setTimeRange}
        />
      </div>
    )
  }
}

export default Container(Users)
