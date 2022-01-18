import { Component } from "react";
import Facilityhome from '../../commonFiles/facilityhome';
import CategorySelect from '../../commonFiles/productSelection/category';
import Cpcity from './capacity';

interface typeProps{
    
}
interface typeState{
    step1: boolean,
    step2: boolean,
    step3: boolean,
}

class capacity extends Component<typeProps, typeState>{
    constructor(props:any){
        super(props);
        this.state = {
            step1: true,
            step2: false,
            step3: false,
        }
    }
    render(){
        return(
            <>
                {
                    this.state.step1 ?
                    <Facilityhome onClick={()=>{}}/>:
                    this.state.step2 ?
                    <CategorySelect 
                        state={this.state} 
                        nextPageChange={()=>{}} 
                        handleChange={()=>{}}
                        />:
                    this.state.step3 ?
                    <Cpcity /> :<></>
                }

            </>
        )
    }
}
export default capacity;