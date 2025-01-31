import { useState } from "react";
import AlertMessage from "./components/AlertMessage";
import DataTable from "./components/DataTable";
import "./style.css";

const App = () => {

  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const showAlert = (alertMessage, alertType) => {

    setAlert(true);
    setAlertMessage(alertMessage);
    setAlertType(alertType);

    setTimeout( () => {
      setAlert(false);
      setAlertMessage("");
      setAlertType("");
    },3000)

  }

  return (
    <div className="body">
      {alert && <AlertMessage message={alertMessage} alertType={alertType}/>}
      <DataTable showAlt={showAlert}/>
    </div>
  )
}

export default App