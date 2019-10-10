export class ApiFlashService {
  static captureWebPage = (
    url: string,
    accessKey: string,
    width: string,
    height: string,
    delay: string
  ): GoogleAppsScript.Base.Blob => {
    const captureUrl = ApiFlashService.createChaptureUrl(url, accessKey, width, height, delay);
    const responseData = UrlFetchApp.fetch(captureUrl);
    return responseData.getBlob();
  };
  private static createChaptureUrl = (
    url: string,
    accessKey: string,
    width: string,
    height: string,
    delay: string
  ): string => {
    return `https://api.apiflash.com/v1/urltoimage?access_key=${accessKey}&url=${url}&width=${width}&height=${height}&delay=${delay}&fresh=true`;
  };
}
