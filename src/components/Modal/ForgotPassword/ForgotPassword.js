import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ForgotPassword.module.scss';
import { handleInputBlur } from '~/utils/handleInputBlur';
import InputWrapper from '~/components/InputWrapper';
import { ErrorIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function ForgotPassword() {
    const [email, setEmail] = useState({ value: '', error: '' });
    const [code, setCode] = useState({ value: '', error: '' });
    const [isCodeInputActive, setIsCodeInputActive] = useState(false);

    const handleSendCodeClick = () => {
        setIsCodeInputActive(true);
    };

    return (
        <form autoComplete="off">
            <InputWrapper>
                <div className={cx('label-group')}>
                    <label className={cx('label')}>Tên đăng nhập</label>
                </div>
                <div className={cx('input-wrap', { invalid: email.error })}>
                    <input
                        autoFocus
                        placeholder="Email hoặc Username"
                        name="email"
                        value={email.value}
                        onChange={(e) => setEmail({ value: e.target.value, error: '' })}
                        onBlur={() => handleInputBlur(email.value, setEmail)}
                    />
                    {email.error && <ErrorIcon className={cx('error-icon')} />}
                </div>
                {email.error && <div className={cx('error-message')}>{email.error}</div>}
            </InputWrapper>

            <InputWrapper>
                <div className={cx('input-wrap', { disabled: !isCodeInputActive })}>
                    <input
                        disabled={!isCodeInputActive}
                        placeholder="Mã xác nhận"
                        name="code"
                        maxLength={6}
                        value={code.value}
                        onChange={(e) => setCode({ value: e.target.value, error: '' })}
                        onBlur={() => handleInputBlur(code.value, setCode)}
                    />
                    <div className={cx('right-btn', { disabled: !email.value })} onClick={handleSendCodeClick}>
                        <span>Gửi mã</span>
                    </div>
                </div>
                {code.error && <div className={cx('error-message')}>{code.error}</div>}
                {isCodeInputActive && <div className={cx('helper')}>Đã gửi mã! Kiểm tra email của bạn để lấy mã.</div>}
            </InputWrapper>

            <InputWrapper>
                <button
                    type="submit"
                    disabled={!isCodeInputActive || code.length !== 6}
                    className={cx('submit-btn', {
                        disabled: !isCodeInputActive || code.length !== 6,
                        rounded: true,
                        primary: true,
                    })}
                >
                    Đặt lại mật khẩu
                </button>
            </InputWrapper>
        </form>
    );
}

export default ForgotPassword;
