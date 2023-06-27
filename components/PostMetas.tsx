import myImage from "../images/profile/hadi_sy.jpeg";
import ExternalLink from "./ExternalLink";
const PostMetas = ({ author, dateCreated, readTime }) => {
  return (
    <div className="flex gap-3 justify-start items-center">
      Written by <ExternalLink>@hadiSy</ExternalLink> | {dateCreated} |{" "}
      {readTime}
    </div>
  );
};

export default PostMetas;
