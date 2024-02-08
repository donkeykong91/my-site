import {
  AppBar,
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { LANDING, PAGES } from '../../globals/constants.ts';
import React, { useState } from 'react';
import {
  handleCloseNavMenu,
  handleOpenNavMenu,
  handleButtonClick,
} from './helpers/navbarLayoutHelpers.ts';
import { useNavigate } from 'react-router-dom';

/**
 * A layout that always shows throughout the entire app for navigation purposes. <br>
 * @constructor
 */
const NavbarLayout: React.FC = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);

  return (
    <AppBar sx={{ backgroundColor: '#e7f1ff' }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                handleOpenNavMenu({ event, setAnchorElNav });
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              open={!!anchorElNav}
              onClose={() => {
                handleCloseNavMenu({ setAnchorElNav });
              }}
              keepMounted
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {PAGES.map((page, index) => (
                <MenuItem key={`page-${index}`}>{page}</MenuItem>
              ))}
            </Menu>
          </Box>
          <Box>
            <Button
              sx={{ my: 2, display: 'block' }}
              onClick={() => {
                handleButtonClick({ page: LANDING, navigate });
              }}
            >
              {LANDING}
            </Button>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
            }}
          >
            {PAGES.map((page, index) => (
              <Button
                key={`button-page-${index}`}
                sx={{ my: 2, display: 'block' }}
                onClick={() => {
                  handleButtonClick({ page, navigate });
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavbarLayout;
