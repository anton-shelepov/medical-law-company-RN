import * as ImagePicker from 'expo-image-picker';
import usersAPI from '../api/users.api';


const chooseAndUploadImage = async () => {
    try {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        })

        if (result.cancelled === false) {
            const formData = new FormData();
            const image: any = {
                uri: result.uri,
                name: result.uri.split('/').pop(),
                type: 'image/' + result.uri.split('.').pop(),
            }
            formData.append('image', image)
            const response = await usersAPI.uploadUserImage(formData) // TODO: Вынести логику запроса и dispatch в redux saga и reducer

            return response;
        }
        return false
    } catch (error) {
        console.log(error)
    }
}

export default chooseAndUploadImage;