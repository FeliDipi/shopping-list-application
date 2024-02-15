import "../styles/List.css";
import { TICKET_STATES } from "../types/ticketStates.js";
import ListTicket from "./ListTicket.jsx";

const List = () =>
{
    return (
        <ul className="list">
            <ListTicket id={0} productName={"Coca Cola"} productPrice={1000} productAmount={5}/>
            <ListTicket id={1} productName={"Leche"} productPrice={500} productAmount={3}/>
            <ListTicket id={2} productName={"Coca Cola"} productPrice={1000} productAmount={5} state={TICKET_STATES.EDIT}/>
            <ListTicket id={3} productName={"Coca Cola"} productPrice={1000} productAmount={5}/>
            <ListTicket id={4} productName={"Coca Cola"} productPrice={1000} productAmount={5} state={TICKET_STATES.SPENT}/>
        </ul>
    );
}

export default List;