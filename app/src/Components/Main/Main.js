import { useState } from "react"
import axios, { AxiosInstance } from "axios"
import Employees from "../Employee/Employees"

const Main = () => {
    const [accessToken, setAccessToken] = useState("")
    const axios_instance = axios.create({
        baseURL: "http://127.0.0.1:8000/jfarms",
        headers: { "Authorization": `Bearer ${localStorage.getItem("accessToken")}` }
    })

    return (
        <>
            {/* <EmployeeLoginPage accessToken={accessToken} setAccessToken={setAccessToken} axios_instance={axios_instance}></EmployeeLoginPage> */}
            <Employees axios_instance={axios_instance} url="/employees/"  ></Employees>



        </>
    )
}

export default Main