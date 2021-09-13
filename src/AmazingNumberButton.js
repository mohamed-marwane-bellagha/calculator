import "./AmazingNumberButton.css"

function AmazingNumberButton(){
const numbers=[1,2,3,4,5,6,7,8,9];
const numbersItems=numbers.map((number)=><button className="NumberButton">{number}</button>);
    const numberItemsContainer=<><div className="numberContainer">{numbersItems}</div><button className="NumberButton">.</button><button className="NumberButton">0</button></>
    return numberItemsContainer;
}
export default AmazingNumberButton;