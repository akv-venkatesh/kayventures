import { Component } from "react";
import Facilityhome from '../../commonFiles/facilityhome';
import CategorySelect from '../../commonFiles/selectCategory';
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
    step1Complete = () =>{
        this.setState({
            step1: false,
            step2: true,
        })
    }
    step2Complete = () =>{
        this.setState({
            step2: false,
            step3: true,
        })
    }
    render(){
        return(
            <>
                {
                    !this.state.step1 ?
                    <Facilityhome onClick={this.step1Complete} selected_Facilities={[]}/>:
                    this.state.step2 ?
                    <CategorySelect
                        onClick={this.step2Complete}
                        />:
                    !this.state.step3 ?
                    <Cpcity /> :<></>
                }

            </>
        )
    }
}
export default capacity;