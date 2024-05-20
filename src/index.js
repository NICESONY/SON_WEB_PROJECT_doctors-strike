import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React와 ReactDOM을 가져옵니다.
// React: React 라이브러리를 사용하기 위해 가져옵니다.
// ReactDOM: React 애플리케이션을 실제 DOM에 렌더링하기 위한 ReactDOM의 기능을 가져옵니다.
// App: 이 코드에서는 현재 디렉터리에서 App.js 파일을 가져오는 것으로 가정합니다.



//==============================================================================


//ReactDOM.createRoot()를 사용하여 React의 루트를 생성합니다.
//document.getElementById('root'): HTML 파일에서 id가 'root'인 요소를 찾아서 React 
//애플리케이션을 렌더링할 위치로 지정합니다.
//ReactDOM.createRoot(): React 18부터 도입된 Concurrent 모드에서 사용하는 새로운 루트 생성 방법입니다. 
//createRoot()는 Concurrent 모드에서 사용하는 것으로, 동시성 모드에서 렌더링을 지원하며 성능을 향상시키는 데 
//도움이 됩니다.


// ========================================================================================

//<React.StrictMode>: React.StrictMode는 개발 모드에서만 활성화되며, 애플리케이션 내의 잠재적인 
//문제를 감지하고 경고를 표시하는 데 도움이 됩니다. 개발자에게 도움이 되는 기능으로, 프로덕션 환경에서는 
//사용되지 않습니다.
//<App />: App 컴포넌트를 렌더링합니다. 이는 애플리케이션의 시작점이 되는 컴포넌트일 것입니다.
//이 컴포넌트의 내용이 루트 요소인 <div id="root"></div>에 렌더링됩니다.

//========================최종 결론 ===========================================


//React 애플리케이션을 초기화하고, Strict 모드에서 실행하여 잠재적인 문제를 감지하고, 
//지정된 DOM 요소에 애플리케이션을 렌더링하는 역할을 합니다.

