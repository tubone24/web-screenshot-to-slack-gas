import { SendSlackService } from '../../src/sendSlackService';

// @ts-ignore
GoogleAppsScript.URL_Fetch.UrlFetchApp.fetch = jest.fn(() => {});

describe('sendSlackService', () => {
  it('sendImage', () => {
    const actual = SendSlackService.sendImage('test-token', 'test-image', 'test-title', '#test');
    expect(actual).toBe(true);
  });
});
