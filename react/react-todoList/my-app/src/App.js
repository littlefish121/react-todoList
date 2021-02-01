import logo from './logo.svg';
import './App.css';
import $axios from '../src/api/request'
const Url1 = $axios.baseUrl1 + '/login'    // 拼接地址



function App() {
    async function requestClick() {
      console.log('这是一个请求')
      console.log(Url1)
      let param={username:'admin',password:'admin'}
      const res = await $axios.postRequest(Url1, param);
      console.log(res)

    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" onClick={requestClick}/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={requestClick}
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
