import './Profile.css'
import {  GamingLibrary } from "../../sections/index.js";
import { SectionWrapper } from '../../components';
import profile_1 from '../../assets/images/profile.jpg'

const Profile = () => {
  return (
    <>
      <SectionWrapper>
        <div className="main-profile ">
          <div class="row">
                  <div className="col-lg-5">
                    <img src={profile_1} alt="" />
                  </div>
                  <div className="col-lg-3 align-self-center ">
                    <div className="main-info header-text">
                      <span >Offline</span>
                      <h4>Alan Smithee</h4>
                      <p>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
                      <div className="main-border-button">
                        <a href="#/">Start Live Stream</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 align-self-center">
                    <ul>
                      <li>Games Downloaded <span>3</span></li>
                      <li>Friends Online <span>16</span></li>
                      <li>Live Streams <span>None</span></li>
                      <li>Clips <span>29</span></li>
                    </ul>
                  </div>
                </div>
        </div>
      </SectionWrapper>
      <GamingLibrary />
    </>
  );
};

export default Profile;