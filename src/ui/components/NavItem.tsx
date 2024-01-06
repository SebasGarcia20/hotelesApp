import {
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { ItemSidebar } from '../../config/interfaces/index';

const NavItem = (props: ItemSidebar) => {
    const {
        href,
        icon,
        title,
        active,
    } = props;
    const colorValue = active ? '#FEB100' : '#FFF';
    const navigate = useNavigate();

    return (
        <>
            <ListItemButton
                onClick={() => {
                    navigate(href);
                }}
                sx={{ color: colorValue }}
                key={title}
            >
                <ListItemIcon>
                    {icon(active)}
                </ListItemIcon>
                <ListItemText primary={title} />
            </ListItemButton>
        </>
    );
};

export default NavItem;
