import { useCallback, useState } from "react";
import wait from "../scripts/wait";

const useRefresh = (duration: number = 2000): [refreshing: boolean, onRefresh: () => void] => {

    const [refreshing, setRefreshing] = useState(false);
    console.log('refresh render')

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(duration).then(() => setRefreshing(false));
    }, []);

    return [refreshing, onRefresh]
}

export default useRefresh;