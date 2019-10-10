import { ApiFlashService } from '../../src/apiFlashService';

const mockFetch = jest.fn(() => {
  return {
    getBlob: jest.fn(() => {
      return 'test';
    })
  };
});

// @ts-ignore
UrlFetchApp.fetch = mockFetch;

describe('sendSlackServiceOK', () => {
  it('captureWebPage', () => {
    const actual = ApiFlashService.captureWebPage('test-url', 'testkey', '1920', '1080', '10');
    expect(actual).toBe('test');
  });
  it('createChaptureUrl', () => {
    const expectedChaptureUrl =
      'https://api.apiflash.com/v1/urltoimage?access_key=testkey&url=test-url&width=1920&height=1080&delay=10&fresh=true';
    const actual = (ApiFlashService as any).createChaptureUrl(
      'test-url',
      'testkey',
      '1920',
      '1080',
      '10'
    );
    expect(actual).toBe(expectedChaptureUrl);
  });
});
