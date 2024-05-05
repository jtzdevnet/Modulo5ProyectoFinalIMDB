import './index.scss';

function CardList(props) {

  const { children } = props;

  return (
    <ul className="container-list">{children}</ul>
  )
}

export { CardList }