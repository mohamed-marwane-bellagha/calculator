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
    const [premierTerme, setPremierTerme]=useState("0");
    const [secondTerme, setSecondTerme]=useState("0");
    const [operateur, setOperateur]=useState('0');
    const [boolTest, setBoolTest]=useState(true)
    return <>
    <BeautifullScreen resultat={resultat}></BeautifullScreen>
    <GreatOperationButton boolTest={boolTest} setBoolTest={setBoolTest} premierTerme={premierTerme} setPremierTerme={setPremierTerme} operateur={operateur} setOperateur={setOperateur} resultat={resultat} setResultat={setResultat}></GreatOperationButton>
    <AmazingNumberButton resultat={resultat} setResultat={setResultat}></AmazingNumberButton>
    <MagnificientEqualButton  boolTest={boolTest} setBoolTest={setBoolTest} resultat={resultat} setResultat={setResultat} premierTerme={premierTerme} secondTerme={secondTerme} setSecondTerme={setSecondTerme}  operateur={operateur}></MagnificientEqualButton>


</>
}
export default Calculator;