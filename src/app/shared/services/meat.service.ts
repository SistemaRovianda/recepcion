import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINT_PROVIDER } from 'src/app/providers/tokens';
import { EntryMeat } from '../models/meat.interface';
import { Observable, from, of } from 'rxjs';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MeatService {
  constructor(
    private http: HttpClient,
    private file: File,
    private fileTransfer: FileTransfer,
    private fileOpener: FileOpener,
    private documentViewer: DocumentViewer,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {}

  saveEntryMeat(meat: EntryMeat): Observable<any> {
    return this.http.post<any>(`${this.endpoint}/entry/meat`, meat);
  }

  generateReport(meatId: string): Observable<any> {
    const transfer = this.fileTransfer.create();

    return from(
      transfer
        .download(
          `${this.endpoint}/entry/meat/${meatId}`,
          `${this.file.dataDirectory}report-${meatId}.pdf`
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
