import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './BlogDetails.module.scss';
import config from '~/config';
import Avatar from '~/components/Avatar';
import { ActivedBookmarkIcon, BookMarkIcon, EditIcon, OptionIcon } from '~/components/Icons';
import OtherPost from '~/components/OtherPost';
import Topic from '~/components/Topic';
import Interact from '~/components/Interact';
import CommentModal from '~/components/CommentModal';

const cx = classNames.bind(styles);

function Blog() {
    const [likeCount, setLikeCount] = useState(0);
    const [activedLike, setActivedLike] = useState(false);
    const [activedBookmark, setActivedBookmark] = useState(false);

    const [showComment, setShowComment] = useState(false);
    const [showOptions, setShowOptions] = useState(false);

    const handleClickLikeBtn = () => {
        setActivedLike(!activedLike);
        setLikeCount((prevCount) => (activedLike ? prevCount - 1 : prevCount + 1));
    };

    const handleClickCommentBtn = () => {
        setShowComment(true);
    };

    const clickBookmarkBtn = () => {
        setActivedBookmark(!activedBookmark);
    };

    const closingCommentModal = () => {
        setShowComment(false);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col col-xl-3">
                    <div className={cx('aside')}>
                        <Link to={config.routes.profile}>
                            <h4 className={cx('username')}>Hà Huỳnh Minh</h4>
                        </Link>
                        <p className={cx('userTitle')}>Hihi</p>
                        <hr />
                        <Interact
                            likeCount={likeCount}
                            activedLike={activedLike}
                            onClickCommentBtn={handleClickCommentBtn}
                            onClickLikeBtn={handleClickLikeBtn}
                        />
                    </div>
                </div>

                <div className="col col-xl-6">
                    <article>
                        <h1 className={cx('heading')}>ha</h1>
                        <div className={cx('header')}>
                            <div className={cx('user')}>
                                <Avatar
                                    to={config.routes.profile}
                                    alt="Hà Huỳnh Minh"
                                    fontsize="5.6px"
                                    src={'https://fullstack.edu.vn/assets/fallback-avatar-BFb1fhaR.jpg'}
                                />
                                <div className={cx('info')}>
                                    <Link to={config.routes.profile}>
                                        <span className={cx('name')}>Hà Huỳnh Minh</span>
                                    </Link>
                                    <p className={cx('time')}>2 giờ trước</p>
                                </div>
                            </div>
                            <div className={cx('actions')}>
                                <div
                                    className={cx('bookmark-btn', { actived: activedBookmark })}
                                    onClick={clickBookmarkBtn}
                                >
                                    {activedBookmark ? <ActivedBookmarkIcon /> : <BookMarkIcon />}
                                </div>

                                <HeadlessTippy
                                    visible={showOptions}
                                    interactive
                                    placement="bottom-end"
                                    onClickOutside={() => setShowOptions(false)}
                                    render={(attrs) => (
                                        <ul tabIndex="-1" className={cx('option-list')} {...attrs}>
                                            <Link to={'/blog/id'}>
                                                <li>
                                                    <EditIcon />
                                                    <span className={cx('option')}>Sửa bài viết</span>
                                                </li>
                                            </Link>
                                        </ul>
                                    )}
                                >
                                    <div className={cx('option-btn')} onClick={() => setShowOptions(!showOptions)}>
                                        <OptionIcon />
                                    </div>
                                </HeadlessTippy>
                            </div>
                        </div>
                        <div className={cx('content')}>
                            <p>ha</p>
                        </div>
                    </article>
                    <div className={cx('body-bottom')}>
                        <Interact
                            likeCount={likeCount}
                            activedLike={activedLike}
                            onClickCommentBtn={handleClickCommentBtn}
                            onClickLikeBtn={handleClickLikeBtn}
                        />
                        <OtherPost posts={[{ title: 'Hi', to: 'abc' }]} />
                        <div className={cx('wrap-topic')}>
                            <Topic />
                        </div>
                    </div>
                    {showComment && <CommentModal onClose={closingCommentModal} />}
                </div>
            </div>
        </div>
    );
}

export default Blog;
