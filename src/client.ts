import * as grpc from "grpc";
import { GreeterClient } from "./protos/service_grpc_pb";
import { SayHelloRequest, SayHelloResponse } from "./protos/service_pb";

function main() {
  const client = new GreeterClient(
    "0.0.0.0:50051",
    grpc.credentials.createInsecure()
  );
  const request = new SayHelloRequest();
  request.setUser("Joshua");
  client.sayHello(
    request,
    (error: grpc.ServiceError, value: SayHelloResponse) => {
      if (error != null) {
        console.log(error);
        return;
      }
      console.log(value.getMessage());
    }
  );
}

main();
