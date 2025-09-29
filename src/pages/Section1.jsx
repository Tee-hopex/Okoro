import './Section1.css'

import Card from './Card.jsx'

import one from './assets/images/one.png'
import two from './assets/images/two.png'
import three from './assets/images/three.png'

function Section1 () {

    return (
        <>
            <section className='section1'>
                <div className='section1-container'>
                    <Card name= "Hope" image = {one} desc = "A fullStack Web Developer" />
                    <Card name= "Tolu" image = {two} desc = "A fullStack Web Developer" />
                    <Card name= "Truth" image = {three} desc = "A fullStack Web Developer" />
                </div>
            </section>
        </>
    )
}


export default Section1