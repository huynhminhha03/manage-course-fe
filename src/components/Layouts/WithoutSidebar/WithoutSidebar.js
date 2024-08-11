import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';

import styles from './WithoutSidebar.module.scss';

import Header from '~/components/Layouts/components/Header';
import Footer from '~/components/Layouts/components/Footer';
import config from '~/config';

const cx = classNames.bind(styles);

function WithoutSidebar({ children }) {
    const location = useLocation();

    return (
        <div className={cx('wrapper')}>
            <Header transparent={config.routes.blogDetails !== location.pathname } hasBackBtn />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default WithoutSidebar;
