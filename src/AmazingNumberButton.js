import "./AmazingNumberButton.css"

function resultClear(resultat){
    if(resultat[0]=='0'){
        resultat=resultat.substring(1)

    }
    return resultat
}
function AmazingNumberButton(props){

const numbers=[1,2,3,4,5,6,7,8,9];
    const numbersItems=numbers.map((number)=><button key={number}
                                                     onClick={()=>props.setResultat(resultClear(props.resultat) + number)}
    className="NumberButton">{number}</button>);
const numberItemsContainer=<><div className="numberContainer">{numbersItems}</div><button className="NumberButton">.</button><button className="NumberButton" onClick={()=>props.setResultat(resultClear(props.resultat) + 0)}>0</button></>
return numberItemsContainer;
}
export default AmazingNumberButton;