const getPublicImageSrc = (imageName: string) => {
    const URL = `http://192.168.0.51:3001/` // TODO: Вынести URL и получать из конфигурационного файла
    console.log(`${URL}uploads/images/${imageName}`)
    return `${URL}uploads/images/${imageName}`
}

export default getPublicImageSrc;