import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "../../component/login/login";
import "./admin.scss";



class Admin extends React.Component {
    render(): JSX.Element {




        return (
            <>
                <div style={{ height: '100vh' }}>
                    <div className="  d-flex  justify-content-center align-items-center h-100" >
                        <div className='adminlogin-container  d-flex  justify-content-center'>
                            <div className='login'>
                                <div className='d-flex  justify-content-center align-items-center'>
                                    <h1 className=' my-5'>Welcome </h1>
                                </div>
                                <Login formName="Super Admin Login" buttonName="Login" />
                            </div>
                        </div>
                    </div></div>

            </>





        );
    }
}

export default Admin;
