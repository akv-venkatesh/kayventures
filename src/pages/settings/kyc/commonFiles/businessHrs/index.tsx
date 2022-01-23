import React from 'react';
import { Component } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Formik, Field } from "formik";
import DatePicker from '../../../../../component/calendar/calendar';
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import Vector5 from "../../../../../assets/icons/various/Vector5.svg"
import { Link } from 'react-router-dom';

interface typeProps {
    onClick?: any,
    onClickNext?: any,
    onClickBack?: any,
    onClickSendValues?: any,
    parentState?: any
}
interface typeState {
    otherholidayValues: any
}

class Businesshour extends Component<typeProps, typeState>{
    constructor(props: any) {
        super(props);
        this.state = {
            otherholidayValues: [{ name: "", date: {} }]
        }
    }


    datePicker = (e: Date): any => {
    }
    
    click = () => {
        this.props.onClick();
    }

    handleChange(index: any, value: any, name: any) {
        let otherholidayValues = this.state.otherholidayValues;
        otherholidayValues[index][name] = value;
        this.setState({ otherholidayValues });
    }

    render(): JSX.Element {


        const addFormFields = () => {


            this.setState({
                otherholidayValues: [...this.state.otherholidayValues, { name: "", date: {} }]
            });

        }

        const initialValues: any = {
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
            mon_start_time_day: 'am',
            mon_end_time_day: 'am',
            tue_start_time_day: 'am',
            tue_end_time_day: 'am',
            wed_start_time_day: 'am',
            wed_end_time_day: 'am',
            thur_start_time_day: 'am',
            thur_end_time_day: 'am',
            fri_start_time_day: 'am',
            fri_end_time_day: 'am',
            sat_start_time_day: 'am',
            sat_end_time_day: 'am',
            sun_start_time_day: 'am',
            sun_end_time_day: 'am',
        }
        console.log(this.state.otherholidayValues);
        const { onClickNext, onClickBack, onClickSendValues, parentState } = this.props;
        return (


            <div className='businesshour h-100'>
                <Formik
                    initialValues={initialValues}
                    validate={(values: any) => {
                        let errors: any = {};
                        // console.log(values)
                        Object.keys(values).map((val: any) => {
                            // console.log(val, values[val]);
                            if (values[val] == '' || values[val] == undefined || values[val] == null) {
                                errors[val] = 'Enter a value';
                            }
                            else if (values[val] > 12 || values[val] < 0) {
                                errors[val] = 'Enter a value within "12 "';
                            }
                        })
                        if(values['mon_end_time_day'] == values['mon_start_time_day']){
                            if(values['mon_end_time'] < values['mon_start_time']){
                                errors['mon_end_time'] = 'Enter a correct value';
                            }
                        }
                        if(values['tue_end_time_day'] == values['tue_start_time_day']){
                            if(values['tue_end_time'] < values['tue_start_time']){
                                errors['tue_end_time'] = 'Enter a correct value';
                            }
                        }
                        if(values['wed_end_time_day'] == values['wed_start_time_day']){
                            if(values['wed_end_time'] < values['wed_start_time']){
                                errors['wed_end_time'] = 'Enter a correct value';
                            }
                        }
                        if(values['thu_end_time_day'] == values['thu_start_time_day']){
                            if(values['thu_end_time'] < values['thu_start_time']){
                                errors['thu_end_time'] = 'Enter a correct value';
                            }
                        }
                        if(values['fri_end_time_day'] == values['fri_start_time_day']){
                            if(values['fri_end_time'] < values['fri_start_time']){
                                errors['fri_end_time'] = 'Enter a correct value';
                            }
                        }
                        if(values['sat_end_time_day'] == values['sat_start_time_day']){
                            if(values['sat_end_time'] < values['sat_start_time']){
                                errors['sat_end_time'] = 'Enter a correct value';
                            }
                        }
                        if(values['sun_end_time_day'] == values['sun_start_time_day']){
                            if(values['sun_end_time'] < values['sun_start_time']){
                                errors['sun_end_time'] = 'Enter a correct value';
                            }
                        }
                        // console.log(errors);

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        this.props.onClickSendValues(values, this.state.otherholidayValues)
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
                                isSubmitting, setFieldValue,isValid, dirty
                            }
                        ) => (
                            <form onSubmit={handleSubmit} className="ps-xl-5 form-bh">
                                <PerfectScrollbar>
                                    <div className='h-100  px-4 py-4'>
                                        <div className="ps-lg-5">

                                            <div className="weekday mb-5">
                                                <div className="d-flex title align-items-center">
                                                    <h2 className="days" onClick={this.click}>Days</h2>
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

                                            <div className="holiday pb-5">
                                                <div className="title">
                                                    <h2>Other Holidays</h2>
                                                </div>

                                                {/*....  */}

                                                {this.state.otherholidayValues.map((element: any, index: any) => (
                                                    <div className="form-inline" key={index}>
                                                        <div className="d-flex py-2">
                                                            <div className='d-flex align-items-center w-100'>
                                                                <Field type="text " name={'name' + (index + 1)} placeholder="Enter name of the holiday" style={{ width: "350px" }} onChange={(e: any) => this.handleChange(index, e.target.value, 'name')} />
                                                                <div className='d-flex justify-content-center align-items-center mx-5 mb-3  ' >


                                                                    <div>
                                                                        <DatePicker onChange={(value: any) => this.handleChange(index, value, 'date')} />

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}


                                                {/* <div className="d-flex py-2">
                                                    <div className='d-flex align-items-center w-100'>
                                                        <Field type="text " name="time" placeholder="Enter name of the holiday" style={{ width: "350px" }} />
                                                        <div className='d-flex justify-content-center align-items-center mx-5 mb-3  ' >

                                                            <div>
                                                                <DatePicker onChange={(e) => this.datePicker(e)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}
                                                {/* ..... */}
                                                <div className="plusIcon  plusIcon1 d-flex ">
                                                    <img src={Vector5} className="image_one" alt="" onClick={addFormFields} />
                                                    <p>  Add more </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </PerfectScrollbar>
                                {/* footer   button */}
                                <div className="px-5 py-3 m-auto  ">
                                    <div className="row">
                                        <div className="w-100 d-flex justify-content-center">
                                            <button title="backbutton" type="button" onClick={onClickBack} className=" btn-back " ><AiFillCaretLeft className="left-array-btn" />Back</button>
                                            <div className="w-30 m-auto">
                                                <button
                                                    title="removebutton"
                                                    type="button"
                                                    className="btn btn-default mx-4 remove"
                                                >Clear
                                                </button>
                                                {(isValid && dirty) ? <><button
                                                    title="savebutton"

                                                    type="submit"
                                                    style={{ backgroundColor: '#3CD070', color: '#FFFFFF' }}
                                                    className="btn  btn-default mx-4 saveq"
                                                >Save
                                                </button></> : <button
                                                    title="savebutton"

                                                    type="submit"

                                                    className="btn  btn-default mx-4 saveq"
                                                >Save
                                                </button>}
                                            </div>
                                            <button type="button"  onClick={onClickNext} className="btn-next" >Next<AiFillCaretRight className="right-array-btn" /></button>
{/* disabled={parentState.step3Nextbtn} */}
                                        </div>
                                    </div>
                                </div>
                                {/* footer   button */}
                            </form>
                        )
                    }
                </Formik>
            </div>
        )
    }
}

export default Businesshour;