import { TokenTypes } from "../../constants/enums";
import { Tokens } from "../../redux/reducers/userReducer/types";
import { getFromSecureStore } from "./secureStore"

async function getTokensFromSecureStore() {
    try {
        const [accessToken, refreshToken] = await Promise.all([
            getFromSecureStore(TokenTypes.accessToken),
            getFromSecureStore(TokenTypes.refreshToken)
        ])
        return { accessToken, refreshToken }

    } catch (error) { throw error }
}

export default getTokensFromSecureStore;