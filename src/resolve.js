import React, { useState, useEffect} from "react";
import "./resolve.css";

function Resolve() {
  // object containing list of banks and their bank code
  const banks = {
    accessBank: "044",
    diamondBank: "063",
    ecobank: "050",
    fidelityBank: "070",
    firstBank: "011",
    fcmb: "214",
    gtb: "058",
    heritageBank: "030",
    jaizbank: "301",
    keystoneBank: "082",
    stanbicBank: "039",
    sterlingBank: "232",
    unionBank: "032",
    uba: "033",
    unityBank: "215",
    wemaBank: "035",
    zenithBank: "057",
  };

  // State managment
  

  const [accNum, setAccNum] = useState("");

  const [bankName, setbankName] = useState("");

  const [acc, setAcc] = useState("");

  

  const handleAccNumChange = (e) => {
    setAccNum(e.target.value);
    console.log( accNum);
  };
  const handleBankNameChange = (e) => {
    setbankName(e.target.value);
    console.log( bankName);
  };

  let bankCode = banks[bankName];
  console.log(bankCode);

  

  const getAcc = (e) => {
    e.preventDefault();
    fetch(
      `https://api.paystack.co/bank/resolve?account_number=${accNum}&bank_code=${bankCode}`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer sk_test_80f86ba56678ddaab65415ffa8327fe728b9a4c0",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.account_name);
        setAcc(data.data.account_name);
      });
  };

  return (
    <div>
      <h1>The best bank resolve app that CBN gannn is using</h1>

      <div className="main">
        {/* Input fields */}
        <div className="inputs">
          <form action="">
            <div className="dropDown">
              <select value={bankName} onChange={handleBankNameChange}>
                <option value="accessBank">accessBank</option>
                <option value="diamondBank">diamondBank</option>
                <option value="ecobank">ecobank</option>
                <option value="fidelityBank">fidelityBank</option>
                <option value="firstBank">firstBank</option>
                <option value="fcmb">fcmb</option>
                <option value="heritageBank">heritageBank</option>
                <option value="jaizbank">jaizbank</option>
                <option value="keystoneBank">keystoneBank</option>
                <option value="stanbicBank">stanbicBank</option>
                <option value="sterlingBank">sterlingBank</option>
                <option value="unionBank">unionBank</option>
                <option value="uba">uba</option>
                <option value="unityBank">unityBank</option>
                <option value="wemaBank">wemaBank</option>
                <option value="zenithBank">zenithBank</option>
              </select>
            </div>
            <div className="accNum">
              <input onChange={handleAccNumChange} />
            </div>
            <div className="button">
              <button onClick={getAcc}>Resolve</button>
            </div>
          </form>
        </div>

        {/* Display field */}
        <div className="display">
          <div>
            <h2>Na your result be this</h2>
          </div>
          <div className="result">{acc}</div>
        </div>
      </div>
    </div>
  );
}

export default Resolve;
