import './LinkButton.css';

const LinkButton = ({ children, to, buttonStyle }) => {
  return (
    <a 
      href={to} 
      className="link__button" 
      style={buttonStyle} 
      target='_blank' 
      rel='noopener noreferrer'
    >
      {children}
    </a>
    );
}

export default LinkButton;
