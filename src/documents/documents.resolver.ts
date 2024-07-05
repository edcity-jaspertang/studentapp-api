import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DocumentsService } from './documents.service';
import { AddDocumentInput } from './graphql';

@Resolver('Document')
export class DocumentsResolver {
  constructor(private readonly documentsService: DocumentsService) {}

  @Mutation('addDoc')
  addDoc(@Args('document') documentInput: AddDocumentInput) {
    return this.documentsService.addDoc(documentInput);
  }

  @Query('downloadDoc')
  downloadDoc(@Args('docId') docId: string, @Args('uuid') uuid: string) {
    return this.documentsService.downloadDoc(docId, uuid);
  }

  @Query('downloadFile')
  downloadFile(@Args('docId') docId: string, @Args('fileId') fileId: string, @Args('uuid') uuid: string) {
    return this.documentsService.downloadFile(docId, fileId, uuid);
  }
}
