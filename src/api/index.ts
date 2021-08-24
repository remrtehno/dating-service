import * as auth from './auth/auth';
import * as blacklist from './blacklist/blacklist';
import * as events from './events/events';
import * as feedback from './feedback/feedback';
import * as messages from './messages/messages';
import * as photos from './photos/photos';
import * as profile from './profile/profile';
import * as search from './search/search';
import * as service from './service/service';
import * as user from './user/user';

export default {
    ...auth,
    ...blacklist,
    ...events,
    ...feedback,
    ...messages,
    ...photos,
    ...profile,
    ...search,
    ...service,
    ...user,
}