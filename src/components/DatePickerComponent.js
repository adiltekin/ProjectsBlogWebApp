import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect } from 'react';


function DatePickerComponent(props) {

  const {label, name, date, setDate, inputDate} = props

  useEffect(() => {
    inputDate()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[date])

  return (
    <>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
            label={label}
            disableFuture
            ignoreInvalidInputs
            name={name}
            value={date}
            onChange={(newValue) => {
            setDate(newValue.toJSON());
            }}
            renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
    </>
  )
}

export default DatePickerComponent
