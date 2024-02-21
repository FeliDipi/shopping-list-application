export const TICKET_STATE = {
    NORMAL:"normal",
    SPENT: "spent",
    TOSPENT: "toSpent",
    EDIT: "edit",
    DELETE: "delete"
}

export const TICKET_VARIANTS = {
    "normal":
    {
        backgroundColor:"#222F3E",
        color:"#FFFFFF",
        textDecoration:"none",
        scale:1,
        duration:0.1
    },
    "spent":
    {
        backgroundColor:"#1DD1A1",
        color:"#222F3E",
        textDecoration:"line-through",
        scale:1,
        duration:0.1
    },
    "toSpent":
    {
        backgroundColor:"#1DD1A1",
        color:"#222F3E",
        scale:1.05,
        duration:0.5
    },
    "edit":
    {
        backgroundColor:"#54A0FF",
        color:"#222F3E",
        textDecoration:"none",
        scale:0.9,
        duration:0.1
    },
    "delete":
    {
        backgroundColor:"#FF6B6B",
        color:"#222F3E",
        textDecoration:"none",
        scale:1,
        duration:0.1
    }
}
