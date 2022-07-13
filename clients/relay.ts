import packageInfo from 'relay-runtime/package.json';

import type { 
  Snapshot,
  Disposable,
  OperationDescriptor,
  ConcreteRequest,
} from 'relay-runtime';
import {
  Environment,
  Network,
  Store,
  RecordSource,
  getRequest,
  createOperationDescriptor
} from 'relay-runtime'

import { Client, SingleExample, Observer, RawExample, ReadResult, FragmentId } from '../src';

class RelayObserver implements Observer {
  private _mostRecentResult?: any = null;
  private _disposable: Disposable;

  constructor(client: Environment, operation: OperationDescriptor) {
    const initialSnapshot = client.lookup(operation.fragment);
    this._onNewSnapshot(initialSnapshot);
    this._disposable = client.subscribe(initialSnapshot, this._onNewSnapshot);
  }

  _onNewSnapshot = (snapshot: Snapshot) => {
    this._mostRecentResult = {
      data: snapshot.data,
    };
  };

  unsubscribe() {
    return this._disposable.dispose();
  }

  mostRecentResult() {
    return this._mostRecentResult;
  }
}

interface RelayExample extends SingleExample {
  operation: any;
  variables?: object;
  relayArtifact: ConcreteRequest;
}

export class Relay extends Client {
  readFragment(example: SingleExample, id: FragmentId): Promise<ReadResult<object>> {
    throw new Error('Method not implemented.');
  }
  static metadata = {
    name: `Relay (v${(packageInfo as any).version})`,
  };

  private _client = new Environment({
    network: Network.create(async () => {
      throw new Error(`end-to-end queries are not supported`);
    }),
    store: new Store(new RecordSource()),
  });

  transformRawExample(rawExample: RawExample): RelayExample {
    const request = getRequest(rawExample.relayArtifact);
    const operation = createOperationDescriptor(request, rawExample.variables);

    return {
      operation,
      response: rawExample.response,
      variables: rawExample.variables,
      relayArtifact: rawExample.relayArtifact
    };
  }

  async read({ operation }: RelayExample) {
    // TODO-UPGRADE: Check if all data is missing 
    const res = this._client.lookup(operation.fragment);
    return (!res.data || res.isMissingData) ? { data: null } : { data: res.data };
  }

  async write({ operation, response }: RelayExample) {
    this._client.commitPayload(operation, response);
  }

  observe({ operation }: RelayExample) {
    return new RelayObserver(this._client, operation);
  }
}
