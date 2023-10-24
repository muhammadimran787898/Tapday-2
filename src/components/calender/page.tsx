'use client'
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars'
import { useState } from 'react'

// import './styles.css'

const Calender = () => {
  const [date, updateDate] = useState()

  const onChange = (e: any) => {
    updateDate(e.text)
  }

  return (
    <div className="container">
      <DateRangePickerComponent onChange={onChange} />
      <div>Date - {date}</div>
    </div>
  )
}

export default Calender
