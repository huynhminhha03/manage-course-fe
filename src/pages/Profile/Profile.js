import classNames from 'classnames/bind';

import styles from './Profile.module.scss';
import { ParticipationIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function Profile() {
    return (
        <div className={cx('page-wrapper')}>
            <div className={cx('banner')}>
                <div className={cx('user')}>
                    <div className={cx('user-avatar')}>
                        <div className={cx('avatar')}>
                            <img
                                src="https://fullstack.edu.vn/assets/fallback-avatar-BFb1fhaR.jpg"
                                alt="Hà Huỳnh Minh"
                            />
                        </div>
                    </div>
                    <div className={cx('user-name')}>
                        <span>Hà Huỳnh Minh</span>
                    </div>
                </div>
            </div>

            <div className={cx('container')}>
                <div className={cx('index-module_l-5', 'index-module_col')}>
                    <div className={cx('content-left')}>
                        <div className={cx('wrapper')}>
                            <h4 className={cx('title')}>Giới thiệu</h4>
                            <div className={cx('bio')}>
                                <span>Hi</span>
                            </div>
                            <div className={cx('participation')}>
                                <ParticipationIcon className={cx('participation-icon')} />
                                <span>
                                    Thành viên của <strong>Yuko - Học lập trình để đi làm</strong> từ 3 năm trước
                                </span>
                            </div>
                        </div>
                        <div className={cx('wrapper')}>
                            <h4 className={cx('title')}>Hoạt động gần đây</h4>
                            <div className={cx('no-result')}>Chưa có hoạt động gần đây</div>
                        </div>
                    </div>
                </div>

                <div className={cx('index-module_l-7', 'index-module_col')}>
                    <div className={cx('wrapper')}>
                        <h4 className={cx('title')}>Các khóa học đã tham gia</h4>

                        <div>
                            <div className={cx('inner')}>
                                <a className={cx('thumb')} href="/courses/nodejs">
                                    <img
                                        src="https://files.fullstack.edu.vn/f8-prod/courses/6.png"
                                        className={cx('thumb-img')}
                                        alt="Node &amp; ExpressJS"
                                    />
                                </a>

                                <div className={cx('info')}>
                                    <h3 className={cx('info-title')}>
                                        <a href="/courses/nodejs">Node &amp; ExpressJS</a>
                                    </h3>
                                    <p className={cx('info-desc')}>
                                        Học Back-end với Node &amp; ExpressJS framework, hiểu các khái niệm khi làm
                                        Back-end và xây dựng RESTful API cho trang web.
                                    </p>
                                </div>
                            </div>

                            <div className={cx('inner')}>
                                <a className={cx('thumb')} href="/courses/nodejs">
                                    <img
                                        src="https://files.fullstack.edu.vn/f8-prod/courses/6.png"
                                        className={cx('thumb-img')}
                                        alt="Node &amp; ExpressJS"
                                    />
                                </a>

                                <div className={cx('info')}>
                                    <h3 className={cx('info-title')}>
                                        <a href="/courses/nodejs">Node &amp; ExpressJS</a>
                                    </h3>
                                    <p className={cx('info-desc')}>
                                        Học Back-end với Node &amp; ExpressJS framework, hiểu các khái niệm khi làm
                                        Back-end và xây dựng RESTful API cho trang web.
                                    </p>
                                </div>
                            </div>

                            <div className={cx('inner')}>
                                <a className={cx('thumb')} href="/courses/nodejs">
                                    <img
                                        src="https://files.fullstack.edu.vn/f8-prod/courses/6.png"
                                        className={cx('thumb-img')}
                                        alt="Node &amp; ExpressJS"
                                    />
                                </a>

                                <div className={cx('info')}>
                                    <h3 className={cx('info-title')}>
                                        <a href="/courses/nodejs">Node &amp; ExpressJS</a>
                                    </h3>
                                    <p className={cx('info-desc')}>
                                        Học Back-end với Node &amp; ExpressJS framework, hiểu các khái niệm khi làm
                                        Back-end và xây dựng RESTful API cho trang web.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
