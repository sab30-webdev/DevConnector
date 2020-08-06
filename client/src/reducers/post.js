import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_POST,
  DELETE_POST,
} from "./../actions/types";

const initialstate = {
  post: null,
  posts: [],
  loading: true,
  error: {},
};

export default function (state = initialstate, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };

    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== payload),
        loading: false,
      };
    }

    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case UPDATE_POST: {
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload.postId ? { ...post, likes: payload.likes } : post
        ),
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
}
