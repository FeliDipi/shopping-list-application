-- sql query, drop, creation and example operations

DROP TABLE Tickets;

CREATE TABLE Tickets (
    ticket_id INTEGER PRIMARY KEY AUTOINCREMENT,
    ticket_name TEXT NOT NULL,
    ticket_price INTEGER NOT NULL,
    ticket_amount INTEGER NOT NULL,
    ticket_isSpent BOOLEAN DEFAULT False
    ticket_order INTEGER AUTOINCREMENT
);

-- new ticket creation
INSERT INTO Tickets (ticket_name, ticket_price, ticket_amount) VALUES (?,?,?); 

-- read tickets
SELECT * FROM Tickets ORDER BY ticket_order ASC;

-- update ticket
UPDATE Tickets SET ticket_name = ? , ticket_price = ? , ticket_amount = ? , ticket_isSpent = ? WHERE ticket_id = ?;

-- delete ticket
DELETE FROM Tickets WHERE ticket_id = ?;