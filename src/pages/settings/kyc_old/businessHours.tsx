import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Formik, Field } from "formik";
import { HiUserCircle, HiOutlineFingerPrint } from "react-icons/hi";
import { ImMenu } from "react-icons/im";
import $ from 'jquery';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

import DatePicker from '../../../component/calendar/calendar';

function BusinessHour(): JSX.Element {
	const initialValues = {
		mon_start_time: 0,
		mon_end_time: 0,
		tue_start_time: 0,
		tue_end_time: 0,
		wed_start_time: 0,
		wed_end_time: 0,
		thur_start_time: 0,
		thur_end_time: 0,
		fri_start_time: 0,
		fri_end_time: 0,
		sat_start_time: 0,
		sat_end_time: 0,
		sun_start_time: 0,
		sun_end_time: 0,
		day:
		{
			mon_start_time_day: '',
			mon_end_time_day: '',
			tue_start_time_day: '',
			tue_end_time_day: '',
			wed_start_time_day: '',
			wed_end_time_day: '',
			thur_start_time_day: '',
			thur_end_time_day: '',
			fri_start_time_day: '',
			fri_end_time_day: '',
			sat_start_time_day: '',
			sat_end_time_day: '',
			sun_start_time_day: '',
			sun_end_time_day: ' ',
		}
	}
	const datePicker = (e: Date): any => {
	}
	return (
		<PerfectScrollbar>
			<div className='h-100 businesshour px-4 py-4'>
				<div className="ps-lg-5">
					<Formik
						initialValues={initialValues}
						validate={(values: any) => {
							let errors: any = {};
							console.log(values)
							Object.keys(values).map((val: any) => {
								console.log(val, values[val]);
								if (values[val] == '' || values[val] == undefined || values[val] == null) {
									errors[val] = 'Enter a value';
								}
								else if (values[val] > 12 || values[val] < 0) {
									errors[val] = 'Enter a value within "12 "';
								}
							})
							console.log(errors);

							return errors;
						}}
						onSubmit={(values, { setSubmitting }) => {
							setSubmitting(false);
						}}
					>
						{
							(
								{
									values,
									errors,
									touched,
									handleChange,
									handleBlur,
									handleSubmit,
									isSubmitting,
								}
							) => (
								<form onSubmit={handleSubmit} className="ps-xl-5 form-bh">
									<div className="weekday mb-5">
										<div className="d-flex title align-items-center">
											<h2 className="days">Days</h2>
											<h3 className="start px-3">Start</h3>
											<h3 className="end px-3">End</h3>
										</div>
										<div className="d-flex align-items-center py-3">
											<h3 className="days">Monday</h3>
											<div className="start d-flex align-items-center">
												<div className="position-relative">
													<Field type="number" id="mon-start-time" name="mon_start_time" placeholder="00 hrs" />
													<div className="validation-error">{errors.mon_start_time && touched.mon_start_time && errors.mon_start_time}</div>
												</div>
												<div>
													<div className="custom-control custom-checkbox ms-3">
														<Field type="checkbox" value="am" name="mon_start_time_day" className=" custom-control-input d-none" id="mon-start-time-day" />
														<label htmlFor="mon-start-time-day">
															<span className="am">AM</span>/<span className="pm">PM</span>
														</label>
													</div>
												</div>
											</div>
											<div className="start d-flex align-items-center">
												<div className="position-relative">
													<Field type="number" id="mon-end-time" name="mon_end_time" placeholder="00 hrs" />
													<div className="validation-error">{errors.mon_end_time && touched.mon_end_time && errors.mon_end_time}</div>
												</div>
												<div>
													<div className="custom-control custom-checkbox ms-3">
														<Field type="checkbox" value="pm" name="mon_end_time_day" className=" custom-control-input d-none" id="mon-end-time-day" />
														<label htmlFor="mon-end-time-day">
															<span className="am">AM</span>/<span className="pm">PM</span>
														</label>
													</div>
												</div>
											</div>
										</div>
										<div className="d-flex align-items-center py-3">
											<h3 className="days">Tuesday</h3>
											<div className="start d-flex align-items-center">
												<div className="position-relative">
													<Field type="number" id="tue-start-time" name="tue_start_time" placeholder="00 hrs" />
													<div className="validation-error">{errors.tue_start_time && touched.tue_start_time && errors.tue_start_time}</div>
												</div>
												<div>
													<div className="custom-control custom-checkbox ms-3">
														<Field type="checkbox" value="am" name="tue_start_time_day" className=" custom-control-input d-none" id="tue-start-time-day" />
														<label htmlFor="tue-start-time-day">
															<span className="am">AM</span>/<span className="pm">PM</span>
														</label>
													</div>
												</div>
											</div>
											<div className="start d-flex align-items-center">
												<div className="position-relative">
													<Field type="number" id="tue-end-time" name="tue_end_time" placeholder="00 hrs" />
													<div className="validation-error">{errors.tue_end_time && touched.tue_end_time && errors.tue_end_time}</div>
												</div>
												<div>
													<div className="custom-control custom-checkbox ms-3">
														<Field type="checkbox" value="pm" name="tue_end_time_day" className=" custom-control-input d-none" id="tue-end-time-day" />
														<label htmlFor="tue-end-time-day">
															<span className="am">AM</span>/<span className="pm">PM</span>
														</label>
													</div>
												</div>
											</div>
										</div>
										<div className="d-flex align-items-center py-3">
											<h3 className="days">Wednesday</h3>
											<div className="start d-flex align-items-center">
												<div className="position-relative">
													<Field type="number" id="wed-start-time" name="wed_start_time" placeholder="00 hrs" />
													<div className="validation-error">{errors.wed_start_time && touched.wed_start_time && errors.wed_start_time}</div>
												</div>
												<div>
													<div className="custom-control custom-checkbox ms-3">
														<Field type="checkbox" value="am" name="wed_start_time_day" className=" custom-control-input d-none" id="wed-start-time-day" />
														<label htmlFor="wed-start-time-day">
															<span className="am">AM</span>/<span className="pm">PM</span>
														</label>
													</div>
												</div>
											</div>
											<div className="start d-flex align-items-center">
												<div className="position-relative">
													<Field type="number" id="wed-end-time" name="wed_end_time" placeholder="00 hrs" />
													<div className="validation-error">{errors.wed_end_time && touched.wed_end_time && errors.wed_end_time}</div>
												</div>
												<div>
													<div className="custom-control custom-checkbox ms-3">
														<Field type="checkbox" value="pm" name="wed_end_time_day" className=" custom-control-input d-none" id="wed-end-time-day" />
														<label htmlFor="wed-end-time-day">
															<span className="am">AM</span>/<span className="pm">PM</span>
														</label>
													</div>
												</div>
											</div>
										</div>
										<div className="d-flex align-items-center py-3">
											<h3 className="days">Thursday</h3>
											<div className="start d-flex align-items-center">
												<div className="position-relative">
													<Field type="number" id="thur-start-time" name="thur_start_time" placeholder="00 hrs" />
													<div className="validation-error">{errors.thur_start_time && touched.thur_start_time && errors.thur_start_time}</div>
												</div>
												<div>
													<div className="custom-control custom-checkbox ms-3">
														<Field type="checkbox" value="am" name="thur_start_time_day" className=" custom-control-input d-none" id="thur-start-time-day" />
														<label htmlFor="thur-start-time-day">
															<span className="am">AM</span>/<span className="pm">PM</span>
														</label>
													</div>
												</div>
											</div>
											<div className="start d-flex align-items-center">
												<div className="position-relative">
													<Field type="number" id="thur-end-time" name="thur_end_time" placeholder="00 hrs" />
													<div className="validation-error">{errors.thur_end_time && touched.thur_end_time && errors.thur_end_time}</div>
												</div>
												<div>
													<div className="custom-control custom-checkbox ms-3">
														<Field type="checkbox" value="pm" name="thur_end_time_day" className=" custom-control-input d-none" id="thur-end-time-day" />
														<label htmlFor="thur-end-time-day">
															<span className="am">AM</span>/<span className="pm">PM</span>
														</label>
													</div>
												</div>
											</div>
										</div>
										<div className="d-flex align-items-center py-3">
											<h3 className="days">Friday</h3>
											<div className="start d-flex align-items-center">
												<div className="position-relative">
													<Field type="number" id="fri-start-time" name="fri_start_time" placeholder="00 hrs" />
													<div className="validation-error">{errors.fri_start_time && touched.fri_start_time && errors.fri_start_time}</div>
												</div>
												<div>
													<div className="custom-control custom-checkbox ms-3">
														<Field type="checkbox" value="am" name="fri_start_time_day" className=" custom-control-input d-none" id="fri-start-time-day" />
														<label htmlFor="fri-start-time-day">
															<span className="am">AM</span>/<span className="pm">PM</span>
														</label>
													</div>
												</div>
											</div>
											<div className="start d-flex align-items-center">
												<div className="position-relative">
													<Field type="number" id="fri-end-time" name="fri_end_time" placeholder="00 hrs" />
													<div className="validation-error">{errors.fri_end_time && touched.fri_end_time && errors.fri_end_time}</div>
												</div>
												<div>
													<div className="custom-control custom-checkbox ms-3">
														<Field type="checkbox" value="pm" name="fri_end_time_day" className=" custom-control-input d-none" id="fri-end-time-day" />
														<label htmlFor="fri-end-time-day">
															<span className="am">AM</span>/<span className="pm">PM</span>
														</label>
													</div>
												</div>
											</div>
										</div>
										<div className="d-flex align-items-center py-3">
											<h3 className="days">Saturday</h3>
											<div className="start d-flex align-items-center">
												<div className="position-relative">
													<Field type="number" id="sat-start-time" name="sat_start_time" placeholder="00 hrs" />
													<div className="validation-error">{errors.sat_start_time && touched.sat_start_time && errors.sat_start_time}</div>
												</div>
												<div>
													<div className="custom-control custom-checkbox ms-3">
														<Field type="checkbox" value="am" name="sat_start_time_day" className=" custom-control-input d-none" id="sat-start-time-day" />
														<label htmlFor="sat-start-time-day">
															<span className="am">AM</span>/<span className="pm">PM</span>
														</label>
													</div>
												</div>
											</div>
											<div className="start d-flex align-items-center">
												<div className="position-relative">
													<Field type="number" id="sat-end-time" name="sat_end_time" placeholder="00 hrs" />
													<div className="validation-error">{errors.sat_end_time && touched.sat_end_time && errors.sat_end_time}</div>
												</div>
												<div>
													<div className="custom-control custom-checkbox ms-3">
														<Field type="checkbox" value="pm" name="sat_end_time_day" className=" custom-control-input d-none" id="sat-end-time-day" />
														<label htmlFor="sat-end-time-day">
															<span className="am">AM</span>/<span className="pm">PM</span>
														</label>
													</div>
												</div>
											</div>
										</div>
										<div className="d-flex align-items-center py-3">
											<h3 className="days">Sunday</h3>
											<div className="start d-flex align-items-center">
												<div className="position-relative">
													<Field type="number" id="sun-start-time" name="sun_start_time" placeholder="00 hrs" />
													<div className="validation-error">{errors.sun_start_time && touched.sun_start_time && errors.sun_start_time}</div>
												</div>
												<div>
													<div className="custom-control custom-checkbox ms-3">
														<Field type="checkbox" value="am" name="sun_start_time_day" className=" custom-control-input d-none" id="sun-start-time-day" />
														<label htmlFor="sun-start-time-day">
															<span className="am">AM</span>/<span className="pm">PM</span>
														</label>
													</div>
												</div>
											</div>
											<div className="start d-flex align-items-center">
												<div className="position-relative">
													<Field type="number" id="sun-end-time" name="sun_end_time" placeholder="00 hrs" />
													<div className="validation-error">{errors.sun_end_time && touched.sun_end_time && errors.sun_end_time}</div>
												</div>
												<div>
													<div className="custom-control custom-checkbox ms-3">
														<Field type="checkbox" value="pm" name="sun_end_time_day" className=" custom-control-input d-none" id="sun-end-time-day" />
														<label htmlFor="sun-end-time-day">
															<span className="am">AM</span>/<span className="pm">PM</span>
														</label>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="holiday mb-5">
										<div className="title">
											<h2>Weekly Holidays</h2>
										</div>
										<div className="d-flex align-items-center py-2">
											<h3 className="days">Days</h3>
											<div className="start">
												<div className="custom-select">
													<Field as="select" name="color">
														<option value="0">Select One</option>
														<option value="red">Red</option>
														<option value="green">Green</option>
														<option value="blue">Blue</option>
													</Field>
												</div>
											</div>
										</div>
									</div>
									<div className="holiday ">
										<div className="title">
											<h2>Other Holidays</h2>
										</div>
										<div className="d-flex py-2">
											<h3 className="days">Holiday 1</h3>
											<div className="start">
												<div className="custom-select">
													<Field as="select" name="holiday1">
														<option value="0">Select</option>
														<option value="red">Red</option>
														<option value="green">Green</option>
														<option value="blue">Blue</option>
													</Field>
												</div>
												<Field type="text" id="holiday1-date" name="holiday1-date" className="mt-4" placeholder="Name" />
												<DatePicker onChange={(e) => datePicker(e)} />
											</div>
										</div>
										<div className="d-flex py-2">
											<h3 className="days">Holiday 2</h3>
											<div className="start">
												<div className="custom-select">
													<Field as="select" name="holiday2">
														<option value="0">Select</option>
														<option value="red">Red</option>
														<option value="green">Green</option>
														<option value="blue">Blue</option>
													</Field>
												</div>
												<Field type="text" id="holiday2-date" name="holiday2-date" className="mt-4" placeholder="Name" />
											</div>
										</div>
										<div className="d-flex py-2">
											<h3 className="days">Holiday 3</h3>
											<div className="start">
												<div className="custom-select">
													<Field as="select" name="holiday3">
														<option value="0">Select</option>
														<option value="red">Red</option>
														<option value="green">Green</option>
														<option value="blue">Blue</option>
													</Field>
												</div>
												<Field type="text" id="holiday3-date" name="holiday3-date" className="mt-4" placeholder="Name" />
											</div>
										</div>
									</div>

									<div className="text-end">
										<button type="submit" disabled={isSubmitting} className="mt-sm-4 mt-4 form-submit">
											Submit
										</button>
									</div>
								</form>
							)
						}
					</Formik>
				</div>
			</div>
		</PerfectScrollbar>
	);
}
export default BusinessHour;