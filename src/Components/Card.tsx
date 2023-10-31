"use client";

import { Icon } from "@iconify/react";
import { useTransition } from "react";
import { excluirNota } from "../../utils/actions";
import Link from "next/link";

const Card = ({ nota }) => {
    
    const [isPending, startTransition] = useTransition();

    return (
        <div className="card">
            <div className={`card-header `}>
                <span>{nota.titulo}</span>
                <div className="dropdown">
                    <button>
                        <Icon icon="ph:dots-three-vertical" width="32" />
                    </button>
                    <div className="dropdown-content">

                        <Link href={`/edit/${nota.id}`}>
                            Editar <Icon icon="ph:pencil-light" width="30" />
                        </Link>

                        <a
                            href="#"
                            onClick={() =>
                                startTransition(() => excluirNota(nota.id))
                            }
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
        </div>
    );
};

export default Card;
