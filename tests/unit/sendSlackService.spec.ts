import { SendSlackService } from '../../src/sendSlackService';

// @ts-ignore
const mockFetch = jest.fn();
UrlFetchApp.fetch = mockFetch;

describe('sendSlackServiceOK', () => {
  it('sendImage', () => {
    const actual = SendSlackService.sendImage('test-token', 'test-image', 'test-title', '#test');
    const expectedOption = {
      method: 'post',
      payload: { token: 'test-token', file: 'test-image', channels: '#test', title: 'test-title' }
    };
    expect(mockFetch.mock.calls[0][0]).toBe('https://slack.com/api/files.upload');
    expect(mockFetch.mock.calls[0][1]).toEqual(expectedOption);
    expect(actual).toBe(true);
  });
});
