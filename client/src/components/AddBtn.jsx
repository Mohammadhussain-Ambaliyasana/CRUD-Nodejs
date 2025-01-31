// material UI imports start
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
// material UI imports end

const AddBtn = () => {

    const [click, setClick] = useState(0);

    const btnClicked = () => {
        setClick(click+1);
    }

  return (
    <>
        <Button onClick={btnClicked} className='addBtn' variant="outlined" color='#90caf9'> <b> + &nbsp;Add User</b> </Button>
    </>
  )
}

export default AddBtn
