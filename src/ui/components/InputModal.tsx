import Modal from 'react-modal';
import { useUiStore } from '../../hooks/useUiStore';
import { useForm } from '../../hooks/useForm';

interface Props {
    onInputValue: ( inputValue: string ) => void;
}


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};
// ? Reference to root on index.html
Modal.setAppElement('#root');

export const InputModal = ( { onInputValue }: Props ) => {
    const { isModalOpen, closeModal } = useUiStore();

    const onCloseModal = () => {
        closeModal();
    }

    const { onInputChange, onResetForm, formState } = useForm({
        inputValue: '',
    });


    const { inputValue } = formState;

    const onSubmit = ( e: React.FormEvent  ) => {
        e.preventDefault();
        console.log({inputValue});
        onInputValue( inputValue.trim().replace(' ', '') );
        onResetForm();
        closeModal();
    }

    return (
        <Modal
            isOpen={isModalOpen}
            className="modal"
            overlayClassName="overlay-modal"
            closeTimeoutMS={ 200 }
            onRequestClose={ onCloseModal }
            style={customStyles}
        >
            <h1
                className="font-mono font-semibold text-2xl text-center max-msm:text-lg"
            >Enter the name of a subreddit:</h1>
            {/* <button onClick={closeModal}>close</button> */}

            <form onSubmit={ onSubmit } >
                <input
                    type="text"
                    placeholder="New search"
                    name="inputValue"
                    value={ inputValue }
                    onChange={ onInputChange }
                    className="searchbox"
                />
            </form>
      </Modal>
    )
}
