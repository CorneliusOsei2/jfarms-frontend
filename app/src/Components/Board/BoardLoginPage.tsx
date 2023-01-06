import { AxiosInstance } from "axios"
import LoginForm from "../Main/LoginForm"

type Props = {
    accessToken: string,
    setAccessToken: Function
    axios_instance: AxiosInstance,
}

const BoardLoginPage = (props: Props) => {

    return (
        <LoginForm accessToken={props.accessToken} setAccessToken={props.setAccessToken} axios_instance={props.axios_instance} login_url="/users/login"></LoginForm>

    )
}

export default BoardLoginPage
