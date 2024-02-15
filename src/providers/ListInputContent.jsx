import { createContext, useState } from "react";

export const ListInputContext = createContext();

export const ListInputProvider = ({children}) =>
{
    const [productInfo, setProductInfo] = useState({productName:"",productPrice:0,productAmount:0});

	const handleName = (name) =>
	{
		const newProductInfo = 
		{
			"productName":name,
			"productPrice":productInfo.productPrice,
			"productAmount":productInfo.productAmount
		}

		setProductInfo(newProductInfo);
	}

	const handlePrice = (price) =>
	{
		const newProductInfo = 
		{
			"productName":productInfo.productName,
			"productPrice":price,
			"productAmount":productInfo.productAmount
		}

		setProductInfo(newProductInfo);
	}

	const handleAmount = (amount) =>
	{
		const newProductInfo = 
		{
			"productName":productInfo.productName,
			"productPrice":productInfo.productPrice,
			"productAmount":amount
		}

		setProductInfo(newProductInfo);
	}

    return (
        <ListInputContext.Provider value={{
            productInfo,
            handleName,
            handlePrice,
            handleAmount
        }}>
            {children}
        </ListInputContext.Provider>
    )
}