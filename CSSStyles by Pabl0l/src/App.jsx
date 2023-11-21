import Forms from './components/Forms.jsx'
import Bar from './components/Bar.jsx'
import Card from './components/Card.jsx'
import Landing from './components/Landing.jsx'
import Menu from './components/Menu.jsx'
import About from './components/About.jsx'
import Options from './components/Options.jsx'
import Icons from './components/Icons.jsx'
import Buttons from './components/Buttons.jsx'
import List from './components/List.jsx'
import Post from './components/Post.jsx'
import Comment from './components/Comment.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

const App=()=> {

  return (
    <div className="app">
    <div className="cont-padre">
        <h1>CSSStyles by Pabl0l</h1>
            <hr/>
            <Forms/>
            <hr />
            <Buttons />
            <hr />
            <Icons />
            <hr />
            <List />
            <hr />
            <Menu />
            <hr />
            <Options />
            <hr />
            <Bar/>
            <hr />
            <Card />
            <hr />
            <Landing />
            <hr />
            <About />
            <hr />
            <Comment />
            <hr />
            <Post />
            <hr />
            <Footer />
         </div>
    </div>
  )
}

export default App
