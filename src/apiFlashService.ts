export class ApiFlashService {
  static captureWebPage = (
    url: string,
    accessKey: string,
    width: string,
    height: string,
    delay: string
  ): GoogleAppsScript.Base.Blob => {
    const captureUrl = `https://api.apiflash.com/v1/urltoimage?access_key=${accessKey}&url=${url}&width=${width}&height=${height}&delay=${delay}&fresh=true`;
    const responseData = UrlFetchApp.fetch(captureUrl);
    return responseData.getBlob();
  };
}
