# The significance of union and intersection types in Typescript.

### TypeScript's Union and Intersection types are very powerful tools for making sure that our code is type safe.

**_Union_** type gives the opportunity to use more than one type. We have to use "|" sign to separate types. If we try to use a different type of value there will be a compiler error.

**Example:**

```typescript
type NumberOrString = number | string;
let something = 123;
something = "Nothing";

something = [1, 2, 3]; // Error

// Literal type Union
type Role = "admin" | "member" | "guest";

const role1: Role = "admin";
const role2: Role = "guest";

const rule3: Role = "moderator"; // Error
```

In our example, we have used _Union_ type and made a type named "NumberOrString" and it can be either number or string. The variable something can only be a number or string, otherwise it will occur a compier error.

**_Intersection_** type gives the opportunity to combine more than one type. We have to use "&" sign to add types. If we intersect a type with another type, all the type will be merged.

**Example**

```typescript
// Normal user type
type User = {
  name: string;
  age: number;
  email: string;
  gender: "male" | "female";
};

// Admin type
type Admin = {
  role: "admin";
};

// Intersection of User & Admin types
type AdminUser = User & Admin;

const adminUser = {
  name: "Rockto",
  age: 7,
  email: "admin@gmail.com",
  gender: "male",
  role: "admin",
};
```

adminUser: AdminUser type has both User and Admin types properties.

_Using interface_

```typescript
interface User {
  name: string;
  age: number;
}

interface Admin {
  role: "moderator";
}

const adminUser: User & Admin = {
  name: "Monir",
  age: 9,
  role: "modarator",
};
```

_Lastly, Union and Intersection types make it very easy to combine multiple types together to make programmers life easier._
