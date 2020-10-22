import React from 'react'
import "./Sidebar.css"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { AddIcCallOutlined } from '@material-ui/icons'
import AddIcon from "@material-ui/icons/Add";

function Sidebar() {
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
            </div>
            
        </div>
    )
}

export default Sidebar
 