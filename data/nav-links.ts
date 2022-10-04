import { NavLink } from '@/types/NavLink';
import { BsFillCalendarWeekFill } from 'react-icons/bs';
import { FaGlobe, FaHashtag, FaHome, FaUsers } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';
import { IoIosImages, IoIosPricetags } from 'react-icons/io';
import { RiTeamFill } from 'react-icons/ri';

export const NAV_LINKS: NavLink[] = [
  {
    label: 'Discover',
    href: '/',
    icon: FaHome,
  },
  {
    label: 'Around You',
    href: '/around-you',
    icon: FaGlobe,
  },
  {
    label: 'Top Artists',
    href: '/top-artists',
    icon: FaUsers,
  },
  {
    label: "Top Charts",
    href: '/top-charts',
    icon: FaHashtag,
  },
];