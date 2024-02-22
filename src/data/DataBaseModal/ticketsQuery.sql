DROP TABLE Tickets;

CREATE TABLE Tickets (
    ticket_id INTEGER PRIMARY KEY AUTOINCREMENT,
    ticket_name TEXT NOT NULL,
    ticket_price INTEGER NOT NULL,
    ticket_amount INTEGER NOT NULL,
    ticket_isSpent BOOLEAN DEFAULT False
);

INSERT INTO Tickets (ticket_name, ticket_price, ticket_amount) VALUES ("ejemplo db",1500,2);
INSERT INTO Tickets (ticket_name, ticket_price, ticket_amount) VALUES ("ejemplo db 1",1000,3);
INSERT INTO Tickets (ticket_name, ticket_price, ticket_amount) VALUES ("ejemplo db 2",750,1);
INSERT INTO Tickets (ticket_name, ticket_price, ticket_amount) VALUES ("ejemplo db 3",300,5);
