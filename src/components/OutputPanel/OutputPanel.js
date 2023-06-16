import React from 'react'
import './OutputPanel.css'
const OutputPanel = ({ html, css, javascript, LinkTags }) => {
    return (
        <div className='outputPanel'>
            <div className="outputPanelHeading">Output</div>
            <iframe
                title='output'
                className='outputPanelContent'
                srcDoc={`<html><head><style>${css}</style>${LinkTags} </head><body> ${html}<script>${javascript}</script></body></html>`}
            >

            </iframe>
        </div>
    )
}

export default OutputPanel