// import { url } from "inspector";
import React, { Component } from "react";
// import { options } from "./options";
import Select from 'react-select'
import rightArrow from "../../assets/icons/arrows/chevron-right.svg";
import rightTop from "../../assets/icons/arrows/chevron-bottom.svg";
// import './select.css'

interface typeProps{
  onChange: (event:any)=>void;
  position: string;
  width: any,
  options?:any,
  placeholder:any,
  name?:any,
  inputId?:any,
  isOptionDisabled?:any,
  value?:any,
  disabled?:any,
}
interface typeState{
  isOpen:boolean,
  menuOpened: boolean,
}


class slelect extends Component<typeProps,typeState> {
  constructor(props:any) {
    super(props);

    this.state = { isOpen :false,menuOpened:false};
  }

  onMenuOpen = () =>{
    this.setState({isOpen:true,menuOpened:true})
  }
  onMenuClose = () =>{
    this.setState({isOpen:false,menuOpened:false})
  }

  handleChange = (e:any)=>{
    this.props.onChange(e);
  }

  render():JSX.Element {
    const isOpen = this.state.isOpen;

    var PadandMar:any;
    if(this.props.position == 'bottom'){
        PadandMar={
            padding:'45px 15px 15px 15px', 
            margin : '-35px 0px 0px 0px'
        }
    
    }
    else if (this.props.position == 'top'){
        PadandMar={
            padding:'10px 15px 30px 15px',
            margin : '0px 0px -35px 0px' 
        }
    
    }
    
    const customStyles = {
        indicatorSeparator : (provided:any) => ({
            ...provided,
            display : 'none',
        }),
        control : (provided:any,state:any) =>({
            ...provided,
            background: 'linear-gradient(264.35deg, rgba(0, 0, 0, 0.4) -45.5%, rgba(255, 255, 255, 0.4) 46.39%), #EBECF0',
            backgroundBlendMode: 'soft-light, normal',
            border: '1px dashed rgba(255, 255, 255, 0.4)',
            boxShadow: 'inset -3px -3px 10px #FAFBFF, inset 3px 3px 10px #A6ABBD',
            borderRadius: '40px',
            zIndex:this.state.menuOpened ?  102 : 10 ,
            width:'auto',
            paddingLeft:'20px',
            paddingRight:'10px',
            "&:hover" : {outline:'none'},
        }),
        menu: (provided:any, state:any) => ({
            ...provided,
            background: 'linear-gradient(175.84deg, rgba(0, 0, 0, 0.4) 49.46%, rgba(255, 255, 255, 0.4) 135.58%), #EBECF0',
            backgroundBlendMode: 'soft-light, normal',
            boxShadow: '-5px -5px 10px #FAFBFF, 5px 5px 10px #A6ABBD',
            borderRadius: '20px',
            margin:PadandMar.margin,
            zIndex:100,
            padding:PadandMar.padding,
          }),
          menuList : (provided:any) => ({
            ...provided,
            maxHeight:"200px",
            height:'auto',paddingRight:'15px',
              "&::-webkit-scrollbar" :{
                                    width: "10px" ,
                                    background: '#E1E4EA',
                                    boxShadow: 'inset -4px -4px 9px 2px rgba(255, 255, 255, 0.8), inset 4px 4px 4px #AAB3C5',
                                    borderRadius: '30px'
                                  },
              "&::-webkit-scrollbar-thumb" :{
                                    background: "#E1E4EA",
                                    boxShadow: '-4px -4px 16px 2px rgba(255, 255, 255, 0.8), 4px 4px 16px #AAB3C5, inset -4px -4px 16px rgba(255, 255, 255, 0.5), inset 4px 4px 8px rgba(170, 179, 197, 0.25)',
                                    borderRadius: '20px',
                                    width:"10px"
                                  }
        }),
          option: (provided:any) => ({
            ...provided,
            borderBottom: '1px dotted #0004',
            padding: 10,
            backgroundColor : 'transparent',
            color:'#566180',
            "&:active": {
                opacity:0.8,
                backgroundColor:'transparent'
              },
              "&:hover": {
                opacity:0.8,
                backgroundColor:'transparent'
              }
          }),
          singleValue : (provided:any) => ({  
              ...provided,
               backgroundColor:'transparent' ,
            //   paddingLeft:'10px'
            color:'#0062d7'
          }),
          input : (provided:any) => ({  
            ...provided,
            "input" : {backgroundColor:'red',color:'#0062d7 !important' } 

        }),
        //   indicatorsContainer :(provided) => ({
        //     ...provided,
        //     "svg" : { display :'none'},
        //     opacity:0.5,
        //     background : `url('${rightArrow}') no-repeat center`,
        //     "&:hover": {
        //         opacity:0.5,
        //         background : `url('${rightTop}') no-repeat center`,
        //       }
        //   }),
          dropdownIndicator :(provided:any,state:any) => ({
              ...provided,
              display:'none',
            transition: 'all .2s ease',
            // transform: "rotate(-90deg)",
            transform: this.state.menuOpened ? state.selectProps.menuIsOpen && "rotate(0deg)" :"rotate(-90deg)"
          }) 

      }
 
    return (
      <div style={{width:this.props.width}}>
        <Select 
          {...this.props} 
          // isOpen= {isOpen} 
          className=''
          onMenuOpen={this.onMenuOpen}  
          onMenuClose={this.onMenuClose} 
          
          styles={customStyles} 
          menuPlacement="auto"  
          onChange={this.handleChange} 
        />
      </div>
    );
  }
}

export default slelect;
