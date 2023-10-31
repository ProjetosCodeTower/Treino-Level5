"use server";

import { revalidatePath } from "next/cache";
import db from "./db";

export const novaNota = async (notas) => {
    await db.nota.create({
        data: {
            titulo: notas.titulo,
            conteudo: notas.conteudo,
        },
    });
    revalidatePath("/");
};

export const excluirNota = async (id: string) => {
    await db.nota.delete({
        where: { id },
    });
    revalidatePath("/");
};

export const updateNota = async (nota) => {
    await db.nota.update({
        where: { id: nota.id },
        data: {
            titulo: nota.titulo,
            conteudo: nota.conteudo,
        },
    });
    revalidatePath("/");
};

export const getOne = async (id: string) => {
    const notas = await db.nota.findUnique({
        where: { id: id },
    });
    return notas;
};