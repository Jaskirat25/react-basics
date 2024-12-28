import { useEffect,useState } from "react";

const useCurrencyInfo = (currency) => {
    const [curr,setCurrencyinfo] = useState({});
    useEffect(()=>{
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
.then((res)=>res.json())
.then((res)=>setCurrencyinfo(res.rates))

    },[currency])
    return curr;
}
export default useCurrencyInfo;