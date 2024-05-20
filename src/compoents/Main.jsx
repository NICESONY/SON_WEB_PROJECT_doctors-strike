import React from 'react'

const Main = ({ children }) => {

    return (
        <main id="main" role="main">
            { children }
        </main>
    )
}

export default Main


//여기서 중요한 점은 { children } 부분입니다. 
//이 부분은 React의 특별한 속성으로, Main 컴포넌트가 렌더링될 때 
//그 안에 포함된 다른 컴포넌트나 요소들을 의미합니다