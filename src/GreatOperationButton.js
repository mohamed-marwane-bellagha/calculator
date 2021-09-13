import './GreatOperationButton.css';

function GreatOperationButton(){
    const operations=["+","-","/","x"];
    const numbersItems=operations.map((number)=><button className="operationButtons">{number}</button>);
    const numberItemsContainer=<div class='operationContainer'>{numbersItems}</div>
    return numberItemsContainer;
}
export default GreatOperationButton;