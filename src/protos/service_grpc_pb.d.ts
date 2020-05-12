// GENERATED CODE -- DO NOT EDIT!

// package: greeter
// file: src/protos/service.proto

import * as src_protos_service_pb from "../../src/protos/service_pb";
import * as grpc from "grpc";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  sayHello: grpc.MethodDefinition<src_protos_service_pb.SayHelloRequest, src_protos_service_pb.SayHelloResponse>;
}

export const GreeterService: IGreeterService;

export class GreeterClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  sayHello(argument: src_protos_service_pb.SayHelloRequest, callback: grpc.requestCallback<src_protos_service_pb.SayHelloResponse>): grpc.ClientUnaryCall;
  sayHello(argument: src_protos_service_pb.SayHelloRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<src_protos_service_pb.SayHelloResponse>): grpc.ClientUnaryCall;
  sayHello(argument: src_protos_service_pb.SayHelloRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<src_protos_service_pb.SayHelloResponse>): grpc.ClientUnaryCall;
}
