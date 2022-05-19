import React from 'react';
import styles from './AboutUs.css'
const AboutUs = () => {
    return(
        <div className= "aboutpage">
            <div className ='AboutHeader'>
                <h1>ABOUT US</h1>
            </div>
            <div className= 'containers'>
                <div className ='Mission'>
                    <h2 className ='MissionHeader'>
                        Mission
                    </h2>
                    <div className ='info'>
                        <p>
                            Our mission is to discover all virus hashes there area and add them and grow our Database. Please use our database to 
                            Search for any hash that you might consider a potential threat. However, if you we do not have that virus has please use our VirusTotal 
                            Search feature to search the virus total API for virus. This will allow us to add that hash within our Database and further our Research.
                        </p>
                    </div>
                </div>
                <div className ='Creators'>
                    <h2 className ='CreatorHeader'>
                        Creators
                    </h2>
                    <div className ='Creatorinfo'>
                        <p>
                            This Project was started by Kevin Zheng, Grayson Wassel, Joseph Mowery, Dave Benton, Bodhi Arnold, to help 
                            ordinary people out against viruses. The team is from UMBC and are all studying for their Computer Science Degree.
                        </p>
                    </div>
                </div>
                <div className ='Contact'>
                    <h2 className ='ContactHeader'>
                        Feedback
                    </h2>
                    <div className ='Contactinfo'>
                        <p>
                            If there are any additions to the website that we can improve on please contact us. The team would be extremely interested
                            in improving the software and advancing it further in the future. Email us using the link at the bottom.
                        </p>
                    </div>
                </div>
            </div>
            <div className ='footer'>
                    <a href="mailto:kevzheng77@gmail.com">CONTACT US</a> 
            </div>
        </div>
    )
}

export default AboutUs