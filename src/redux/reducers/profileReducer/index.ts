import { IProfileState } from "./types";

const initialState: IProfileState = {
    profileData: {
        userImageSrc: 'https://i1.wp.com/avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar-1.png?ssl=1',
        userName: 'Шелепов Антон Константинович'
    }
}

const profileReducer = ( state = initialState, action: any) => {
    switch (action) {
        case '':
            return state

        default:
            return state
    }
}

export default profileReducer