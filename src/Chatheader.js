import { EditLocationOutlined, HelpRounded, PeopleAltOutlined, SearchRounded } from '@material-ui/icons'
import React from 'react'
import "./Chatheader.css"
import NotificationsIcon from "@material-ui/icons/Notifications"
import EditLocationOutlinedIcon from "@material-ui/icons/EditLocationOutlined"
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined"
import SearchRoundedIcon from "@material-ui/icons/SearchRounded"
import SendRoundedIcon from "@material-ui/icons/SendRounded"
import HelpRoundedIcon from "@material-ui/icons/HelpRounded"




function Chatheader() {
    return (
        <div className="chatheader">
            
            <div className="chatheader-left">
                <h3><span className="hashtag">#</span>Test channel name </h3>
            </div>

            <div className="chatheader-right">
                <NotificationsIcon />
                <EditLocationOutlinedIcon />
                <PeopleAltOutlinedIcon />

                <div className="chatheader-search">
                    <input placeholder="Search" />
                    <SearchRoundedIcon />
                </div>

                <SendRoundedIcon />
                <HelpRoundedIcon /> 
            </div>
        </div>
    )
}

export default Chatheader;
