import React from 'react'
import "./Sidebar.css"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { AddIcCallOutlined } from '@material-ui/icons'
import AddIcon from "@material-ui/icons/Add";
import Sidebarchannel from "./Sidebarchannel"
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import CallIcon from "@material-ui/icons/Call"
import { Avatar } from "@material-ui/core"
import MicIcon from "@material-ui/icons/Mic"
import HeadsetIcon from "@material-ui/icons/Headset"
import SettingsIcon from "@material-ui/icons/Settings"
import { selectUser } from './features/userSlice';
import { useSelector } from "react-redux";
import { auth } from "./firebase"



function Sidebar() {
    const user = useSelector(selectUser)

    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <h3>Clever Programmer</h3>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar-channels">
                <div className="sidebar-channels-header">
                    <div className="sidebar-header">
                    <ExpandMoreIcon />
                    <h4>Text Channels</h4>
                    </div>
                    <AddIcon className="sidebar-add-channel" />
                </div>
                <div className="sidebar-channels-list">
                <Sidebarchannel />
                <Sidebarchannel />
                <Sidebarchannel />
            </div>
            </div>
            
           <div className="sidebar-voice">
               <SignalCellularAltIcon className="sidebar-voiceicon"
               fontSize="large"/>
                <div className="voiceinfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className="sidebar-voice-icons">
                    <InfoOutlinedIcon />
                    <CallIcon/>
                </div>
           </div>
           <div className="sidebar-profile">
                <Avatar onClick={() => auth.signOut()}  src={user.photo}/>
                <div className="sidebar-profileinfo">
                    <h3>{user.displayName}</h3>
                      <p>#{user.uid.substring(0,5)}</p>
                </div>
                <div className="sidebar-profileicons">
                    <MicIcon />
                    <HeadsetIcon/>
                    <SettingsIcon/>
                </div>
           </div>
        </div>
    )
}

export default Sidebar
 