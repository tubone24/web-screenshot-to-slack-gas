import { SendSlackService } from './sendSlackService';
import { ApiFlashService } from './apiFlashService';

declare var global: any;

global.main = (): void => {
  const SLACK_TOKEN = PropertiesService.getScriptProperties().getProperty('SLACK_TOKEN');
  const API_FLASH_ACCESS_KEY = PropertiesService.getScriptProperties().getProperty(
    'API_FLASH_ACCESS_KEY'
  );
  const WEB_PAGE_URL =
    PropertiesService.getScriptProperties().getProperty('WEB_PAGE_URL') ||
    'https://blog.tubone-project24.xyz';
  const SLACK_TITLE = PropertiesService.getScriptProperties().getProperty('SLACK_TITLE') || 'Test';
  const WEB_PAGE_WIDTH =
    PropertiesService.getScriptProperties().getProperty('WEB_PAGE_WIDTH') || '1920';
  const WEB_PAGE_HEIGHT =
    PropertiesService.getScriptProperties().getProperty('WEB_PAGE_HEIGHT') || '1080';
  const WEB_PAGE_CAPTURE_DELAY =
    PropertiesService.getScriptProperties().getProperty('WEB_PAGE_CAPTURE_DELAY') || '10';
  const SLACK_CHANNEL =
    PropertiesService.getScriptProperties().getProperty('SLACK_CHANNEL') || '#general';

  const responseBlob = ApiFlashService.captureWebPage(
    WEB_PAGE_URL,
    API_FLASH_ACCESS_KEY,
    WEB_PAGE_WIDTH,
    WEB_PAGE_HEIGHT,
    WEB_PAGE_CAPTURE_DELAY
  );

  SendSlackService.sendImage(SLACK_TOKEN, responseBlob, SLACK_TITLE, SLACK_CHANNEL);
};
