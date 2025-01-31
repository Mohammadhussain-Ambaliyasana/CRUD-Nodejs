// material UI imports start
import Button from '@mui/material/Button';
import { useState } from 'react';
// material UI imports end

const AddBtn = ({showAlt}) => {

    const [click, setClick] = useState(0);

    const btnClicked = () => {
        showAlt("This button is clicked", "success");
    }

  return (
    <>
        <Button onClick={btnClicked} className='addBtn' variant="outlined" color='#90caf9'> <b> + &nbsp;Add User</b> </Button>
    </>
  )
}

export default AddBtn
