import React, { useContext, useEffect } from 'react'
import { Controlled } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/eclipse.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/edit/closebrackets'
import '../styles/CodeEditor.css'
import { DarkThemeContext } from '../../DarkThemeProvider'

function CodeEditor({ value, onChange, lang, display, autoFocus, lineSep }) {
    const handleChange = (editor, data, value) => {
        onChange(value)
    }

    const { darkThemeState } = useContext(DarkThemeContext)

    return (
        <div className={`${display}`}>
            <Controlled
                onBeforeChange={handleChange}
                value={value}
                options={{
                    lineWrapping: true,
                    mode: lang,
                    theme: !darkThemeState ? 'eclipse' : 'material',
                    lineNumbers: true,
                    autoCloseBrackets: true,
                    autofocus: autoFocus,
                    lineSeparator: lineSep
                }}
            />
        </div>
    )
}

export default CodeEditor
