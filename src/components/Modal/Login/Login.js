import classNames from 'classnames/bind';
import { useState, useRef, useEffect } from 'react';

import styles from './Login.module.scss';
import InputWrapper from '~/components/InputWrapper';
import { handleInputBlur } from '~/utils/handleInputBlur';
import { ErrorIcon } from '~/components/Icons';
import RememberLogin from '~/components/RememberLogin';

const cx = classNames.bind(styles);

function Login() {
    const [phone, setPhone] = useState({ value: '', error: '' });
    const [username, setUsername] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });

    const [method, setMethod] = useState('email');
    const [isSendCodeActive, setIsCodeInputActive] = useState(false);

    const [code, setCode] = useState({ value: '', error: '' });

    const usernameInputRef = useRef(null);
    const phoneInputRef = useRef(null);

    const handleChange = (setter) => (e) => {
        setter({ value: e.target.value, error: '' });
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        if (value.length <= 10) {
            setPhone({ value, error: '' });
        }
    };

    const handleSendCodeClick = () => {
        if (phone.value.length === 10) {
            setIsCodeInputActive(true);
        }
    };

    const clearErrors = () => {
        setUsername(prev => ({ ...prev, error: '' }));
        setPhone(prev => ({ ...prev, error: '' }));
        setPassword(prev => ({ ...prev, error: '' }));
    };

    const changeMethod = () => {
        clearErrors();
        setMethod((prevMethod) => (prevMethod === 'email' ? 'otp' : 'email'));
    };

    useEffect(() => {
        if (method === 'email') {
            usernameInputRef.current.focus();
        } else {
            phoneInputRef.current.focus();
        }
    }, [method]);

    return (
        <form autoComplete="off">
            <InputWrapper>
                <div className={cx('label-group')}>
                    <label className={cx('label')}>{method === 'email' ? 'Tên đăng nhập' : 'Số điện thoại'}</label>
                    <label className={cx('label', 'right')} onClick={changeMethod}>
                        {method === 'email' ? 'Đăng nhập với số điện thoại' : 'Đăng nhập với email'}
                    </label>
                </div>
                <div className={cx('input-wrap', { invalid: method === 'email' ? username.error : phone.error })}>
                    <input
                        autoFocus
                        placeholder={method === 'email' ? 'Email hoặc Username' : 'Số điện thoại'}
                        name={method === 'email' ? 'email' : 'phone'}
                        value={method === 'email' ? username.value : phone.value}
                        onChange={method === 'email' ? handleChange(setUsername) : handlePhoneChange}
                        onBlur={() =>
                            handleInputBlur(
                                method === 'email' ? username.value : phone.value,
                                method === 'email' ? setUsername : setPhone,
                            )
                        }
                        ref={method === 'email' ? usernameInputRef : phoneInputRef}
                    />
                    {(method === 'email' ? username.error : phone.error) && <ErrorIcon className={cx('error-icon')} />}
                </div>
                {(method === 'email' ? username.error : phone.error) && (
                    <div className={cx('error-message')}>{method === 'email' ? username.error : phone.error}</div>
                )}
            </InputWrapper>

            {method === 'email' ? (
                <InputWrapper>
                    <div className={cx('input-wrap', { invalid: password.error })}>
                        <input
                            placeholder="Password"
                            name="password"
                            type="password"
                            value={password.value}
                            onChange={handleChange(setPassword)}
                            onBlur={() => handleInputBlur(password.value, setPassword)}
                        />
                    </div>
                    {password.error && <div className={cx('error-message')}>{password.error}</div>}
                </InputWrapper>
            ) : (
                <InputWrapper>
                    <div className={cx('input-wrap', { disabled: !isSendCodeActive })}>
                        <input
                            disabled={!isSendCodeActive}
                            placeholder="Mã xác nhận"
                            name="code"
                            maxLength={6}
                            value={code.value}
                            onChange={handleChange(setCode)}
                        />
                        <div
                            className={cx('right-btn', { disabled: phone.value.length !== 10 })}
                            onClick={handleSendCodeClick}
                        >
                            <span>Gửi mã</span>
                        </div>
                    </div>
                </InputWrapper>
            )}

            <InputWrapper>
                <RememberLogin />
            </InputWrapper>

            <InputWrapper>
                <button
                    type="submit"
                    disabled={method === 'email' ? !username.value || !password.value : !phone.value}
                    className={cx('submit-btn', {
                        disabled: method === 'email' ? !username.value || !password.value : !phone.value,
                        rounded: true,
                        primary: true,
                    })}
                >
                    Đăng nhập
                </button>
            </InputWrapper>
        </form>
    );
}

export default Login;
