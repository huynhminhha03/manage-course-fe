import classNames from 'classnames/bind';
import { useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Comment.module.scss';
import Avatar from '~/components/Avatar';
import { Link } from 'react-router-dom';
import { LikeIcon, OptionIcon } from '../Icons';
import CommentSection from '../CommentSection';

const cx = classNames.bind(styles);

function Comment() {
    const [showOptions, setShowOptions] = useState(false);
    const [showReplies, setShowReplies] = useState(false);
    const [like, setLike] = useState(0);
    const [actived, setActived] = useState(false);

    const handleLike = () => {
        setActived(!actived);
        setLike((prevCount) => (actived ? prevCount - 1 : prevCount + 1));
    };

    const handleReply = () => {
        setShowReplies(!showReplies);
    };

    return (
        <div>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <Link to="/a" className={cx('user')}>
                        <Avatar
                            fontsize="4.5px"
                            alt="Huynh Minh Ha"
                            src="https://www.gravatar.com/avatar/c10970ad0deaaf378db943894a69b1ba.jpg?s=80&d=mp&r=g"
                        />
                        <span className={cx('info')}>
                            <span className={cx('username')}>Hà Huỳnh Minh</span>
                            <span className={cx('createAt')}>một giờ trước</span>
                        </span>
                    </Link>
                </div>

                <div className={cx('body')}>
                    <div className={cx('content')}>
                        <p>abc</p>
                    </div>
                    <div className={cx('reaction-bar')}>
                        <div className={cx('left')}>
                            <span>
                                <button className={cx('interaction')} onClick={handleLike}>
                                    Thích
                                </button>
                            </span>
                            <button className={cx('interaction')} onClick={handleReply}>
                                Phản hồi
                            </button>
                        </div>

                        <div className={cx('left')}>
                            {like > 0 && (
                                <div className={cx('react-btn')}>
                                    <LikeIcon />
                                    <span>{like}</span>
                                </div>
                            )}

                            <HeadlessTippy
                                visible={showOptions}
                                interactive
                                placement="bottom-end"
                                onClickOutside={() => setShowOptions(false)}
                                render={(attrs) => (
                                    <ul tabIndex="-1" className={cx('option-list')} {...attrs}>
                                        <li>
                                            <button className={cx('option')}>Chỉnh sửa</button>
                                        </li>
                                        <li>
                                            <button className={cx('option')}>Xoá bình luận</button>
                                        </li>
                                    </ul>
                                )}
                            >
                                <button
                                    className={cx('interaction')}
                                    onClick={() => {
                                        setShowOptions(!showOptions);
                                    }}
                                >
                                    <OptionIcon className={cx('option-icon')} />
                                </button>
                            </HeadlessTippy>
                        </div>
                    </div>
                </div>
            </div>

            {showReplies && (
                <div className={cx('replies')}>
                    <CommentSection replyMode />
                </div>
            )}
        </div>
    );
}

export default Comment;
