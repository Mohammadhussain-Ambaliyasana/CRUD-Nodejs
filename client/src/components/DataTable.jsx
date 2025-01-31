import AddBtn from "./AddBtn";
import axios from "axios";
import { useState, useEffect } from "react";

// material UI imports start
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
// material UI imports end



// material UI functions start
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
// material UI functions end





const DataTable = ({showAlt}) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetching data Function Start
  // Fetching data Function Start
  const fetchAllData = async () => {
    setLoading(true);
    const requestOptions = {
      method: "POST",
      url: "http://localhost:8822/api/users/findall",
      headers: {
          "Content-Type": "application/json",
      },
      
    };  
    
    const response = await axios(requestOptions);
    if(response.data.success){
      setData(response.data.data)
      setLoading(false);
    }else{
      console.log(response.data.message);
      setLoading(false);
    }
  }
  // Fetching data Function Ends

  useEffect( () => {
    fetchAllData();
  },[])
  
  return (
    <>
      <div className="container">
        <AddBtn showAlt={showAlt}/>
        
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table" className="dataTable">
            <TableHead>
              <TableRow>
                <StyledTableCell>Sr. No.</StyledTableCell>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Phone</StyledTableCell>
                <StyledTableCell>Edit</StyledTableCell>
                <StyledTableCell>Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
              {!loading && data && data.map( (data, index) => {
                return <StyledTableRow key={data._id}>
                          <StyledTableCell component="th" scope="row">
                            {index+1}
                          </StyledTableCell>
                          <StyledTableCell>{data._id}</StyledTableCell>
                          <StyledTableCell>{data.name}</StyledTableCell>
                          <StyledTableCell>{data.email}</StyledTableCell>
                          <StyledTableCell>{data.phone}</StyledTableCell>
                          <StyledTableCell><EditIcon/></StyledTableCell>
                          <StyledTableCell><DeleteForeverIcon/></StyledTableCell>
                        </StyledTableRow>
              })}

            </TableBody>
          </Table>
        </TableContainer>

      </div>
    </>
  )
}

export default DataTable
