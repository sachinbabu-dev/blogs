import React from "react";

const NewsCard = (props: any) => {
  const { title, author } = props;
  return (
    <div>
      {title} - <br />
      {author?.name}
    </div>
  );
};

export default NewsCard;
