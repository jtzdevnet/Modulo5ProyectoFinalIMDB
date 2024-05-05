import './index.scss'

function ContentBar(props) {
    const { children } = props;
    return (
        <div className='content-bar'>
            {children}
        </div>
    )
}

export { ContentBar }