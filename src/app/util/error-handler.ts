import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export class ErrorHandler {
  public static handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.status === 0) {
      errorMessage = 'Falha ao realizar operação (Internet acessível?).';
    } else { console.log(error);
      errorMessage = ErrorHandler.getServerErrorMessage(error);
    }

    return throwError(() => new Error(errorMessage));
  }

  private static getServerErrorMessage(error: HttpErrorResponse): string { console.log(error);
    const statusErrorMessages = [
      {
        status: 400,
        message: 'Problema com solicitação! Preencheu tudo corretamente?',
      },
      {
        status: 404,
        message: 'Registro/página não encontrado(a)!',
      },
      {
        status: 500,
        message: 'Erro no servidor! Tente novamente mais tarde!',
      },
    ];
    let defaultMessage =
      'Um erro inesperado ocorreu! Tente novamente mais tarde!';

    for (const item of statusErrorMessages) {
      if (error.status === item.status) {
        return item.message;
      }
    }
    return defaultMessage;
  }
}
