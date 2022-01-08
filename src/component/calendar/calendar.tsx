import React, { ChangeEvent, Component } from 'react';
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css';
import './calendar.scss';
import { FaRegCalendarAlt } from 'react-icons/fa';

interface typeState{
    value:Date,
}
interface typeProps{
    onChange : (e:any)=> void,
}

class Datepicker extends Component<typeProps, typeState>{
    constructor(props:any){
        super(props);
        this.state = {
            value: new Date(),
        }
    }
    dateChange = (e:any)=>{
        console.log(e);
        this.props.onChange(e);
        this.setState({
            value: e
        })
    }
    render():JSX.Element{
        return(
            <DatePicker
                className="mt-3"
                clearIcon={null}
                calendarIcon={<FaRegCalendarAlt className="icon"/>}
                onChange={this.dateChange}
                value={this.state.value}
            />
        )
    }
}
export default Datepicker;