
export const CONFIG_IS_LOADING = 'CONFIG_IS_LOADING';
export const CONFIG_IS_SUCCEED = 'CONFIG_IS_SUCCEED';
export const CONFIG_IS_FAILED = 'CONFIG_IS_FAILED';

export interface IConfigData {
    flow_url: string,
    recaptchav3_public: string,
    use_lp: boolean,
}

export interface IAppState {
    configIsLoading: boolean,
    flowUrl: string | null,
    captchaKey: string | null,
}

interface IConfigIsLoading {
    type: typeof CONFIG_IS_LOADING,
    isLoading: boolean,
}

interface IConfigIsSucceed {
    type: typeof CONFIG_IS_SUCCEED,
    data: IConfigData,
}

interface IConfigIsFailed {
    type: typeof CONFIG_IS_FAILED,
    error: object,
}

export type AppActionTypes =
    IConfigIsLoading
    | IConfigIsSucceed
    | IConfigIsFailed