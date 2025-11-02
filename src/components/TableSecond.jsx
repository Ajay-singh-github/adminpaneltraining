import axios from "axios"
import { useEffect, useState } from "react"

export default function TableSecond() {
    const [categories, setCategories] = useState([])

    const fetchAllCategories = async () => {
        const response = await axios.get("https://api.escuelajs.co/api/v1/categories")
        // console.log("here is my response data:", response.data)
        setCategories(response.data)
    }

    useEffect(function () {
        fetchAllCategories()
    }, [])

    console.log(categories)

    return (<div>
        <table >
            <tr><th>Id</th><th>Name</th><th>Description</th><th>Picture</th><th>Created At</th></tr>
            
                {categories.map((item, index) => (
                   <tr>
                        <td >{index}</td>
                        <td >{item.name}</td>
                        <td >{item.slug}</td>
                        <td ><img src={item.image} width={50} height={50}/></td>
                        <td>{item.updatedAt}</td>
                     </tr>
                ))}

          
        </table>
    </div>)
}