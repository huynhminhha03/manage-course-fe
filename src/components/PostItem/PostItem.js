import classNames from 'classnames/bind';

import { BookMarkIcon, OptionIcon } from '~/components/Icons';
import styles from './PostItem.module.scss';

const cx = classNames.bind(styles);

function PostItem(params) {
    const { src, alt, name, title, desc, tags, createAt } = params;
    
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('author')}>
                    <div className={cx('avatar')}>
                        <img src={src} alt={alt} />
                    </div>
                    <span>{name}</span>
                </div>
                <div className={cx('actions')}>
                    <div className={cx('bookmark-btn')}>
                        <BookMarkIcon />
                    </div>
                    <div className={cx('option-btn')}>
                        <OptionIcon />
                    </div>
                </div>
            </div>
            <div className={cx('body')}>
                <div className={cx('info')}>
                    <h2 className={cx('title')}>
                       {title}
                    </h2>
                    <p className={cx('desc')}>
                        {desc}
                    </p>
                    <div className={cx('metaInfo')}>
                        <a href="/blog/tag/" className={cx('tags')}>
                            {tags}
                        </a>
                        <span>{createAt} ngày trước</span>
                    </div>
                </div>
                <div className={cx('thumb')}>
                    <img src="https://files.fullstack.edu.vn/f8-prod/blog_posts/10850/667550d384026.png" alt="thumb" />
                </div>
            </div>
        </div>
    );
}

export default PostItem;
