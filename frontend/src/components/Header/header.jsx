import React,{useState,useEffect} from 'react'
import './header.css'
 import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {

   const [eventpopup, setEventpopup] = useState(false);
    const [helpline, setHelpline] = useState(false);

    const handleOpenPopup = (popup) => {
        if (popup === "event") {
            setEventpopup(true);
        } else {
            setHelpline(true)
        }
    }

     const handleClosePopup = (popup) => {
        if (popup === "event") {
            setEventpopup(false);
        } else {
            setHelpline(false)
        }
    }
  return (
    <div className='header'>
        <div className='header-college-details'>
            <div className='header-college-details-left'>
             <img className='header-college-details-left-logo' src='https://www.pngitem.com/pimgs/m/218-2184384_mnnit-allahabad-logo-hd-png-download.png' alt=''/>
             <div>
                <div className='header-college-details-name'>MotiLal Nehru </div>
                <div className='header-college-details-name'>National Institute of Technology</div>
                <div className='header-college-details-place'>Allahabad,</div>
                <div className='header-college-details-place'>Prayagraj</div>
             </div>
            </div>
        <div className='header-college-details-right'>
          <div className='header-college-social-media'>
                        <a target='_blank' href='https://www.youtube.com/@nationalinstituteoftechnol7593'><img src='https://cdn-icons-png.flaticon.com/128/3670/3670147.png' className='header-social-media-image' /></a>
                        <a target='_blank' href='https://www.facebook.com/nitukofficial/'><img src='https://cdn-icons-png.flaticon.com/128/733/733547.png' className='header-social-media-image' /></a>
                        <a target='_blank' href='https://x.com/NIT_Uttarakhand'><img src='https://cdn-icons-png.flaticon.com/128/5968/5968830.png' className='header-social-media-image' /></a>
                        <a target='_blank' href='https://www.instagram.com/nitukofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='><img src='https://th.bing.com/th/id/OIP.0wjhvLpjGf_-r-1lqG3QAQHaHw?rs=1&pid=ImgDetMain' className='header-social-media-image' /></a>
                    </div>
        <input type='text' className='header-input-tags' />
        </div>
        </div>
        <div className='navbar'>
          <div className='navbar-links'>
            Home
          </div>
          <div className='navbar-links'>
            Login
          </div>
          <div className='navbar-links'>
            Stock View
          </div>
           <div className='navbar-links event-link' onMouseEnter={() =>{handleOpenPopup("event")}} onMouseLeave={()=>{handleClosePopup("event")}}>
            <div className='navbar-link-opt'>   New Events <ArrowDropDownIcon/></div>
            {
           eventpopup &&  <div className='navbar-dropdown-popup event-pop'>
               <div className='popup notification'>. Christmas Celebration</div>
            </div>
               }
          </div>
           <div className='navbar-links event-link' onMouseEnter={() =>{handleOpenPopup("helpline")}} onMouseLeave={()=>{handleClosePopup("helpline")}}>
            <div className='navbar-link-opt'>  Helpline <ArrowDropDownIcon/></div>
              {
           helpline &&  <div className='navbar-dropdown-popup helpline-pop'>
               <div className='popup notification'>. Disaster management: 1007</div>
            </div>
               }
          </div>
        </div>
        <div className='header-banner'>
          <img className='header-banner-image' src={"https://sunrisemcemotihari.rf.gd/main-building.jpg"} alt=""/>
        </div>
    </div>
  )
}

export default Header