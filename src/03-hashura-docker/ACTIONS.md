# Create Action
- create and [action](http://localhost:8080/console/actions/manage)

- action definition
```graphql
type Mutation {
  sendEmail (
    email: String!
  ): emailOutput
}
```

- new types definition
```graphql
type emailOutput {
  success : Boolean!
  date : String
}
```
- handler `http://host.docker.internal:3000/sendEmail`
- _kind_ : **Asynchronous**


### Kickoff an action

```graphql
mutation SendMailMutation {
    sendEmail(email: "a@a.com") {
        success
        date
    }
}
```

### Subscribe to a task

```graphql
subscription SendMailSubscription {
    sendEmail(id: "b3516357-b981-48b1-8ccc-8a15f87a3cf3") {
        id
    }
}

```

### Manually query

```graphql
query SendMailQuery {
    sendEmail(id: "6383e44c-9ce4-40fe-9356-d5dbf0e3f9af") {
        created_at,
        errors,
        id,output {
            date,
            success,
        }
    }
}
```

