import { graphql, Link } from 'gatsby'
import React, { useRef } from 'react'
import HeaderBar from '../components/HeaderBar'
import '../styles/task.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faEllipsisH, faArrowDown, faCode } from '@fortawesome/free-solid-svg-icons'
import { faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { Helmet } from 'react-helmet'

function Tasks({ data }) {
    console.log(data)
    const taskLinks = data.allMarkdownRemark.nodes

    const intoProgrammingList = useRef()
    const buttonRef = useRef()

    const toggleIntoProgrammingList = (e) => {
        let display = intoProgrammingList.current.style.display
        if (display === 'none') {
            intoProgrammingList.current.style.display = 'flex'
            buttonRef.current.style.transform = 'rotate(0deg)'
        } else {
            intoProgrammingList.current.style.display = 'none'
            buttonRef.current.style.transform = 'rotate(180deg)'
        }
    }
    return (
        <HeaderBar>
            <Helmet>
                <title>Tutorials</title>
            </Helmet>
            <div className="tasks-page">
                <div className="text-introduce">
                    <h2>Đến với Lập trình và Javascript</h2>
                </div>

                <div className="tutorials-block">
                    <div className="tutorial">
                        <div className="introduce">
                            <div>
                                <h3>
                                    {' '}
                                    <span>
                                        <FontAwesomeIcon icon={faCode} />
                                    </span>{' '}
                                    into programming
                                </h3>
                                <div>
                                    Các khái niệm cơ bản ở tất cả các ngôn ngữ lâp trình được trình
                                    bày qua ngôn ngữ JavaScript.
                                </div>
                            </div>
                            <button onClick={toggleIntoProgrammingList} ref={buttonRef}>
                                <FontAwesomeIcon icon={faArrowDown} />
                            </button>
                        </div>
                        <ul ref={intoProgrammingList}>
                            {taskLinks.map((taskLink) => (
                                <Link
                                    to={`/tasks/into-programming/${taskLink.frontmatter.direction}`}
                                    key={taskLink.frontmatter.order}>
                                    <li>
                                        <FontAwesomeIcon icon={faEllipsisH} className="mr-4" />
                                        {taskLink.frontmatter.title}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="tutorial">
                        <div className="introduce">
                            <div>
                                <h3>
                                    {' '}
                                    <span>
                                        <FontAwesomeIcon icon={faJsSquare} />
                                    </span>{' '}
                                    into javascript
                                </h3>
                                <div>Các khái niệm đặc trưng của JavaScript (coming soon).</div>
                            </div>
                            <button>
                                <FontAwesomeIcon icon={faArrowDown} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </HeaderBar>
    )
}

export default Tasks

export const query = graphql`
    query TaskkkkkQuery {
        allMarkdownRemark(sort: { fields: frontmatter___order }) {
            nodes {
                frontmatter {
                    title
                    direction
                    order
                }
            }
        }
    }
`
