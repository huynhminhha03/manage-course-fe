import React from 'react';
import classNames from 'classnames/bind';
import styles from './Interact.module.scss';
import { HeartIcon, CommentIcon, RedHeartIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const Interact = React.memo(({ likeCount, activedLike, onClickLikeBtn, onClickCommentBtn }) => {
    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('react-btn', { actived: activedLike })}
                onClick={onClickLikeBtn}
                role="button"
                aria-label={activedLike ? 'Unlike' : 'Like'}
                tabIndex={0}
            >
                {activedLike ? <RedHeartIcon /> : <HeartIcon />}
                <span>{likeCount}</span>
            </div>
            <div
                className={cx('react-btn')}
                onClick={onClickCommentBtn}
                role="button"
                aria-label="Comment"
                tabIndex={0}
            >
                <CommentIcon />
                <span>0</span>
            </div>
        </div>
    );
});

export default Interact;
