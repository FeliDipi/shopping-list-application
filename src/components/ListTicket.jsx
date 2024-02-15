import "../styles/ListTicket.css";
import { TICKET_STATES } from "../types/ticketStates.js";

const ListTicket = ({id,productName,productPrice,productAmount,state=TICKET_STATES.NORMAL}) =>
{
    var ticketStyle;

    switch(state)
    {
        case TICKET_STATES.EDIT: ticketStyle = "list-ticket list-ticket-edit";
            break;
        case TICKET_STATES.SPENT: ticketStyle = "list-ticket list-ticket-spent";
            break;
        default: ticketStyle = "list-ticket";
            break;
    }

    return (
        <li className={ticketStyle}>
            <p className="list-ticket-info">{productName} x {productAmount}</p>
            <p className="list-ticket-price">${productPrice*productAmount}</p>
        </li>
    );
}

export default ListTicket;