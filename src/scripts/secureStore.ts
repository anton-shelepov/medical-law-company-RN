import * as SecureStore from "expo-secure-store";

export async function setInSecureStore(key: string, value: string) {
    await SecureStore.setItemAsync(key, value);
}

export async function getFromSecureStore(key: string) {
    let result = await SecureStore.getItemAsync(key);

    if (!result) {
        return `Not found any data by key: ${key} in secure store`
    }

    return result
}

export async function removeFromSecureStore(key: string) {
    await SecureStore.deleteItemAsync(key);
}

