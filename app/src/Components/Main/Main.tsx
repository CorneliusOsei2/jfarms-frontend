import { useState } from "react"
import axios, { AxiosInstance } from "axios"
import Navbar from "../Navbar/Navbar"
import EmployeeLoginPage from "../Employee/EmployeeLoginPage"
import BoardLoginPage from "../Board/BoardLoginPage"
import Employees from "../Employee/Employees"

const Main = () => {
    const [accessToken, setAccessToken] = useState<string>("")
    const axios_instance: AxiosInstance = axios.create({
        baseURL: "http://127.0.0.1:8000/jfarms",
        headers: { "Authorization": `Bearer ${localStorage.getItem("accessToken")}` }
    })


    return (
        <>
            <Navbar></Navbar>
            {/* <EmployeeLoginPage accessToken={accessToken} setAccessToken={setAccessToken} axios_instance={axios_instance}></EmployeeLoginPage> */}
            <BoardLoginPage accessToken={accessToken} setAccessToken={setAccessToken} axios_instance={axios_instance}></BoardLoginPage>
            <Employees axios_instance={axios_instance} get_employees_url="/employees" ></Employees>



        </>
    )
}

export default Main