/**
 * @fileoverview gRPC-Web generated client stub for authorization
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import {
  PayloadAuthorization,
  ResAuthorization} from './authorization_pb';

export class AuthorizationServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoAuthorization = new grpcWeb.AbstractClientBase.MethodInfo(
    ResAuthorization,
    (request: PayloadAuthorization) => {
      return request.serializeBinary();
    },
    ResAuthorization.deserializeBinary
  );

  authorization(
    request: PayloadAuthorization,
    metadata: grpcWeb.Metadata | null): Promise<ResAuthorization>;

  authorization(
    request: PayloadAuthorization,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ResAuthorization) => void): grpcWeb.ClientReadableStream<ResAuthorization>;

  authorization(
    request: PayloadAuthorization,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ResAuthorization) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/authorization.AuthorizationService/Authorization',
        request,
        metadata || {},
        this.methodInfoAuthorization,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/authorization.AuthorizationService/Authorization',
    request,
    metadata || {},
    this.methodInfoAuthorization);
  }

}

