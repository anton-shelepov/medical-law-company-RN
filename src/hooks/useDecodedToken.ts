import jwt_decode from "jwt-decode";
import { TokenTypes } from "../constants/enums";
import { DecodedToken } from "../types/commonTypes";
import { useAppSelector } from "./useAppSelector";

const useDecodedToken = (tokenType: TokenTypes) => {
    const token = useAppSelector(state => state.user[tokenType])
    const decodedAccessToken: DecodedToken = jwt_decode(token)

    return decodedAccessToken
}

export default useDecodedToken