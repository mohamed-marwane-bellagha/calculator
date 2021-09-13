import "./MagnificientEqualButton.js"
import "./BeautifullScreen.js"
import "./GreatOperationButton.js"
import "./AmazingNumberButton.js"
import BeautifullScreen from "./BeautifullScreen";
import AmazingNumberButton from "./AmazingNumberButton";
import GreatOperationButton from "./GreatOperationButton";
import MagnificientEqualButton from "./MagnificientEqualButton";

function Calculator(){
return <>
    <BeautifullScreen resultat={0}></BeautifullScreen>
    <GreatOperationButton></GreatOperationButton>
    <AmazingNumberButton></AmazingNumberButton>
    <MagnificientEqualButton></MagnificientEqualButton>


</>
}
export default Calculator;