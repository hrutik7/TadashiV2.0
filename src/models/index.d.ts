import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum PostStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE"
}

type UserSignupMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserLoginMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RestaurantMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CredeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserInfoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GenderInfoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ExplainYourselfMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}



type EagerUserSignup = {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserSignup = {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserSignup = LazyLoading extends LazyLoadingDisabled ? EagerUserSignup : LazyUserSignup

export declare const UserSignup: (new (init: ModelInit<UserSignup, UserSignupMetaData>) => UserSignup) & {
  copyOf(source: UserSignup, mutator: (draft: MutableModel<UserSignup, UserSignupMetaData>) => MutableModel<UserSignup, UserSignupMetaData> | void): UserSignup;
}

type EagerUserLogin = {
  readonly id: string;
  readonly username: string;
  readonly password: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserLogin = {
  readonly id: string;
  readonly username: string;
  readonly password: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserLogin = LazyLoading extends LazyLoadingDisabled ? EagerUserLogin : LazyUserLogin

export declare const UserLogin: (new (init: ModelInit<UserLogin, UserLoginMetaData>) => UserLogin) & {
  copyOf(source: UserLogin, mutator: (draft: MutableModel<UserLogin, UserLoginMetaData>) => MutableModel<UserLogin, UserLoginMetaData> | void): UserLogin;
}

type EagerRestaurant = {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly city: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRestaurant = {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly city: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Restaurant = LazyLoading extends LazyLoadingDisabled ? EagerRestaurant : LazyRestaurant

export declare const Restaurant: (new (init: ModelInit<Restaurant, RestaurantMetaData>) => Restaurant) & {
  copyOf(source: Restaurant, mutator: (draft: MutableModel<Restaurant, RestaurantMetaData>) => MutableModel<Restaurant, RestaurantMetaData> | void): Restaurant;
}

type EagerUser = {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User, UserMetaData>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

type EagerPost = {
  readonly id: string;
  readonly title: string;
  readonly status: PostStatus | keyof typeof PostStatus;
  readonly rating?: number | null;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPost = {
  readonly id: string;
  readonly title: string;
  readonly status: PostStatus | keyof typeof PostStatus;
  readonly rating?: number | null;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post, PostMetaData>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

type EagerCrede = {
  readonly id: string;
  readonly username: string;
  readonly password: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCrede = {
  readonly id: string;
  readonly username: string;
  readonly password: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Crede = LazyLoading extends LazyLoadingDisabled ? EagerCrede : LazyCrede

export declare const Crede: (new (init: ModelInit<Crede, CredeMetaData>) => Crede) & {
  copyOf(source: Crede, mutator: (draft: MutableModel<Crede, CredeMetaData>) => MutableModel<Crede, CredeMetaData> | void): Crede;
}

type EagerUserInfo = {
  readonly id: string;
  readonly username: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserInfo = {
  readonly id: string;
  readonly username: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserInfo = LazyLoading extends LazyLoadingDisabled ? EagerUserInfo : LazyUserInfo

export declare const UserInfo: (new (init: ModelInit<UserInfo, UserInfoMetaData>) => UserInfo) & {
  copyOf(source: UserInfo, mutator: (draft: MutableModel<UserInfo, UserInfoMetaData>) => MutableModel<UserInfo, UserInfoMetaData> | void): UserInfo;
}

type EagerGenderInfo = {
  readonly id: string;
  readonly gender: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGenderInfo = {
  readonly id: string;
  readonly gender: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GenderInfo = LazyLoading extends LazyLoadingDisabled ? EagerGenderInfo : LazyGenderInfo

export declare const GenderInfo: (new (init: ModelInit<GenderInfo, GenderInfoMetaData>) => GenderInfo) & {
  copyOf(source: GenderInfo, mutator: (draft: MutableModel<GenderInfo, GenderInfoMetaData>) => MutableModel<GenderInfo, GenderInfoMetaData> | void): GenderInfo;
}

type EagerExplainYourself = {
  readonly id: string;
  readonly explain: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExplainYourself = {
  readonly id: string;
  readonly explain: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ExplainYourself = LazyLoading extends LazyLoadingDisabled ? EagerExplainYourself : LazyExplainYourself

export declare const ExplainYourself: (new (init: ModelInit<ExplainYourself, ExplainYourselfMetaData>) => ExplainYourself) & {
  copyOf(source: ExplainYourself, mutator: (draft: MutableModel<ExplainYourself, ExplainYourselfMetaData>) => MutableModel<ExplainYourself, ExplainYourselfMetaData> | void): ExplainYourself;
}

type EagerTodo = {
  readonly id: string;
  readonly task: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo = {
  readonly id: string;
  readonly task: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo, TodoMetaData>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}

type EagerUsersData = {
  readonly id: string;
  readonly username: string;
  readonly tags?: (string | null)[] | null;
  readonly gender: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsersData = {
  readonly id: string;
  readonly username: string;
  readonly tags?: (string | null)[] | null;
  readonly gender: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UsersData = LazyLoading extends LazyLoadingDisabled ? EagerUsersData : LazyUsersData

export declare const UsersData: (new (init: ModelInit<UsersData, UsersDataMetaData>) => UsersData) & {
  copyOf(source: UsersData, mutator: (draft: MutableModel<UsersData, UsersDataMetaData>) => MutableModel<UsersData, UsersDataMetaData> | void): UsersData;
}

type EagerMessage = {
  readonly id: string;
  readonly content: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}

type LazyMessage = {
  readonly id: string;
  readonly content: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}