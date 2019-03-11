import React from 'react';
import {withMy} from './MyState';
// import Confetti from './confetti';
import Confetti from 'react-dom-confetti';



class Answer extends React.Component {
    // constructor(){
    //     super()

    //     this.state = {
    //         youSuck: false
    //     }
    // }

    // toggle = () => {
    //     this.setState(({youSuck}) => ({youSuck: !youSuck}))
    // }
    
    render(){
        const config = {
            angle: 90,
            spread: 100,
            startVelocity: 45,
            elementCount: 250,
            dragFriction: 0.1,
            duration: 3000,
            delay: 0,
            width: "19px",
            height: "36px",
            colors: ["#4CAF50", "#FDD835", "#78ff44", "#E91E63", "#E74C3C"]
          };
        // return <Confetti active={ someProp } config={ config }/>
        const mappedAnswers = this.props.incorrectAnswers.map((answer, i) => <h1 key={i} onClick={() => this.props.clicked(answer)}>{answer.replace(/&#039;/g, '\'').replace(/&quot;/g, '\'').replace(/&ldquo;/g, '\'').replace(/&rdquo;/g, '\'').replace(/&eacute;/g, 'e').replace(/&rsquo;/g, '\'').replace(/&amp;/g, '&').replace(/&deg;/g, '°').replace(/&Delta;/g, '∆').replace(/&Uuml;/g, 'Ü').replace(/&iacute;/g, 'í').replace(/&eacute;/g, 'e')}</h1>)
        // console.log(this.props.isRight)
        
        return ( 
            
            <div className="answers1">
                <div>{mappedAnswers}</div>
                <div className='confetti'>
                    <Confetti active={ this.props.isRight } config={config}/>
                </div>
                <h1 className="wrong" style={{display: `${this.props.youSuck ? 'block' : 'none'}`}} >WRONG!</h1>
            </div>
        
        )

    }
}
export default withMy(Answer)
    
    // const { width, height } = useWindowSize()
    // return (
    //     <Confetti 
    //         width ={width}
    //         height={height}
    //         />
    // )
    

 
