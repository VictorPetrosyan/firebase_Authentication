import { useSelector } from "react-redux";

export function useAuth() {
    const { email, token, id, emailVerified } = useSelector(state => state.user)

    return {
        isAuth: !!email,
        email,
        token,
        id,
        emailVerified
    }
}