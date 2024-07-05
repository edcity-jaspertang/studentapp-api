import { Injectable } from '@nestjs/common';
import { AddDocumentInput } from './graphql';

@Injectable()
export class DocumentsService {
  addDoc(documentInput: AddDocumentInput) {
    return `This action returns a document`;
  }

  downloadFile(docId: string, fileId: string, uuid: string) {
    return `This action returns a document`;
  }

  downloadDoc(docId: string, uuid: string) {
    return `This action returns a document`;
  }
}
