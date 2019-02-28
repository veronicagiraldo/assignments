import React ,{Component} from 'react';
// import DjButton from './DjButton';


class App extends Component {
    constructor(){
        super()
        this.state ={
            box1: 'white',
            box2: 'white',
            box3: 'white',
            box4: 'white',
            isWhite: true
        }
    }

    handleBlackWhiteToggle = () => {
        this.setState((prevState) => {
            if(prevState.isWhite){
                return {
                    box1: 'black',
                    box2: 'black',
                    box3: 'black',
                    box4: 'black',
                    isWhite: false
                }
            }else{
                return{
                    box1: 'white',
                    box2: 'white',
                    box3: 'white',
                    box4: 'white',
                    isWhite: true 
                }
            }
        } )
    }
 
    togglePurple = () => {
        this.setState((prevState) => {
            if(prevState.isPurple){
            return { box1: "purple", box2: "purple", isPurple: false }
            }else {
                return{ box1: "#AF7AC5", box2: "#AF7AC5", isPurple: true}
            }
        } )     
    }
    toggleBlue = () => {
        this.setState((prevState) => {
            if(prevState.isBlue){
            return { box3: "blue", isBlue: false }
            }else{
                return {box3: "lightBlue",  isBlue: true}
            }
        })
    }
    toggleRight =() => {
        this.setState((prevState) => {
            if(prevState.isLightBlue){
                return {box4: "lightBlue", isLightBlue: false}
            }else{
                return {box4: 'blue', isLightBlue: true}
            }
        })
    }
    toggleBig = () => {
        this.setState((prevState) => {
            if(prevState.isPink){
                return {box1: "pink", isPink: false }
            }else{
                return {box1: "#2ECC71", isPink: true}
            }
        })
    }
    toggleBig2 = () => {
        this.setState((prevState) => {
            if(prevState.isRed){
                return {box2: "#FF5722", isRed: false}
            }else {
                return {box2: "#4DD0E1", isRed: true}
            }
        })
    }
    toggleBig3 = () => {
        this.setState((prevState) => {
            if(prevState.isNeon){
                return {box3: "#CDDC39", isNeon: false}
            } else{
                return {box3: "#FBC02D", isNeon: true}
            }
        })
    }
    toggleBig4 = () => {
        this.setState((prevState) => {
            if(prevState.isOrange){
                return {box4: "#F4511E", isOrange: false}
            }else{
                return {box4: "#FF8A65", isOrange: true}
            }
        })
    }

    
    render() {
        return(
            <div className="container">
                <div className="box" style ={{backgroundColor:this.state.box1}}></div>
                <div className="box" style ={{backgroundColor:this.state.box2}}></div>
                <div className="box" style ={{backgroundColor:this.state.box3}}></div> 
                <div className="box" style ={{backgroundColor:this.state.box4}}></div>
                <button onClick={this.handleBlackWhiteToggle}></button>
                <button onClick={this.togglePurple}></button>
                <button onClick={this.toggleBlue}>{this.state.isBlue ? "left": "left"}</button>
                <button onClick={this.toggleRight}>{this.state.isLightBlue ? 'right' : 'right'}</button>
                <button onClick={this.toggleBig}>{this.state.isPink ? '1': '1'}</button>
                <button onClick={this.toggleBig2}>{this.state.isRed ? '2': '2'}</button>
                <button onClick={this.toggleBig3}>{this.setState.isNeon ? '3' : '3' }</button> 
                <button onClick={this.toggleBig4}>{this.setState.isOrange ? '4': '4'}</button>
            </div>
         );
    }
}


export default App;


// {this.state.isWhite ? "black": "white" }
// {this.state.isPurple ? "purple": "light Purple"} 
// change =() => {
//     this.setState(() =>{
//         return {
//             box1: 'black',
//             box2: 'black',
//             box3: 'black',
//             box4: 'black'
//         }
//     })
// }