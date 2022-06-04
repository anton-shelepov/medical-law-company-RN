import jwt_decode from "jwt-decode";
import { TokenTypes } from "../../constants/enums";
import { DecodedToken } from "../../types/commonTypes";
import { getFromSecureStore } from "./secureStore";

const getDecodedTokenFromSecureStore = async (tokenType: TokenTypes): Promise<DecodedToken> => {
    const token = await getFromSecureStore(tokenType)
    return jwt_decode(token)
}

export default getDecodedTokenFromSecureStore;