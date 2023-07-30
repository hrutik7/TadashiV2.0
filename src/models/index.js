// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PostStatus = {
  "ACTIVE": "ACTIVE",
  "INACTIVE": "INACTIVE"
};

const { UserSignup, UserLogin, Restaurant, User, Post, Crede, UserInfo, GenderInfo, ExplainYourself, Todo, UsersData, Message } = initSchema(schema);

export {
  UserSignup,
  UserLogin,
  Restaurant,
  User,
  Post,
  Crede,
  UserInfo,
  GenderInfo,
  ExplainYourself,
  Todo,
  UsersData,
  Message,
  PostStatus
};