import {ActionCreatorsMapObject, bindActionCreators} from "redux";
import {useMemo} from "react";
import {useAppDispatch} from "../bll/store";


export function useActions<T extends ActionCreatorsMapObject<any>>(actions: T) {
    const dispatch = useAppDispatch()

    const boundActions = useMemo(() => {
        return bindActionCreators(actions, dispatch)
    }, [])

    return boundActions
}
