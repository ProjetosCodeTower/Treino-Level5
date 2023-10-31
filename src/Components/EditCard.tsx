"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";
import { excluirNota, updateNota } from "../../utils/actions";
import { useRouter } from "next/navigation";
import { Nota } from "@/interface/Nota";

interface CardEditProps {
    nota: Nota;
}

const CardEdit = ({ nota }: CardEditProps) => {
        const route = useRouter()

        const [edit,setEdit] = useState(nota)

    const handleUpdate = () => {
        updateNota(edit);
        route.push("/")
    };

    const handleDelete = () => {
        excluirNota(edit.id)
        route.push("/")
    };

    return (
        <div className="card">
            <div className="card-header">
                <span>{nota.titulo}</span>
                <div className="dropdown">
                    <button>
                        <Icon icon="ph:dots-three-vertical" width="32" />
                    </button>
                    <div className="dropdown-content">
                        <a
                            href="#"
                            onClick={() => {
                                const modal = document.getElementById(
                                    "my_modal_2"
                                ) as HTMLDialogElement;
                                if (modal) {
                                    modal.showModal();
                                }
                            }}
                        >
                            Editar <Icon icon="ph:pencil-light" width="30" />
                        </a>
                        <a
                            href="#"
                            onClick={handleDelete}
                        >
                            Excluir{" "}
                            <Icon
                                icon="ph:trash-light"
                                color="#f60b2b"
                                width="30"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="card-content">
                <p>{nota.conteudo}</p>
            </div>

            <dialog
                className="modal"
                aria-labelledby="dialog-title"
                id="my_modal_2"
            >
                <div className="modal-wrapper">
                    <div className="modal-header">
                        <button
                            type="button"
                            id="close-modal-btn"
                            className="close-modal"
                            aria-label="Fechar modal"
                            data-dismiss="modal"
                            onClick={() => {
                                const modal = document.getElementById(
                                    "my_modal_2"
                                ) as HTMLDialogElement;
                                if (modal) {
                                    modal.close();
                                }
                            }}
                        >
                            X
                        </button>
                    </div>
                    <form id="modal-form" method="dialog" >
                        <input
                            name="titulo"
                            type="text"
                            placeholder="Insira seu titulo"
                            value={edit.titulo}
                            onChange={(e) =>
                                setEdit((prevState: any) => ({
                                    ...prevState,
                                    titulo: e.target.value,
                                }))
                            }
                        />
                        <textarea
                            name="conteudo"
                            placeholder="O que vamos anotar?"
                            value={edit.conteudo}
                            onChange={(e) =>
                                setEdit((prevState: Nota) => ({
                                    ...prevState,
                                    conteudo: e.target.value,
                                }))
                            }
                        ></textarea>
                        <button
                            className="modal-create-note"
                            onClick={() => {
                                handleUpdate();
                                const modal = document.getElementById(
                                    "my_modal_2"
                                ) as HTMLDialogElement;
                                if (modal) {
                                    modal.close();
                                }
                            }}
                        >
                            Criar
                        </button>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default CardEdit;
