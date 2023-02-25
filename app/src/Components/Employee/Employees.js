import { useState } from "react"
import EmployeeRegistrationPage from "./RegistrationPage"

const Employees = (props) => {
    const [response, setResponse] = useState({})

    const getEmployeesHandler = async () => {
        const response = await props.axios_instance.get(props.url)
        console.log(response)
    }

    return (
        // <LoginForm accessToken={props.accessToken} setAccessToken={props.setAccessToken} axios_instance={props.axios_instance} login_url="/employees/login"></LoginForm>

        <>
            <EmployeeRegistrationPage axios_instance={props.axios_instance} url={props.url} />
        </>

    )
}

export default Employees
