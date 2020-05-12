// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var src_protos_service_pb = require('../../src/protos/service_pb.js');

function serialize_greeter_SayHelloRequest(arg) {
  if (!(arg instanceof src_protos_service_pb.SayHelloRequest)) {
    throw new Error('Expected argument of type greeter.SayHelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_SayHelloRequest(buffer_arg) {
  return src_protos_service_pb.SayHelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greeter_SayHelloResponse(arg) {
  if (!(arg instanceof src_protos_service_pb.SayHelloResponse)) {
    throw new Error('Expected argument of type greeter.SayHelloResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_SayHelloResponse(buffer_arg) {
  return src_protos_service_pb.SayHelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreeterService = exports.GreeterService = {
  sayHello: {
    path: '/greeter.Greeter/sayHello',
    requestStream: false,
    responseStream: false,
    requestType: src_protos_service_pb.SayHelloRequest,
    responseType: src_protos_service_pb.SayHelloResponse,
    requestSerialize: serialize_greeter_SayHelloRequest,
    requestDeserialize: deserialize_greeter_SayHelloRequest,
    responseSerialize: serialize_greeter_SayHelloResponse,
    responseDeserialize: deserialize_greeter_SayHelloResponse,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
// Service class to be used by the clients
