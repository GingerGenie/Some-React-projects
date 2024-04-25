import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// с 9 версии Redux у hook'ов появились свойства withTypes!

//export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

//export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppSelector = useSelector.withTypes<RootState>()