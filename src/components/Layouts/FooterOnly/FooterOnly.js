import classNames from 'classnames/bind';
import styles from './FooterOnly.module.scss';

import Footer from '~/components/Layouts/components/Footer';

const cx = classNames.bind(styles);

function FooterOnly({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx("container")}>
                <div className={cx("content")}>{children}</div>
            </div>
            <Footer/>
        </div>
    );
}

export default FooterOnly;
