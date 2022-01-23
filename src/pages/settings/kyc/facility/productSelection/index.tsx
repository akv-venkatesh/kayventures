import { ChangeEvent, Component } from "react";
import ProConfig from '../../commonFiles/productSelection/category';
import ProductSelect from '../../commonFiles/productSelection';
import { Navigate } from "react-router-dom";

interface typeState {
    step1:boolean,
    prodectPage: boolean,
    selectedOption: any,
    visibility: boolean,
    finish: boolean
}

class ProductSelection extends Component<{}, typeState>{
    constructor(props:any){
        super(props);
        this.state = {
            step1: true, 
            prodectPage: true,
            selectedOption: "",
            visibility: false,
            finish: false
        }
    }
      
    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ selectedOption: e.target.value });
        if (e.target.value) {
        this.setState({ visibility: true });
        }
    };
    
    nextPageChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ prodectPage: false });
    };

    nextpage = () =>{
        this.setState({
            finish : true
        })
    }

    render():JSX.Element{
        if(this.state.finish){
            return <Navigate to = "/settings/kyc/facility/capacity" />
        }
        return(
            <>
                {
                this.state.prodectPage ? 
                <ProConfig 
                    state={this.state} 
                    nextPageChange={this.nextPageChange}
                    // handleChange={this.handleChange}  
                    /> :
                <ProductSelect 
                    category={this.state.selectedOption}
                    onComplete = {()=>{}}
                    nextpage = {this.nextpage}
                />
                }
            </>
        )
    }
}

export default ProductSelection;