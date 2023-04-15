import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  Box,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import shortid from 'shortid';

export interface IMenuItem {
  title: string;
  subtitle?: string;
  link?: string;
  icon?: FC;
  children?: IMenuItem[];
}

const SimpleMenu: FC<{ menu: IMenuItem }> = ({ menu }) => (
  <ListItemButton sx={{ pl: 4 }} href={menu.link ?? ''} dense>
    {menu.icon && (
      <ListItemIcon>
        <menu.icon />
      </ListItemIcon>
    )}
    <ListItemText primary={menu.title} />
  </ListItemButton>
);

const SubMenu: FC<{ menu: IMenuItem }> = ({ menu }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton onClick={() => setOpen((open) => !open)}>
            <ArrowDownIcon
              sx={{
                transition: 'transform 300ms ease-in-out',
                transform: open ? 'rotate(-90deg);' : 'none'
              }}
            />
          </IconButton>
        }
        onClick={() => (menu.link ? navigate(menu.link) : null)}>
        {menu.icon && (
          <ListItemIcon sx={{ minWidth: 35 }}>
            <menu.icon />
          </ListItemIcon>
        )}
        <ListItemText primary={menu.title} secondary={menu.subtitle} />
      </ListItem>
      <Box
        style={{ transition: 'max-height 300ms ease-out' }}
        maxHeight={open ? 0 : '100%'}
        overflow="hidden">
        {menu.children?.map((m) => (
          <ListItemButton key={shortid()} sx={{ pl: 4 }} href={m.link!} dense>
            <ListItemText primary={m.title} secondary={m.subtitle} />
          </ListItemButton>
        ))}
      </Box>
    </>
  );
};

export const Menu: FC<{ menu: IMenuItem[] }> = ({ menu }) => (
  <>
    {menu.map((menuItem) =>
      menuItem.children ? (
        <SubMenu key={shortid()} menu={menuItem} />
      ) : (
        <SimpleMenu key={shortid()} menu={menuItem} />
      )
    )}
  </>
);

export default Menu;
