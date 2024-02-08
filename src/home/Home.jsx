import './stylesheets/Home.css'
import Card from './Card'
import Logo from './Nav'

export default function Home() {
  return (
    <div className='home-parent'>
      <Logo/>
      <div className='c1'>
        <img src={require('../Me_Teddy.jpg')}/>
      </div>
      <div className='c2'>
        <Card/>
      </div>
    </div>
  )
}
