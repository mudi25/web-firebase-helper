import * as jspb from "google-protobuf"

export class ResAuthorization extends jspb.Message {
  getUid(): string;
  setUid(value: string): ResAuthorization;

  getRoles(): Roles;
  setRoles(value: Roles): ResAuthorization;

  getParent(): string;
  setParent(value: string): ResAuthorization;

  getIdentifier(): string;
  setIdentifier(value: string): ResAuthorization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResAuthorization.AsObject;
  static toObject(includeInstance: boolean, msg: ResAuthorization): ResAuthorization.AsObject;
  static serializeBinaryToWriter(message: ResAuthorization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResAuthorization;
  static deserializeBinaryFromReader(message: ResAuthorization, reader: jspb.BinaryReader): ResAuthorization;
}

export namespace ResAuthorization {
  export type AsObject = {
    uid: string,
    roles: Roles,
    parent: string,
    identifier: string,
  }
}

export class PayloadAuthorization extends jspb.Message {
  getRolesList(): Array<Roles>;
  setRolesList(value: Array<Roles>): PayloadAuthorization;
  clearRolesList(): PayloadAuthorization;
  addRoles(value: Roles, index?: number): PayloadAuthorization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayloadAuthorization.AsObject;
  static toObject(includeInstance: boolean, msg: PayloadAuthorization): PayloadAuthorization.AsObject;
  static serializeBinaryToWriter(message: PayloadAuthorization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayloadAuthorization;
  static deserializeBinaryFromReader(message: PayloadAuthorization, reader: jspb.BinaryReader): PayloadAuthorization;
}

export namespace PayloadAuthorization {
  export type AsObject = {
    rolesList: Array<Roles>,
  }
}

export enum Roles { 
  SUPER = 0,
  MERCHANT_ADMIN = 1,
  MERCHANT_EMPLOYEES = 2,
  MERCHANT_COURIER = 3,
  CUSTOMER = 4,
}
