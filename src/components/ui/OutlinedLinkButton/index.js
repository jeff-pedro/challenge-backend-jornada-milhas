import './OutlinedLinkButton.css';

const OutlinedLinkButton = ({ children, to, buttonStyle }) => {
  return (<a href={to} className="outlined__link__button" style={buttonStyle}>{children}</a>);
}

export default OutlinedLinkButton;