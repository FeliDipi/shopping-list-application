import { createClient } from "@libsql/client";

const client = createClient({
    url: import.meta.env.VITE_DATABASE_URL ?? "",
    authToken: import.meta.env.VITE_DATABASE_TOKEN ?? ""
});

export const createDB = async ({name, price, amount}) =>
{
    const response = await client.execute({
        sql:`INSERT INTO Tickets (ticket_name, ticket_price, ticket_amount) VALUES (?,?,?)`,
        args:[name,price,amount]
    });
    
    return response;
}

export const readDB = async () =>
{
    const response = await client.execute({
        sql:`SELECT * FROM Tickets`,
        args:[]
    });

    return response;
}

export const updateDB = async ({ticket}) =>
{
    const {id,name,price,amount,isSpent} = ticket;

    const response = await client.execute({
        sql:`UPDATE Tickets SET ticket_name = ? , ticket_price = ? , ticket_amount = ? ticket_isSpent = ? WHERE ticket_id = ?`,
        args:[name,price,amount,isSpent,id]
    })

    return response;
}

export const deleteDB = async ({id}) =>
{
    const response = await client.execute({
        sql:`DELETE FROM Tickets WHERE ticket_id = ?`,
        args:[id]
    })

    return response;
}
