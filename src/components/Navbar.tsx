import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TelegramIcon from '@mui/icons-material/Telegram';
import { motion } from 'framer-motion';

const navItems = ['About', 'Experience', 'Projects', 'Skills'];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleTelegramConnect = () => {
    // Falls back to web t.me link which prompts native app if installed
    window.open('https://t.me/omdoke?text=hi%20om', '_blank');
  };

  const handleScroll = (item: string) => {
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleDrawerItemClick = (item: string) => {
    handleScroll(item);
    setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold', color: 'primary.main' }}>
        OD.
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleDrawerItemClick(item)}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} onClick={handleTelegramConnect}>
            <ListItemText primary="Telegram" sx={{ color: 'primary.main' }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar 
        component={motion.div} 
        initial={{ y: -100 }} 
        animate={{ y: 0 }} 
        transition={{ duration: 0.5 }}
        sx={{ 
          bgcolor: 'rgba(255, 255, 255, 0.85)', 
          backdropFilter: 'blur(10px)', 
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          borderBottom: '1px solid rgba(15, 23, 42, 0.08)'
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 'bold', fontFamily: '"Caveat", cursive', fontSize: '2.5rem', color: 'primary.main', letterSpacing: 1 }}
          >
            Onkar Doke
          </Typography>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button 
                key={item} 
                onClick={() => handleScroll(item)}
                sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}
              >
                {item}
              </Button>
            ))}
            <Button 
              variant="outlined" 
              color="primary" 
              startIcon={<TelegramIcon />}
              onClick={handleTelegramConnect}
              sx={{ 
                ml: 2, 
                borderWidth: 2, 
                '&:hover': { borderWidth: 2, backgroundColor: 'rgba(37, 99, 235, 0.05)' } 
              }}
            >
              Connect
            </Button>
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon sx={{ color: 'primary.main' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, bgcolor: 'background.paper' },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {/* Spacer so content doesn't go under appbar */}
      <Toolbar /> 
    </Box>
  );
};

export default Navbar;
