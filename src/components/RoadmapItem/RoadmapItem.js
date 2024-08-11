import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './RoadmapItem.module.scss';

const cx = classNames.bind(styles);

function RoadmapItem ({ title, desc, imgSrc, imgAlt, link }) {
    return (
<div className={cx('container-body')}>
        <div className={cx('content')}>
            <div className={cx('wrapper')}>
                <div className={cx('container-body')}>
                    <div className={cx('info')}>
                        <h2 className={cx('title')}>{title}</h2>
                        <p className={cx('desc')}>{desc}</p>
                    </div>
                    <div className={cx('thumb-wrap')}>
                        <Link to={link} className={cx('thumb-round')}>
                            <img className={cx('thumb-img')} src={imgSrc} alt={imgAlt} />
                        </Link>
                    </div>
                </div>
                <button className={cx('button')}>Xem chi tiết</button>
            </div>
        </div>
    </div>
    )
} 

export default RoadmapItem;
    
