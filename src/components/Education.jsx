import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import img from '../assets/icons/icon1.png'
import './style.css'
const Education = () => {
    return (
        <div className="max-w-[1500px] mx-auto my-16">
            <VerticalTimeline lineColor="#0872BA66" className="bg-white text-black">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work border-b-0"
                    contentStyle={{
                        "-webkit-box-shadow": "none",
                        "box-shadow": "none"
                    }}

                    icon={'1'}
                    iconStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #0872BAC2',
                        color: 'black',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}


                >
                    <div className='space-y-1 '>
                        <h3 className="vertical-timeline-element-title text-xl pb-4">Plan Your Trip</h3>
                        <h4 className="vertical-timeline-element-subtitle text-lg">Start by setting your travel dates, destinations, and preferences. This helps you tailor your search for housemates who align with your journey.</h4>
                        <img className="mx-auto 
                        " src={img} alt="" />
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work border-b-0"
                    contentStyle={{
                        "-webkit-box-shadow": "none",
                        "box-shadow": "none"
                    }}

                    icon={'2'}
                    iconStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #0872BAC2',
                        color: 'black',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}


                >
                    <div className='space-y-1'>
                        <h3 className="vertical-timeline-element-title text-xl pb-4">Plan Your Trip</h3>
                        <h4 className="vertical-timeline-element-subtitle text-lg">Start by setting your travel dates, destinations, and preferences. This helps you tailor your search for housemates who align with your journey.</h4>
                        <img className="mx-auto" src={img} alt="" />
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work border-b-0"
                    contentStyle={{
                        "-webkit-box-shadow": "none",
                        "box-shadow": "none"
                    }}

                    icon={'1'}
                    iconStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #0872BAC2',
                        color: 'black',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}


                >
                    <div className='space-y-1'>
                        <h3 className="vertical-timeline-element-title text-xl pb-4">Plan Your Trip</h3>
                        <h4 className="vertical-timeline-element-subtitle text-lg">Start by setting your travel dates, destinations, and preferences. This helps you tailor your search for housemates who align with your journey.</h4>
                        <img className="mx-auto" src={img} alt="" />
                    </div>
                </VerticalTimelineElement>
                {/* <VerticalTimelineElement
                    className="vertical-timeline-element--work"

                    contentStyle={{ background: "linear-gradient(to right, rgb(99, 102, 241), rgb(236, 72, 153))", color: '#fff' }}

                    contentArrowStyle={{ borderRight: '7px solid  rgb(59, 130, 246)' }}
                    date="2021 - 2024"
                    dateClassName='text-white md:text-pink-900'

                    iconStyle={{ background: 'rgb(236, 72, 153)', color: '#fff' }}
                    iconClassName=''
                >
                    <div className='space-y-1'>
                        <h3 className="vertical-timeline-element-title text-3xl pb-4">Diploma In Computer Science & Technology</h3>
                        <h4 className="vertical-timeline-element-subtitle text-lg">CGPA : 3.75 (7th semester)</h4>
                        <h4 className="vertical-timeline-element-subtitle text-lg">Institute : Sherpur Polytechnic Institute</h4>
                        <h4 className="vertical-timeline-element-subtitle text-lg">Board : Bangladesh Technical Education Board</h4>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"

                    contentStyle={{
                        background: "linear-gradient(to right, rgb(59, 130, 246), rgb(6, 182, 212))",
                        color: "#fff"
                    }}

                    contentArrowStyle={{ borderRight: '7px solid  rgb(6, 182, 212)' }}
                    date="2015 - 2017"
                    dateClassName='text-white md:text-green-900'
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                >
                    <div className='space-y-1'>
                        <h3 className="vertical-timeline-element-title text-3xl pb-4">Junior School Certificate</h3>
                        <h4 className="vertical-timeline-element-subtitle text-lg">GPA : 4.87</h4>
                        <h4 className="vertical-timeline-element-subtitle text-lg">School : Sheikh Rasel Govt High School</h4>
                        <h4 className="vertical-timeline-element-subtitle text-lg">Board : Dhaka Board</h4>
                    </div>
                </VerticalTimelineElement> */}
            </VerticalTimeline>
        </div>
    );
};

export default Education;