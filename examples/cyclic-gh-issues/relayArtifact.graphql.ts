/**
 * @generated SignedSource<<258dd56e0cccae66fe6b65fc3fec63f0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type operationXQuery$variables = Record<PropertyKey, never>;
export type operationXQuery$data = {
  readonly organization: {
    readonly __typename: "Organization";
    readonly id: string;
    readonly repositories: {
      readonly __typename: "RepositoryConnection";
      readonly nodes: ReadonlyArray<{
        readonly __typename: "Repository";
        readonly createdAt: any;
        readonly homepageUrl: any | null | undefined;
        readonly id: string;
        readonly issues: {
          readonly __typename: "IssueConnection";
          readonly nodes: ReadonlyArray<{
            readonly __typename: "Issue";
            readonly createdAt: any;
            readonly id: string;
            readonly repository: {
              readonly __typename: "Repository";
              readonly id: string;
            };
            readonly title: string;
          } | null | undefined> | null | undefined;
        };
      } | null | undefined> | null | undefined;
    };
  } | null | undefined;
};
export type operationXQuery = {
  response: operationXQuery$data;
  variables: operationXQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "kind": "Literal",
  "name": "first",
  "value": 10
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v4 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "login",
        "value": "facebook"
      }
    ],
    "concreteType": "Organization",
    "kind": "LinkedField",
    "name": "organization",
    "plural": false,
    "selections": [
      (v0/*: any*/),
      (v1/*: any*/),
      {
        "alias": null,
        "args": [
          (v2/*: any*/)
        ],
        "concreteType": "RepositoryConnection",
        "kind": "LinkedField",
        "name": "repositories",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Repository",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "homepageUrl",
                "storageKey": null
              },
              {
                "alias": null,
                "args": [
                  (v2/*: any*/),
                  {
                    "kind": "Literal",
                    "name": "states",
                    "value": "OPEN"
                  }
                ],
                "concreteType": "IssueConnection",
                "kind": "LinkedField",
                "name": "issues",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Issue",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      (v0/*: any*/),
                      (v1/*: any*/),
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "title",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Repository",
                        "kind": "LinkedField",
                        "name": "repository",
                        "plural": false,
                        "selections": [
                          (v0/*: any*/),
                          (v1/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "issues(first:10,states:\"OPEN\")"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "repositories(first:10)"
      }
    ],
    "storageKey": "organization(login:\"facebook\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "operationXQuery",
    "selections": (v4/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "operationXQuery",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "fc0484e1cf373d63c4f5f5d1b0be3273",
    "id": null,
    "metadata": {},
    "name": "operationXQuery",
    "operationKind": "query",
    "text": "query operationXQuery {\n  organization(login: \"facebook\") {\n    __typename\n    id\n    repositories(first: 10) {\n      __typename\n      nodes {\n        __typename\n        id\n        createdAt\n        homepageUrl\n        issues(first: 10, states: OPEN) {\n          __typename\n          nodes {\n            __typename\n            id\n            createdAt\n            title\n            repository {\n              __typename\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "99dfc9b5b779d58e22784925a2422072";

export default node;
