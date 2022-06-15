import privateClient from "./privateClient.config";


const chatsAPI = {

    path: 'users/me',

    async fetchUserChatsWithEmployees() {
        return await privateClient.get(
            chatsAPI.path + '/chats'
        )
    },

}

export default chatsAPI;