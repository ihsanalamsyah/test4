import axios from 'axios';
import {useState, useRef, useEffect } from 'react';
import kanyewest from './assets/kanye-west.jpeg'

function App() {

  const [quote, setQuote] = useState("")
  const [quotes, setQuotes] = useState([])
  const inputRef = useRef(null);
  const [myQuote, setMyQuote] =useState("")
  const [myQuotes, setMyQuotes] = useState([])

  const handleOnClick = async () =>{
    const response = await axios
    .get('https://api.kanye.rest/')

    return setQuote(response.data.quote)
  }
  

  const getQuote = async () =>{
    const response = await axios
    .get('https://api.kanye.rest/')

    return setQuote(response.data.quote)
  }

  useEffect(()=>{
    getQuote()
  }, [])

  const onlyUnique = (value, index, self) =>{
    return self.indexOf(value) === index;
  }

  const handleOnClickz = (quote, quotes)=>{
    let a = quotes.concat(quote)

    const unique = a.filter(onlyUnique);
    return setQuotes(unique)
  }

 

  const handleOnClickzz = (e, myQuotes)=>{
    e.preventDefault()

    setMyQuote(inputRef.current.value)
    let b = myQuotes.concat(inputRef.current.value) 
    const unique = b.filter(onlyUnique)
    return setMyQuotes(unique)

  }


  /* Style */
  const sectionStyleTop ={
    textAlign: 'center'
  }
  
  const imageStyle ={
    width: '300px',
    height: '180px'
  }
  const h1Style={
    fontSize : '40px',
    marginTop: '10px'
  }
  const listStyle ={
    listStyleType: 'none'
  }
  const hrStyle ={
    maxWidth: '30%'
  }
  const sectionStyleBot ={
    textAlign: 'center',
    marginTop: '60px'
  }
  
  return (
    <div className="App">
    <section style={sectionStyleTop}>
    <img src={kanyewest} style={imageStyle} alt="kanyewest"/>
    <h1 style={h1Style}>Kanye-West Quote</h1>

      <h3>{quote}</h3>
      <button onClick={() => handleOnClick()}>Get Quote</button>
      <button onClick={() => handleOnClickz(quote, quotes)}>Add Favorite</button>
      <ol>
        {
          quotes.map(function (data, i){
            return (
              <li style={listStyle} key={i}>{data}</li>
              ) 
              
          })
        }
      </ol>
    </section>

    <section style={sectionStyleBot}>

      <hr style={hrStyle}></hr>
      <h2>My Quotes</h2>
      <form>
        <input type="text" placeholder="" ref={inputRef}></input>
        <button onClick={(e) => handleOnClickzz(e, myQuotes )}>Submit</button>
      </form>

      <ol>
      {
          myQuotes.map(function (data, i){
            return (
              <li style={listStyle} key={i}>{data}</li>
              ) 
              
          })
        }
      </ol>
    </section>
    </div>
  );
}

export default App;
