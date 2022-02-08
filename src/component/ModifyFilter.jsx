import {React,useState} from 'react';
import VideoBanar from '../images/video.png';
import VideoPlay from '../images/video_play.svg';

import Filter from '../images/filter.png';

// import Filter_1 from '../images/filter_1.png';
// import Filter_2 from '../images/filter_2.png';
// import Filter_3 from '../images/filter_3.png';
// import Filter_4 from '../images/filter_4.png';
// import Filter_5 from '../images/filter_5.png';
// import Filter_6 from '../images/filter_6.png';

// import TheVodeo from 'https://www.w3schools.com/html/mov_bbb.mp4';



function ModifyFilter() {

    return (
        <div className="modifyFilterContainer hidden">
            <div className="container">
                <div className="video_container">
                    <div className="modify_title"><h3>Click to modify</h3></div>
                    <div className="videoBanar">
                        <div className="Video_play">
                            <img src={VideoBanar} alt="Video Banar"/>
                            
                        </div>
                        <div className="play_btn"><img src={VideoPlay} alt="Video Play" /></div>
                    </div>
                    <div className="filter_btns">
                        <button className='filterbtn' id='Filter'>Filter</button>
                        <button className='filterbtn' id='CutFilter'>Cut</button>
                    </div>
                    <ul className="filter_opt_list">
                        <li className='filterOpt '>
                            <div className="fil_opt_name">Sepia</div>
                            <div className="filter_img Sepia">
                                <img src={Filter} alt="Filter Item" />
                            </div>
                        </li>
                        <li className='filterOpt '>
                            <div className="fil_opt_name">Classic</div>
                            <div className="filter_img Classic">
                                <img src={Filter} alt="Filter Item" />
                            </div>
                        </li>
                        <li className='filterOpt'>
                            <div className="fil_opt_name">Lark</div>
                            <div className="filter_img Lark">
                                <img src={Filter} alt="Filter Item" />
                            </div>
                        </li>
                        <li className='filterOpt'>
                            <div className="fil_opt_name">Black and White</div>
                            <div className="filter_img blackWhite">
                                <img src={Filter} alt="Filter Item" />
                            </div>
                        </li>
                        <li className='filterOpt'>
                            <div className="fil_opt_name">Bokeh</div>
                            <div className="filter_img Bokeh">
                                <img src={Filter} alt="Filter Item" />
                            </div>
                        </li>
                        <li className='filterOpt'>
                            <div className="fil_opt_name">Street</div>
                            <div className="filter_img Street">
                                <img src={Filter} alt="Filter Item" />
                            </div>
                        </li>
                    </ul>
                    <div className="submit_filter">
                        <button type='button'>OK</button>
                    </div>
                </div>
            </div>
        </div>
  
    );
  }
  
  export default ModifyFilter;
  