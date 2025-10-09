import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function Subcategory() {


    return (<div className="h-[100%] w-[100%] flex justify-center items-center">
        <div className="bg-neutral-100 h-[60%] w-[50%] rounded-2xl gap-5 flex flex-col justify-center items-center" >
            <Box sx={{ minWidth: 120 }} className='w-[70%]'>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Category"
                        // onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>


            <TextField id="outlined-basic" label="Enter Subcategory" variant="outlined" className='w-[70%]' />
            <TextField id="outlined-basic" label="Enter Description" variant="outlined" className='w-[70%]' />
            <Button
                    className='w-[70%]'
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                >
                    Upload files
                    <VisuallyHiddenInput
                        type="file"
                    />
                </Button>
            <Button variant="outlined">Add Subcategory</Button>
            {/* <input type="text" placeholder="Enter Category Name" className="w-[50%]"/> */}
            {/* <input type="text" placeholder="Enter Description" className="w-[50%]" /> */}
            {/* <input type="submit" value="Submit" className="bg-blue-400 w-[100px] rounded"/> */}
        </div>
    </div>)
}