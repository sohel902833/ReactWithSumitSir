import Text from "./composition/Text";
import Emoji from "./composition/Emoji";
import Bracket from "./composition/Bracket";
function App() {
  return <Emoji>{({ addEmoji }) => (
      <Bracket>
      {
          ({addBracket})=> <Text addBracket={addBracket} addEmoji={addEmoji} />
      }
       
      </Bracket>
  )}</Emoji>;
}
export default App;
