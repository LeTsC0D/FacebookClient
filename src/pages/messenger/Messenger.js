import React from 'react'
import "./messenger.css"

export default function Messenger(){
return (
<>
<div className="messenger">
    <div className="chatMenu">
        <div className="chatMenuWrapper">
            <input placeholder="search"/>
        </div>
    </div>
    <div className="chatBox">
        <div className="chatBoxWrapper">
            box
        </div>
    </div>
    <div className="chatOnline">
        <div className="chatOnlineWrapper">
            Online
        </div>
    </div>
</div>
</>
);

}