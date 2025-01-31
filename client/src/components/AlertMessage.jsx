import Alert from '@mui/material/Alert';

const AlertMessage = ({message, alertType}) => {
  return (
    <>
        <div className="alertCotainer">
            <Alert severity={alertType}>{message}</Alert>
        </div>
    </>
  )
}

export default AlertMessage
