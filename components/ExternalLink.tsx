const ExternalLink = ({ children, ...otherProps }) => (
  <a
    className={`cursor-pointer text-blue-400 underline underline-offset-1 
    hover:text-blue-300 hover:underline-offset-8 transition-all ease-in-out hover:transition-all`}
    {...otherProps}
  >
    {children}
  </a>
);
export default ExternalLink;
