import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { iRootState, iAppDispatch } from './stores';

export const useAppDispatch: () => iAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<iRootState> = useSelector;
