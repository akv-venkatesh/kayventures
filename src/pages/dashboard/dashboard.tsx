import { Component, MouseEvent, MouseEventHandler } from 'react';
import '../m-login.scss';
import { MdOutlineDashboard } from 'react-icons/md';
import { AiOutlineIdcard } from 'react-icons/ai';
import { HiOutlineThumbUp } from 'react-icons/hi';
import PerfectScrollbar from 'react-perfect-scrollbar';
import "react-perfect-scrollbar/dist/css/styles.css";
import { Form } from 'formik';
import { Link } from 'react-router-dom';

interface typeState{
	process: any,
	selectedProcess: any,
}	
class Dashboard extends Component<{},typeState>{
	constructor(props:any){
		super(props);
		this.state = {
			process: [
				{
					name:'kyc',
					progress: 10,
					process:[
						{
							name: 'Organization',
							progress: 40,
						},
						{
							name: 'Facility',
							progress: 80,
						}
					]
				},
				{
					name: 'Operation',
					progress: 20,
					process:[
						{
							name: 'Operation1',
							progress: 40,
						},
						{
							name: 'Operation2',
							progress: 80,
						}
					]
				},
				{
					name: 'Networing',
					progress: 30,
					process:[
						{
							name: 'Networing1',
							progress: 40,
						},
						{
							name: 'Networing2',
							progress: 80,
						}
					]
				},
				{
					name: 'Catelogue',
					progress: 40,
					process:[
						{
							name: 'Catelogue',
							progress: 40,
						},
						{
							name: 'Catelogue2',
							progress: 80,
						}
					]
				},
				{
					name: 'Performance',
					progress: 50,
					process:[
						{
							name: 'Performance1',
							progress: 40,
						},
						{
							name: 'Performance2',
							progress: 80,
						}
					]
				},
				{
					name: 'Quality',
					progress: 60,
					process:[
						{
							name: 'Quality1',
							progress: 40,
						},
						{
							name: 'Quality2',
							progress: 80,
						}
					]
				},
				{
					name: 'Term',
					progress: 70,
					process:[
						{
							name: 'term1',
							progress: 40,
						},
						{
							name: 'term2',
							progress: 80,
						}
					]
				}
			],
			selectedProcess: [],
		}
	}
	selectProcess = (e:any, value:any):any => {
		this.state.process.some((e:any)=>{
			if( value == e.name){
				let obj = e.process;
				this.setState({
					selectedProcess : obj,
				},()=>{
					console.log(this.state.selectedProcess)
				})
			}
		})
	}
	render(){
		return (
			<div className='d-flex m-dashboard h-100'>
                <div className="sec1">
					<div className="h-100">
						<div className="title d-flex align-items-center mb-3">
							<MdOutlineDashboard />
							<p className="m-0 ms-3">Dashboard</p>
						</div>
						<div className="scroll">
							<PerfectScrollbar>
								<div className="d-flex flex-wrap p-3">
									{
										this.state.process.map((tag:any, i:number)=>
											<div>
												<input name='process' className="process" type="radio" hidden id={tag.name} />
												<label
													htmlFor={tag.name}
													className="d-card text-center me-3 mb-3" 
													data-width={tag.progress}
													onClick={(e)=>this.selectProcess(e, tag.name)}
													>	
													<AiOutlineIdcard />	
													<p className="m-0 py-2">{tag.name}</p>
													<span></span>
												</label>
											</div>
										)
									}
								</div>
							</PerfectScrollbar>
						</div>
					</div>
				</div>
				<div className="sec2">
					<div className="h-100 d-flex">
						<div className="left-side h-100">
							<div className="scroll h-100">
								<PerfectScrollbar>
									<div className="d-flex flex-wrap p-3 h-100">
										{	this.state.selectedProcess.length ?
											this.state.selectedProcess.map((tag:any)=>
												<Link to = "./profile" className="d-card text-center active me-3 mb-3" data-width={tag.progress}>
													<AiOutlineIdcard />	
													<p className="m-0 py-2">{tag.name}</p>
													<span></span>
												</Link>
											) :
											<div className="info d-flex align-items-center">
												<p>Click the option in left side of the panel to view the status</p>
											</div>
										}
									</div>
								</PerfectScrollbar>
							</div>
						</div>
						<div className="right-side">
							<PerfectScrollbar>
								<div className=" d-flex flex-column justify-content-between h-100 text-center">
									<div className="">
										<h4>Profile Completion</h4>
										<p className="m-0">Please Complete your profile</p>
										<div className="percentage my-4" >
											<span>46%</span>
										</div>
										<div className="d-flex justify-content-center align-items-center py-3">
											<p className="me-3 m-0">0%</p>
											<span className="range" data-width='46'></span>
											<p className="ms-3 m-0">100%</p>
										</div>
										<p className="require m-0">Minimum Required profile score 80% </p>
									</div>
									<div className="approve py-4 px-2 d-flex align-items-center">
										<div className="icon">
											<HiOutlineThumbUp />
										</div>
										<div className="text text-start ps-3">
											<h3>APPROVED FOR BUSINESS</h3>
											<p className="m-0 text-left">847563 is your temporary pass code to enter trading section, please change to transact</p>
										</div>
									</div>	
								</div>
							</PerfectScrollbar>
						</div>
					</div>
				</div>
            </div>
		);
	}
}
export default Dashboard;