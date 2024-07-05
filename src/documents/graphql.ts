/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum FileContent {
    fileName = "fileName",
    mimetype = "mimetype",
    encoding = "encoding"
}

export class AddDocumentInput {
    uuid: string;
    name: string;
    permission?: Nullable<string>;
    files: Nullable<FileContent>[];
    description?: Nullable<string>;
}

export class Document {
    id: string;
    uuid: string;
    docName: string;
    permission: string;
    files: Nullable<File>[];
}

export class File {
    id: string;
    url: string;
    document: Document;
    fileName: string;
    mimetype: string;
}

export abstract class IQuery {
    abstract getDocs(): Nullable<Document>[] | Promise<Nullable<Document>[]>;

    abstract downloadDoc(docId: string, uuid: string): FileContent | Promise<FileContent>;

    abstract downloadFile(docId: string, fileId: string, uuid: string): FileContent | Promise<FileContent>;
}

export abstract class IMutation {
    abstract addDoc(document: AddDocumentInput): Document | Promise<Document>;
}

type Nullable<T> = T | null;
