export const TICKET_STATE = {
    NORMAL:"normal",
    SPENT: "spent",
    EDIT: "edit",
    DELETE: "delete"
}

export const TICKET_VARIANTS = {
    "normal":
    {
        backgroundColor:"#222F3E",
        color:"#FFFFFF",
        textDecoration:"solid"
    },
    "spent":
    {
        backgroundColor:"#1DD1A1",
        color:"#222F3E",
        textDecoration:"line-through"
    },
    "edit":
    {
        backgroundColor:"#54A0FF",
        color:"#222F3E",
        textDecoration:"solid"
    },
    "delete":
    {
        backgroundColor:"#FF6B6B",
        color:"#222F3E",
        textDecoration:"solid"
    }
}
