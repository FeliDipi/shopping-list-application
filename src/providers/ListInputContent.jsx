import { createContext, useState } from "react";

export const ListInputContext = createContext();

export const ListInputProvider = ({children}) =>
{
    const [productInfo, setProductInfo] = useState({name:"",price:0,amount:0});

	const handleName = (name) =>
	{
		const newProductInfo = 
		{
			"name":name,
			"price":productInfo.price,
			"amount":productInfo.amount
		}

		setProductInfo(newProductInfo);
	}

	const handlePrice = (price) =>
	{
		const newProductInfo = 
		{
			"name":productInfo.name,
			"price":price,
			"amount":productInfo.amount
		}

		setProductInfo(newProductInfo);
	}

	const handleAmount = (amount) =>
	{
		const newProductInfo = 
		{
			"name":productInfo.name,
			"price":productInfo.price,
			"amount":amount
		}

		setProductInfo(newProductInfo);
	}

    return (
        <ListInputContext.Provider value={{
            productInfo,
			setProductInfo,
            handleName,
            handlePrice,
            handleAmount
        }}>
            {children}
        </ListInputContext.Provider>
    )
}