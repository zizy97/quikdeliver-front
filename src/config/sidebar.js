import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SettingsIcon from '@mui/icons-material/Settings';

//this is the sidebar for admin
export const adminItems = [
    {
      href: '/admin',
      icon: (<DashboardIcon/>),
      title: 'Dashboard'
    },
    {
      href: '/admin/drivers',
      icon: (<PersonIcon/>),
      title: 'Drivers'
    },
    {
      href: '/admin/vehicles',
      icon: (<LocalShippingIcon/>),
      title: 'Vehicles'
    },
    {
      href: '/admin/account',
      icon: (<ManageAccountsIcon/>),
      title: 'Account'
    },
    {
      href: '/admin/settings',
      icon: (<SettingsIcon/>),
      title: 'Settings'
    },
    {
      href: '/',
      icon: (<ExitToAppIcon/>),
      title: 'Logout'
    },
  ];
  
  //this is sidebar for customer
  export const customerItems = [
    {
      href: '/customer',
      icon: (<DashboardIcon/>),
      title: 'Dashboard'
    },
    {
      href: '/customer/account',
      icon: (<ManageAccountsIcon/>),
      title: 'Account'
    },
    {
      href: '/customer/settings',
      icon: (<SettingsIcon/>),
      title: 'Settings'
    },
    {
      href: '/',
      icon: (<ExitToAppIcon/>),
      title: 'Logout'
    },
  ];

  //this is side bar for vo
  export const voItems = [
    {
      href: '/vo',
      icon: (<DashboardIcon/>),
      title: 'Dashboard'
    },
    {
        href: '/vo/requests',
        icon: (<AssignmentTurnedInIcon />),
        title: 'Requests'
      },
    {
      href: '/vo/drivers',
      icon: (<PersonIcon />),
      title: 'Drivers'
    },
    {
      href: '/vo/vehicles',
      icon: (<LocalShippingIcon/>),
      title: 'Vehicles'
    },
    {
      href: '/vo/account',
      icon: (<ManageAccountsIcon />),
      title: 'Account'
    },
    {
      href: '/vo/settings',
      icon: (<SettingsIcon/>),
      title: 'Settings'
    },
    {
      href: '/',
      icon: (<ExitToAppIcon/>),
      title: 'Logout'
    },
  ];

  //this is sidebar for driver
  export const driverItems = [
    {
      href: '/driver',
      icon: (<DashboardIcon/>),
      title: 'Dashboard'
    },
    {
      href: '/driver/requests',
      icon: (<PersonIcon/>),
      title: 'Drivers'
    },
    {
      href: '/driver/account',
      icon: (<ManageAccountsIcon/>),
      title: 'Account'
    },
    {
      href: '/driver/settings',
      icon: (<SettingsIcon/>),
      title: 'Settings'
    },
    {
      href: '/',
      icon: (<ExitToAppIcon />),
      title: 'Logout'
    },
  ];