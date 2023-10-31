import Card from "./Card";

const CardList = ({notas}) => {
    return (
        <>
        {notas.map(nota => (
            <Card nota={nota} key={nota.id} />
        ))}
        </>
    );
};

export default CardList;