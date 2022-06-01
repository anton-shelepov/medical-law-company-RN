import { getFromSecureStore } from "./secureStore"

async function getTokensFromSecureStore() {
    try {
        const [accessToken, refreshToken] = await Promise.all([
            getFromSecureStore('access_token'),
            getFromSecureStore('refresh_token')
        ])
        return { accessToken, refreshToken }

    } catch (error) { throw error }
}

export default getTokensFromSecureStore;