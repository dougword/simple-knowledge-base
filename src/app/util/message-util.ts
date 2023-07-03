export class MessageUtil {

  public static showToastError(message: string) {
    message = "<i class='material-icons left'>error</i>" + message + '</span>';
    M.toast({ html: message, classes: 'red' });
  }

  public static showErrorMessage(message: string, error: any) {
    if (error.message)
        message += '<br>' + error.message;
    MessageUtil.showToastError(message);
  }
}
