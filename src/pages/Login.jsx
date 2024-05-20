import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // react-router-dom의 Link 컴포넌트 import
import '../assets/css/login.css'; // 스타일 파일 import

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'user@example.com' && password === 'password') {
            console.log('로그인 성공');
            // 로그인 성공 시 추가 작업 수행
        } else {
            setErrorMessage('이메일 또는 비밀번호가 올바르지 않습니다.');
        }
    };

    return (
        <div className="login-container">
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">이메일:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">비밀번호:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <button type="submit">로그인</button>
            </form>
            {/* 회원가입 링크 */}
            <p>
                아직 회원이 아니신가요?{' '}
                <Link to="/signup">회원가입</Link> {/* 회원가입 페이지로 이동하는 링크 */}
            </p>
        </div>
    );
};

export default Login;
