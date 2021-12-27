import React, { Component } from 'react';
import { Link, Navigate, Outlet } from "react-router-dom";
import './profile.scss'
import { HiUserCircle, HiOutlineFingerPrint } from "react-icons/hi";
import { Dropdown } from 'react-bootstrap';
interface typeState {

}

class profile extends Component<{}, typeState> {
    constructor(props: any) {
        super(props);
        this.state = {
        };
    }



    render(): JSX.Element {

        return (
            <>
                <Dropdown>
                    <Dropdown.Toggle variant='tranparent' className='d-flex align-items-center' id="dropdown-basic">
                        <div className="text-end d-md-block d-none">
                            <h6 className="m-0">Mrs. Jane Doe</h6>
                            <p className="m-0">User Designation</p>
                        </div>
                        <HiUserCircle className="user-image ms-3" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                       <Dropdown.Item > <Link to="/admin/edit-acc-info"> Edit Account Information </Link></Dropdown.Item>

                     <Dropdown.Item><Link to="/admin/change-pass"> Change Password </Link></Dropdown.Item>

                        <Dropdown.Item><Link to="/admin/">Log out </Link></Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>



            </>)

}
}
export default profile;