import { useState } from 'react'
import useCurrencyInfo from '/hooks/usecurrencyinfo'
import InputBox from '/components/InputBox'
function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
 

  const swap = () => {
    const tempFrom = from;
    const tempTo = to;
    const tempAmount = amount;
    const tempConvertedAmount = convertedAmount;
  
    setFrom(tempTo);
    setTo(tempFrom);
    setAmount(tempConvertedAmount);
    setConvertedAmount(tempAmount);
  }

  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
                    <div className="w-full mb-4">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency.toUpperCase())}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                       
                        
                    </div>
                    <div className="w-full flex justify-center mb-4">
                        <button
                            type="button"
                            className="border-2 border-white rounded-md bg-blue-600 text-white px-4 py-2"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency.toUpperCase())}
                            selectCurrency={to}
                            onAmountChange={(amount) => setConvertedAmount(amount)}
                        />
                       
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
