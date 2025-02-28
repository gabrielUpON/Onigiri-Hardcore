import Modal from 'react-modal';
import { useState } from 'react';
import postService from '../../../services/post.service';
import imgService from '../../../services/img.service';
import ModalDetails from './ModalDetails';

const DeletePostModal = (param) => {
    const [modalOpen, setModalOpen] = useState(false)

    function handleOpenModal() {setModalOpen(true)}
    function handleCloseModal() {setModalOpen(false)}

    async function handleDelete() {
        await Promise.all([postService.deletePost(param.id), imgService.deleteImage(param.url)])
    }

    return (
        <div>
            <button className="deletar" onClick={handleOpenModal}>Deletar</button>
            <Modal isOpen={modalOpen} onRequestClose={handleCloseModal}>
                <ModalDetails>
                    <div className="modal-content">
                        <h3>Deseja realmente excluir este post?</h3>
                        <div className="modal-buttons">
                            <button onClick={handleDelete}>Confirmar</button>
                            <button onClick={handleCloseModal}>Cancelar</button>
                        </div>
                    </div>
                </ModalDetails>
            </Modal>
        </div>
    )
}

export default DeletePostModal;