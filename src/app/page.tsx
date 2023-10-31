import Dialog from "@/Components/Dialog";
import db from "./../../utils/db";
import CardList from "@/Components/CardList";

const getData = async () => {
    const notas = await db.nota.findMany({});
    return notas;
};

const Home = async () => {

    const notas = await getData();

    return (
        <>
            <main className="notas-list">
                <CardList notas={notas} />
            </main>
            <Dialog />
        </>
    );
};

export default Home;
