import SchoolIcon from '@mui/icons-material/School';
import { Menu as SideMenu, IMenuItem } from '../../components/menu/Menu';

const Menu = () => {
  const menu: IMenuItem[] = [
    {
      title: 'Curriculum Vitae',
      subtitle: 'CV data admin',
      icon: SchoolIcon,
      children: [
        {
          title: 'Experiences',
          link: '/cv/experiences'
        },
        {
          title: 'Skills',
          link: '/cv/skills'
        },
        {
          title: 'Projects',
          link: '/cv/projects'
        }
      ]
    }
  ];

  return <SideMenu menu={menu} />;
};

export default Menu;
