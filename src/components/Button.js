import React from "react";
class Button extends React.Component{

    shouldComponentUpdate(nextProps){
        const {handleClick:currentChange}=this.props;
        const {handleClick:nextChange}=nextProps;
        if(currentChange===nextChange){
            return false;
        }else{
            return true;
        }
    }


    render(){
        console.log("Button Component Rendering..")
        let {handleClick,locale}=this.props
        return(
            <button onClick={()=>handleClick(locale)}>Click Here</button>
        )
    }


}
export default Button;