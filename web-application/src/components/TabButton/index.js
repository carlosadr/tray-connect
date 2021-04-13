import React from 'react';

import './styles.css';

function TabButton({ 
    id,
    text
}) {

    function openPage( pageName, element ) {
        
        // Hide all elements with class="tabcontent" by default */
        let i, tabcontent, tablinks;

        tabcontent = document.getElementsByClassName("contant-tabs");
        for ( i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Remove the background color of all tablinks/buttons
        tablinks = document.getElementsByClassName("tab-button");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.color = "#C5C8D9"
            tablinks[i].style.borderBottom = "none";
        }

        // Show the specific tab content
        document.getElementById(pageName).style.display = "flex";

        element.style.color = "#009DF5";
        element.style.borderBottom = "solid 2px #009DF5";
    }

    return (
        <>
            <div className="container-tab-button">
                <button id={ id } className="tab-button" onClick={ e => openPage( text, e.target ) } >
                    { text }
                </button>
            </div>
        </>
    )
}

export default TabButton;