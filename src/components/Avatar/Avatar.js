import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Avatar.module.scss';

const cx = classNames.bind(styles);

function Avatar({ src, alt, fontsize, to }) {
    return (
        <Link to={to}>
            <div className={cx('wrapper')} style={{ '--font-size': fontsize }}>
                <img className={cx('img')} src={src} alt={alt} />
            </div>
        </Link>
    );
}

export default Avatar;
