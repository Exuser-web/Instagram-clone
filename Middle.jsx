import './Middle.css';
import React from 'react'
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// import SendIcon from '@mui/icons-material/Send';
// import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import story from '../story.json';
import Post from './post/post';
import insta from '../assets/instlogo.png';

const Middle = () => {
    const storys = story.story;
  return (
    <div className="middlehome">
        <div className="mobileTop">
            <div className="instLogo">
                <img className='instLogoMobile' src={insta} alt="" />
            </div>
        </div>
        <div className="story">
            {
                storys?.map((item, index) => {
                    return(
                 <div className="storypart">
                     <div className="image">
                    <img  className="img" src={item.img} alt="" />
                </div>
                <div className="profilename">{item.name}</div>
            </div>
                    );
                })
            }
      </div>
      <div className="postsection">
        <Post/>
        
        {/* ------------- 1 post ---------------------- */}
        {/* <div className="post">
            <div className="postinfo">
                <img className='postInfoImg' src="https://images.moneycontrol.com/static-mcnews/2025/11/20251116103442_Priyanka-Chopra-Varanasi-2.jpg?impolicy=website&width=770&height=431" alt="" />
                <div className="postUsername">Priyanka Chopra</div>
                <div className="timeinfo">. 36 min</div>
            </div>
            <div className="postimg">
                <img className='pImg' src="https://i.abcnewsfe.com/a/55473a57-3b30-4aed-bc54-fdd67b3ac671/Priyanka_Chopra-gty-gmh-220822_1661175885392_hpMain_1x1.jpg?w=992" alt="" />
            </div>
            <div className="iconblock">
                <div className="lefticon">
                    <FavoriteBorderIcon sx={{fontSize:"25px"}}/>
                    <ChatBubbleOutlineIcon sx={{fontSize:"25px"}}/>
                    <SendIcon sx={{fontSize:"25px"}} />
                </div> 
                <div>
                    <TurnedInNotIcon sx={{fontSize:"25px"}}/>
                </div>
            </div>
            <div className="likesection">
                <div className="images">
                    <img className='like' src="https://i.abcnewsfe.com/a/55473a57-3b30-4aed-bc54-fdd67b3ac671/Priyanka_Chopra-gty-gmh-220822_1661175885392_hpMain_1x1.jpg?w=992" alt="" />
                    <img className='like1' src="https://i.abcnewsfe.com/a/55473a57-3b30-4aed-bc54-fdd67b3ac671/Priyanka_Chopra-gty-gmh-220822_1661175885392_hpMain_1x1.jpg?w=992" alt="" />
                </div>  
                <div className="nolike">359,897 likes</div>              
            </div>
            <div className="about">
                <div className="postname">Priyank Chopra</div>
                <div className="comment">Hello...</div>
            </div>
            <div className="nocomment">View all 500 Comments</div>
            <div className="addcomment">Add a Comment....</div>
        </div> */}
{/* ------------ 2post---------------- */}

        {/* <div className="post">
            <div className="postinfo">
                <img className='postInfoImg' src="https://images.moneycontrol.com/static-mcnews/2025/11/20251116103442_Priyanka-Chopra-Varanasi-2.jpg?impolicy=website&width=770&height=431" alt="" />
                <div className="postUsername">Priyanka Chopra</div>
                <div className="timeinfo">. 36 min</div>
            </div>
            <div className="postimg">
                <img className='pImg' src="https://i.abcnewsfe.com/a/55473a57-3b30-4aed-bc54-fdd67b3ac671/Priyanka_Chopra-gty-gmh-220822_1661175885392_hpMain_1x1.jpg?w=992" alt="" />
            </div>
            <div className="iconblock">
                <div className="lefticon">
                    <FavoriteBorderIcon sx={{fontSize:"25px"}}/>
                    <ChatBubbleOutlineIcon sx={{fontSize:"25px"}}/>
                    <SendIcon sx={{fontSize:"25px"}} />
                </div> 
                <div>
                    <TurnedInNotIcon sx={{fontSize:"25px"}}/>
                </div>
            </div>
            <div className="likesection">
                <div className="images">
                    <img className='like' src="https://i.abcnewsfe.com/a/55473a57-3b30-4aed-bc54-fdd67b3ac671/Priyanka_Chopra-gty-gmh-220822_1661175885392_hpMain_1x1.jpg?w=992" alt="" />
                    <img className='like1' src="https://i.abcnewsfe.com/a/55473a57-3b30-4aed-bc54-fdd67b3ac671/Priyanka_Chopra-gty-gmh-220822_1661175885392_hpMain_1x1.jpg?w=992" alt="" />
                </div>  
                <div className="nolike">359,897 likes</div>              
            </div>
            <div className="about">
                <div className="postname">Priyank Chopra</div>
                <div className="comment">Hello...</div>
            </div>
            <div className="nocomment">View all 500 Comments</div>
            <div className="addcomment">Add a Comment....</div>
        </div> */}
{/* ---------3 post -------------------- */}
        {/* <div className="post">
            <div className="postinfo">
                <img className='postInfoImg' src="https://images.moneycontrol.com/static-mcnews/2025/11/20251116103442_Priyanka-Chopra-Varanasi-2.jpg?impolicy=website&width=770&height=431" alt="" />
                <div className="postUsername">Priyanka Chopra</div>
                <div className="timeinfo">. 36 min</div>
            </div>
            <div className="postimg">
                <img className='pImg' src="https://i.abcnewsfe.com/a/55473a57-3b30-4aed-bc54-fdd67b3ac671/Priyanka_Chopra-gty-gmh-220822_1661175885392_hpMain_1x1.jpg?w=992" alt="" />
            </div>
            <div className="iconblock">
                <div className="lefticon">
                    <FavoriteBorderIcon sx={{fontSize:"25px"}}/>
                    <ChatBubbleOutlineIcon sx={{fontSize:"25px"}}/>
                    <SendIcon sx={{fontSize:"25px"}} />
                </div> 
                <div>
                    <TurnedInNotIcon sx={{fontSize:"25px"}}/>
                </div>
            </div>
            <div className="likesection">
                <div className="images">
                    <img className='like' src="https://i.abcnewsfe.com/a/55473a57-3b30-4aed-bc54-fdd67b3ac671/Priyanka_Chopra-gty-gmh-220822_1661175885392_hpMain_1x1.jpg?w=992" alt="" />
                    <img className='like1' src="https://i.abcnewsfe.com/a/55473a57-3b30-4aed-bc54-fdd67b3ac671/Priyanka_Chopra-gty-gmh-220822_1661175885392_hpMain_1x1.jpg?w=992" alt="" />
                </div>  
                <div className="nolike">359,897 likes</div>              
            </div>
            <div className="about">
                <div className="postname">Priyank Chopra</div>
                <div className="comment">Hello...</div>
            </div>
            <div className="nocomment">View all 500 Comments</div>
            <div className="addcomment">Add a Comment....</div>
        </div> */}

      </div>
    </div>
  )
}

export default Middle