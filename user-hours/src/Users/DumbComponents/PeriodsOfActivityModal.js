import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import DatePicker from "react-datepicker";
//import moment from "moment/min/moment.min"
import moment from "moment-timezone/builds/moment-timezone-with-data"
import TimeRangeSlider from "react-time-range-slider"

import "react-datepicker/dist/react-datepicker.css";
import "./styles.css"
import { NONAME } from 'dns';

import "./styles.css"

class PeriodsOfActivityModal extends Component {
  //export default function PeriodsOfActivityModal({ show, handleShowModal, handleHideModal, saveDataRequest, isEdit, selectedData, updateDataRequest, formData }) {

  state = {
    selectedFromDate: new Date(),
  }

  handleChange = (date, activityPeriodArray, startDateArray, endDateArray, startTimeArray, endTimeArray) => {
    const { setSelectedDate, setStartTime, setEndTime, setTimeRange } = this.props
    console.log("selected date:", date)
    const formatedDate = moment(date, "DD/MM/YYYY").format("DD/MM/YYYY")
    console.log("formatedDate:", formatedDate)
    const index = activityPeriodArray.indexOf(formatedDate)
    console.log("index:", index)
    console.log("setSelectedDate:", setSelectedDate)
    setSelectedDate(date)
    const startIndex = startDateArray.indexOf(formatedDate)
    setStartTime(startTimeArray[startIndex])
    const endIndex = endDateArray.indexOf(formatedDate)
    setEndTime(endTimeArray[endIndex])
    setTimeRange({ start: moment(startTimeArray[startIndex], "hh:mm A").format("HH:mm"), end: moment(endTimeArray[endIndex], "hh:mm A").format("HH:mm") })
  }

  render() {
    const {
      show,
      handleShowModal,
      handleHideModal,
      saveDataRequest,
      isEdit,
      selectedData,
      updateDataRequest,
      formData,
      selectedFromDate,
      startTime,
      endTime,
      value,
    } = this.props
    console.log("isEdit: ", isEdit)
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&")
    //console.log("selectedFromDate:", selectedFromDate)
    console.log("selectedData:", selectedData)
    const { activity_periods, tz } = selectedData
    const startDate = new Date()
    const activityPeriodArray = []
    const startDateArray = []
    const endDateArray = []
    const startTimeArray = []
    const endTimeArray = []
    activity_periods && activity_periods.map(data => {
      const formatedStartDate = moment(data.start_time, "MMM DD YYYY hh:mmA").format("DD/MM/YYYY")
      activityPeriodArray.push(formatedStartDate)
      startDateArray.push(formatedStartDate)
      const formatedStartTime = moment(data.start_time, "MMM DD YYYY hh:mm A").format("hh:mm A")
      startTimeArray.push(formatedStartTime)
      const formatedEndDate = moment.utc(data.end_time, "MMM DD YYYY hh:mmA").format("DD/MM/YYYY")
      activityPeriodArray.push(formatedEndDate)
      endDateArray.push(formatedEndDate)
      const formatedEndTime = moment(data.end_time, "MMM DD YYYY hh:mmA").format("hh:mm A")
      endTimeArray.push(formatedEndTime)
      return null;
    }
    )
    console.log("activityPeriodArray:", activityPeriodArray)
    console.log("startDateArray:", startDateArray)
    console.log("endDateArray:", endDateArray)
    console.log("startTimeArray:", startTimeArray)
    console.log("endTimeArray:", endTimeArray)
    return (
      <Modal
        className="todo-modal"
        show={show}
        onHide={handleHideModal}
      >
        <Modal.Header closeButton >
          <Modal.Title>Activity Period</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="d-flex">
              <p className="lable-txt">Date: </p>
              <DatePicker
                selected={selectedFromDate}
                dateFormat="dd/MM/yyyy"
                onChange={date => this.handleChange(date, activityPeriodArray, startDateArray, endDateArray, startTimeArray, endTimeArray)}
                dayClassName={date =>
                  activityPeriodArray.indexOf(moment(date, "DD/MM/YYYY").format("DD/MM/YYYY")) !== -1 ? "random" : undefined
                }
              />
            </div>
            <div className="d-flex">
              <p className="lable-txt">Start Time:<span className="time">{startTime}</span></p>
              <p className="lable-txt">End Time:<span className="time">{endTime}</span></p>
            </div>
            <TimeRangeSlider
              disabled={false}
              format={24}
              maxValue={"23:59"}
              minValue={"00:00"}
              name={"time_range"}
              value={value} />
          </div>
        </Modal.Body>
      </Modal>
    )
  }
}
export default PeriodsOfActivityModal