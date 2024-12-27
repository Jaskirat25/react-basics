import { useEffect,useState } from "react";

const currencyinfo = (currency) => {
    const [curr,setCurrencyinfo] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
.then((res)=>res.json())
.then((res)=>setCurrencyinfo(res.currency))
console.log(curr);

    },[currency])
    return [curr];
}
export default currencyinfo;