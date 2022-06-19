import Link from '@mui/material/Link';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box, Button, ListItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const NavItem = (props) => {
  const { href, icon, title, ...others } = props;
  const location = useLocation();
  const active = href ? (location.pathname === href) : false;

  const navigate = useNavigate();

  return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        mb: 0.5,
        py: 0.5,
        px: 2,
        backgroundColor: active && 'rgba(255,255,255, 0.08)',
        '&:hover': {
          backgroundColor: 'rgba(255,255,255, 0.08)'
        },
        borderRadius: 1,
      }}
      onClick={() => navigate(href)}
      {...others}
    >
      <Link
        sx={{width: '100%'}}
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
