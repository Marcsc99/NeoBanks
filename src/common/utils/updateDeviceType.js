import { useSelector, useDispatch } from "react-redux";
import { useEffect, useCallback } from "react";
import { types, deviceActions } from "../../deviceHelper/deviceTypeController";
import useWindowDimensions from "./windowSizes";

export default function useDeviceType() {
    const type = useSelector(state => state.deviceType)
    const dispatch = useDispatch();

    const { width } = useWindowDimensions();

    const updateType = useCallback(() => {
        if (width > 1024) { if (type !== types.pc) dispatch(deviceActions.pcType()) }
        else if (width > 767) { if (type !== types.tablet) dispatch(deviceActions.tabletType()) }
        else if (type !== types.mobile) { dispatch(deviceActions.mobileType()) }
    }, [width, type, dispatch])

    useEffect(() => {
        updateType()
    }, [width, updateType]);
}