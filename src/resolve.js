import React, { useState } from "react";
import "./resolve.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

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
  const [bankName, setbankName] = useState("");

  const [accNum, setAccNum] = useState("");

  const [accName, setAccName] = useState("");

  // Functions to handle change in select/input fields
  const handleBankNameChange = (e) => {
    setbankName(e.target.value);
  };
  const handleAccNumChange = (e) => {
    setAccNum(e.target.value);
  };

  // Assigns the bank code of the selected bank to bankCode
  let bankCode = banks[bankName];

  // Calling resolve account number endpoint
  const getAccName = (e) => {
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
        setAccName(data.data.account_name);
      });
  };

  
  return (
    <div>
      <h1>The best bank resolve app that CBN gannn is using</h1>
      <h5>
        Zero error handling for now. If you don't get a result in 5 sec, please
        check your inputs
      </h5>

      <div className="main">
        {/* Input fields */}
        <div className="inputs">
          <form action="">
            <div className="dropDown">
              <select value={bankName} onChange={handleBankNameChange}>
                <option value="accessBank">Access Bank</option>
                <option value="diamondBank">Diamond Bank</option>
                <option value="ecobank">Eco Bank</option>
                <option value="fidelityBank">Fidelity Bank</option>
                <option value="firstBank">First Bank</option>
                <option value="fcmb">FCMB</option>
                <option value="gtb">GTB</option>
                <option value="heritageBank">Heritage Bank</option>
                <option value="jaizbank">Jaiz Bank</option>
                <option value="keystoneBank">Keystone Bank</option>
                <option value="stanbicBank">Stanbic IBTC Bank</option>
                <option value="sterlingBank">Sterling Bank</option>
                <option value="unionBank">Union Bank</option>
                <option value="uba">UBA</option>
                <option value="unityBank">Unity Bank</option>
                <option value="wemaBank">Wema Bank</option>
                <option value="zenithBank">Zenith Bank</option>
              </select>
            </div>
            <div className="accNum">
              <input onChange={handleAccNumChange} />
            </div>
            <div className="button">
              <button onClick={getAccName}>Resolve</button>
            </div>
          </form>
        </div>

        {/* Display field */}
        <div className="display">
          <div>
            <h2>Na your result be this</h2>
          </div>
          <div className="result">{accName}</div>

            {/* implementing copy button */}
            
          <CopyToClipboard className="copyButton" text={accName} >
            <FontAwesomeIcon icon={faCopy} />
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
}

export default Resolve;
