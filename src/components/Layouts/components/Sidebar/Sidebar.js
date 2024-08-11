import classNames from 'classnames/bind';
import { Outlet, Link, useLocation } from "react-router-dom";

import styles from './Sidebar.module.scss';
import { HomeIcon, PostIcon, RoadmapIcon } from '~/components/Icons';
import config from '~/config';

const cx = classNames.bind(styles);

const sidebarIcons = [
    {
        icon: <HomeIcon />,
        title: 'Trang chủ',
        to: config.routes.home,
    },
    {
        icon: <RoadmapIcon />,
        title: 'Lộ trình',
        to: config.routes.roadmap,
    },
    {
        icon: <PostIcon />,
        title: 'Bài viết',
        to: config.routes.blog,
    },
];

function Sidebar() {
    const location = useLocation();
    // console.log(location);
    return (
        <nav className={cx('wrapper')}>
            <ul className={cx('list')}>
                {sidebarIcons.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={item.to} className={cx('item-btn', 
                            {actived: item.to === location.pathname}
                            )}>
                                {item.icon}
                                <span className={cx('item-title')}>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <Outlet />
        </nav>
    );
}

export default Sidebar;
