import { graphql, Link } from 'gatsby'
import React, { useState } from 'react'
import '../styles/task-details.css'
import HeaderBar from '../components/HeaderBar'
import CodeEditor from '../components/CodeEditor'
import { Helmet } from 'react-helmet'

function TaskDetails({ data }) {
    const { html } = data.markdownRemark
    const { title, course, task, assertReg, hint, numberValueTest, defaultEditor, next } =
        data.markdownRemark.frontmatter

    const [XML, setXML] = useState(
        '<div id="test-console" style="color: rgb(255, 0, 0); font-weight: 600 ;font-size: 1.25em; white-space: pre-line;">This editor was built to test your code, so it could not run correctly.\nERROR</div>'
    )
    const [JS, setJS] = useState(defaultEditor ? defaultEditor : null)
    const reg = assertReg ? new RegExp(assertReg) : null
    const lineSep = numberValueTest ? null : '#'

    const [srcDoc, setSrcDoc] = useState(`
        <html>
            <body>${XML}</body>
        </html>
    `)

    const handleJs = !defaultEditor
        ? () => {
              setSrcDoc(`
        <html>
        <body>${XML}</body>
        <script>
        let console=(function(oldCons){
            return {
                log: function(text){
                    oldCons.log(text)
                    let newConsoleText = text
                    document.querySelector("#test-console").innerHTML = newConsoleText
                },
                assert: function (expression, text) {
                    if (!expression) {
                        let newConsoleText = text
                        document.querySelector("#test-console").innerHTML = newConsoleText
                    } else {
                        document.querySelector("#test-console").innerHTML = "WELL DONE! LET'S GO NEXT"
                    }
                }
            }
        }(window.console)) 
        window.console = console
        const regIframe = ${reg}
        console.assert(regIframe.test('${JS}'), '${hint}')
        </script>
        </html>
        `)
          }
        : () => {
              setSrcDoc(`
        <html>
        <body>${XML}</body>
        <script>
        let console=(function(oldCons){
            return {
                log: function(text){
                    oldCons.log(text)
                    let newConsoleText = text
                    document.querySelector("#test-console").innerHTML = newConsoleText
                },
                assert: function (expression, text) {
                    if (!expression) {
                        let newConsoleText = text
                        document.querySelector("#test-console").innerHTML = newConsoleText
                    } else {
                        document.querySelector("#test-console").innerHTML = "WELL DONE! LET'S GO NEXT"
                    }
                }
            }
        }(window.console)) 
        window.console = console
        ${JS}
        console.assert(${numberValueTest}, '${hint}')
        </script>
        </html>
        `)
          }

    return (
        <HeaderBar>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div className="page-task">
                <div className="page-task-left">
                    <div className="page-direct">
                        <div className="page-course">
                            <Link to="/tasks">{course}</Link>
                        </div>
                        <div className="page-title">{title}</div>
                    </div>
                    <div className="page-details" dangerouslySetInnerHTML={{ __html: html }} />
                    <Link className="next-link-without-test" to={`/tasks/${course}/${next}`}>
                        Next Lesson
                    </Link>
                </div>
                {task === 'yes' ? (
                    <div className="page-task-right hidden md:block">
                        <div className="code-editor">
                            <CodeEditor
                                onChange={setJS}
                                value={JS}
                                lang="javascript"
                                display="block"
                                autoFocus={true}
                                lineSep={lineSep}
                            />
                            <CodeEditor
                                onChange={setXML}
                                value={XML}
                                lang="xml"
                                display="hidden"
                                autoFocus={false}
                            />
                            <div className="code-editor-buttons">
                                <button
                                    onClick={handleJs}
                                    className="bg-green-600 hover:bg-green-700 mr-2">
                                    Run JS
                                </button>
                            </div>
                        </div>
                        <iframe sandbox="allow-scripts" srcDoc={srcDoc} />
                    </div>
                ) : null}
            </div>
        </HeaderBar>
    )
}

export default TaskDetails

export const query = graphql`
    query TaskQuery($direction: String) {
        markdownRemark(frontmatter: { direction: { eq: $direction } }) {
            html
            frontmatter {
                assertReg
                course
                defaultEditor
                direction
                hint
                numberValueTest
                next
                task
                title
            }
        }
    }
`
