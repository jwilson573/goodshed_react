import React, { Component } from 'react';

import AuxComponent from '../../hocs/AuxComponent/AuxComponent';
// import Header from '../../components/Header/Header';

import classes from './Home.scss';
import mainPic1 from '../../assets/photo1.png';
import mainPic2 from '../../assets/photo2.png';
import mainPic3 from '../../assets/photo3.jpeg';

class Home extends Component {
    

    render () {

        return (
            <AuxComponent>
                {/* <Header /> */}
                <div className={classes.home}>
                    <img src={mainPic1} alt="photo1" />
                    <div className={classes.text1}>
                        <p> You've spent time writing your material and honing your craft.</p>
                        <p><span style={{fontSize: '1.7rem'}}> Now it's time to capture it!</span> </p>
                        <p> Have you tried recording and mixing your own music?</p>
                        <p> Have you become frustrated with the process?</p>
                        <p> Let us help you turn your next project into something truly deserving of the time you've invested in it.</p>
                    </div>
                    <img src={mainPic2} alt="photo2" />
                    <div className={classes.text1}>
                        <p style={{fontSize: '1.7rem'}}>Bring your personal gear!</p>
                        <p>But we also have a wide variety of</p>
                        <p><span style={{fontSize: '1.7rem'}}>guitars, amps, &amp; mics</span></p>
                        <p>at your disposal if you desire.</p>
                    </div>
                    <img src={mainPic3} alt="photo3" />
                    <div className={classes.testimonial}>
                        <p style={{fontSize: '1.7rem'}}>You come first!</p>
                        <p> " My experience at the GoodShed has been amazing! Christian has a great way of bringing your 
                            music to life and does it in a way that's intuitive to you. He hears it the way you want it 
                            heard, which is a quality that's very rare and hard to find in a music producer. I highly 
                            recommend starting here, whether you are recording your first song or 10th album. " 
                        </p>
                        <p style={{textAlign: 'right', fontSize: '1.1rem'}}>- Travis Williams</p>
                    </div>
                </div>
                {/* <div className={classes.home}>
                    <img src={mainPic} alt="photo1" />
                </div> */}
            </AuxComponent>
        )
    }
}

export default Home;