import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINT_PROVIDER } from 'src/app/providers/tokens';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { map } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { AuthService } from './auth.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(
    private http: HttpClient,
    private file: File,
    private fileTransfer: FileTransfer,
    private fileOpener: FileOpener,
    private authService: AuthService,
    private storage: Storage,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {}

  generateReport(meatId: string, typeEntry?: string): Observable<any> {
    const transfer = this.fileTransfer.create();

    let token;

    this.storage.get('token').then((res) => (token = res));

    console.log(
      `Datos para reporte. MeatId: ${meatId} typeEntry: ${typeEntry} uid: ${this.authService.getUID()} token: ${localStorage.getItem(
        'token'
      )}`
    );
    return from(
      transfer
        .download(
          `${
            this.endpoint
          }/report/entry/${typeEntry}/${meatId}?uid=${this.authService.getUID()}`,
          `${this.file.dataDirectory}report-${meatId}.pdf`,
          false,
          {
            headers: {
              Authorization: localStorage.getItem('token'),
            },
          }
        )
        .then((entry) => {
          let url = entry.toURL();
          this.fileOpener.open(url, 'application/pdf');
          return Promise.resolve(true);
        })
        .catch((error) => console.error('Error opening file ', error))
    ).pipe(map((res) => res));
  }
}
