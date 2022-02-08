import {React,useState} from 'react';
import VideoBanar from '../images/video.png';
import VideoPlay from '../images/video_play.svg';
import FilterImg from '../images/filter_image.png';




function ModifyFilterv2() {

    return (
        <div className="modifyFilterContainer  videohidden">
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
                    <div className="filter_select">
                        <span className="filter_arrow" id='filterArrowLeft'></span>
                        <img src={FilterImg} alt="Filter Image" />
                        <span className="filter_arrow" id='filterArrowRight'></span>
                    </div>
                    <div className="submit_filter">
                        <button type='button'>OK</button>
                    </div>
                </div>
            </div>
        </div>
  
    );
  }
  
  export default ModifyFilterv2;
  