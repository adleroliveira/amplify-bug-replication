import { type ClientSchema, a, defineData, defineFunction } from "@aws-amplify/backend";

export const customDataSourceFunction = defineFunction({ entry: './customDataSource.ts' });

const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization((allow) => [allow.guest()]),

  myCustomDataSource: 
  a.query()
  .returns(a.string())
  .handler(a.handler.function(customDataSourceFunction))
  .authorization((allow) => [allow.guest()]),
})
.authorization((allow) => [allow.resource(customDataSourceFunction)]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam',
  },
});