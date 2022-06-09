import Link from '@mui/material/Link';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box, Button, ListItem } from '@mui/material';

export const NavItem = (props) => {
  const { href, icon, title, ...others } = props;
  const location = useLocation();
  const active = href ? (location.pathname === href) : false;

  return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        mb: 1,
        py: 1,
        px: 2,
        backgroundColor: active && 'rgba(255,255,255, 0.08)',
        '&:hover': {
          backgroundColor: 'rgba(255,255,255, 0.08)'
        },
        borderRadius: 1,
      }}
      {...others}
    >
      <Link
        href={href}
        sx={{textDecoration: 'none',width: '100%'}}
      >
        <Button
          startIcon={icon}
          disableRipple
          sx={{
            // backgroundColor: active && 'rgba(255,255,255, 0.08)',
            color: active ? 'secondary.main' : 'neutral.300',
            fontWeight: active && 'fontWeightBold',
            justifyContent: 'flex-start',
            px: 2,
            textAlign: 'left',
            textTransform: 'none',
            width: '100%',
            '& .MuiButton-startIcon': {
              color: active ? 'secondary.main' : 'neutral.400'
            },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            {title}
          </Box>
        </Button>
      </Link>
    </ListItem>
  );
};

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string
};
