
export type FetchLanguage = (lang:TextContentRequest) => Promise<ILanguageResponse>

export type FetchTextContent = (lang:TextContentRequest) => Promise<TextContentResponse>;

export type FetchConfig = () => Promise<IConfigResponse>

interface ILanguageResponse {
    errors: [],
    lang: string,
    status: string,
}

interface IConfigResponse {
    flow_url: string,
    recaptchav3_public: string,
    use_lp: boolean,
}

type TextContentResponse = string;

type TextContentRequest = string;



