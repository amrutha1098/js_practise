import ReactDOM from 'react-dom'
import logo from './logo.svg';

function MyProfilepic(){
  return (
    <div>
    <img src={logo} alt="logo" height="30px"/>
    </div>
  )
}

function MyInfo(){
  return (
    <div>
      <h1>Amrutha</h1>
      <h3>Front End Developer</h3>
      <h3>Amrutha.website</h3>
    </div>  
  )
}

function About(){
  return (
    <div>
    <h1>About</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget dolor at magna fermentum iaculis. Cras luctus hendrerit velit id tincidunt. Nunc egestas sit amet mi sed placerat. Praesent dictum porta nulla, eu dictum odio scelerisque non. Vestibulum bibendum erat mattis, lobortis libero sed, aliquet leo. Suspendisse dolor massa, faucibus in velit eget, egestas iaculis nunc. Aenean ultricies odio eget dolor pharetra, sed efficitur nisl sollicitudin.</p>  
    </div>
  )
}

function Interests(){
  return (
    <div>
      <h3>Interests</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget dolor at magna fermentum iaculis. Cras luctus hendrerit velit id tincidunt. Nunc egestas sit amet mi sed placerat. Praesent dictum porta nulla, eu dictum odio scelerisque non. Vestibulum bibendum erat mattis, lobortis libero sed, aliquet leo. Suspendisse dolor massa, faucibus in velit eget, egestas iaculis nunc. Aenean ultricies odio eget dolor pharetra, sed efficitur nisl sollicitudin.</p>   
 </div>
  )
}

function Footer(){
  return (
    <h1>Special icons</h1>
  )
}

function DigitlBusinesscard(){
  return (
   <div>
      <MyProfilepic/>
      <MyInfo/>
      <About/>
      <Interests/>
      <Footer/>
   </div>
  )
}

ReactDOM.render(
<DigitlBusinesscard/>
,document.getElementById("root"));