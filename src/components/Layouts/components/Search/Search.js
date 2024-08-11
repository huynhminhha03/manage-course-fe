import { useState } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
import SearchItem from '~/components/SearchItem';
const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const show = () => setSearchResult([1, 2, 3]);
    const hide = () => setSearchResult([]);

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <HeadlessTippy
            interactive
            visible={searchValue}
            render={(attrs) => (
                <PopperWrapper>
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        {searchValue && (
                            <div className={cx('header')}>
                                <SearchIcon />

                                <span>Kết quả cho '{searchValue}'</span>
                            </div>
                        )}
                        <div className={cx('heading')}>
                            <h5>KHÓA HỌC</h5>
                            <span>Xem thêm</span>
                        </div>
                        <SearchItem />
                    </div>
                </PopperWrapper>
            )}
        >
            <div className={cx('search')} onClick={searchResult ? hide : show}>
                <input
                    value={searchValue}
                    onChange={handleChange}
                    className={cx('search-input')}
                    type="text"
                    placeholder="Tìm kiếm khoá học, bài viết, video,..."
                    spellCheck="false"
                />
                <button className={cx('search-btn')}>
                    <SearchIcon className={cx('search-icon')} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
