import classNames from 'classnames/bind';
import styles from './MyBlog.module.scss';
import HeadlessTippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import MainContent from '~/components/MainContent';
import { OptionIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function MyBlog() {
    const [showOptions, setShowOptions] = useState(false);

    const [showDraft, setShowDraft] = useState(false);
    const [showPublication, setShowPublication] = useState(false);

    return (
        <MainContent title={'Bài viết của tôi'}>
            <div className={cx('main-container')}>
                <div className="row">
                    <div className="col col-lg-10">
                        <div className={cx('types')}>
                            <ul className={cx('tabs')}>
                                <li>
                                    <span
                                        className={cx({ actived: showDraft })}
                                        onClick={() => {
                                            setShowDraft(true);
                                            setShowPublication(false);
                                        }}
                                    >
                                        Bản nháp (1)
                                    </span>
                                </li>

                                <li>
                                    <span
                                        className={cx({ actived: showPublication })}
                                        onClick={() => {
                                            setShowPublication(true);
                                            setShowDraft(false);
                                        }}
                                    >
                                        Đã xuất bản (1)
                                    </span>
                                </li>
                            </ul>
                            <div className={cx('divider')}></div>
                        </div>

                        {showDraft && (
                            <>
                                <div className={cx('wrapper')}>
                                    <h3 title="Mình đã làm thế nào để hoàn thành một dự án website chỉ trong 15 ngày">
                                        <Link to="/blog/id">
                                            Mình đã làm thế nào để hoàn thành một dự án website chỉ trong 15 ngày Mình
                                            đã làm thế nào để hoàn thành một dự án website chỉ trong 15 ngày
                                        </Link>
                                    </h3>
                                    <div className={cx('author')}>
                                        <Link to="/blog/id">
                                            Chỉnh sửa 1 giờ trước
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
                                                <span>Chỉnh sửa</span>
                                                <span>Xóa</span>
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
                            </>
                        )}

                        {showPublication && (
                            <>
                                <div className={cx('wrapper')}>
                                    <h3 title="Mình đã làm thế nào để hoàn thành một dự án website chỉ trong 15 ngày">
                                        <Link to="/blog/id">
                                            hi
                                        </Link>
                                    </h3>
                                    <div className={cx('author')}>
                                        <Link to="/blog/id">
                                            Chỉnh sửa 1 giờ trước
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
                                                <span>Chỉnh sửa</span>
                                                <span>Xóa</span>
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
                            </>
                        )}
                    </div>
                </div>
            </div>
        </MainContent>
    );
}

export default MyBlog;
