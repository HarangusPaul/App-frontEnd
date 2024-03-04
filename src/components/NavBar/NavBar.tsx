import {Icon, Menu, MenuItem} from "semantic-ui-react";
import {useNavigate} from "react-router-dom";
import './NavBar.css'

export const NavBar = () =>{
    const navigate = useNavigate();
    const navigateTo = (navDest:string) => {
        navigate(navDest);
    }

    return (
        <Menu icon='labeled' inverted vertical className={"navbar"}>

            <MenuItem
                name='Home Page'
                active={false}
                onClick={() => { navigateTo("/") }}
            >
                <Icon name='home' />
                Home Page
            </MenuItem>

            <MenuItem
                name='Page 2'
                active={false}
                onClick={() => { navigateTo("/TablePage") }}
            >
                <Icon name='file archive outline' />
                Page 2
            </MenuItem>

            <MenuItem
                name='Page 3'
                active={false}
                onClick={() => { navigateTo("/HomePage") }}
            >
                <Icon name='file archive outline' />
                Page 3
            </MenuItem>


            <MenuItem className={"signOut"}
                name='Sign out'
                active={false}
                onClick={() => { localStorage.removeItem("token");window.location.reload(); }}
            >
                <Icon name='power off' />
                Sign out
            </MenuItem>
        </Menu>
    )
}