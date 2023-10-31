"use client";

import { useState } from "react";
import { novaNota } from "../../utils/actions";
import { Nota } from "@/interface/Nota";

const Dialog = () => {

    const [nota, setNota] = useState<Nota>({
        id: "",
        titulo: "",
        conteudo: "",
        dataCriacao: "",
    });

    const handleNota = () => {
        novaNota(nota);
        setNota({
            id: "",
            titulo: "",
            conteudo: "",
            dataCriacao: "",
        });
    };

    return (
        <>
            <div className="create-nota">
                <button
                    id="create-note"
                    className="open"
                    onClick={() => {
                        const modal = document.getElementById(
                            "my_modal_3"
                        ) as HTMLDialogElement;
                        if (modal) {
                            modal.showModal();
                        }
                    }}
                >
                    +
                </button>
            </div>
            <dialog
                className="modal"
                aria-labelledby="dialog-title"
                id="my_modal_3"
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
                                    "my_modal_3"
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
                            
                            onChange={
                                (e) =>
                                setNota((prevState) => ({
                                    ...prevState,
                                }))
                            }
                        />
                        <textarea
                            name="conteudo"
                            placeholder="O que vamos anotar?"
                            onChange={(e) =>
                                setNota((prevState) => ({
                                    ...prevState,
                                    conteudo: e.target.value,
                                }))
                            }
                        ></textarea>
                        <button
                            className="modal-create-note"
                            
                            onClick={() => {
                                handleNota();
                                const modal = document.getElementById(
                                    "my_modal_3"
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
        </>
    );
};

export default Dialog;
