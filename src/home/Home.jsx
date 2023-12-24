import './stylesheets/Home.css'
import Card from './Card'
import Nav from './Nav'

export default function Home() {
  return (
    <div className='home-parent'>
          <Nav/>
        <div className='c1'>
        </div>
        <div className='c2'>
          <Card/>
        </div>
        <img src={require('../Me_Teddy.jpg')}/>
    </div>
  )
}
