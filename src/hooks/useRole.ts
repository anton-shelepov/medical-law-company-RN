import { TokenTypes } from "../constants/enums";
import useDecodedToken from "./useDecodedToken";

const useRole = () => {
    const decodedAccessToken = useDecodedToken(TokenTypes.accessToken);
    return decodedAccessToken.role;
}

export default useRole