import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn:
    'https://4450f46170d44befaa063fa611ed2ab8@o153141.ingest.sentry.io/5401216',
});

Sentry.nativeCrash();
