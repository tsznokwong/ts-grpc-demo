import * as grpc from "grpc";
import { SayHelloRequest, SayHelloResponse } from "./protos/service_pb";
import { GreeterService } from "./protos/service_grpc_pb";

const GreeterHandler = {
  sayHello: function sayHello(
    call: grpc.ServerUnaryCall<SayHelloRequest>,
    callback: grpc.requestCallback<SayHelloResponse>
  ) {
    const resp = new SayHelloResponse();
    resp.setMessage(`hello ${call.request.getUser()}`);
    callback(null, resp);
  },
};

function main() {
  const server = new grpc.Server();
  server.addService(GreeterService, GreeterHandler);
  const bindto = `0.0.0.0:50051`;
  server.bind(bindto, grpc.ServerCredentials.createInsecure());
  console.log(`STARTING SERVER ON ${bindto}`);
  server.start();
}

main();
