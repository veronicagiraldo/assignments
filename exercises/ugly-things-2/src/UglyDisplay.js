import React from 'react';
import {withThings} from './Things';
import Why from './Why'

class UglyDisplay extends React.Component{
    componentDidMount(){
        this.props.getUgly()
    }

    render() {
         const mappedUgly = this.props.ugly.map(ugly => <Why key={ugly._id} ugly = {ugly} />)
            return(
                <div>
                    <div className="uglyInfo">
                        <img src={this.props.imgUrl} alt=""/>
                        <h3>{this.props.title}</h3>
                        <h3>{this.props.description}</h3>
                        </div> 
                <div>
                    {mappedUgly}
                </div>
                </div>
            )

    }
}

export default withThings(UglyDisplay)



