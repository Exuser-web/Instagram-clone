import './left.css';
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import MusicVideoRoundedIcon from '@mui/icons-material/MusicVideoRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
// import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import profile from'../assets/pallavi.jpeg';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import instlogo from '../assets/instlogo.png';

const Left = () => {
  return (
    
    <div className="leftpart">
        <div className="logo">
            <img className='logoimg' src={instlogo} alt='instgram' />
        </div>
        <div className="navlinkpart">
            <div className="navlink">
                <HomeIcon sx={{fontSize:"30px", margin:"0 20px 0 0 "}}/>
                <div className="navname">Home</div>
            </div>
            <div className="navlink">
                <SearchIcon sx={{fontSize:"30px", margin:"0 20px 0 0 "}}/>
                <div className="navname">Search</div>
            </div>
            <div className="navlink">
                <ExploreIcon sx={{fontSize:"30px", margin:"0 20px 0 0 "}}/>
                <div className="navname">Explore</div>
            </div>
            <div className="navlink">
                <MusicVideoRoundedIcon sx={{fontSize:"30px", margin:"0 20px 0 0 "}}/>
                <div className="navname">Reels</div>
            </div>
            <div className="navlink">
                <MailOutlineRoundedIcon sx={{fontSize:"30px", margin:"0 20px 0 0 "}}/>
                <div className="navname">Messages</div>
            </div>
            <div className="navlink">
                <FavoriteBorderRoundedIcon sx={{fontSize:"30px", margin:"0 20px 0 0 "}}/>
                <div className="navname">Notifications</div>
            </div>
            <div className="navlink">
                <AddCircleOutlineRoundedIcon sx={{fontSize:"30px", margin:"0 20px 0 0 "}}/>
                <div className="navname">Create</div>
            </div>
            <div className="navlink">
                {/* <AccountCircleRoundedIcon sx={{fontSize:"30px", margin:"0 20px 0 0 "}}/> */}
                <img className='profile' src={profile} alt="profile img" />
                <div className="navname">Profile</div>
            </div>
            <div className="lastpart">
            <div className="navlink">
                <AlternateEmailRoundedIcon sx={{fontSize:"30px", margin:"0 20px 0 0 "}}/>
                <div className="navname">Thread</div>
            </div>
            <div className="navlink">
                <MenuRoundedIcon sx={{fontSize:"30px", margin:"0 20px 0 0 "}}/>
                <div className="navname">More</div>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Left