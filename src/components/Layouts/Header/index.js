import * as React from 'react' ;

import LogoImage from '../../../assets/Landing/logo.jpg' ;

import MenuIcon from '@mui/icons-material/Menu';

import MobileNavbar from './MobileNavbar';

import {
    useMediaQuery,
    IconButton
} from '@mui/material';

import {
    GradientDiv,
    HeaderDiv,
    LogoImg,
    MenuList,
    HeaderList,
    // MenuItem,
    BuildingButton
} from '../Styles/Header.styles' ;

import 
    MenuItem
 from '../../../shared/ui/MenuItem' ;

import AboutMenu from './PopOvers/AboutMenu';

const Header = () => {
    const match1190 = useMediaQuery('(min-width : 1190px)') ;
    const match1030 = useMediaQuery('(min-width : 1030px)') ;
    const match860 = useMediaQuery('(min-width : 860px)') ;

    const menuList = [
        {
            label : "About",
            link : '/#'
        },
        {
            label : 'Products',
            link : '/#'
        },
        {
            label : "Infrastructure",
            link : '/#'
        },
        {
            label : "Transparency & Governance",
            link : '/#'
        },
        {
            label : "Community",
            link : '/#'
        }
    ];

    const [ isDrawMobileNavbar, setIsDrawMobileNavbar ] = React.useState(false) ;

    const aboutRef = React.useRef(null) ;

    const [isOpenAboutMenu, setIsOpenAboutMenu] = React.useState(false);

    const handleOpenAboutMenu = () => {
        setIsOpenAboutMenu(!isOpenAboutMenu)
    }

    const handleDrawMobileNavbar = () => {
        setIsDrawMobileNavbar(!isDrawMobileNavbar) ;
    }

    return (
        <HeaderDiv>
            <GradientDiv>
                Query engine is live! Apply for beta testing here
            </GradientDiv>

            <HeaderList>
                { match1030 && <LogoImg src={LogoImage} /> }
                { match860 && <MenuList>
                    {/* <MenuItem onClick={(e) => handleOpenAboutMenu(e)} ref={aboutRef}>
                        {"About"}
                    </MenuItem> */}
                    {
                        menuList.map((item, index) => (
                            <MenuItem key={index} label={item.label}>
                                {/* {item.label} */}
                            </MenuItem>
                        ))
                    }

                    
                </MenuList> }

                { match1190 && <BuildingButton >Start Building</BuildingButton> }
                { !match1190 && <IconButton onClick={() => handleDrawMobileNavbar()}>
                    <MenuIcon />
                </IconButton> }
            </HeaderList>
{/* 
            <AboutMenu
                open={isOpenAboutMenu}
                handlePopOver={handleOpenAboutMenu}
                anchorEl={aboutRef ? aboutRef.current : null}
            /> */}

            <MobileNavbar 
                isDrawMobileNavbar={isDrawMobileNavbar}
                handleDrawMobileNavbar={handleDrawMobileNavbar}
                menuList={menuList}
            />
        </HeaderDiv>
    )
}

export default Header ;