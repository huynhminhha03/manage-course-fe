import classNames from 'classnames/bind';
import { useState, useRef, useEffect } from 'react';

import styles from './Register.module.scss';
import InputWrapper from '~/components/InputWrapper';
import { handleInputBlur } from '~/utils/handleInputBlur';
import { ErrorIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Register() {
    const [phone, setPhone] = useState({ value: '', error: '' });
    const [name, setName] = useState({ value: '', error: '' });
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });

    const [method, setMethod] = useState('email');

    const [code, setCode] = useState({ value: '', error: '' });
    const [isSendCodeActive, setIsCodeInputActive] = useState(false);

    const nameInputRef = useRef(null);

    useEffect(() => {
        nameInputRef.current.focus();
    }, [method]);

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

    const refreshForm = () => {
        setName({ value: '', error: '' });
        setEmail({ value: '', error: '' });
        setPassword({ value: '', error: '' });
        setPhone({ value: '', error: '' });
        setCode({ value: '', error: '' });
    };

    const changeMethod = () => {
        refreshForm();
        setMethod((prevMethod) => (prevMethod === 'email' ? 'otp' : 'email'));
    };

    return (
        <form autoComplete="off">
            <InputWrapper>
                <div className={cx('label-group')}>
                    <label className={cx('label')}>Tên của bạn?</label>
                </div>
                <div className={cx('input-wrap', name.error && 'invalid')}>
                    <input
                        ref={nameInputRef}
                        autoFocus
                        placeholder="Họ và tên của bạn"
                        name="name"
                        value={name.value}
                        onChange={(e) => setName({ value: e.target.value, error: '' })}
                        onBlur={() => handleInputBlur(name.value, setName)}
                    />
                    {name.error && <ErrorIcon className={cx('error-icon')} />}
                </div>
                {name.error && <div className={cx('error-message')}>{name.error}</div>}
            </InputWrapper>

            <InputWrapper>
                <div className={cx('label-group')}>
                    <label className={cx('label')}>{method === 'email' ? 'Email của bạn' : 'Số điện thoại'}</label>
                    <label className={cx('label', 'right')} onClick={changeMethod}>
                        {method === 'email' ? 'Đăng nhập với số điện thoại' : 'Đăng nhập với email'}
                    </label>
                </div>
                <div className={cx('input-wrap', { invalid: method === 'email' ? email.error : phone.error })}>
                    <input
                        placeholder={method === 'email' ? 'Email hoặc Username' : 'Số điện thoại'}
                        name={method === 'email' ? 'email' : 'phone'}
                        value={method === 'email' ? email.value : phone.value}
                        onChange={(e) =>
                            method === 'email'
                                ? setEmail({ value: e.target.value, error: '' })
                                : handlePhoneChange(e)
                        }
                        onBlur={() =>
                            handleInputBlur(
                                method === 'email' ? email.value : phone.value,
                                method === 'email' ? setEmail : setPhone
                            )
                        }
                    />
                    {(method === 'email' ? email.error : phone.error) && <ErrorIcon className={cx('error-icon')} />}
                </div>
                {(method === 'email' ? email.error : phone.error) && (
                    <div className={cx('error-message')}>{method === 'email' ? email.error : phone.error}</div>
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
                            onChange={(e) => setPassword({ value: e.target.value, error: '' })}
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
                            onChange={(e) => setCode({ value: e.target.value, error: '' })}
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
                <button
                    type="submit"
                    disabled={method === 'email' ? !email.value || !password.value : !phone.value}
                    className={cx('submit-btn', {
                        disabled: method === 'email' ? !email.value || !password.value : !phone.value,
                        rounded: true,
                        primary: true,
                    })}
                >
                    Đăng ký
                </button>
            </InputWrapper>
        </form>
    );
}

export default Register;
