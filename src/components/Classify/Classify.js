import classNames from 'classnames/bind';

import styles from './Classify.module.scss';
import { NextArrowIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Classify({ children, title, label, viewMore }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading-wrap')}>
                <h2 className={cx('heading')}>
                    <span>
                        {title}
                        {label ? <span className={cx('label')}>{label}</span> : <></>}
                    </span>
                </h2>
                {viewMore ? (
                    <a className={cx('view-all')} href="/learning-paths">
                        {viewMore}
                        <NextArrowIcon />
                    </a>
                ) : (
                    <></>
                )}
            </div>
            <div className={cx('content')}>{children}</div>
        </div>
    );
}

export default Classify;
