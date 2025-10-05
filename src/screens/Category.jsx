import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Category() {
    return (
        <div className="h-[100%] w-[100%] flex justify-center items-center">
            <div className="bg-neutral-100 h-[60%] w-[50%] rounded-2xl gap-5 flex flex-col justify-center items-center" >
                <TextField id="outlined-basic" label="Enter Category" variant="outlined" className='w-[70%]' />
                <TextField id="outlined-basic" label="Enter Description" variant="outlined" className='w-[70%]' />
                <Button variant="contained">Submit</Button>
                {/* <input type="text" placeholder="Enter Category Name" className="w-[50%]"/> */}
                {/* <input type="text" placeholder="Enter Description" className="w-[50%]" /> */}
                {/* <input type="submit" value="Submit" className="bg-blue-400 w-[100px] rounded"/> */}
            </div>
        </div>)
}