import './GreatOperationButton.css';

function GreatOperationButton(props){
    const operations=["+","-","/","x"];
    const numbersItems=operations.map((operation)=><button key={operation} className="operationButtons">{operation}</button>);
    const numberItemsContainer=<div className='operationContainer'>{numbersItems}</div>
    return numberItemsContainer;
}
export default GreatOperationButton;