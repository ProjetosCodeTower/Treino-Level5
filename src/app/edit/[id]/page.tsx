import { GetServerSidePropsContext } from "next";
import db from "./../../../../utils/db";
import EditCard from "@/Components/EditCard";
import './style.css'

const getData = async (id: string) => {
    const notas = await db.nota.findUnique({
        where: { id: id },
    });
    return notas;
};

export default async function Edit({ params }: GetServerSidePropsContext) {
    const { id } = params as { id: string };
    const nota = await getData(id);

    return (
        <>
            <div className="teste">
                <main className="notas-list">
                    <EditCard nota={nota} />
                </main>
            </div>
        </>
    );
}
