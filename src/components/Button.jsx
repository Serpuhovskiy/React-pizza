import classNames from 'classnames';
export default function Button({className, onClick, children}) {
    return (
        <button className={classNames('button', className         
        )} onClick={onClick}>{children}</button>
    )
}
