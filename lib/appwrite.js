import 'react-native-url-polyfill/auto';
import { Client, Account, Avatars } from 'react-native-appwrite';

export const client = new Client()
  .setEndpoint('https://sfo.cloud.appwrite.io/v1')
  .setProject('69dbd17400201390a3c2')
  .setPlatform('dev.talinosolutions.shelfie');

// Optional but commonly needed in Expo React Native:
// .setPlatform('com.your.app');

export const account = new Account(client);
export const avatars = new Avatars(client);