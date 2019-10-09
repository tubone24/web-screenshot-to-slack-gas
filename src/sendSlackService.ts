export class SendSlackService {
  static sendImage = (token: string, image: any, title: string, channel: string): void => {
    const payload = {
      token: token,
      file: image,
      channels: channel,
      title: title
    };

    const options = { method: 'post', payload: payload };

    // @ts-ignore
    UrlFetchApp.fetch('https://slack.com/api/files.upload', options);
  };
}
