// import { url } from "inspector";
import React, { Component } from "react";
// import { options } from "./options";
import Select from 'react-select'
import rightArrow from "../../assets/icons/arrows/chevron-right.svg";
import rightTop from "../../assets/icons/arrows/chevron-bottom.svg";
// import './select.css'


class slelect extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen :false,menuOpened:false};
  }

  onMenuOpen = () =>{
    this.setState({isOpen:true,menuOpened:true})
  }
  onMenuClose = () =>{
    this.setState({isOpen:false,menuOpened:false})
  }

  handleChange = (e)=>{
    this.props.onChange(e);
  }

  render() {
    const {isOpen} = this.state;

    var PadandMar;
    if(this.props.position == 'bottom'){
        PadandMar={
            padding:'30px 10px 10px 10px', 
            margin : '-35px 0px 0px 0px'
        }
    
    }
    else if (this.props.position == 'top'){
        PadandMar={
            padding:'10px 10px 30px 10px',
            margin : '0px 0px -35px 0px' 
        }
    
    }
    
    const customStyles = {
        indicatorSeparator : (provided) => ({
            ...provided,
            display : 'none',
        }),
        control : (provided,state) =>({
            ...provided,
            background: 'linear-gradient(264.35deg, rgba(0, 0, 0, 0.4) -45.5%, rgba(255, 255, 255, 0.4) 46.39%), #EBECF0',
            backgroundBlendMode: 'soft-light, normal',
            border: '1px dashed rgba(255, 255, 255, 0.4)',
            boxShadow: 'inset -3px -3px 10px #FAFBFF, inset 3px 3px 10px #A6ABBD',
            borderRadius: '40px',
            zIndex:this.state.menuOpened ?  102 : 10 ,
            width:'auto',
            paddingLeft:'10px',
            paddingRight:'10px',
            "&:hover" : {outline:'none'},
        }),
        menu: (provided, state) => ({
            ...provided,
            background: 'linear-gradient(175.84deg, rgba(0, 0, 0, 0.4) 49.46%, rgba(255, 255, 255, 0.4) 135.58%), #EBECF0',
            backgroundBlendMode: 'soft-light, normal',
            boxShadow: '-5px -5px 10px #FAFBFF, 5px 5px 10px #A6ABBD',
            borderRadius: '20px',
            margin:PadandMar.margin,
            zIndex:100,
            padding:PadandMar.padding,
          }),
          option: (provided) => ({
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
          singleValue : (provided) => ({  
              ...provided,  
            //   paddingLeft:'10px'
            // color:'blue'
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
          dropdownIndicator :(provided,state) => ({
              ...provided,
            transition: 'all .2s ease',
            // transform: "rotate(-90deg)",
            transform: this.state.menuOpened ? state.selectProps.menuIsOpen && "rotate(0deg)" :"rotate(-90deg)"
          }) 

      }
 
    return (
      <div style={{width:this.props.width}}>
        <Select 
          {...this.props} 
          isOpen={isOpen} 
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
