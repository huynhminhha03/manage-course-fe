import classNames from 'classnames/bind';

import styles from './ProgressBar.module.scss';

const cx = classNames.bind(styles);

function ProgressBar() {
    const progress = 80;

    return <div className={cx('wrapper')} style={{ '--progress': `${progress}%` }}></div>;
}

export default ProgressBar;
