import { useAppDispatch, useAppSelector } from './hooks'
import { onCloseModal, onOpenModal } from '../store/ui/uiSlice';

export const useUiStore = () => {

    const { isModalOpen } = useAppSelector( state => state.ui );
    const dispatch = useAppDispatch();

    const openModal = () => {
        dispatch( onOpenModal() );
    }

    const closeModal = () => {
        dispatch( onCloseModal() );
    }

    return {
        isModalOpen,
        openModal,
        closeModal
    }
}
