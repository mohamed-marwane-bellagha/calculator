import "./MagnificientEqualButton.js"
import "./BeautifullScreen.js"
import "./GreatOperationButton.js"
import "./AmazingNumberButton.js"
import BeautifullScreen from "./BeautifullScreen";
import AmazingNumberButton from "./AmazingNumberButton";
import GreatOperationButton from "./GreatOperationButton";
import MagnificientEqualButton from "./MagnificientEqualButton";
import {useState} from "react";


function Calculator(){
    const [resultat, setResultat] = useState("0");

    return <>
    <BeautifullScreen resultat={resultat}></BeautifullScreen>
    <GreatOperationButton resultat={resultat} setResultat={setResultat}></GreatOperationButton>
    <AmazingNumberButton resultat={resultat} setResultat={setResultat}></AmazingNumberButton>
    <MagnificientEqualButton></MagnificientEqualButton>


</>
}
export default Calculator;