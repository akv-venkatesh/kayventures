import React, { Component } from 'react';
import { Link ,Navigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "../../component/login/login";
import "./admin.scss";
import { useDispatch, useSelector, connect } from "react-redux";

interface typeState{
	show: boolean,
	psw_vis: boolean,
	submitSuccess: boolean,
	successMessage: string,
}
interface typeProps{
	// userLogin: (arg:{})=> void;
	login:any
}

class Admin extends React.Component<typeProps, typeState > {

    constructor(props:any){
		super(props);
		this.state = {
			show: false,
			psw_vis: false,
			submitSuccess: false,
			successMessage:'',
		}
		// console.log(props)
	}
    submit = async() =>{
		setTimeout(()=>{
			let data:any = this.props;
			console.log(data);
			if(data.admin.admin_details.code == 200){
				this.redirect();
			}
			else{
				this.setState({
					successMessage: data.admin.admin_details.data.message
				})
				// this.handleShow();
                // alert("Enter Correct user and password");
			}
		},500);
	}

	redirect = () => {
		this.setState({
			submitSuccess: true,
		});
	};

    render(): JSX.Element {

        if (this.state.submitSuccess === true) {
			return <Navigate to="/superadmin" />
		}



        return (
            <>
                <div style={{ height: '100vh' }}>
                    <div className="  d-flex  justify-content-center align-items-center h-100" >
                        <div className='adminlogin-container  d-flex  justify-content-center'>
                            <div className='login'>
                                <div className='d-flex  justify-content-center align-items-center'>
                                    <h1 className=' my-5'>Welcome </h1>
                                </div>
                                <Login formName="Super Admin Login" buttonName="Login"  onSubmit={this.submit} />
                            </div>
                        </div>
                    </div></div>

            </>





        );
    }
}

const mapStateToProps = (state: any) => {
	return state;
};
  
const mapDispatchToProps = (dispatch:any, props:any) => {
	// return {
	//   	userLogin: (userDetail:{}) => {
	// 	  dispatch(login(userDetail));
	// 	},
	// };
};
  
// export default ;
export default connect(mapStateToProps, mapDispatchToProps)(Admin);