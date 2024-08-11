import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import MainContent from '~/components/MainContent';
import { OptionIcon } from '~/components/Icons';
import styles from './Bookmark.module.scss';

const cx = classNames.bind(styles);

function Bookmark() {
    

    const [showArticles, setShowArticles] = useState(false);
    const [showOptions, setShowOptions] = useState(false);

    return (
        <MainContent title={'Bài viết đã lưu'}>
            <div className={cx('main-container')}>
                <div className="row">
                    <div className="col col-lg-10">
                        <div className={cx('types')}>
                            <ul className={cx('tabs')}>
                                <li>
                                    <span className={cx('actived')} onClick={() => setShowArticles(true)}>
                                        Bài viết (1)
                                    </span>
                                </li>
                            </ul>
                            <div className={cx('divider')}></div>
                        </div>

                        {showArticles && (
                            <div className={cx('wrapper')}>
                                <h3 title="Mình đã làm thế nào để hoàn thành một dự án website chỉ trong 15 ngày">
                                    <a href="/blog/minh-da-lam-the-nao-de-hoan-thanh-mot-du-an-website-chi-trong-15-ngay">
                                        Mình đã làm thế nào để hoàn thành một dự án website chỉ trong 15 ngày Mình đã
                                        làm thế nào để hoàn thành một dự án website chỉ trong 15 ngày
                                    </a>
                                </h3>
                                <div className={cx('author')}>
                                    <Link to="/blog/minh-da-lam-the-nao-de-hoan-thanh-mot-du-an-website-chi-trong-15-ngay">
                                        Đã lưu một giờ trước
                                    </Link>
                                    <span className={cx('dot')}>·</span>
                                    <span>
                                        Tác giả <strong>Lý Cao Nguyên</strong>
                                    </span>
                                </div>
                                <HeadlessTippy
                                    visible={showOptions}
                                    interactive
                                    placement="bottom-end"
                                    onClickOutside={() => setShowOptions(false)}
                                    render={(attrs) => (
                                        <div tabIndex="-1" className={cx('wrap-popper', 'options')} {...attrs}>
                                            <span>Xóa khỏi mục đã lưu</span>
                                            <span>Xóa khỏi mục đã lưu</span>
                                        </div>
                                    )}
                                >
                                    <div
                                        className={cx('more')}
                                        aria-expanded={showOptions}
                                        onClick={() => setShowOptions(!showOptions)}
                                    >
                                        <OptionIcon />
                                    </div>
                                </HeadlessTippy>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </MainContent>
    );
}

export default Bookmark;
