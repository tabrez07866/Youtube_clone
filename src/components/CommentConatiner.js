import React from "react";

const commentsData = [
  {
    name: "tabrez",
    text: "tabrez khan is very good boy",
    replies: [],
  },
  {
    name: "tabrez",
    text: "tabrez khan is very good boy",
    replies: [
      {
        name: "tabrez",
        text: "tabrez khan is very good boy",
        replies: [
          {
            name: "tabrez",
            text: "tabrez khan is very good boy",
            replies: [],
          },
          {
            name: "tabrez",
            text: "tabrez khan is very good boy",
            replies: [
              {
                name: "tabrez",
                text: "tabrez khan is very good boy",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "tabrez",
    text: "tabre khan is very good boy",
    replies: [
      {
        name: "tabrez",
        text: "tabrez khan is very good boy",
        replies: [
          {
            name: "tabrez",
            text: "tabrez khan is very good boy",
            replies: [
              {
                name: "tabrez",
                text: "tabrez khan is very good boy",
                replies: [],
              },
            ],
          },
          {
            name: "tabrez",
            text: "tabrez khan is very good boy",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "tabrez",
    text: "tabre khan is very good boy",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex bg-gray-200 p-2 my-2 rounded-lg ">
      <img
        className="w-12 h-12"
        src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className="pl-5 border border-l-black ">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentConatiner = () => {
  return (
    <div className="m-5 p-2 ">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentConatiner;
