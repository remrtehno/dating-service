export const USERS_IS_LOADING = 'FEED_IS_LOADING';
export const FEED_IS_SUCCEED = 'FEED_IS_SUCCEED';
export const FEED_IS_FAILED = 'FEED_IS_FAILED';

export interface IFeedState {
    users: IUser[] | null
    isLoading: boolean,
}

export interface IUser {
    iurl_200?: string;
    id: number,
    name: string,
    age: string,
    greeting: string,
    city: string,
    online: boolean,
    photos?: IUserPhoto[],
}

export interface IUserPhoto {
    url: string
    id: number
}



interface IFeedLoading {
    type: typeof USERS_IS_LOADING,
    isLoading: boolean
}

interface IFeedSucceed {
    type: typeof FEED_IS_SUCCEED,
    data: IUser[]
}

interface IFeedFailed {
    type: typeof FEED_IS_FAILED,
    error: object
}

export type FeedActionTypes =
    IFeedLoading
    | IFeedSucceed
    | IFeedFailed;
