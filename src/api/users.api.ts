import privateClient from "./privateClient.config";


const usersAPI = {

    path: 'users/',

    async fetchPinnedUsers() {
        return await privateClient.get(
            usersAPI.path + 'pinned'
        )
    },

    async fetchCurrentUserData() {
        return await privateClient.get(
            usersAPI.path + 'me'
        )
    },

    async changeCurrentUserData(data: {
        fullName?: string,
        oldPassword?: string,
        newPassword?: string,
    }) {
        return await privateClient.patch(
            usersAPI.path + 'me',
            data
        )
    },

    async uploadUserImage(formData: FormData) {
        return await privateClient.put(
            usersAPI.path + 'me/upload-image', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            transformRequest: (data, headers) => {
                return formData; // this is doing the trick
            },
        })
    },

    async fetchOneUser(userId: Number) {
        return await privateClient.get(
            usersAPI.path + userId)
    }

}

export default usersAPI;