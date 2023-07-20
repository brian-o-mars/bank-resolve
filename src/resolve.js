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
    abulesoroMFB: "51312",
    accessBank: "044",
    accessDiamondBank: "063",
    accionMicrofinanceBank : "602",
    ahmaduBelloUniversityMFB: "50036",
    airtelSmartcashPSB: "120004",
    aKUMicrofinanceBank: "51336",
    alatByWEMA: "035A",
    amjuUniqueMFB: "50926",
    aMPERSANDMICROFINANCEBANK: "51341",
    aramokoMFB: "50083",
    asoSavingsAndLoans: "401",
    astrapolarisMFBLTD: "MFB50094",
    bainescreditMFB: "51229",
    bancCorpMicrofinanceBank: "50117",
    bowenMicrofinanceBank: "50931",
    branchINTL:"FC40163",
    carbon: "565",
    cASHCONNECTMFB: "865",
    cemcsMicrofinanceBank: "50823",
    chanelleMicrofinanceBankLimited: "50171",
    chikumMicrofinanceBank: "312",
    citibankNigeria: "023",
    consumerMicrofinanceBank: "50910",
    corestepMFB: "50204",
    coronationMerchantBank: "559",
    countyFinanceLimited: "FC40128",
    crescentMFB: "51297",
    dotMicrofinanceBank: "50162",
    ecobank: "050",
    ekimogunMFB: "50263",
    ekondoMicrofinanceBank: "098",
    eyowo: "50126",
    fairmoneyMicrofinanceBank: "51318",
    fidelityBank: "070",
    firmusMFB: "51314",
    firstBank: "011",
    fcmb: "214",
    firstTrustMortgageBankNigeria: "413",
    fLOURISHMFB: "50315",
    fsdhMerchantBankLimited: "501",
    gatewayMortgageBankLTD: "812",
    globusBank: "00103",
    goMoney: "100022",
    goodnewsMicrofinanceBank: "50739",
    greenwichMerchantBank: "562",
    gtb: "058",
    hackmanMicrofinanceBank: "51251",
    hasalMicrofinanceBank: "50383",
    heritageBank: "030",
    HopePSB: "120002",
    ibileMicrofinanceBank: "51244",
    ikoyiOsunMFB: "50439",
    ilaroPolyMicrofinanceBank: "50442",
    imowoMFB: "50453",
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
    moniepointMFB: "50515",
    moMoPSB: "120003",
    optimusBankLimited: "107",
    paga: "100002",
    palmPay: "999991",
    parallexBank: "104",
    parkwayReadyCash: "311",
    paycom: "999992",
    peaceMicrofinanceBank: "50743",
    personalTrustMFB: "51146",
    petraMircofinanceBankPlc: "50746",
    platinumMortgageBank: "268",
    polarisBank: "076",
    polyunwanaMFB: "50864",
    premiumTrustBank: "105",
    providusBank: "101",
    quickFundMFB: "51293",
    randMerchantBank: "502",
    refugeMortgageBank: "90067",
    rigoMicrofinanceBankLimited: "51286",
    rOCKSHIELDMICROFINANCEBANK: "50767",
    rubiesMFB: "125",
    safeHavenMFB: "51113",
    safeHavenMicrofinanceBankLimited: "951113",
    sAGEGREYFINANCELIMITED: "40165",
    shieldMFB: "50582",
    solidAllianzeMFB: "51062",
    solidRockMFB: "50800",
    sparkleMicrofinanceBank: "51310",
    stanbicIBTCBank: "221",
    standardCharteredBank: "068",
    stellasMFB: "51253",
    sterlingBank: "232",
    suntrustBank: "100",
    supremeMFB: "50968",
    tAJBank: "302",
    tanadiMicrofinanceBank: "090560",
    tangerineMoney: "51269",
    tCFMFB: "51211",
    titanBank: "102",
    titanPaystack: "100039",
    uCMicrofinanceBank: "50840",
    uhuruMFB: "MFB51322",
    unaabMicrofinanceBankLimited: "50870", 
    unicalMFB: "50871",
    unilagMicrofinanceBank: "51316",
    unionBankofNigeria: "032",
    unitedBankForAfrica: "033",
    unityBank: "215",
    vFDMicrofinanceBankLimited: "566",
    wayaMicrofinanceBank: "51355",
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
                9mobile 9Payment Service Bank
                </option>
                <option value="abbeyMortgageBank">Abbey Mortgage Bank</option>
                <option value="aboveOnlyMFB">Above Only MFB</option>
                <option value="abulesoroMFB">Abulesoro MFB</option>
                <option value="accessBank">Access Bank</option>
                <option value="accessDiamondBank">Access Diamond Bank</option>
                <option value="accionMicrofinanceBank">Accion Microfinance Bank</option>
                <option value="ahmaduBelloUniversityMFB">Ahmadu Bello University Microfinance Bank</option>
                <option value="airtelSmartcashPSB">Airtel Smartcash PSB</option>
                <option value="aKUMicrofinanceBank">AKU Microfinance Bank</option>
                <option value="alatByWEMA">ALAT by WEMA</option>
                <option value="amjuUniqueMFB">Amju Unique MFB</option>
                <option value="aMPERSANDMICROFINANCEBANK">AMPERSAND MICROFINANCE BANK</option>
                <option value="aramokoMFB">Aramoko MFB</option>
                <option value="asoSavingsAndLoans">
                  ASO Savings and Loans
                </option>
                <option value="astrapolarisMFBLTD">Astrapolaris MFB LTD</option>
                <option value="bainescreditMFB">Bainescredit MFB</option>
                <option value="bancCorpMicrofinanceBank">Banc Corp Microfinance Bank</option>
                <option value="bowenMicrofinanceBank">
                  Bowen Microfinance Bank
                </option>
                <option value="branchINTL">Branch International Financial Services Limited</option>
                <option value="carbon">Carbon</option>
                <option value="cASHCONNECTMFB">CASHCONNECT MFB</option>
                <option value="cemcsMicrofinanceBank">
                  CEMCS Microfinance Bank
                </option>
                <option value="chanelleMicrofinanceBankLimited">
                  Chanelle Microfinance Bank Limited
                </option>
                <option value="chikumMicrofinanceBank">Chikum Microfinance bank</option>
                <option value="citibankNigeria">Citibank Nigeria</option>
                chikumMicrofinanceBank
                <option value="consumerMicrofinanceBank">Consumer Microfinance Bank</option>
                <option value="corestepMFB">Corestep MFB</option>
                <option value="coronationMerchantBank">
                  Coronation Merchant Bank
                </option>
                <option value="countyFinanceLimited">County Finance Limited</option>
                <option value="crescentMFB">Crescent MFB</option>
                <option value="dotMicrofinanceBank">Dot Microfinance Bank</option>
                <option value="ecobank">Eco Bank</option>
                <option value="ekimogunMFB">Ekimogun MFB</option>
                <option value="ekondoMicrofinanceBank">
                  Ekondo Microfinance Bank
                </option>
                <option value="eyowo">Eyowo</option>
                <option value="fairmoneyMicrofinanceBank">Fairmoney Microfinance Bank</option>
                <option value="fidelityBank">Fidelity Bank</option>
                <option value="firmusMFB">Firmus MFB</option>
                <option value="firstBank">First Bank of Nigeria</option>
                <option value="fcmb">First City Monument Bank</option>
                <option value="firstTrustMortgageBankNigeria">FirstTrust Mortgage Bank Nigeria</option>
                <option value="fLOURISHMFB">FLOURISH MFB</option>
                <option value="fsdhMerchantBankLimited">
                  FSDH Merchant Bank Limited
                </option>
                <option value="gatewayMortgageBankLTD">
                  Gateway Mortgage Bank LTD
                </option>
                <option value="globusBank">Globus Bank</option>
                <option value="goMoney">GoMoney</option>
                <option value="goodnewsMicrofinanceBank">Goodnews Microfinance Bank</option>
                <option value="greenwichMerchantBank">Greenwich Merchant Bank</option>
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
                <option value="ikoyiOsunMFB">Ikoyi Osun MFB</option>
                <option value="ilaroPolyMicrofinanceBank">Ilaro Poly Microfinance Bank</option>
                <option value="imowoMFB">Imowo MFB</option>
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
                <option value="moniepointMFB">Moniepoint MFB</option>
                <option value="moMoPSB">MoMo PSB</option>
                <option value="optimusBankLimited">Optimus Bank Limited</option>
                <option value="paga">Paga</option>
                <option value="palmPay">PalmPay</option>
                <option value="parallexBank">Parallex Bank</option>
                <option value="parkwayReadyCash">Parkway ReadyCash</option>
                <option value="paycom">Paycom</option>
                <option value="peaceMicrofinanceBank">Peace Microfinance Bank</option>
                <option value="personalTrustMFB">Personal Trust MFB</option>
                <option value="petraMircofinanceBankPlc">
                  Petra Mircofinance Bank Plc
                </option>
                <option value="platinumMortgageBank">Platinum Mortgage Bank</option>
                <option value="polarisBank">Polaris Bank</option>
                <option value="polyunwanaMFB">Polyunwana MFB</option>
                <option value="premiumTrustBank">PremiumTrust Bank</option>
                <option value="providusBank">Providus Bank</option>
                <option value="quickFundMFB">QuickFund MFB</option>
                <option value="randMerchantBank">Rand Merchant Bank</option>
                <option value="refugeMortgageBank">Refuge Mortgage Bank</option>
                <option value="rigoMicrofinanceBankLimited">Rigo Microfinance Bank Limited</option>
                <option value="rOCKSHIELDMICROFINANCEBANK">ROCKSHIELD MICROFINANCE BANK</option>
                <option value="rubiesMFB">Rubies MFB</option>
                <option value="safeHavenMFB">Safe Haven MFB</option>
                <option value="safeHavenMicrofinanceBankLimited">Safe Haven Microfinance Bank Limited</option>
                
                <option value="sAGEGREYFINANCELIMITED">SAGE GREY FINANCE LIMITED</option>
                <option value="shieldMFB">Shield MFB</option>
                <option value="solidAllianzeMFB">Solid Allianze MFB</option>
                <option value="solidRockMFB">Solid Rock MFB</option>
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
                <option value="supremeMFB">Supreme MFB</option>
                <option value="tAJBank">TAJ Bank</option>
                <option value="tanadiMicrofinanceBank">Tanadi Microfinance Bank</option>
                <option value="tangerineMoney">Tangerine Money</option>
                <option value="tCFMFB">TCF MFB</option>
                <option value="titanBank">Titan Bank</option>
                <option value="titanPaystack">Titan Paystack</option>
                <option value="uCMicrofinanceBank">U&C Microfinance Bank Ltd (U AND C MFB)</option>
                <option value="uhuruMFB">Uhuru MFB</option>
                <option value="unaabMicrofinanceBankLimited">Unaab Microfinance Bank Limited</option>
                <option value="unicalMFB">Unical MFB</option>
                <option value="unilagMicrofinanceBank">Unilag Microfinance Bank</option>
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
                <option value="wayaMicrofinanceBank">Waya Microfinance Bank</option>
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
      <h4 style={{marginBottom:0}}>Contact</h4>
      <h6 style={{marginTop:7}}>brian.favour@gmail.com</h6>
    </div>
  );
}

export default Resolve;
