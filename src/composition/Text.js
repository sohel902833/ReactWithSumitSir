export default function Text({ addEmoji,addBracket }) {
  let text = "Javascritp Programming Language";
  if(addEmoji){
      text=addEmoji(text, "I Love.U")
  }
  if(addBracket){
      text=addBracket(text)
  }


  return <div>{text}</div>;
}
