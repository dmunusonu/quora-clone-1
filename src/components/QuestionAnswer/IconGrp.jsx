import styled from "styled-components"
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { HiOutlineRefresh } from "react-icons/hi";
import { BiDotsHorizontalRounded, BiMessageRounded } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { MyComment } from "./MyComment";
import { GoArrowDown} from "react-icons/go";
export const IconGrp = () => {
    return (
        <>
            
        <Icongroup>
                <div className="leftIcons">
                    <div>
                        <Button className="leftbtn"><Upvote /> <label>12</label></Button>
                        <div className="hide">Upvote</div>
                        
                    </div>
                    <div>
                        <Button className="rightbtn"><DownVote /></Button>
                        <div className="hide">Downvote</div>
                    </div>
                    <div>
                        <RoundBtn><Refresh /><label htmlFor="">1</label></RoundBtn>
                        <div className="hide">Share</div>
                    </div>
                    <div>
                        <RoundBtn><Comment/><label htmlFor="">2</label></RoundBtn> 
                        <div className="hide">Comment</div>
                        
                    </div>
            </div>
                <div className="rightIcons">
                    <div>
                        <RoundedRightBtns><RightShare/></RoundedRightBtns>
                        <div className="hide">More sharing options</div>

                    </div>
                    <div>
                        <RoundedRightBtns><RightDots/></RoundedRightBtns>
                        <div className="hide">More</div>

                    </div>

            </div>
            </Icongroup>
            <MyComment />
            
            </>
    )
}

const Icongroup = styled.div`
height: 30px;
margin-bottom:.2rem;
display: flex;

    .leftIcons {
        padding-left: 1rem;
        margin-bottom: .5rem;
        display: flex;
        .hide {
            display: none;
            position:absolute;
            z-index: 1;
            border-radius: 5px;
            height:2rem;
            margin-left:11px;
            margin-top: -70px;
            color:white;
            padding-top: 5px;
            font-size: .9rem;
        }
        .leftbtn {
            border-bottom-left-radius: 15px;
            border-top-left-radius: 15px;
            width:3.9rem;
            color: #636466;
            cursor: pointer;
            border:1px solid #d8d7d7;
            height: 30px;
            background: rgb(247,247,247);
            &:hover {
                background: #eeeded;
            }
            &:hover+.hide {
                display: block;
                background:  #464444;
            }
            label {
                position: relative;
                padding-top:0px;
                align-items: center;
                font-size: .85rem;
                top: -6px;
                margin-bottom: 2px;
            }
        }
        .rightbtn {
            padding: 5px;
            border-bottom-right-radius: 15px;
            border-top-right-radius: 15px;
            width: 2rem;
            color: #636466;
            &:hover {
                background: #eeeded;
            }
            &:hover+.hide {
                display: block;
                background: #464444;
            }  
        }
        label {
            position: relative;
            padding-top:0px;
            align-items: center;
            font-size: .85rem;
            top: 3px;
            margin-left: 3px;
            margin-bottom: 2px;
        }
    }
    .rightIcons {
        display: flex;
        margin-left: 200px;

        .hide {
            display: none;
            position:absolute;
            z-index: 1;
            height:2rem;
            margin-left: 1rem;
            margin-top: -70px;
            color:white;
            padding-top: 5px;
            font-size: .9rem;
            border-radius: 5px;
        }
    }
`;


const Button = styled.div`
cursor: pointer;
border:1px solid #d8d7d7;;
height: 30px;
background: rgb(247,247,247);
&:hover+{
    background: #eeeded;
    
}

/* border: inherit; */
`;

const Upvote = styled(BiUpvote)`
padding-left:5px;
padding-top: 5px;
font-size: 1.55rem;
width: 2rem;
color:#2e69ff;
`;

const UpvoteFilled = styled(GoArrowDown)`
padding-left:5px;
padding-top: 5px;
font-size: 1.55rem;
width: 2rem;
color:#2e69ff;
`;

const DownVote = styled(BiDownvote)`
font-size: 1.13rem;
`;
const Refresh = styled(HiOutlineRefresh)`
font-size: 1.2rem;
`;
const Comment = styled(BiMessageRounded)`
font-size: 1.2rem;

`;


const RightShare = styled(RiShareForwardLine)`
font-size: 1.3rem;
 color: #636466;
`;

const RightDots = styled(BiDotsHorizontalRounded)`
font-size: 1.3rem;
 color: #636466;
`;


const RoundBtn = styled.div`
display: flex;
cursor: pointer;
padding-top: 5px;
margin-left: 15px;
width: 50px;
padding-left: 7px;
border-radius: 20px;
color: #636466;
height: 30px;
   label{
            margin-left: 10px;
            font-size: .85rem;
            margin-top: -5px;
            top: -30px;
          
        }

   &:hover{
             background: #eeeded;
        }
       &:hover+.hide{
           display: block;
           background: #464444;;
       }
`;

const RoundedRightBtns = styled(RoundBtn)`
  width: 30px;
  
   &:hover{
            background: #eeeded;
        }
       &:hover+.hide{
           display: block;
           background: #464444;;
       }
`;