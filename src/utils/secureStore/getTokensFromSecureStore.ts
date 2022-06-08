import { TokenTypes } from "../../constants/enums";
import { getFromSecureStore } from "./secureStore";

async function getTokensFromSecureStore() {
    try {
        const [accessToken, refreshToken] = await Promise.all([
            getFromSecureStore(TokenTypes.accessToken),
            getFromSecureStore(TokenTypes.refreshToken)
        ])
        return { accessToken, refreshToken }

    } catch (error) { console.log(error) }
}

export default getTokensFromSecureStore;