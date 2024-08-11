import classNames from 'classnames/bind';
import { useState, useCallback } from 'react';

import styles from './CommentModal.module.scss';
import { CloseIcon, NoCommentIcon } from '~/components/Icons';
import CommentSection from '~/components/CommentSection';
import Comment from '~/components/Comment';

const cx = classNames.bind(styles);

function CommentModal({ onClose }) {

    const [isClosing, setIsClosing] = useState(false);

    const handleClose = useCallback(() => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 300); 
    }, [onClose]);
    
    const [comments, setComments] = useState([
        {
            id: 1,
            author: 'Hà Huỳnh Minh',
            content: 'a',
            replies: [
                {
                    id: 1,
                    author: 'Hà Huỳnh Minh',
                    content: 'a reply',
                },
            ],
        },
    ]);

    const handleAddComment = (content) => {
        const newComment = {
            id: comments.length + 1,
            author: 'Your Name',
            content,
            replies: [],
        };
        setComments([...comments, newComment]);
    };

    return (
        <div className={cx('wrapper', { isClosing })}>
            <div className={cx('overlay')} onClick={handleClose}></div>
            <div className={cx('container', { isClosing })}>
                <div className={cx('close-btn')} onClick={handleClose}>
                    <CloseIcon />
                </div>
                <div className={cx('comment-modal')}>
                    <div className={cx('body')}>
                        <div className="container-fluid" style={{ padding: '16px' }}>
                            <div className={cx('content')}>
                                <CommentSection comments={comments} onAddComment={handleAddComment} />
                            </div>
                            <div className={cx('show-comment')}>
                                <div className={cx('header')}>
                                    <h2 className={cx('title')}>0 bình luận</h2>
                                </div>

                                {comments[0].replies ? (
                                    <Comment />
                                ) : (
                                    <div className={cx('comments')}>
                                        <NoCommentIcon />
                                        <p className={cx('message')}>Chưa có bình luận nào, hãy là người đầu tiên!</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentModal;
