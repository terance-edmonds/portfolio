import React, { useEffect, useState } from 'react'
import './MagnetCursor.css'
import classNames from 'classnames';

//include className="magnet_cursor-element" in the required element

const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
};

function MagnetCursor(){

    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    var grabHovered = false;
    var CurrentActiveElement;
    var CurrentActiveElementCenter = {
        x: 0,
        y: 0
    }

    useEffect(() => {
        addEventListeners();
        onhandleLinkHoverEvents();
        return () => removeEventListeners();
    }, []);

    function onhandleLinkHoverEvents() {
        document.querySelectorAll("a").forEach(el => {
            el.addEventListener("mouseover", () =>{ 
                setLinkHovered(true)
                document.getElementById('magnet-cursor').style.width = '100px'
                document.getElementById('magnet-cursor').style.height = '100px'
            });
            el.addEventListener("mouseout", () => {
                setLinkHovered(false)
                document.getElementById('magnet-cursor').style.width = '50px'
                document.getElementById('magnet-cursor').style.height = '50px'
            });
        });
        document.querySelectorAll(".magnet_cursor-element").forEach(el => {
            el.addEventListener("mouseover", () => {
                activeElement(el)
            });
        });
    };

    function activeElement(node){
        
        let {
            x: centerPointX,
            y: centerPointY,
            width,
            height
        } = node.getBoundingClientRect()

        CurrentActiveElement = node;
        grabHovered = true

        centerPointX = centerPointX + width / 2; //  center point of button on x-axis
        centerPointY = centerPointY + height / 2; //  center point of button on y-axis  
        CurrentActiveElementCenter.x = centerPointX
        CurrentActiveElementCenter.y = centerPointY
    }

    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseenter", onMouseEnter);
        document.removeEventListener("mouseleave", onMouseLeave);
        document.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseDown = () => {
        setClicked(true);
    };
 
    const onMouseUp = () => {
        setClicked(false);
    };

   const onMouseLeave = () => {
        setHidden(true);
    };
 
    const onMouseEnter = () => {
        setHidden(false);
    };

    function getTransitionEndEventName() {
        var transitions = {
            "transition"      : "transitionend",
            "OTransition"     : "oTransitionEnd",
            "MozTransition"   : "transitionend",
            "WebkitTransition": "webkitTransitionEnd"
         }
        let bodyStyle = document.getElementById('magnet-cursor').style;
        for(let transition in transitions) {
            if(bodyStyle[transition] != undefined) {
                return transitions[transition];
            } 
        }
      }

      var cursorSpot = {
          x:0,
          y:0
      }

    const onMouseMove = (e) => {

        setTimeout(() => {
            document.getElementById('magnet-cursor-spot').style.left = `${e.clientX - 5}px`
            document.getElementById('magnet-cursor-spot').style.top = `${e.clientY - 5}px`
        }, 50);
        //document.getElementById('magnet-cursor-spot').style.transform = `translate(${e.clientX - 25}px, ${e.clientY -25}px)`
/*         setTimeout(() => {
            document.getElementById('magnet-cursor').style.left = `${e.clientX - 25}px`
            document.getElementById('magnet-cursor').style.top = `${e.clientY - 25}px` 
        }, 100); */
        document.getElementById('magnet-cursor').style.transform = `translate(${e.clientX - 25 - window.innerWidth/2}px, ${e.clientY - 25 - window.innerHeight/2}px)`

        if(grabHovered){
            const x = e.clientX; // current x of cursor
            const y = e.clientY; // current y of cursor
    
            const leftBorderLine = CurrentActiveElementCenter.x - 80;
            const rightBorderLine = CurrentActiveElementCenter.x + 80;
            const topBorderLine = CurrentActiveElementCenter.y - 80;
            const bottomBorderline = CurrentActiveElementCenter.y + 80;
            const xWalk = (x - CurrentActiveElementCenter.x) / 2; // the distance to move the button when mouse moves on X axis
            const yWalk = (y - CurrentActiveElementCenter.y) / 2; // the distance to move the button when mouse moves on Y axis
    
            if(x > leftBorderLine &&
                x < rightBorderLine &&
                y > topBorderLine &&
                y < bottomBorderline
                ){
                    CurrentActiveElement.style.transform =  `translate(${xWalk}px, ${yWalk}px)`;
                }else{
                    grabHovered = false;
                    CurrentActiveElement.style.transform =  `translate(${0}px, ${0}px)`;
                }
        }
        
    };

    const cursorClasses = classNames(
        {
            'magnet-cursor--clicked': clicked,
            'magnet-cursor--hidden': hidden,
            'magnet-cursor--link-hovered': linkHovered,
            'magnet-cursor--grab-hovered': grabHovered,
        }
    ); 

    if (typeof navigator !== 'undefined' && isMobile()) return null;
    return (
            
            <div id="magnet-cursor" className={cursorClasses}>
                <div id="magnet-cursor-spot"></div>
            </div>
    )
}


export default MagnetCursor