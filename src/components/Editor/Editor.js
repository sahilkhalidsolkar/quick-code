import React, { useEffect, useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { duotoneLight, duotoneLightInit, duotoneDark, duotoneDarkInit } from '@uiw/codemirror-theme-duotone';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import './Editor.css'
import QuickModal from '../Modal/QuickModal';

const Editor = ({ language, value, setCode, LinkTags, setLinkTags }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const [currentCode, setCurrentCode] = useState(value)
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setCode(currentCode)
        }, 1000);

        return () => {
            clearTimeout(timeOut)
        }
    }, [currentCode])


    return (

        <div className="editor_inner">
            <div className="editor_heading">{language}
                {language === 'html' && <button
                    onClick={() => { setIsOpen(true) }}
                    className="editor_headingButton">+
                    <span class="tooltip-text" id="bottom">Add Link Tags.</span>
                </button>}
            </div>
            <QuickModal LinkTags={LinkTags} setLinkTags={setLinkTags} setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
            <CodeMirror
                value={value}
                height="300px"
                extensions={[loadLanguage(language)]}
                onChange={(value) => setCurrentCode(value)}
                theme={duotoneDark}
            />
        </div >

    )
}

export default Editor