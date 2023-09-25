import { Link } from 'react-router-dom';
import cn from 'classnames';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import './Navigation.scss';

import { NavigationLinkItemProps } from './Navigation.type';
import Icon from '../Icon/Icon';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

export default function NavigationMenuItem({
  name,
  icon,
  path,
  children,
}: NavigationLinkItemProps) {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ListItem
      disablePadding
      className={cn('navigation__item', {
        'navigation__item--has-children': children,
      })}
      style={{ marginBottom: 0 }}
    >
      <ListItemButton
        className={cn('navigation__button', {
          navigation__category: !path,
          navigation__link: path,
        })}
        onClick={handleClick}
      >
        {path ? (
          <Link to={path} className="navigation__link">
            {icon ? <Icon icon={icon} width={16} height={16} /> : null}
            <ListItemText primary={name} />
          </Link>
        ) : (
          <>
            <Box className="navigation__link">
              {icon ? <Icon icon={icon} width={16} height={16} /> : null}
              <ListItemText primary={name} />
            </Box>
            {open ? <ExpandLess /> : <ExpandMore />}
          </>
        )}
      </ListItemButton>
      {children && children.length ? (
        <Collapse
          className="navigation__collapse"
          in={open}
          timeout="auto"
          unmountOnExit
        >
          <List className="navigation__list">
            {children.map((item) => {
              return <NavigationMenuItem key={item.id} {...item} />;
            })}
          </List>
        </Collapse>
      ) : null}
    </ListItem>
  );
}
