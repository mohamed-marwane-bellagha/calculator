import './MagnificientEqualButton.css'

function MagnificientEqualButton(props){
    function calculFinal(){
        switch (props.operateur){
            case '+':
                let secondePartie=props.resultat
                props.setResultat(parseInt(props.premierTerme) + parseInt(secondePartie));
                break
            case '-':
                let secondTerme=props.resultat
                props.setResultat(parseInt(props.premierTerme) - parseInt(secondTerme));
                break
            case 'x':
                let secondTermeX=props.resultat
                props.setResultat(parseInt(props.premierTerme) * parseInt(secondTermeX));
                break
            case '/':
                let secondTermeD=props.resultat
                props.setResultat(parseInt(props.premierTerme) / parseInt(secondTermeD));
                break
        }
    }

    return <button onClick={()=>calculFinal()} className='EqualButton'>=</button>
    }

    export default MagnificientEqualButton;