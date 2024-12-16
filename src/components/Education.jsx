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
            </VerticalTimeline>
        </div>
    );
};

export default Education;