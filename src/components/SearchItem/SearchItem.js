import classNames from 'classnames/bind';
// import { useState } from 'react';

import styles from './SearchItem.module.scss';

const cx = classNames.bind(styles);

function SearchItem() {
    return ( 
        <div className={cx('wrapper')}>
        <div className={cx('avatar')}>
            <img src='https://files.fullstack.edu.vn/f8-prod/courses/2.png' alt='html-css' />
        </div>
            <span>HTML CSS từ Zero đến Hero</span>
        </div>
     );
}

export default SearchItem;