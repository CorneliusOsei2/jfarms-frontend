import { AxiosInstance } from "axios"
import LoginForm from "../Main/LoginForm"
import { useState } from "react"

type Props = {
    axios_instance: AxiosInstance,
    get_employees_url: string
}

const Employees = (props: Props) => {
    const [response, setResponse] = useState({})

    const getEmployeesHandler = async (): Promise<void> => {
        const response = await props.axios_instance.get(props.get_employees_url)
        console.log(response)
    }

    return (
        // <LoginForm accessToken={props.accessToken} setAccessToken={props.setAccessToken} axios_instance={props.axios_instance} login_url="/employees/login"></LoginForm>

        <>
            <button onClick={getEmployeesHandler}>Emps</button>
        </>

    )
}

export default Employees
