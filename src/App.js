import React, { useState } from 'react';
import Editor from './components/Editor/Editor';
import Navbar from './components/Navbar/Navbar';
import OutputPanel from './components/OutputPanel/OutputPanel';
import './App.css'
import useLocalStorage from './hooks/useLocalStorage';
function App() {
  // const [html, setHtml] = useState(`<div>hello world</div>`)
  //   const [css, setCss] = useState(
  //     `body{
  // height:100vh
  // }
  // div{
  // width:100px;
  // height:100px;
  // background:grey;
  // border-radius:5px;
  // padding:10px;
  // }`)
  // const [javascript, setJavascript] = useState('console.log("hello world")')
  // const [LinkTags, setLinkTags] = useState('')
  const [html, setHtml] = useLocalStorage('html', `<div>hello world</div>`)
  const [css, setCss] = useLocalStorage('css',
    `body{
height:100vh
}
div{
width:100px;
height:100px;
background:grey;
border-radius:5px;
padding:10px;
}`)
  const [javascript, setJavascript] = useLocalStorage('javascript', 'console.log("hello world")')
  const [LinkTags, setLinkTags] = useLocalStorage('linkTags', '')
  return (
    <>
      <Navbar />
      <div className='editor'>
        <Editor language={'html'} LinkTags={LinkTags} setLinkTags={setLinkTags} value={html} setCode={setHtml} />
        <Editor language={'css'} value={css} setCode={setCss} />
        <Editor language={'javascript'} value={javascript} setCode={setJavascript} />
      </div>
      <div className='output'>
        <OutputPanel html={html} css={css} javascript={javascript} LinkTags={LinkTags} />
      </div>
    </>
  );
}
export default App;