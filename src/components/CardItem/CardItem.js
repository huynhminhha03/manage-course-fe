import classNames from 'classnames/bind';

import styles from './CardItem.module.scss';
import { TimeIcon, VideoIcon, UsersIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function CardItem(data) {
    const progress = 80;

    const progressBarStyle = {
        '--progress': `${progress}%`,
    };

    return (
        <div className={cx('wrapper')}>
            <a href="/data" className={cx('link')}>
                <img className={cx('thumb')} src={data.src} alt={data.title} />
            </a>
            <div className={cx('content')}>
                <h3 className={cx('title')}>
                    <a href="/landing/htmlcss/">{data.title}</a>
                </h3>
                {data.isMyCourse ? (
                    <div className={cx('progress')}>
                        <p className={cx('last-completed')}>Học cách đây 1 năm trước</p>

                        <div className={cx('progress-bar')} style={progressBarStyle}></div>
                    </div>
                ) : (
                    <>
                        {data.isFreeCourse || data.isProCourse ? (
                            <div className={cx('price')}>
                                {data.oldPrice ? <span className={cx('old-price')}>{data.oldPrice}</span> : <></>}
                                <span className={cx('main-price')}>{data.mainPrice}</span>
                            </div>
                        ) : (
                            <></>
                        )}

                        <div className={cx('more-info')}>
                            {data.isArticle || data.isProCourse ? (
                                <div className={cx('info-item')} title={`Người hướng dẫn: ${data.name}`}>
                                    <div className={cx('avatar')}>
                                        <img src={data.avatar} alt={data.name} />
                                    </div>
                                    <span>{data.name}</span>
                                </div>
                            ) : (
                                <div className={cx('info-item')}>
                                    <UsersIcon />
                                    <span>{data.totalUsers}</span>
                                </div>
                            )}

                            {!data.isArticle ? (
                                <>
                                    <div className={cx('info-item')} title={`Số lượng video: ${data.quantityVideo}`}>
                                        <VideoIcon />
                                        <span>{data.quantityVideo}</span>
                                    </div>
                                    <div
                                        className={cx('info-item')}
                                        title={`Tổng thời lượng video: ${data.totalHours}`}
                                    >
                                        <TimeIcon />
                                        <span>{data.totalHours}</span>
                                    </div>
                                </>
                            ) : (
                                <span className={cx('created-at')}>2 tháng trước</span>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default CardItem;
