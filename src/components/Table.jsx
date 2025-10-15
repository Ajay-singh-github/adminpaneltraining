
import MaterialTable from '@material-table/core';
import DeleteIcon from '@mui/icons-material/Delete';

const Table = () => {
    return (
        // <table>
        //     <tr><th>S.No</th><th>Category Name</th><th>Description</th><th>Image</th><th>Action</th></tr>
        //      <tr><td>1</td><td>Electronic</td><td>this is very nice</td><td><img src=""/></td><EditIcon/><DeleteIcon/><td></td></tr>    
        // </table>
        <div className='h-[100%] w-[100%] p-3'>
            <MaterialTable
                title="Positioning Actions Column Preview"
                columns={[
                    { title: 'Category', field: 'category' },
                    { title: 'Description', field: 'description' },
                    { title: 'Image', field: 'image' },
                    
                ]}
                data={[
                    { category: 'Mehmet', description: 'Baran', image: 'image' },
                    { category: 'Zerya Betül', description: 'Baran', image: 'image'  },
                ]}
                actions={[
                    {
                        icon: 'save',
                        tooltip: 'Save User',
                        onClick: (event, rowData) => alert("You saved " + rowData.name)
                    },
                    rowData => ({
                        icon: 'delete',
                        tooltip: 'Delete User',
                        onClick: (event, rowData) => confirm("You want to delete " + rowData.name),
                        disabled: rowData.birthYear < 2000
                    })
                ]}
                options={{
                    actionsColumnIndex: -1
                }}

            />
        </div>
    )
}

export default Table