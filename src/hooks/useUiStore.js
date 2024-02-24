import { useSelector, useDispatch } from 'react-redux'
import { onOpenDateModal, onCloseDateModal } from '../store/ui/uiSlice';

export const useUiStore = () => {
    const dispatch = useDispatch();
    //Para cambiar el estado de isDateModalOpen en el store
    const { isDateModalOpen } = useSelector(state => state.ui);

    //Creamos los metodos que se encargaran de cambiar el estado de isDateModalOpen
    const openDateModal = () => {
        dispatch(onOpenDateModal());
    }
    const closeDateModal = () => {
        dispatch(onCloseDateModal());
    }

    return {
        //propiedades para obtener el estado
        isDateModalOpen,
        //metodos para cambiar el estado
        openDateModal,
        closeDateModal
    }
}