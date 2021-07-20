import React from "react";
class Button extends React.Component{

    shouldComponentUpdate(nextProps){
        const {handleClick:currentChange,locale:currentLocale}=this.props;
        const {handleClick:nextChange,locale:nextLocale}=nextProps;
        if(currentChange===nextChange && currentLocale===nextLocale){
            return false;
        }else{
            return true;
        }
    }


    render(){
        let {change,locale}=this.props
        return(
            <button onClick={()=>change(locale)}>
                {
                    locale==="bn-BD"?"Change ":"পরিবর্তন করুন"
                }
           
                </button>
        )
    }


}
export default Button;