import {
    PostAddOutlined,
    SettingsOutlined,
    
  } from '@mui/icons-material';
  import { ItemSidebar } from '../../../config/interfaces/index';
  
  export const items: ItemSidebar[] = [
    {
      href: '/hotel/management',
      icon: (active: boolean) => (<SettingsOutlined fontSize="small" sx={{ color: active ? '#FEB100' : '#fff' }} />),
      title: 'Management',
    },
    {
      href: '/hotel/booking',
      icon: (active: boolean) => (<PostAddOutlined fontSize="small" sx={{ color: active ? '#FEB100' : '#fff' }} />),
      title: 'Bookings',
    },

  ];
  
  // const itemsAdmin = (userType: string) => {
  //   if (userType === UserTypes.CREW_MEMBER) {
  //     return items.filter((item) => !excludeCrew.includes(item.href));
  //   }
  //   return items;
  // }
  
  
  // const routes = {
  //   itemsAdmin,
  // }
  
  