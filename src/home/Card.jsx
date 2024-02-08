import './stylesheets/Card.css'

export default function Card() {
  return (
    <div className='card'>
        <h4>Full Stack Software Engineer</h4>
        <h2>Tulja Bhavani Kshatri</h2>
        <p className='subLines'>
        I'm a full-stack engineer who loves AI - I'm always trying to teach machines to think like humans, so I can finally take a break. When I'm not coding, you'll find me explaining to my friends why robots are going to take over the world (they're not convinced yet).
        </p>
        <button className='downloadBtn'>Download CV</button>
        <button className='downloadBtn'>Contact</button>
    </div>
  )
}
