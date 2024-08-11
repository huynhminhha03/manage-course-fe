import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './RememberLogin.module.scss';

const cx = classNames.bind(styles);

function RememberLogin() {
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div className={cx('wrapper')}>
            <input
                type="checkbox"
                id="remember"
                name="remember"
                className={cx('input')}
                checked={checked}
                onChange={handleChange}
            />
            <label className={cx('label', { checked })} htmlFor="remember">
                <span>Ghi nhớ đăng nhập</span>
            </label>
        </div>
    );
}

export default RememberLogin;
