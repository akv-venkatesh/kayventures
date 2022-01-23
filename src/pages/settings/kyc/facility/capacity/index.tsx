import { Component, MouseEvent } from "react";
import Facilityhome from '../../commonFiles/facilityhome';
import CategorySelect from '../../commonFiles/selectCategory';
import Cpcity from './capacity';

interface typeProps{
    
}
interface typeState{
    step1: boolean,
    step2: boolean,
    step3: boolean,
    category: any,
    facilities: any
}

const facilities = localStorage.getItem('facilities');
let facility = facilities?.split(',')

class capacity extends Component<typeProps, typeState>{
    constructor(props:any){
        super(props);
        this.state = {
            step1: true,
            step2: false,
            step3: false,
            category: '',
            facilities: facility,
        }
    }
    step1Complete = () =>{
        this.setState({
            step1: false,
            step2: true,
        })
    }
    step2Complete = (e:MouseEvent<HTMLElement>) =>{
        this.setState({
            step2: false,
            step3: true,
            category: e,
        })
    }
    render(){
        return(
            <>
                {
                    this.state.step1 ?
                    <Facilityhome onClick={this.step1Complete} selected_Facilities={this.state.facilities}/>:
                    this.state.step2 ?
                    <CategorySelect
                        onClick={(e)=>this.step2Complete(e)}
                        />:
                    this.state.step3 ?
                    <Cpcity category={this.state.category}/> :<></>
                }

            </>
        )
    }
}
export default capacity;