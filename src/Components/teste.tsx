"use client";

import { useState, useEffect } from "react";
import { Nota } from "@/interface/Nota";

const Teste = () => {
    const [edit, setEdit] = useState<Nota>({
        id: "",
        titulo: "",
        conteudo: "",
    });

    const handleNota = () => {
        let input = document.querySelector("input");
        let teste: string
        teste = input?.value as string
        let textarea = document.getElementById(
            "textarea"
        ) as HTMLTextAreaElement;
        let teste1: string
        teste1 = textarea.value as string
        // novaNota(nota);
        
        setEdit((prev)=>({
            ...prev,
            id: "",
            titulo: teste,
            conteudo: teste1
        }));
        console.log(edit);
    };

    return (
        <>
            <div className="create-nota">
                <button
                    id="create-note"
                    className="open"
                    onClick={() => {
                        const modal = document.getElementById(
                            "my_modal_2"
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
                    <form id="modal-form" method="dialog">
                        <input
                            id="input"
                            name="titulo"
                            type="text"
                            placeholder="Insira seu titulo"
                            onChange={(e) =>
                                setEdit((prevState) => ({
                                    ...prevState,
                                    titulo: e.target.value,
                                }))
                            }
                        />
                        <textarea
                            id="textarea"
                            name="conteudo"
                            placeholder="O que vamos anotar?"
                            onChange={(e) =>
                                setEdit((prevState) => ({
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
        </>
    );
};

export default Teste;
