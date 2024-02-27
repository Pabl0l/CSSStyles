import './css/Footer.css'
const Footer = () => {
    return(
        <div className="cont cont-hijo-footer" id='footer'>
        <h2 className="h2 h2-footer">Footer</h2>
        <div className="div div-footer">
        <div className="div-head">
        </div>
        <div className="div-foot">
        <div className="div-footu">
            <a className='a-footer c-fo' href="#">About</a>
            <a className='a-footer c-fo' href="#">Privacy and condicitions</a>
            <a className='a-footer c-fo' href="#">Security center</a>
        </div>
        <div className="div-footd">
            <a className='a-footer c-fo' href="#">Accesibility</a>
  
            <select className='c-fo select-footer' name="idioma" id="idioma">
    <option className='c-fo'>English (USA)</option>
    <option className='c-fo'>Español (España)</option>
    <option className='c-fo'>Français (France)</option>
    <option className='c-fo'>Deutsch (Germany)</option>
    <option className='c-fo'>Italiano (Italy)</option>
    <option className='c-fo'>Português (Portugal)</option>
    <option className='c-fo'>中文 (China)</option>
    <option className='c-fo'>日本語 (Japan)</option>
    <option className='c-fo'>한국어 (South Korea)</option>
    <option className='c-fo'>العربية (Saudi Arabia)</option>
    <option className='c-fo'>Русский (Russia)</option>
    <option className='c-fo'>हिन्दी (India)</option>
    <option className='c-fo'>ไทย (Thailand)</option>
    <option className='c-fo'>Bahasa Indonesia (Indonesia)</option>
    <option className='c-fo'>Nederlands (Netherlands)</option>
    <option className='c-fo'>Svenska (Sweden)</option>
<option className='c-fo'>Dansk (Denmark)</option>
<option className='c-fo'>Norsk (Norway)</option>
<option className='c-fo'>Suomi (Finland)</option>
<option className='c-fo'>Polski (Poland)</option>
<option className='c-fo'>Čeština (Czech Republic)</option>
<option className='c-fo'>Magyar (Hungary)</option>
<option className='c-fo'>Ελληνικά (Greece)</option>
<option className='c-fo'>Türkçe (Turkey)</option>
<option className='c-fo'>Tiếng Việt (Vietnam)</option>
<option className='c-fo'>עברית (Israel)</option>
<option className='c-fo'>Українська (Ukraine)</option>
<option className='c-fo'>हिन्दी (Nepal)</option>
<option className='c-fo'>Tagalog (Philippines)</option>

  </select>
        </div>
        <div className="div-foott">
            <h4 className='c-fo'>Contact me!</h4>
            <a target='_blank' rel="noreferrer" className='a-footer c-fo' href="https://www.linkedin.com/in/pablo-olivera-451467292/">LinkedIn</a>
            <a target='_blank' rel="noreferrer" className='a-footer c-fo' href="https://github.com/Pabl0l">Github</a>
            <a target='_blank' rel="noreferrer" className='a-footer c-fo' href="https://www.instagram.com/pomxcom/">Instagram</a>

        </div>
        </div>
        </div>
</div>
    )
}
export default Footer