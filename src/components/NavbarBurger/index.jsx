import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FaBars, FaHome } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { BsFillMotherboardFill } from "react-icons/bs";
import { MdContactSupport, MdOutlineSell } from "react-icons/md";
import { Link } from "react-router-dom";
import i18n from "i18next";

export default function NavbarBurger() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Ana Səhifə', 'Kombi Ustası', 'Kombi plataları', 'Ehtiyat hissələrinin satışı', 'Bizimlə əlaqə'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index === 0 ? <FaHome /> :
                                    index === 1 ? <GrUserWorker /> :
                                        index === 2 ? <BsFillMotherboardFill /> :
                                            index === 3 ? <MdOutlineSell /> :
                                                <MdContactSupport />}
                            </ListItemIcon>
                            <Link to={
                                index === 0 ? '/' :
                                    index === 1 ? '/combimaster' :
                                        index === 2 ? '/combibrains' :
                                            index === 3 ? '/salesofparts' :
                                                '/contactus'} style={{ textDecoration: 'none' }}>
                                <ListItemText primary={text} style={{ color: "black" }} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <select
                    style={{
                        margin: '10px 0 0 20px',
                        padding: '5px 10px',
                        fontSize: '18px'
                    }}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => {
                        i18n.changeLanguage(e.target.value);
                    }}
                >
                    <option value="az">AZ</option>
                    <option value="tr">TUR</option>
                    <option value="ru">RU</option>
                    <option value="en">ENG</option>
                </select>
            </List>
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <button style={{background: 'transparent', outline: 'none', border: 'none'}}
                            onClick={toggleDrawer(anchor, true)}>
                        <FaBars className="icon"/>
                    </button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
