export default function BoilingVardict({celsius=0}){
   if(celsius>100){
        return <p>The Water Would Boil.</p>
   }else{
       return <p>Water Would not boil.</p>
   }
}