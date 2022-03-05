import classNames from 'classnames';
export default function Button({className, active, onClick, children}) {
    // console.log(props.onClick);
    return (
        <button className={classNames('button', className         
        )} onClick={onClick}>{children}</button>
    )
}
