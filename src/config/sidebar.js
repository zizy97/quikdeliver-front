import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SettingsIcon from '@mui/icons-material/Settings';
import AddTaskIcon from '@mui/icons-material/AddTask';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import HistoryIcon from '@mui/icons-material/History';
import AddCardIcon from '@mui/icons-material/AddCard';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AssessmentIcon from '@mui/icons-material/Assessment';

//this is the sidebar for admin
export const adminItems = [
  {
    href: '/admin/dashboard',
    icon: (<DashboardIcon/>),
    title: 'Dashboard'
  },
  {
    href: '/admin/delivery/requests',
    icon: <AssignmentReturnedIcon/>,
    title: 'Delivery Requests'
  },
  {
    href: '/admin/allocations',
    icon: <AssignmentIcon/>,
    title: 'Allocation'
  },
  {
    href: '/admin/deliveries/ongoing',
    icon: <ContentPasteGoIcon/>,
    title: 'Ongoing Deliveries'
  },
  {
    href: '/admin/deliveries/upcoming',
    icon: <DriveFolderUploadIcon/>,
    title: 'Upcoming Deliveries'
  },
  {
    href: '/admin/deliveries/completed',
    icon: <AssignmentTurnedInIcon/>,
    title: 'Completed Deliveries'
  },
  {
    href: '/admin/deliveries/expired',
    icon: <PlaylistRemoveIcon/>,
    title: 'Expired Deliveries'
  },
  {
    href: '/admin/deliveries/rejected',
    icon: <AssignmentLateIcon/>,
    title: 'Rejected Deliveries'
  },
  {
    href: '/admin/drivers',
    icon: <AccountBoxIcon/>,
    title: 'Drivers'
  },
  {
    href: '/admin/vehicles',
    icon: <LocalShippingIcon/>,
    title: 'Vehicles'
  },
  {
    href: '/admin/reports',
    icon: <AssessmentIcon/>,
    title: 'Reports'
  }
];
  
  //this is sidebar for customer
  export const customerItems = [
    {
      href: '/customer',
      icon: (<DashboardIcon/>),
      title: 'Dashboard'
    },
    {
      href: '/customer/new-booking',
      icon: (<AddCardIcon/>),
      title: 'New Booking'
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
      href: '/customer/history',
      icon: (<HistoryIcon/>),
      title: 'History'
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
      href: '/driver/newrequests',
      icon: (<AddTaskIcon/>),
      title: 'New Requests'
    },
    {
      href: '/driver/inprocess',
      icon: (<HourglassTopIcon/>),
      title: 'In Process'
    },
    {
      href: '/driver/joboffers',
      icon: (<WorkOutlineIcon/>),
      title: 'Job Offer'
    },
    {
      href: '/driver/history',
      icon: (<HistoryIcon/>),
      title: 'History'
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