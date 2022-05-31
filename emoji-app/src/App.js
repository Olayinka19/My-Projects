import logo from './logo.svg';
import './App.css';
import Emoji from './Components/Emoji';
import Content from './Components/Content';
import Emojis from './Components/Emojis';



// const num = [1, 2, 3 , 5, 6 , 7, 2]

 
// const newMap = Emojis.map(x => x);
// alert(newEmoji)
// const newFilter = Emojis.filter(x => x)
// 
// const newReduce = Emojis.reduce(x => x)
// 
// const newFind = Emojis.find(x => x)
// 
// const newFindIndex = Emojis.findIndex(x => x)
// 
// Mapping through Components
function GetCon (emojiTe) {
return (
< Content
key={emojiTe.key}
name = {emojiTe.name}
img ={emojiTe.imgURL}
meaning ={emojiTe.meaning}

/>
)
  
}
function App(props) {
  return (
    <div className="App">
      <h1>EmojiPedia By Ola</h1>
      
      {Emojis.map(GetCon)}
     
    </div>
  );
}

export default App;
