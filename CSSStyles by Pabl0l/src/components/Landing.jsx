import Forms from './Forms.jsx'
import TheCategories from './TheCategories.jsx'
import { Link, animateScroll  } from 'react-scroll';
import Bar from './Bar.jsx'
import Card from './Card.jsx'
import Menu from './Menu.jsx'
import About from './About.jsx'
import Options from './Options.jsx'
import Icons from './Icons.jsx'
import Buttons from './Buttons.jsx'
import List from './List.jsx'
import Post from './Post.jsx'
import Comment from './Comment.jsx'
import Footer from './Footer.jsx'
import Example from './Example.jsx'
import './css/landing.css'
const Landing = () => {
    const scrollToComponent = () => {
        animateScroll.scrollTo('forms', {
          duration: 800,
        });
      };

      

    return(
        <div className="div div-landing">
        <TheCategories />
        <div className='cont cont-landing'>
        <div className="div-w">
        <h2 className='h2 h2-page h2-landing'>Styles!</h2>
        <h3 className='h3'>Below you can see my component designs.</h3>
        <Link to="forms" smooth={true} offset={-70}>
        <button className="butt butt-landing" onClick={scrollToComponent}>▼</button>
        </Link>
        </div>
        </div>
    <div className="cont-padre ">
      <br />
            <Forms />
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
            <About />
            <hr />
            <Comment />
            <hr />
            <Post />
            <hr />
            <Footer />
            <hr />
            <Example />
         </div>
        </div>
    )
}
export default Landing