import { Component } from "react";
import '../App.css'

class Counter extends Component{
    
    state={
        answer: Math.floor(Math.random()*100),
        number: 0,
        images: [   {link:'https://res.cloudinary.com/wegowordpress/images/f_auto,q_auto/w_1000,h_667/v1575863296/shutterstock_1088140388_qiyppc/shutterstock_1088140388_qiyppc.jpg',title:'flower 1'},
                    {link:'https://www.cnet.com/a/img/-hKxkdumNe7lH0cJGaxr9q1Dgsg=/940x528/2021/03/29/0ed0cf8c-d1b0-4a21-af3a-6b1f42bf7975/floom.jpg',title:'flower 2'},
                    {link:'https://cdn.shopify.com/s/files/1/0035/2754/0782/articles/International_Flower_Day_2048x.jpeg?v=1579365491' ,title:'flower 3'}
                ],
        num:0
    }
    

    incrementByOne(){
        this.setState({number: this.state.number+1})
        this.setState({num: this.state.num+1})
        if (this.state.num<0 || this.state.num>=2){
            this.setState({num: 0})
        }
    }

    incrementByFive(){
        this.setState({number: this.state.number+5})
    }

    shouldComponentUpdate(){
        if (this.state.answer<=this.state.number){
            return false;
        }
        else{
            return true;
        }
    }


    componentDidMount(){
        alert('Component did mount!')
    }

    componentWillUnmount(){
        alert('Game has ended!')

    }

    render(){
        return(
            <div className="App">
                <p> {this.state.answer} </p>
                <p> {this.state.number}</p>
                <img width="550" height="350" src={this.state.images[this.state.num].link}/><br></br>
                <button className="btn btn-outline-info" onClick={()=>this.incrementByOne()}>Increment By One</button>
                <button className="btn btn-outline-info" onClick={()=>this.incrementByFive()}>Increment By Five</button>
                <h1>{this.state.answer===this.state.number?<h1>You Won!</h1>:null}</h1>
            </div>

       )

    }

}

export default Counter;