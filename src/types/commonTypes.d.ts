import { AppRoles } from "../constants/enums"

export type DecodedToken = {
    exp: number,
    iat: number,
    role: AppRoles,
    sub: number,
}