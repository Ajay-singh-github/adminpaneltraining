import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import nitesh2 from "../assets/nitesh2.jpg"
import logo from "../assets/logo.png"
import image from "../assets/image.png"
import Swal from 'sweetalert2';
import Table from '../components/Table';

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
export default function Category() {
    const [imagename, setImageName] = useState('')

    const handlePicture = (e) => {
        if (e.target.files[0].name === "nitesh2.jpg") {
            setImageName(nitesh2)
        }
        else if (e.target.files[0].name === "logo.png") {
            setImageName(logo)
        }
        else if (e.target.files[0].name === "image.png") {
            setImageName(image)
        }
        else {
            setImageName("")
        }
        console.log(e.target.files[0].name)
    }

    const handleImageRemove = () => {
        setImageName("")
    }

    const handleSubmitCategory = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Category has been saved",
            showConfirmButton: false,
            timer: 1500
        });

    }

    console.log(`../assets/${imagename}`)
    return (
        <>
           {/* form section category */}
            {/* <div className="h-[100%] w-[100%] flex justify-center items-center">
                <div className="bg-neutral-100 h-[70%] w-[50%] rounded-2xl gap-5 flex flex-col justify-center items-center" >
                <TextField id="outlined-basic" label="Enter Category" variant="outlined" className='w-[70%]' />
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
                        onChange={handlePicture}
                    />
                </Button>
                {imagename.length <= 1 ? "" :
                    <div className='flex gap-2'>
                        <img width={70} className='rounded cursor-pointer' height={70} src={imagename} /> <DeleteIcon onClick={() => handleImageRemove()} className='cursor-pointer' />
                    </div>
                }

                <Button variant="outlined" onClick={() => handleSubmitCategory()}>Add Category</Button>
            </div>
            </div> */}

            {/* table section */}
            <div className='h-[100%] w-[100%]'>
                <Table />
            </div>

        </>
    )
}