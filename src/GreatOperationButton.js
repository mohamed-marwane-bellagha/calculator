import './GreatOperationButton.css';

function GreatOperationButton(props){
    function calcul(operateur){

            props.setPremierTerme(props.resultat);
            props.setBoolTest(false);
            props.setResultat('0');


        props.setOperateur(operateur);

    }
    const operations=["+","-","/","x"];
    const numbersItems=operations.map((operation)=><button onClick={()=>calcul(operation)} key={operation} className="operationButtons">{operation}</button>);
    const numberItemsContainer=<div className='operationContainer'>{numbersItems}</div>
    return numberItemsContainer;
}
export default GreatOperationButton;