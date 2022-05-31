import React, { useState } from "react";
import "./resolve.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

function Resolve() {
  // object containing list of banks and their bank code
  const banks = {
    ninePaymentServiceBank: "120001",
    abbeyMortgageBank: "801",
    aboveOnlyMFB: "51204",
    accessBank: "044",
    accessDiamondBank: "063",
    airtelSmartcashPSB: "120004",
    alatByWEMA: "035A",
    amjuUniqueMFB: "50926",
    asoSavingsAndLoans: "401",
    astrapolarisMFBLTD: "MFB50094",
    bainescreditMFB: "51229",
    bowenMicrofinanceBank: "50931",
    carbon: "565",
    cemcsMicrofinanceBank: "50823",
    chanelleMicrofinanceBankLimited: "50171",
    citibankNigeria: "023",
    corestepMFB: "50204",
    coronationMerchantBank: "559",
    ecobank: "050",
    ekondoMicrofinanceBank: "562",
    eyowo: "50126",
    fidelityBank: "070",
    firmusMFB: "51314",
    firstBank: "011",
    fcmb: "214",
    fsdhMerchantBankLimited: "501",
    gatewayMortgageBankLTD: "812",
    globusBank: "00103",
    goMoney: "100022",
    gtb: "058",
    hackmanMicrofinanceBank: "51251",
    hasalMicrofinanceBank: "50383",
    heritageBank: "030",
    HopePSB: "120002",
    ibileMicrofinanceBank: "51244",
    infinityMFB: "50457",
    jaizbank: "301",
    kadpolyMFB: "50502",
    keystoneBank: "082",
    krediMoneyMFBLTD: "50200",
    kudaBank: "50211",
    lagosBuildingInvestmentCompanyPlc: "90052",
    linksMFB: "50549",
    livingTrustMortgageBank: "031",
    lotusBank: "303",
    mayfairMFB: "50563",
    mintMFB: "50304",
    moMoPSB: "120003",
    paga: "100002",
    palmPay: "999991",
    parallexBank: "104",
    parkwayReadyCash: "311",
    paycom: "999992",
    petraMircofinanceBankPlc: "50746",
    polarisBank: "076",
    providusBank: "101",
    quickFundMFB: "51293",
    randMerchantBank: "502",
    refugeMortgageBank: "90067",
    rubiesMFB: "125",
    safeHavenMFB: "51113",
    sparkleMicrofinanceBank: "51310",
    stanbicIBTCBank: "221",
    standardCharteredBank: "068",
    stellasMFB: "51253",
    sterlingBank: "232",
    suntrustBank: "100",
    tAJBank: "302",
    tangerineMoney: "51269",
    tCFMFB: "51211",
    titanBank: "102",
    unicalMFB: "50871",
    unionBankofNigeria: "032",
    unitedBankForAfrica: "033",
    unityBank: "215",
    vFDMicrofinanceBankLimited: "566",
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
      <h1>Bank resolve app</h1>
      <h5>
        Zero error handling for now. If you don't get a result in 10 sec, please
        check your inputs
      </h5>

      <div className="main">
        {/* Input fields */}
        <div className="inputs">
          <form action="">
            <div className="dropDown">
              <select value={bankName} onChange={handleBankNameChange}>
                <option value="ninePaymentServiceBank">
                  9Payment Service Bank
                </option>
                <option value="abbeyMortgageBank">Abbey Mortgage Bank</option>
                <option value="aboveOnlyMFB">Above Only MFB</option>
                <option value="accessBank">Access Bank</option>
                <option value="accessDiamondBank">Access Diamond Bank</option>
                <option value="airtelSmartcashPSB">Airtel Smartcash PSB</option>
                <option value="alatByWEMA">ALAT by WEMA</option>
                <option value="amjuUniqueMFB">Amju Unique MFB</option>
                <option value="asoSavingsAndLoans">
                  ASO Savings and Loans
                </option>
                <option value="astrapolarisMFBLTD">Astrapolaris MFB LTD</option>
                <option value="bainescreditMFB">Bainescredit MFB</option>
                <option value="bowenMicrofinanceBank">
                  Bowen Microfinance Bank
                </option>
                <option value="carbon">Carbon</option>
                <option value="cemcsMicrofinanceBank">
                  CEMCS Microfinance Bank
                </option>
                <option value="chanelleMicrofinanceBankLimited">
                  Chanelle Microfinance Bank Limited
                </option>
                <option value="citibankNigeria">Citibank Nigeria</option>
                <option value="corestepMFB">Corestep MFB</option>
                <option value="coronationMerchantBank">
                  Coronation Merchant Bank
                </option>
                <option value="ecobank">Eco Bank</option>
                <option value="ekondoMicrofinanceBank">
                  Ekondo Microfinance Bank
                </option>
                <option value="eyowo">Eyowo</option>
                <option value="fidelityBank">Fidelity Bank</option>
                <option value="firmusMFB">Firmus MFB</option>
                <option value="firstBank">First Bank of Nigeria</option>
                <option value="fcmb">First City Monument Bank</option>
                <option value="fsdhMerchantBankLimited">
                  FSDH Merchant Bank Limited
                </option>
                <option value="gatewayMortgageBankLTD">
                  Gateway Mortgage Bank LTD
                </option>
                <option value="globusBank">Globus Bank</option>
                <option value="goMoney">GoMoney</option>
                <option value="gtb">Guaranty Trust Bank</option>
                <option value="hackmanMicrofinanceBank">
                  Hackman Microfinance Bank
                </option>
                <option value="hasalMicrofinanceBank">
                  Hasal Microfinance Bank
                </option>
                <option value="heritageBank">Heritage Bank</option>
                <option value="HopePSB">HopePSB</option>
                <option value="ibileMicrofinanceBank">
                  Ibile Microfinance Bank
                </option>
                <option value="infinityMFB">Infinity MFB</option>
                <option value="jaizbank">Jaiz Bank</option>
                <option value="kadpolyMFB">Kadpoly MFB</option>
                <option value="keystoneBank">Keystone Bank</option>
                <option value="krediMoneyMFBLTD">Kredi Money MFB LTD</option>
                <option value="kudaBank">Kuda Bank</option>
                <option value="lagosBuildingInvestmentCompanyPlc">
                  Lagos Building Investment Company Plc
                </option>
                <option value="linksMFB">Links MFB</option>
                <option value="livingTrustMortgageBank">
                  Living Trust Mortgage Bank
                </option>
                <option value="lotusBank">Lotus Bank</option>
                <option value="mayfairMFB">Mayfair MFB</option>
                <option value="mintMFB">Mint MFB</option>
                <option value="moMoPSB">MoMo PSB</option>
                <option value="paga">Paga</option>
                <option value="palmPay">PalmPay</option>
                <option value="parallexBank">Parallex Bank</option>
                <option value="parkwayReadyCash">Parkway ReadyCash</option>
                <option value="payCom">PayCom</option>
                <option value="petraMircofinanceBankPlc">
                  Petra Mircofinance Bank Plc
                </option>
                <option value="polarisBank">Polaris Bank</option>
                <option value="providusBank">Providus Bank</option>
                <option value="quickFundMFB">QuickFund MFB</option>
                <option value="randMerchantBank">Rand Merchant Bank</option>
                <option value="refugeMortgageBank">Refuge Mortgage Bank</option>
                <option value="rubiesMFB">Rubies MFB</option>
                <option value="safeHavenMFB">Safe Haven MFB</option>
                <option value="sparkleMicrofinanceBank">
                  Sparkle Microfinance Bank
                </option>
                <option value="stanbicIBTCBank">Stanbic IBTC Bank</option>
                <option value="standardCharteredBank">
                  Standard Chartered Bank
                </option>
                <option value="stellasMFB">Stellas MFB</option>
                <option value="sterlingBank">Sterling Bank</option>
                <option value="suntrustBank">Suntrust Bank</option>
                <option value="tAJBank">TAJ Bank</option>
                <option value="tangerineMoney">Tangerine Money</option>
                <option value="tCFMFB">TCF MFB</option>
                <option value="titanBank">Titan Bank</option>
                <option value="unicalMFB">Unical MFB</option>
                <option value="unionBankofNigeria">
                  Union Bank of Nigeria
                </option>
                <option value="unitedBankForAfrica">
                  United Bank For Africa
                </option>
                <option value="unityBank">Unity Bank</option>
                <option value="vFDMicrofinanceBankLimited">
                  VFD Microfinance Bank Limited
                </option>
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
            <h2>Here's your result</h2>
          </div>
          <div className="result">{accName}</div>

          {/* implementing copy button */}

          <CopyToClipboard className="copyButton" text={accName}>
            <FontAwesomeIcon icon={faCopy} />
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
}

export default Resolve;
