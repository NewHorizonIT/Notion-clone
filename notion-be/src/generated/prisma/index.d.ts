/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Role
 *
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>;
/**
 * Model Permission
 *
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>;
/**
 * Model RolePermission
 *
 */
export type RolePermission =
  $Result.DefaultSelection<Prisma.$RolePermissionPayload>;
/**
 * Model UserRole
 *
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>;
/**
 * Model Page
 *
 */
export type Page = $Result.DefaultSelection<Prisma.$PagePayload>;
/**
 * Model UserShared
 *
 */
export type UserShared = $Result.DefaultSelection<Prisma.$UserSharedPayload>;
/**
 * Model Block
 *
 */
export type Block = $Result.DefaultSelection<Prisma.$BlockPayload>;
/**
 * Model Comment
 *
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>;
/**
 * Model Media
 *
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    "extends",
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Permissions
   * const permissions = await prisma.permission.findMany()
   * ```
   */
  get permission(): Prisma.PermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rolePermission`: Exposes CRUD operations for the **RolePermission** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more RolePermissions
   * const rolePermissions = await prisma.rolePermission.findMany()
   * ```
   */
  get rolePermission(): Prisma.RolePermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more UserRoles
   * const userRoles = await prisma.userRole.findMany()
   * ```
   */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.page`: Exposes CRUD operations for the **Page** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Pages
   * const pages = await prisma.page.findMany()
   * ```
   */
  get page(): Prisma.PageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userShared`: Exposes CRUD operations for the **UserShared** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more UserShareds
   * const userShareds = await prisma.userShared.findMany()
   * ```
   */
  get userShared(): Prisma.UserSharedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.block`: Exposes CRUD operations for the **Block** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Blocks
   * const blocks = await prisma.block.findMany()
   * ```
   */
  get block(): Prisma.BlockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Comments
   * const comments = await prisma.comment.findMany()
   * ```
   */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Media
   * const media = await prisma.media.findMany()
   * ```
   */
  get media(): Prisma.MediaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
      ? "Please either choose `select` or `omit`."
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: "User";
    Role: "Role";
    Permission: "Permission";
    RolePermission: "RolePermission";
    UserRole: "UserRole";
    Page: "Page";
    UserShared: "UserShared";
    Block: "Block";
    Comment: "Comment";
    Media: "Media";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | "user"
        | "role"
        | "permission"
        | "rolePermission"
        | "userRole"
        | "page"
        | "userShared"
        | "block"
        | "comment"
        | "media";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>;
        fields: Prisma.RoleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePayload>;
          };
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePayload>;
          };
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[];
          };
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePayload>;
          };
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[];
          };
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePayload>;
          };
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePayload>;
          };
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[];
          };
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePayload>;
          };
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRole>;
          };
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RoleGroupByOutputType>[];
          };
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>;
            result: $Utils.Optional<RoleCountAggregateOutputType> | number;
          };
        };
      };
      Permission: {
        payload: Prisma.$PermissionPayload<ExtArgs>;
        fields: Prisma.PermissionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>;
          };
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>;
          };
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[];
          };
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>;
          };
          createMany: {
            args: Prisma.PermissionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PermissionCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[];
          };
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>;
          };
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>;
          };
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PermissionUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[];
          };
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>;
          };
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePermission>;
          };
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PermissionGroupByOutputType>[];
          };
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<PermissionCountAggregateOutputType>
              | number;
          };
        };
      };
      RolePermission: {
        payload: Prisma.$RolePermissionPayload<ExtArgs>;
        fields: Prisma.RolePermissionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.RolePermissionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.RolePermissionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
          };
          findFirst: {
            args: Prisma.RolePermissionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.RolePermissionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
          };
          findMany: {
            args: Prisma.RolePermissionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[];
          };
          create: {
            args: Prisma.RolePermissionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
          };
          createMany: {
            args: Prisma.RolePermissionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.RolePermissionCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[];
          };
          delete: {
            args: Prisma.RolePermissionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
          };
          update: {
            args: Prisma.RolePermissionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
          };
          deleteMany: {
            args: Prisma.RolePermissionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.RolePermissionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.RolePermissionUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[];
          };
          upsert: {
            args: Prisma.RolePermissionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
          };
          aggregate: {
            args: Prisma.RolePermissionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRolePermission>;
          };
          groupBy: {
            args: Prisma.RolePermissionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RolePermissionGroupByOutputType>[];
          };
          count: {
            args: Prisma.RolePermissionCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<RolePermissionCountAggregateOutputType>
              | number;
          };
        };
      };
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>;
        fields: Prisma.UserRoleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>;
          };
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>;
          };
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[];
          };
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>;
          };
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserRoleCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[];
          };
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>;
          };
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>;
          };
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserRoleUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[];
          };
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>;
          };
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUserRole>;
          };
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserRoleGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>;
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number;
          };
        };
      };
      Page: {
        payload: Prisma.$PagePayload<ExtArgs>;
        fields: Prisma.PageFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PageFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PageFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PagePayload>;
          };
          findFirst: {
            args: Prisma.PageFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PageFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PagePayload>;
          };
          findMany: {
            args: Prisma.PageFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[];
          };
          create: {
            args: Prisma.PageCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PagePayload>;
          };
          createMany: {
            args: Prisma.PageCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PageCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[];
          };
          delete: {
            args: Prisma.PageDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PagePayload>;
          };
          update: {
            args: Prisma.PageUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PagePayload>;
          };
          deleteMany: {
            args: Prisma.PageDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PageUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PageUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[];
          };
          upsert: {
            args: Prisma.PageUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PagePayload>;
          };
          aggregate: {
            args: Prisma.PageAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePage>;
          };
          groupBy: {
            args: Prisma.PageGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PageGroupByOutputType>[];
          };
          count: {
            args: Prisma.PageCountArgs<ExtArgs>;
            result: $Utils.Optional<PageCountAggregateOutputType> | number;
          };
        };
      };
      UserShared: {
        payload: Prisma.$UserSharedPayload<ExtArgs>;
        fields: Prisma.UserSharedFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserSharedFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserSharedPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserSharedFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserSharedPayload>;
          };
          findFirst: {
            args: Prisma.UserSharedFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserSharedPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserSharedFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserSharedPayload>;
          };
          findMany: {
            args: Prisma.UserSharedFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserSharedPayload>[];
          };
          create: {
            args: Prisma.UserSharedCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserSharedPayload>;
          };
          createMany: {
            args: Prisma.UserSharedCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserSharedCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserSharedPayload>[];
          };
          delete: {
            args: Prisma.UserSharedDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserSharedPayload>;
          };
          update: {
            args: Prisma.UserSharedUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserSharedPayload>;
          };
          deleteMany: {
            args: Prisma.UserSharedDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserSharedUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserSharedUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserSharedPayload>[];
          };
          upsert: {
            args: Prisma.UserSharedUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserSharedPayload>;
          };
          aggregate: {
            args: Prisma.UserSharedAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUserShared>;
          };
          groupBy: {
            args: Prisma.UserSharedGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserSharedGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserSharedCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<UserSharedCountAggregateOutputType>
              | number;
          };
        };
      };
      Block: {
        payload: Prisma.$BlockPayload<ExtArgs>;
        fields: Prisma.BlockFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.BlockFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlockPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.BlockFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>;
          };
          findFirst: {
            args: Prisma.BlockFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlockPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.BlockFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>;
          };
          findMany: {
            args: Prisma.BlockFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>[];
          };
          create: {
            args: Prisma.BlockCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>;
          };
          createMany: {
            args: Prisma.BlockCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.BlockCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>[];
          };
          delete: {
            args: Prisma.BlockDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>;
          };
          update: {
            args: Prisma.BlockUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>;
          };
          deleteMany: {
            args: Prisma.BlockDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.BlockUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.BlockUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>[];
          };
          upsert: {
            args: Prisma.BlockUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>;
          };
          aggregate: {
            args: Prisma.BlockAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBlock>;
          };
          groupBy: {
            args: Prisma.BlockGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BlockGroupByOutputType>[];
          };
          count: {
            args: Prisma.BlockCountArgs<ExtArgs>;
            result: $Utils.Optional<BlockCountAggregateOutputType> | number;
          };
        };
      };
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>;
        fields: Prisma.CommentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[];
          };
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[];
          };
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[];
          };
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateComment>;
          };
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CommentGroupByOutputType>[];
          };
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>;
            result: $Utils.Optional<CommentCountAggregateOutputType> | number;
          };
        };
      };
      Media: {
        payload: Prisma.$MediaPayload<ExtArgs>;
        fields: Prisma.MediaFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.MediaFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.MediaFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>;
          };
          findFirst: {
            args: Prisma.MediaFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.MediaFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>;
          };
          findMany: {
            args: Prisma.MediaFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[];
          };
          create: {
            args: Prisma.MediaCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>;
          };
          createMany: {
            args: Prisma.MediaCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.MediaCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[];
          };
          delete: {
            args: Prisma.MediaDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>;
          };
          update: {
            args: Prisma.MediaUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>;
          };
          deleteMany: {
            args: Prisma.MediaDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.MediaUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.MediaUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[];
          };
          upsert: {
            args: Prisma.MediaUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>;
          };
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMedia>;
          };
          groupBy: {
            args: Prisma.MediaGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MediaGroupByOutputType>[];
          };
          count: {
            args: Prisma.MediaCountArgs<ExtArgs>;
            result: $Utils.Optional<MediaCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null;
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    role?: RoleOmit;
    permission?: PermissionOmit;
    rolePermission?: RolePermissionOmit;
    userRole?: UserRoleOmit;
    page?: PageOmit;
    userShared?: UserSharedOmit;
    block?: BlockOmit;
    comment?: CommentOmit;
    media?: MediaOmit;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T["level"] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    roles: number;
    sharedPages: number;
    pages: number;
    comments: number;
    media: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    roles?: boolean | UserCountOutputTypeCountRolesArgs;
    sharedPages?: boolean | UserCountOutputTypeCountSharedPagesArgs;
    pages?: boolean | UserCountOutputTypeCountPagesArgs;
    comments?: boolean | UserCountOutputTypeCountCommentsArgs;
    media?: boolean | UserCountOutputTypeCountMediaArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRolesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserRoleWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSharedPagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserSharedWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PageWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CommentWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMediaArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MediaWhereInput;
  };

  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number;
    permissions: number;
    sharedPages: number;
  };

  export type RoleCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs;
    permissions?: boolean | RoleCountOutputTypeCountPermissionsArgs;
    sharedPages?: boolean | RoleCountOutputTypeCountSharedPagesArgs;
  };

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserRoleWhereInput;
  };

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountPermissionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RolePermissionWhereInput;
  };

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountSharedPagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserSharedWhereInput;
  };

  /**
   * Count Type PermissionCountOutputType
   */

  export type PermissionCountOutputType = {
    roles: number;
  };

  export type PermissionCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    roles?: boolean | PermissionCountOutputTypeCountRolesArgs;
  };

  // Custom InputTypes
  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PermissionCountOutputType
     */
    select?: PermissionCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeCountRolesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RolePermissionWhereInput;
  };

  /**
   * Count Type PageCountOutputType
   */

  export type PageCountOutputType = {
    blocks: number;
    sharedUsers: number;
  };

  export type PageCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    blocks?: boolean | PageCountOutputTypeCountBlocksArgs;
    sharedUsers?: boolean | PageCountOutputTypeCountSharedUsersArgs;
  };

  // Custom InputTypes
  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PageCountOutputType
     */
    select?: PageCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeCountBlocksArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BlockWhereInput;
  };

  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeCountSharedUsersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserSharedWhereInput;
  };

  /**
   * Count Type BlockCountOutputType
   */

  export type BlockCountOutputType = {
    children: number;
    comments: number;
  };

  export type BlockCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    children?: boolean | BlockCountOutputTypeCountChildrenArgs;
    comments?: boolean | BlockCountOutputTypeCountCommentsArgs;
  };

  // Custom InputTypes
  /**
   * BlockCountOutputType without action
   */
  export type BlockCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BlockCountOutputType
     */
    select?: BlockCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * BlockCountOutputType without action
   */
  export type BlockCountOutputTypeCountChildrenArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BlockWhereInput;
  };

  /**
   * BlockCountOutputType without action
   */
  export type BlockCountOutputTypeCountCommentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CommentWhereInput;
  };

  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    replies: number;
  };

  export type CommentCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    replies?: boolean | CommentCountOutputTypeCountRepliesArgs;
  };

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountRepliesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CommentWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    username: string | null;
    email: string | null;
    passwordHash: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    username: string | null;
    email: string | null;
    passwordHash: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    username: number;
    email: number;
    passwordHash: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    username?: true;
    email?: true;
    passwordHash?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    username?: true;
    email?: true;
    passwordHash?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    username?: true;
    email?: true;
    passwordHash?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    username: string;
    email: string;
    passwordHash: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      username?: boolean;
      email?: boolean;
      passwordHash?: boolean;
      isActive?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      roles?: boolean | User$rolesArgs<ExtArgs>;
      sharedPages?: boolean | User$sharedPagesArgs<ExtArgs>;
      pages?: boolean | User$pagesArgs<ExtArgs>;
      comments?: boolean | User$commentsArgs<ExtArgs>;
      media?: boolean | User$mediaArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      username?: boolean;
      email?: boolean;
      passwordHash?: boolean;
      isActive?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      username?: boolean;
      email?: boolean;
      passwordHash?: boolean;
      isActive?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectScalar = {
    id?: boolean;
    username?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "username"
    | "email"
    | "passwordHash"
    | "isActive"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["user"]
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    roles?: boolean | User$rolesArgs<ExtArgs>;
    sharedPages?: boolean | User$sharedPagesArgs<ExtArgs>;
    pages?: boolean | User$pagesArgs<ExtArgs>;
    comments?: boolean | User$commentsArgs<ExtArgs>;
    media?: boolean | User$mediaArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "User";
    objects: {
      roles: Prisma.$UserRolePayload<ExtArgs>[];
      sharedPages: Prisma.$UserSharedPayload<ExtArgs>[];
      pages: Prisma.$PagePayload<ExtArgs>[];
      comments: Prisma.$CommentPayload<ExtArgs>[];
      media: Prisma.$MediaPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        username: string;
        email: string;
        passwordHash: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["user"]
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["User"];
      meta: { name: "User" };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs["orderBy"] }
        : { orderBy?: UserGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    roles<T extends User$rolesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$rolesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UserRolePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    sharedPages<T extends User$sharedPagesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$sharedPagesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UserSharedPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    pages<T extends User$pagesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$pagesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PagePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    comments<T extends User$commentsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$commentsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CommentPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    media<T extends User$mediaArgs<ExtArgs> = {}>(
      args?: Subset<T, User$mediaArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$MediaPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", "String">;
    readonly username: FieldRef<"User", "String">;
    readonly email: FieldRef<"User", "String">;
    readonly passwordHash: FieldRef<"User", "String">;
    readonly isActive: FieldRef<"User", "Boolean">;
    readonly createdAt: FieldRef<"User", "DateTime">;
    readonly updatedAt: FieldRef<"User", "DateTime">;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.roles
   */
  export type User$rolesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null;
    where?: UserRoleWhereInput;
    orderBy?:
      | UserRoleOrderByWithRelationInput
      | UserRoleOrderByWithRelationInput[];
    cursor?: UserRoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[];
  };

  /**
   * User.sharedPages
   */
  export type User$sharedPagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserShared
     */
    select?: UserSharedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserShared
     */
    omit?: UserSharedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSharedInclude<ExtArgs> | null;
    where?: UserSharedWhereInput;
    orderBy?:
      | UserSharedOrderByWithRelationInput
      | UserSharedOrderByWithRelationInput[];
    cursor?: UserSharedWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserSharedScalarFieldEnum | UserSharedScalarFieldEnum[];
  };

  /**
   * User.pages
   */
  export type User$pagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null;
    where?: PageWhereInput;
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[];
    cursor?: PageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[];
  };

  /**
   * User.comments
   */
  export type User$commentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    where?: CommentWhereInput;
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    cursor?: CommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * User.media
   */
  export type User$mediaArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null;
    where?: MediaWhereInput;
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[];
    cursor?: MediaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null;
    _min: RoleMinAggregateOutputType | null;
    _max: RoleMaxAggregateOutputType | null;
  };

  export type RoleMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type RoleMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type RoleCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type RoleMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type RoleMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type RoleCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type RoleAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Roles
     **/
    _count?: true | RoleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RoleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RoleMaxAggregateInputType;
  };

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
    [P in keyof T & keyof AggregateRole]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>;
  };

  export type RoleGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RoleWhereInput;
    orderBy?:
      | RoleOrderByWithAggregationInput
      | RoleOrderByWithAggregationInput[];
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum;
    having?: RoleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RoleCountAggregateInputType | true;
    _min?: RoleMinAggregateInputType;
    _max?: RoleMaxAggregateInputType;
  };

  export type RoleGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: RoleCountAggregateOutputType | null;
    _min: RoleMinAggregateOutputType | null;
    _max: RoleMaxAggregateOutputType | null;
  };

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof RoleGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
          : GetScalarType<T[P], RoleGroupByOutputType[P]>;
      }
    >
  >;

  export type RoleSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      users?: boolean | Role$usersArgs<ExtArgs>;
      permissions?: boolean | Role$permissionsArgs<ExtArgs>;
      sharedPages?: boolean | Role$sharedPagesArgs<ExtArgs>;
      _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["role"]
  >;

  export type RoleSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["role"]
  >;

  export type RoleSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["role"]
  >;

  export type RoleSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type RoleOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "name" | "description" | "createdAt" | "updatedAt",
    ExtArgs["result"]["role"]
  >;
  export type RoleInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | Role$usersArgs<ExtArgs>;
    permissions?: boolean | Role$permissionsArgs<ExtArgs>;
    sharedPages?: boolean | Role$sharedPagesArgs<ExtArgs>;
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type RoleIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type RoleIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $RolePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Role";
    objects: {
      users: Prisma.$UserRolePayload<ExtArgs>[];
      permissions: Prisma.$RolePermissionPayload<ExtArgs>[];
      sharedPages: Prisma.$UserSharedPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["role"]
    >;
    composites: {};
  };

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> =
    $Result.GetResult<Prisma.$RolePayload, S>;

  type RoleCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<RoleFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: RoleCountAggregateInputType | true;
  };

  export interface RoleDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Role"];
      meta: { name: "Role" };
    };
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(
      args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>,
    ): Prisma__RoleClient<
      $Result.GetResult<
        Prisma.$RolePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(
      args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__RoleClient<
      $Result.GetResult<
        Prisma.$RolePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(
      args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>,
    ): Prisma__RoleClient<
      $Result.GetResult<
        Prisma.$RolePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__RoleClient<
      $Result.GetResult<
        Prisma.$RolePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     *
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RoleFindManyArgs>(
      args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RolePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     *
     */
    create<T extends RoleCreateArgs>(
      args: SelectSubset<T, RoleCreateArgs<ExtArgs>>,
    ): Prisma__RoleClient<
      $Result.GetResult<
        Prisma.$RolePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RoleCreateManyArgs>(
      args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(
      args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RolePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     *
     */
    delete<T extends RoleDeleteArgs>(
      args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>,
    ): Prisma__RoleClient<
      $Result.GetResult<
        Prisma.$RolePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RoleUpdateArgs>(
      args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>,
    ): Prisma__RoleClient<
      $Result.GetResult<
        Prisma.$RolePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RoleDeleteManyArgs>(
      args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RoleUpdateManyArgs>(
      args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(
      args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RolePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(
      args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>,
    ): Prisma__RoleClient<
      $Result.GetResult<
        Prisma.$RolePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
     **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], RoleCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends RoleAggregateArgs>(
      args: Subset<T, RoleAggregateArgs>,
    ): Prisma.PrismaPromise<GetRoleAggregateType<T>>;

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs["orderBy"] }
        : { orderBy?: RoleGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetRoleGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Role model
     */
    readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Role$usersArgs<ExtArgs> = {}>(
      args?: Subset<T, Role$usersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UserRolePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    permissions<T extends Role$permissionsArgs<ExtArgs> = {}>(
      args?: Subset<T, Role$permissionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$RolePermissionPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    sharedPages<T extends Role$sharedPagesArgs<ExtArgs> = {}>(
      args?: Subset<T, Role$sharedPagesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UserSharedPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", "String">;
    readonly name: FieldRef<"Role", "String">;
    readonly description: FieldRef<"Role", "String">;
    readonly createdAt: FieldRef<"Role", "DateTime">;
    readonly updatedAt: FieldRef<"Role", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null;
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput;
  };

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null;
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput;
  };

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null;
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[];
  };

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null;
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[];
  };

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null;
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Roles.
     */
    skip?: number;
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[];
  };

  /**
   * Role create
   */
  export type RoleCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null;
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>;
  };

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null;
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Role update
   */
  export type RoleUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null;
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>;
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput;
  };

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>;
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput;
    /**
     * Limit how many Roles to update.
     */
    limit?: number;
  };

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null;
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>;
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput;
    /**
     * Limit how many Roles to update.
     */
    limit?: number;
  };

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null;
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput;
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>;
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>;
  };

  /**
   * Role delete
   */
  export type RoleDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null;
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput;
  };

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput;
    /**
     * Limit how many Roles to delete.
     */
    limit?: number;
  };

  /**
   * Role.users
   */
  export type Role$usersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null;
    where?: UserRoleWhereInput;
    orderBy?:
      | UserRoleOrderByWithRelationInput
      | UserRoleOrderByWithRelationInput[];
    cursor?: UserRoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[];
  };

  /**
   * Role.permissions
   */
  export type Role$permissionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null;
    where?: RolePermissionWhereInput;
    orderBy?:
      | RolePermissionOrderByWithRelationInput
      | RolePermissionOrderByWithRelationInput[];
    cursor?: RolePermissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[];
  };

  /**
   * Role.sharedPages
   */
  export type Role$sharedPagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserShared
     */
    select?: UserSharedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserShared
     */
    omit?: UserSharedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSharedInclude<ExtArgs> | null;
    where?: UserSharedWhereInput;
    orderBy?:
      | UserSharedOrderByWithRelationInput
      | UserSharedOrderByWithRelationInput[];
    cursor?: UserSharedWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserSharedScalarFieldEnum | UserSharedScalarFieldEnum[];
  };

  /**
   * Role without action
   */
  export type RoleDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null;
  };

  /**
   * Model Permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null;
    _min: PermissionMinAggregateOutputType | null;
    _max: PermissionMaxAggregateOutputType | null;
  };

  export type PermissionMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type PermissionMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type PermissionCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type PermissionMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type PermissionMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type PermissionCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type PermissionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Permissions to fetch.
     */
    orderBy?:
      | PermissionOrderByWithRelationInput
      | PermissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Permissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Permissions
     **/
    _count?: true | PermissionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PermissionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PermissionMaxAggregateInputType;
  };

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
    [P in keyof T & keyof AggregatePermission]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>;
  };

  export type PermissionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PermissionWhereInput;
    orderBy?:
      | PermissionOrderByWithAggregationInput
      | PermissionOrderByWithAggregationInput[];
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum;
    having?: PermissionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PermissionCountAggregateInputType | true;
    _min?: PermissionMinAggregateInputType;
    _max?: PermissionMaxAggregateInputType;
  };

  export type PermissionGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PermissionCountAggregateOutputType | null;
    _min: PermissionMinAggregateOutputType | null;
    _max: PermissionMaxAggregateOutputType | null;
  };

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<PermissionGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof PermissionGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>;
        }
      >
    >;

  export type PermissionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      roles?: boolean | Permission$rolesArgs<ExtArgs>;
      _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["permission"]
  >;

  export type PermissionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["permission"]
  >;

  export type PermissionSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["permission"]
  >;

  export type PermissionSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type PermissionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "name" | "description" | "createdAt" | "updatedAt",
    ExtArgs["result"]["permission"]
  >;
  export type PermissionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    roles?: boolean | Permission$rolesArgs<ExtArgs>;
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type PermissionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type PermissionIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $PermissionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Permission";
    objects: {
      roles: Prisma.$RolePermissionPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["permission"]
    >;
    composites: {};
  };

  type PermissionGetPayload<
    S extends boolean | null | undefined | PermissionDefaultArgs,
  > = $Result.GetResult<Prisma.$PermissionPayload, S>;

  type PermissionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    PermissionFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: PermissionCountAggregateInputType | true;
  };

  export interface PermissionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Permission"];
      meta: { name: "Permission" };
    };
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionFindUniqueArgs>(
      args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>,
    ): Prisma__PermissionClient<
      $Result.GetResult<
        Prisma.$PermissionPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__PermissionClient<
      $Result.GetResult<
        Prisma.$PermissionPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionFindFirstArgs>(
      args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>,
    ): Prisma__PermissionClient<
      $Result.GetResult<
        Prisma.$PermissionPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__PermissionClient<
      $Result.GetResult<
        Prisma.$PermissionPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     *
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PermissionFindManyArgs>(
      args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PermissionPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     *
     */
    create<T extends PermissionCreateArgs>(
      args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>,
    ): Prisma__PermissionClient<
      $Result.GetResult<
        Prisma.$PermissionPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Permissions.
     * @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PermissionCreateManyArgs>(
      args?: SelectSubset<T, PermissionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Permissions and returns the data saved in the database.
     * @param {PermissionCreateManyAndReturnArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PermissionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PermissionCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PermissionPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     *
     */
    delete<T extends PermissionDeleteArgs>(
      args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>,
    ): Prisma__PermissionClient<
      $Result.GetResult<
        Prisma.$PermissionPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PermissionUpdateArgs>(
      args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>,
    ): Prisma__PermissionClient<
      $Result.GetResult<
        Prisma.$PermissionPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PermissionDeleteManyArgs>(
      args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PermissionUpdateManyArgs>(
      args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Permissions and returns the data updated in the database.
     * @param {PermissionUpdateManyAndReturnArgs} args - Arguments to update many Permissions.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PermissionUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PermissionUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PermissionPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends PermissionUpsertArgs>(
      args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>,
    ): Prisma__PermissionClient<
      $Result.GetResult<
        Prisma.$PermissionPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
     **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], PermissionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PermissionAggregateArgs>(
      args: Subset<T, PermissionAggregateArgs>,
    ): Prisma.PrismaPromise<GetPermissionAggregateType<T>>;

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs["orderBy"] }
        : { orderBy?: PermissionGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetPermissionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Permission model
     */
    readonly fields: PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    roles<T extends Permission$rolesArgs<ExtArgs> = {}>(
      args?: Subset<T, Permission$rolesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$RolePermissionPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Permission model
   */
  interface PermissionFieldRefs {
    readonly id: FieldRef<"Permission", "String">;
    readonly name: FieldRef<"Permission", "String">;
    readonly description: FieldRef<"Permission", "String">;
    readonly createdAt: FieldRef<"Permission", "DateTime">;
    readonly updatedAt: FieldRef<"Permission", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null;
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput;
  };

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null;
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput;
  };

  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null;
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Permissions to fetch.
     */
    orderBy?:
      | PermissionOrderByWithRelationInput
      | PermissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Permissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[];
  };

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null;
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Permissions to fetch.
     */
    orderBy?:
      | PermissionOrderByWithRelationInput
      | PermissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Permissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[];
  };

  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null;
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Permissions to fetch.
     */
    orderBy?:
      | PermissionOrderByWithRelationInput
      | PermissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Permissions.
     */
    skip?: number;
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[];
  };

  /**
   * Permission create
   */
  export type PermissionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null;
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>;
  };

  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Permission createManyAndReturn
   */
  export type PermissionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null;
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Permission update
   */
  export type PermissionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null;
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>;
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput;
  };

  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<
      PermissionUpdateManyMutationInput,
      PermissionUncheckedUpdateManyInput
    >;
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput;
    /**
     * Limit how many Permissions to update.
     */
    limit?: number;
  };

  /**
   * Permission updateManyAndReturn
   */
  export type PermissionUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null;
    /**
     * The data used to update Permissions.
     */
    data: XOR<
      PermissionUpdateManyMutationInput,
      PermissionUncheckedUpdateManyInput
    >;
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput;
    /**
     * Limit how many Permissions to update.
     */
    limit?: number;
  };

  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null;
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput;
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>;
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>;
  };

  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null;
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput;
  };

  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput;
    /**
     * Limit how many Permissions to delete.
     */
    limit?: number;
  };

  /**
   * Permission.roles
   */
  export type Permission$rolesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null;
    where?: RolePermissionWhereInput;
    orderBy?:
      | RolePermissionOrderByWithRelationInput
      | RolePermissionOrderByWithRelationInput[];
    cursor?: RolePermissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[];
  };

  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null;
  };

  /**
   * Model RolePermission
   */

  export type AggregateRolePermission = {
    _count: RolePermissionCountAggregateOutputType | null;
    _min: RolePermissionMinAggregateOutputType | null;
    _max: RolePermissionMaxAggregateOutputType | null;
  };

  export type RolePermissionMinAggregateOutputType = {
    roleId: string | null;
    permissionId: string | null;
  };

  export type RolePermissionMaxAggregateOutputType = {
    roleId: string | null;
    permissionId: string | null;
  };

  export type RolePermissionCountAggregateOutputType = {
    roleId: number;
    permissionId: number;
    _all: number;
  };

  export type RolePermissionMinAggregateInputType = {
    roleId?: true;
    permissionId?: true;
  };

  export type RolePermissionMaxAggregateInputType = {
    roleId?: true;
    permissionId?: true;
  };

  export type RolePermissionCountAggregateInputType = {
    roleId?: true;
    permissionId?: true;
    _all?: true;
  };

  export type RolePermissionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which RolePermission to aggregate.
     */
    where?: RolePermissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?:
      | RolePermissionOrderByWithRelationInput
      | RolePermissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: RolePermissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RolePermissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned RolePermissions
     **/
    _count?: true | RolePermissionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RolePermissionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RolePermissionMaxAggregateInputType;
  };

  export type GetRolePermissionAggregateType<
    T extends RolePermissionAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateRolePermission]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRolePermission[P]>
      : GetScalarType<T[P], AggregateRolePermission[P]>;
  };

  export type RolePermissionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RolePermissionWhereInput;
    orderBy?:
      | RolePermissionOrderByWithAggregationInput
      | RolePermissionOrderByWithAggregationInput[];
    by: RolePermissionScalarFieldEnum[] | RolePermissionScalarFieldEnum;
    having?: RolePermissionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RolePermissionCountAggregateInputType | true;
    _min?: RolePermissionMinAggregateInputType;
    _max?: RolePermissionMaxAggregateInputType;
  };

  export type RolePermissionGroupByOutputType = {
    roleId: string;
    permissionId: string;
    _count: RolePermissionCountAggregateOutputType | null;
    _min: RolePermissionMinAggregateOutputType | null;
    _max: RolePermissionMaxAggregateOutputType | null;
  };

  type GetRolePermissionGroupByPayload<T extends RolePermissionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<RolePermissionGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof RolePermissionGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolePermissionGroupByOutputType[P]>
            : GetScalarType<T[P], RolePermissionGroupByOutputType[P]>;
        }
      >
    >;

  export type RolePermissionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      roleId?: boolean;
      permissionId?: boolean;
      role?: boolean | RoleDefaultArgs<ExtArgs>;
      permission?: boolean | PermissionDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["rolePermission"]
  >;

  export type RolePermissionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      roleId?: boolean;
      permissionId?: boolean;
      role?: boolean | RoleDefaultArgs<ExtArgs>;
      permission?: boolean | PermissionDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["rolePermission"]
  >;

  export type RolePermissionSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      roleId?: boolean;
      permissionId?: boolean;
      role?: boolean | RoleDefaultArgs<ExtArgs>;
      permission?: boolean | PermissionDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["rolePermission"]
  >;

  export type RolePermissionSelectScalar = {
    roleId?: boolean;
    permissionId?: boolean;
  };

  export type RolePermissionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "roleId" | "permissionId",
    ExtArgs["result"]["rolePermission"]
  >;
  export type RolePermissionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    role?: boolean | RoleDefaultArgs<ExtArgs>;
    permission?: boolean | PermissionDefaultArgs<ExtArgs>;
  };
  export type RolePermissionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    role?: boolean | RoleDefaultArgs<ExtArgs>;
    permission?: boolean | PermissionDefaultArgs<ExtArgs>;
  };
  export type RolePermissionIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    role?: boolean | RoleDefaultArgs<ExtArgs>;
    permission?: boolean | PermissionDefaultArgs<ExtArgs>;
  };

  export type $RolePermissionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "RolePermission";
    objects: {
      role: Prisma.$RolePayload<ExtArgs>;
      permission: Prisma.$PermissionPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        roleId: string;
        permissionId: string;
      },
      ExtArgs["result"]["rolePermission"]
    >;
    composites: {};
  };

  type RolePermissionGetPayload<
    S extends boolean | null | undefined | RolePermissionDefaultArgs,
  > = $Result.GetResult<Prisma.$RolePermissionPayload, S>;

  type RolePermissionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    RolePermissionFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: RolePermissionCountAggregateInputType | true;
  };

  export interface RolePermissionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["RolePermission"];
      meta: { name: "RolePermission" };
    };
    /**
     * Find zero or one RolePermission that matches the filter.
     * @param {RolePermissionFindUniqueArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolePermissionFindUniqueArgs>(
      args: SelectSubset<T, RolePermissionFindUniqueArgs<ExtArgs>>,
    ): Prisma__RolePermissionClient<
      $Result.GetResult<
        Prisma.$RolePermissionPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one RolePermission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolePermissionFindUniqueOrThrowArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolePermissionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, RolePermissionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__RolePermissionClient<
      $Result.GetResult<
        Prisma.$RolePermissionPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first RolePermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindFirstArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolePermissionFindFirstArgs>(
      args?: SelectSubset<T, RolePermissionFindFirstArgs<ExtArgs>>,
    ): Prisma__RolePermissionClient<
      $Result.GetResult<
        Prisma.$RolePermissionPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first RolePermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindFirstOrThrowArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolePermissionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RolePermissionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__RolePermissionClient<
      $Result.GetResult<
        Prisma.$RolePermissionPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more RolePermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolePermissions
     * const rolePermissions = await prisma.rolePermission.findMany()
     *
     * // Get first 10 RolePermissions
     * const rolePermissions = await prisma.rolePermission.findMany({ take: 10 })
     *
     * // Only select the `roleId`
     * const rolePermissionWithRoleIdOnly = await prisma.rolePermission.findMany({ select: { roleId: true } })
     *
     */
    findMany<T extends RolePermissionFindManyArgs>(
      args?: SelectSubset<T, RolePermissionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RolePermissionPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a RolePermission.
     * @param {RolePermissionCreateArgs} args - Arguments to create a RolePermission.
     * @example
     * // Create one RolePermission
     * const RolePermission = await prisma.rolePermission.create({
     *   data: {
     *     // ... data to create a RolePermission
     *   }
     * })
     *
     */
    create<T extends RolePermissionCreateArgs>(
      args: SelectSubset<T, RolePermissionCreateArgs<ExtArgs>>,
    ): Prisma__RolePermissionClient<
      $Result.GetResult<
        Prisma.$RolePermissionPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many RolePermissions.
     * @param {RolePermissionCreateManyArgs} args - Arguments to create many RolePermissions.
     * @example
     * // Create many RolePermissions
     * const rolePermission = await prisma.rolePermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RolePermissionCreateManyArgs>(
      args?: SelectSubset<T, RolePermissionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many RolePermissions and returns the data saved in the database.
     * @param {RolePermissionCreateManyAndReturnArgs} args - Arguments to create many RolePermissions.
     * @example
     * // Create many RolePermissions
     * const rolePermission = await prisma.rolePermission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many RolePermissions and only return the `roleId`
     * const rolePermissionWithRoleIdOnly = await prisma.rolePermission.createManyAndReturn({
     *   select: { roleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RolePermissionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, RolePermissionCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RolePermissionPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a RolePermission.
     * @param {RolePermissionDeleteArgs} args - Arguments to delete one RolePermission.
     * @example
     * // Delete one RolePermission
     * const RolePermission = await prisma.rolePermission.delete({
     *   where: {
     *     // ... filter to delete one RolePermission
     *   }
     * })
     *
     */
    delete<T extends RolePermissionDeleteArgs>(
      args: SelectSubset<T, RolePermissionDeleteArgs<ExtArgs>>,
    ): Prisma__RolePermissionClient<
      $Result.GetResult<
        Prisma.$RolePermissionPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one RolePermission.
     * @param {RolePermissionUpdateArgs} args - Arguments to update one RolePermission.
     * @example
     * // Update one RolePermission
     * const rolePermission = await prisma.rolePermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RolePermissionUpdateArgs>(
      args: SelectSubset<T, RolePermissionUpdateArgs<ExtArgs>>,
    ): Prisma__RolePermissionClient<
      $Result.GetResult<
        Prisma.$RolePermissionPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more RolePermissions.
     * @param {RolePermissionDeleteManyArgs} args - Arguments to filter RolePermissions to delete.
     * @example
     * // Delete a few RolePermissions
     * const { count } = await prisma.rolePermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RolePermissionDeleteManyArgs>(
      args?: SelectSubset<T, RolePermissionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolePermissions
     * const rolePermission = await prisma.rolePermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RolePermissionUpdateManyArgs>(
      args: SelectSubset<T, RolePermissionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more RolePermissions and returns the data updated in the database.
     * @param {RolePermissionUpdateManyAndReturnArgs} args - Arguments to update many RolePermissions.
     * @example
     * // Update many RolePermissions
     * const rolePermission = await prisma.rolePermission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more RolePermissions and only return the `roleId`
     * const rolePermissionWithRoleIdOnly = await prisma.rolePermission.updateManyAndReturn({
     *   select: { roleId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends RolePermissionUpdateManyAndReturnArgs>(
      args: SelectSubset<T, RolePermissionUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RolePermissionPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one RolePermission.
     * @param {RolePermissionUpsertArgs} args - Arguments to update or create a RolePermission.
     * @example
     * // Update or create a RolePermission
     * const rolePermission = await prisma.rolePermission.upsert({
     *   create: {
     *     // ... data to create a RolePermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolePermission we want to update
     *   }
     * })
     */
    upsert<T extends RolePermissionUpsertArgs>(
      args: SelectSubset<T, RolePermissionUpsertArgs<ExtArgs>>,
    ): Prisma__RolePermissionClient<
      $Result.GetResult<
        Prisma.$RolePermissionPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionCountArgs} args - Arguments to filter RolePermissions to count.
     * @example
     * // Count the number of RolePermissions
     * const count = await prisma.rolePermission.count({
     *   where: {
     *     // ... the filter for the RolePermissions we want to count
     *   }
     * })
     **/
    count<T extends RolePermissionCountArgs>(
      args?: Subset<T, RolePermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], RolePermissionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends RolePermissionAggregateArgs>(
      args: Subset<T, RolePermissionAggregateArgs>,
    ): Prisma.PrismaPromise<GetRolePermissionAggregateType<T>>;

    /**
     * Group by RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends RolePermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolePermissionGroupByArgs["orderBy"] }
        : { orderBy?: RolePermissionGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, RolePermissionGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetRolePermissionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the RolePermission model
     */
    readonly fields: RolePermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RolePermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolePermissionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, RoleDefaultArgs<ExtArgs>>,
    ): Prisma__RoleClient<
      | $Result.GetResult<
          Prisma.$RolePayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    permission<T extends PermissionDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PermissionDefaultArgs<ExtArgs>>,
    ): Prisma__PermissionClient<
      | $Result.GetResult<
          Prisma.$PermissionPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the RolePermission model
   */
  interface RolePermissionFieldRefs {
    readonly roleId: FieldRef<"RolePermission", "String">;
    readonly permissionId: FieldRef<"RolePermission", "String">;
  }

  // Custom InputTypes
  /**
   * RolePermission findUnique
   */
  export type RolePermissionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null;
    /**
     * Filter, which RolePermission to fetch.
     */
    where: RolePermissionWhereUniqueInput;
  };

  /**
   * RolePermission findUniqueOrThrow
   */
  export type RolePermissionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null;
    /**
     * Filter, which RolePermission to fetch.
     */
    where: RolePermissionWhereUniqueInput;
  };

  /**
   * RolePermission findFirst
   */
  export type RolePermissionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null;
    /**
     * Filter, which RolePermission to fetch.
     */
    where?: RolePermissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?:
      | RolePermissionOrderByWithRelationInput
      | RolePermissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RolePermissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[];
  };

  /**
   * RolePermission findFirstOrThrow
   */
  export type RolePermissionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null;
    /**
     * Filter, which RolePermission to fetch.
     */
    where?: RolePermissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?:
      | RolePermissionOrderByWithRelationInput
      | RolePermissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RolePermissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[];
  };

  /**
   * RolePermission findMany
   */
  export type RolePermissionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null;
    /**
     * Filter, which RolePermissions to fetch.
     */
    where?: RolePermissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?:
      | RolePermissionOrderByWithRelationInput
      | RolePermissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RolePermissions.
     */
    skip?: number;
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[];
  };

  /**
   * RolePermission create
   */
  export type RolePermissionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null;
    /**
     * The data needed to create a RolePermission.
     */
    data: XOR<RolePermissionCreateInput, RolePermissionUncheckedCreateInput>;
  };

  /**
   * RolePermission createMany
   */
  export type RolePermissionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many RolePermissions.
     */
    data: RolePermissionCreateManyInput | RolePermissionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * RolePermission createManyAndReturn
   */
  export type RolePermissionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null;
    /**
     * The data used to create many RolePermissions.
     */
    data: RolePermissionCreateManyInput | RolePermissionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * RolePermission update
   */
  export type RolePermissionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null;
    /**
     * The data needed to update a RolePermission.
     */
    data: XOR<RolePermissionUpdateInput, RolePermissionUncheckedUpdateInput>;
    /**
     * Choose, which RolePermission to update.
     */
    where: RolePermissionWhereUniqueInput;
  };

  /**
   * RolePermission updateMany
   */
  export type RolePermissionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update RolePermissions.
     */
    data: XOR<
      RolePermissionUpdateManyMutationInput,
      RolePermissionUncheckedUpdateManyInput
    >;
    /**
     * Filter which RolePermissions to update
     */
    where?: RolePermissionWhereInput;
    /**
     * Limit how many RolePermissions to update.
     */
    limit?: number;
  };

  /**
   * RolePermission updateManyAndReturn
   */
  export type RolePermissionUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null;
    /**
     * The data used to update RolePermissions.
     */
    data: XOR<
      RolePermissionUpdateManyMutationInput,
      RolePermissionUncheckedUpdateManyInput
    >;
    /**
     * Filter which RolePermissions to update
     */
    where?: RolePermissionWhereInput;
    /**
     * Limit how many RolePermissions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * RolePermission upsert
   */
  export type RolePermissionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null;
    /**
     * The filter to search for the RolePermission to update in case it exists.
     */
    where: RolePermissionWhereUniqueInput;
    /**
     * In case the RolePermission found by the `where` argument doesn't exist, create a new RolePermission with this data.
     */
    create: XOR<RolePermissionCreateInput, RolePermissionUncheckedCreateInput>;
    /**
     * In case the RolePermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolePermissionUpdateInput, RolePermissionUncheckedUpdateInput>;
  };

  /**
   * RolePermission delete
   */
  export type RolePermissionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null;
    /**
     * Filter which RolePermission to delete.
     */
    where: RolePermissionWhereUniqueInput;
  };

  /**
   * RolePermission deleteMany
   */
  export type RolePermissionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which RolePermissions to delete
     */
    where?: RolePermissionWhereInput;
    /**
     * Limit how many RolePermissions to delete.
     */
    limit?: number;
  };

  /**
   * RolePermission without action
   */
  export type RolePermissionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null;
  };

  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null;
    _min: UserRoleMinAggregateOutputType | null;
    _max: UserRoleMaxAggregateOutputType | null;
  };

  export type UserRoleMinAggregateOutputType = {
    userId: string | null;
    roleId: string | null;
  };

  export type UserRoleMaxAggregateOutputType = {
    userId: string | null;
    roleId: string | null;
  };

  export type UserRoleCountAggregateOutputType = {
    userId: number;
    roleId: number;
    _all: number;
  };

  export type UserRoleMinAggregateInputType = {
    userId?: true;
    roleId?: true;
  };

  export type UserRoleMaxAggregateInputType = {
    userId?: true;
    roleId?: true;
  };

  export type UserRoleCountAggregateInputType = {
    userId?: true;
    roleId?: true;
    _all?: true;
  };

  export type UserRoleAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserRoles to fetch.
     */
    orderBy?:
      | UserRoleOrderByWithRelationInput
      | UserRoleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserRoles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned UserRoles
     **/
    _count?: true | UserRoleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserRoleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserRoleMaxAggregateInputType;
  };

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
    [P in keyof T & keyof AggregateUserRole]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>;
  };

  export type UserRoleGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserRoleWhereInput;
    orderBy?:
      | UserRoleOrderByWithAggregationInput
      | UserRoleOrderByWithAggregationInput[];
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum;
    having?: UserRoleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserRoleCountAggregateInputType | true;
    _min?: UserRoleMinAggregateInputType;
    _max?: UserRoleMaxAggregateInputType;
  };

  export type UserRoleGroupByOutputType = {
    userId: string;
    roleId: string;
    _count: UserRoleCountAggregateOutputType | null;
    _min: UserRoleMinAggregateOutputType | null;
    _max: UserRoleMaxAggregateOutputType | null;
  };

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<UserRoleGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof UserRoleGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>;
        }
      >
    >;

  export type UserRoleSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      roleId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      role?: boolean | RoleDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["userRole"]
  >;

  export type UserRoleSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      roleId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      role?: boolean | RoleDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["userRole"]
  >;

  export type UserRoleSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      roleId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      role?: boolean | RoleDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["userRole"]
  >;

  export type UserRoleSelectScalar = {
    userId?: boolean;
    roleId?: boolean;
  };

  export type UserRoleOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<"userId" | "roleId", ExtArgs["result"]["userRole"]>;
  export type UserRoleInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    role?: boolean | RoleDefaultArgs<ExtArgs>;
  };
  export type UserRoleIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    role?: boolean | RoleDefaultArgs<ExtArgs>;
  };
  export type UserRoleIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    role?: boolean | RoleDefaultArgs<ExtArgs>;
  };

  export type $UserRolePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "UserRole";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      role: Prisma.$RolePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        userId: string;
        roleId: string;
      },
      ExtArgs["result"]["userRole"]
    >;
    composites: {};
  };

  type UserRoleGetPayload<
    S extends boolean | null | undefined | UserRoleDefaultArgs,
  > = $Result.GetResult<Prisma.$UserRolePayload, S>;

  type UserRoleCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserRoleFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: UserRoleCountAggregateInputType | true;
  };

  export interface UserRoleDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["UserRole"];
      meta: { name: "UserRole" };
    };
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleFindUniqueArgs>(
      args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserRoleClient<
      $Result.GetResult<
        Prisma.$UserRolePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserRoleClient<
      $Result.GetResult<
        Prisma.$UserRolePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleFindFirstArgs>(
      args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>,
    ): Prisma__UserRoleClient<
      $Result.GetResult<
        Prisma.$UserRolePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserRoleClient<
      $Result.GetResult<
        Prisma.$UserRolePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     *
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     *
     * // Only select the `userId`
     * const userRoleWithUserIdOnly = await prisma.userRole.findMany({ select: { userId: true } })
     *
     */
    findMany<T extends UserRoleFindManyArgs>(
      args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserRolePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     *
     */
    create<T extends UserRoleCreateArgs>(
      args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>,
    ): Prisma__UserRoleClient<
      $Result.GetResult<
        Prisma.$UserRolePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many UserRoles.
     * @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserRoleCreateManyArgs>(
      args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many UserRoles and returns the data saved in the database.
     * @param {UserRoleCreateManyAndReturnArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many UserRoles and only return the `userId`
     * const userRoleWithUserIdOnly = await prisma.userRole.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserRoleCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserRoleCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserRolePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     *
     */
    delete<T extends UserRoleDeleteArgs>(
      args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>,
    ): Prisma__UserRoleClient<
      $Result.GetResult<
        Prisma.$UserRolePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserRoleUpdateArgs>(
      args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>,
    ): Prisma__UserRoleClient<
      $Result.GetResult<
        Prisma.$UserRolePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserRoleDeleteManyArgs>(
      args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserRoleUpdateManyArgs>(
      args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more UserRoles and returns the data updated in the database.
     * @param {UserRoleUpdateManyAndReturnArgs} args - Arguments to update many UserRoles.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more UserRoles and only return the `userId`
     * const userRoleWithUserIdOnly = await prisma.userRole.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserRoleUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserRoleUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserRolePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleUpsertArgs>(
      args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>,
    ): Prisma__UserRoleClient<
      $Result.GetResult<
        Prisma.$UserRolePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
     **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserRoleCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserRoleAggregateArgs>(
      args: Subset<T, UserRoleAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>;

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs["orderBy"] }
        : { orderBy?: UserRoleGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetUserRoleGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the UserRole model
     */
    readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, RoleDefaultArgs<ExtArgs>>,
    ): Prisma__RoleClient<
      | $Result.GetResult<
          Prisma.$RolePayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the UserRole model
   */
  interface UserRoleFieldRefs {
    readonly userId: FieldRef<"UserRole", "String">;
    readonly roleId: FieldRef<"UserRole", "String">;
  }

  // Custom InputTypes
  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null;
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput;
  };

  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null;
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput;
  };

  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null;
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserRoles to fetch.
     */
    orderBy?:
      | UserRoleOrderByWithRelationInput
      | UserRoleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserRoles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[];
  };

  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null;
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserRoles to fetch.
     */
    orderBy?:
      | UserRoleOrderByWithRelationInput
      | UserRoleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserRoles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[];
  };

  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null;
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserRoles to fetch.
     */
    orderBy?:
      | UserRoleOrderByWithRelationInput
      | UserRoleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserRoles.
     */
    skip?: number;
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[];
  };

  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null;
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>;
  };

  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * UserRole createManyAndReturn
   */
  export type UserRoleCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null;
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null;
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>;
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput;
  };

  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<
      UserRoleUpdateManyMutationInput,
      UserRoleUncheckedUpdateManyInput
    >;
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput;
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number;
  };

  /**
   * UserRole updateManyAndReturn
   */
  export type UserRoleUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null;
    /**
     * The data used to update UserRoles.
     */
    data: XOR<
      UserRoleUpdateManyMutationInput,
      UserRoleUncheckedUpdateManyInput
    >;
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput;
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null;
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput;
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>;
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>;
  };

  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null;
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput;
  };

  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput;
    /**
     * Limit how many UserRoles to delete.
     */
    limit?: number;
  };

  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null;
  };

  /**
   * Model Page
   */

  export type AggregatePage = {
    _count: PageCountAggregateOutputType | null;
    _min: PageMinAggregateOutputType | null;
    _max: PageMaxAggregateOutputType | null;
  };

  export type PageMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    title: string | null;
    description: string | null;
    isDeleted: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type PageMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    title: string | null;
    description: string | null;
    isDeleted: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type PageCountAggregateOutputType = {
    id: number;
    userId: number;
    title: number;
    description: number;
    isDeleted: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type PageMinAggregateInputType = {
    id?: true;
    userId?: true;
    title?: true;
    description?: true;
    isDeleted?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type PageMaxAggregateInputType = {
    id?: true;
    userId?: true;
    title?: true;
    description?: true;
    isDeleted?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type PageCountAggregateInputType = {
    id?: true;
    userId?: true;
    title?: true;
    description?: true;
    isDeleted?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type PageAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Page to aggregate.
     */
    where?: PageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Pages
     **/
    _count?: true | PageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PageMaxAggregateInputType;
  };

  export type GetPageAggregateType<T extends PageAggregateArgs> = {
    [P in keyof T & keyof AggregatePage]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePage[P]>
      : GetScalarType<T[P], AggregatePage[P]>;
  };

  export type PageGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PageWhereInput;
    orderBy?:
      | PageOrderByWithAggregationInput
      | PageOrderByWithAggregationInput[];
    by: PageScalarFieldEnum[] | PageScalarFieldEnum;
    having?: PageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PageCountAggregateInputType | true;
    _min?: PageMinAggregateInputType;
    _max?: PageMaxAggregateInputType;
  };

  export type PageGroupByOutputType = {
    id: string;
    userId: string;
    title: string | null;
    description: string | null;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: PageCountAggregateOutputType | null;
    _min: PageMinAggregateOutputType | null;
    _max: PageMaxAggregateOutputType | null;
  };

  type GetPageGroupByPayload<T extends PageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof PageGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PageGroupByOutputType[P]>
          : GetScalarType<T[P], PageGroupByOutputType[P]>;
      }
    >
  >;

  export type PageSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      title?: boolean;
      description?: boolean;
      isDeleted?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      owner?: boolean | UserDefaultArgs<ExtArgs>;
      blocks?: boolean | Page$blocksArgs<ExtArgs>;
      sharedUsers?: boolean | Page$sharedUsersArgs<ExtArgs>;
      _count?: boolean | PageCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["page"]
  >;

  export type PageSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      title?: boolean;
      description?: boolean;
      isDeleted?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      owner?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["page"]
  >;

  export type PageSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      title?: boolean;
      description?: boolean;
      isDeleted?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      owner?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["page"]
  >;

  export type PageSelectScalar = {
    id?: boolean;
    userId?: boolean;
    title?: boolean;
    description?: boolean;
    isDeleted?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type PageOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "userId"
    | "title"
    | "description"
    | "isDeleted"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["page"]
  >;
  export type PageInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    owner?: boolean | UserDefaultArgs<ExtArgs>;
    blocks?: boolean | Page$blocksArgs<ExtArgs>;
    sharedUsers?: boolean | Page$sharedUsersArgs<ExtArgs>;
    _count?: boolean | PageCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type PageIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    owner?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type PageIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    owner?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $PagePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Page";
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>;
      blocks: Prisma.$BlockPayload<ExtArgs>[];
      sharedUsers: Prisma.$UserSharedPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        title: string | null;
        description: string | null;
        isDeleted: boolean;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["page"]
    >;
    composites: {};
  };

  type PageGetPayload<S extends boolean | null | undefined | PageDefaultArgs> =
    $Result.GetResult<Prisma.$PagePayload, S>;

  type PageCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<PageFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: PageCountAggregateInputType | true;
  };

  export interface PageDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Page"];
      meta: { name: "Page" };
    };
    /**
     * Find zero or one Page that matches the filter.
     * @param {PageFindUniqueArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageFindUniqueArgs>(
      args: SelectSubset<T, PageFindUniqueArgs<ExtArgs>>,
    ): Prisma__PageClient<
      $Result.GetResult<
        Prisma.$PagePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Page that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageFindUniqueOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PageFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__PageClient<
      $Result.GetResult<
        Prisma.$PagePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Page that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageFindFirstArgs>(
      args?: SelectSubset<T, PageFindFirstArgs<ExtArgs>>,
    ): Prisma__PageClient<
      $Result.GetResult<
        Prisma.$PagePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Page that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PageFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__PageClient<
      $Result.GetResult<
        Prisma.$PagePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Pages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pages
     * const pages = await prisma.page.findMany()
     *
     * // Get first 10 Pages
     * const pages = await prisma.page.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const pageWithIdOnly = await prisma.page.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PageFindManyArgs>(
      args?: SelectSubset<T, PageFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PagePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Page.
     * @param {PageCreateArgs} args - Arguments to create a Page.
     * @example
     * // Create one Page
     * const Page = await prisma.page.create({
     *   data: {
     *     // ... data to create a Page
     *   }
     * })
     *
     */
    create<T extends PageCreateArgs>(
      args: SelectSubset<T, PageCreateArgs<ExtArgs>>,
    ): Prisma__PageClient<
      $Result.GetResult<
        Prisma.$PagePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Pages.
     * @param {PageCreateManyArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const page = await prisma.page.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PageCreateManyArgs>(
      args?: SelectSubset<T, PageCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Pages and returns the data saved in the database.
     * @param {PageCreateManyAndReturnArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const page = await prisma.page.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Pages and only return the `id`
     * const pageWithIdOnly = await prisma.page.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PageCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PageCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PagePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Page.
     * @param {PageDeleteArgs} args - Arguments to delete one Page.
     * @example
     * // Delete one Page
     * const Page = await prisma.page.delete({
     *   where: {
     *     // ... filter to delete one Page
     *   }
     * })
     *
     */
    delete<T extends PageDeleteArgs>(
      args: SelectSubset<T, PageDeleteArgs<ExtArgs>>,
    ): Prisma__PageClient<
      $Result.GetResult<
        Prisma.$PagePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Page.
     * @param {PageUpdateArgs} args - Arguments to update one Page.
     * @example
     * // Update one Page
     * const page = await prisma.page.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PageUpdateArgs>(
      args: SelectSubset<T, PageUpdateArgs<ExtArgs>>,
    ): Prisma__PageClient<
      $Result.GetResult<
        Prisma.$PagePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Pages.
     * @param {PageDeleteManyArgs} args - Arguments to filter Pages to delete.
     * @example
     * // Delete a few Pages
     * const { count } = await prisma.page.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PageDeleteManyArgs>(
      args?: SelectSubset<T, PageDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PageUpdateManyArgs>(
      args: SelectSubset<T, PageUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Pages and returns the data updated in the database.
     * @param {PageUpdateManyAndReturnArgs} args - Arguments to update many Pages.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Pages and only return the `id`
     * const pageWithIdOnly = await prisma.page.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PageUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PageUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PagePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Page.
     * @param {PageUpsertArgs} args - Arguments to update or create a Page.
     * @example
     * // Update or create a Page
     * const page = await prisma.page.upsert({
     *   create: {
     *     // ... data to create a Page
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Page we want to update
     *   }
     * })
     */
    upsert<T extends PageUpsertArgs>(
      args: SelectSubset<T, PageUpsertArgs<ExtArgs>>,
    ): Prisma__PageClient<
      $Result.GetResult<
        Prisma.$PagePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageCountArgs} args - Arguments to filter Pages to count.
     * @example
     * // Count the number of Pages
     * const count = await prisma.page.count({
     *   where: {
     *     // ... the filter for the Pages we want to count
     *   }
     * })
     **/
    count<T extends PageCountArgs>(
      args?: Subset<T, PageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], PageCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PageAggregateArgs>(
      args: Subset<T, PageAggregateArgs>,
    ): Prisma.PrismaPromise<GetPageAggregateType<T>>;

    /**
     * Group by Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends PageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageGroupByArgs["orderBy"] }
        : { orderBy?: PageGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PageGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetPageGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Page model
     */
    readonly fields: PageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Page.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    blocks<T extends Page$blocksArgs<ExtArgs> = {}>(
      args?: Subset<T, Page$blocksArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$BlockPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    sharedUsers<T extends Page$sharedUsersArgs<ExtArgs> = {}>(
      args?: Subset<T, Page$sharedUsersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UserSharedPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Page model
   */
  interface PageFieldRefs {
    readonly id: FieldRef<"Page", "String">;
    readonly userId: FieldRef<"Page", "String">;
    readonly title: FieldRef<"Page", "String">;
    readonly description: FieldRef<"Page", "String">;
    readonly isDeleted: FieldRef<"Page", "Boolean">;
    readonly createdAt: FieldRef<"Page", "DateTime">;
    readonly updatedAt: FieldRef<"Page", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Page findUnique
   */
  export type PageFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null;
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput;
  };

  /**
   * Page findUniqueOrThrow
   */
  export type PageFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null;
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput;
  };

  /**
   * Page findFirst
   */
  export type PageFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null;
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[];
  };

  /**
   * Page findFirstOrThrow
   */
  export type PageFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null;
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[];
  };

  /**
   * Page findMany
   */
  export type PageFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null;
    /**
     * Filter, which Pages to fetch.
     */
    where?: PageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Pages.
     */
    cursor?: PageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pages.
     */
    skip?: number;
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[];
  };

  /**
   * Page create
   */
  export type PageCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null;
    /**
     * The data needed to create a Page.
     */
    data: XOR<PageCreateInput, PageUncheckedCreateInput>;
  };

  /**
   * Page createMany
   */
  export type PageCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Pages.
     */
    data: PageCreateManyInput | PageCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Page createManyAndReturn
   */
  export type PageCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null;
    /**
     * The data used to create many Pages.
     */
    data: PageCreateManyInput | PageCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Page update
   */
  export type PageUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null;
    /**
     * The data needed to update a Page.
     */
    data: XOR<PageUpdateInput, PageUncheckedUpdateInput>;
    /**
     * Choose, which Page to update.
     */
    where: PageWhereUniqueInput;
  };

  /**
   * Page updateMany
   */
  export type PageUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Pages.
     */
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>;
    /**
     * Filter which Pages to update
     */
    where?: PageWhereInput;
    /**
     * Limit how many Pages to update.
     */
    limit?: number;
  };

  /**
   * Page updateManyAndReturn
   */
  export type PageUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null;
    /**
     * The data used to update Pages.
     */
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>;
    /**
     * Filter which Pages to update
     */
    where?: PageWhereInput;
    /**
     * Limit how many Pages to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Page upsert
   */
  export type PageUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null;
    /**
     * The filter to search for the Page to update in case it exists.
     */
    where: PageWhereUniqueInput;
    /**
     * In case the Page found by the `where` argument doesn't exist, create a new Page with this data.
     */
    create: XOR<PageCreateInput, PageUncheckedCreateInput>;
    /**
     * In case the Page was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageUpdateInput, PageUncheckedUpdateInput>;
  };

  /**
   * Page delete
   */
  export type PageDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null;
    /**
     * Filter which Page to delete.
     */
    where: PageWhereUniqueInput;
  };

  /**
   * Page deleteMany
   */
  export type PageDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Pages to delete
     */
    where?: PageWhereInput;
    /**
     * Limit how many Pages to delete.
     */
    limit?: number;
  };

  /**
   * Page.blocks
   */
  export type Page$blocksArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null;
    where?: BlockWhereInput;
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[];
    cursor?: BlockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[];
  };

  /**
   * Page.sharedUsers
   */
  export type Page$sharedUsersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserShared
     */
    select?: UserSharedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserShared
     */
    omit?: UserSharedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSharedInclude<ExtArgs> | null;
    where?: UserSharedWhereInput;
    orderBy?:
      | UserSharedOrderByWithRelationInput
      | UserSharedOrderByWithRelationInput[];
    cursor?: UserSharedWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserSharedScalarFieldEnum | UserSharedScalarFieldEnum[];
  };

  /**
   * Page without action
   */
  export type PageDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null;
  };

  /**
   * Model UserShared
   */

  export type AggregateUserShared = {
    _count: UserSharedCountAggregateOutputType | null;
    _min: UserSharedMinAggregateOutputType | null;
    _max: UserSharedMaxAggregateOutputType | null;
  };

  export type UserSharedMinAggregateOutputType = {
    id: string | null;
    pageId: string | null;
    userId: string | null;
    roleId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserSharedMaxAggregateOutputType = {
    id: string | null;
    pageId: string | null;
    userId: string | null;
    roleId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserSharedCountAggregateOutputType = {
    id: number;
    pageId: number;
    userId: number;
    roleId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserSharedMinAggregateInputType = {
    id?: true;
    pageId?: true;
    userId?: true;
    roleId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserSharedMaxAggregateInputType = {
    id?: true;
    pageId?: true;
    userId?: true;
    roleId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserSharedCountAggregateInputType = {
    id?: true;
    pageId?: true;
    userId?: true;
    roleId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserSharedAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserShared to aggregate.
     */
    where?: UserSharedWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserShareds to fetch.
     */
    orderBy?:
      | UserSharedOrderByWithRelationInput
      | UserSharedOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserSharedWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserShareds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserShareds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned UserShareds
     **/
    _count?: true | UserSharedCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserSharedMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserSharedMaxAggregateInputType;
  };

  export type GetUserSharedAggregateType<T extends UserSharedAggregateArgs> = {
    [P in keyof T & keyof AggregateUserShared]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserShared[P]>
      : GetScalarType<T[P], AggregateUserShared[P]>;
  };

  export type UserSharedGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserSharedWhereInput;
    orderBy?:
      | UserSharedOrderByWithAggregationInput
      | UserSharedOrderByWithAggregationInput[];
    by: UserSharedScalarFieldEnum[] | UserSharedScalarFieldEnum;
    having?: UserSharedScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserSharedCountAggregateInputType | true;
    _min?: UserSharedMinAggregateInputType;
    _max?: UserSharedMaxAggregateInputType;
  };

  export type UserSharedGroupByOutputType = {
    id: string;
    pageId: string;
    userId: string;
    roleId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: UserSharedCountAggregateOutputType | null;
    _min: UserSharedMinAggregateOutputType | null;
    _max: UserSharedMaxAggregateOutputType | null;
  };

  type GetUserSharedGroupByPayload<T extends UserSharedGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<UserSharedGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof UserSharedGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSharedGroupByOutputType[P]>
            : GetScalarType<T[P], UserSharedGroupByOutputType[P]>;
        }
      >
    >;

  export type UserSharedSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      pageId?: boolean;
      userId?: boolean;
      roleId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      page?: boolean | PageDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      role?: boolean | RoleDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["userShared"]
  >;

  export type UserSharedSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      pageId?: boolean;
      userId?: boolean;
      roleId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      page?: boolean | PageDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      role?: boolean | RoleDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["userShared"]
  >;

  export type UserSharedSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      pageId?: boolean;
      userId?: boolean;
      roleId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      page?: boolean | PageDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      role?: boolean | RoleDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["userShared"]
  >;

  export type UserSharedSelectScalar = {
    id?: boolean;
    pageId?: boolean;
    userId?: boolean;
    roleId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserSharedOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "pageId" | "userId" | "roleId" | "createdAt" | "updatedAt",
    ExtArgs["result"]["userShared"]
  >;
  export type UserSharedInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    page?: boolean | PageDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
    role?: boolean | RoleDefaultArgs<ExtArgs>;
  };
  export type UserSharedIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    page?: boolean | PageDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
    role?: boolean | RoleDefaultArgs<ExtArgs>;
  };
  export type UserSharedIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    page?: boolean | PageDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
    role?: boolean | RoleDefaultArgs<ExtArgs>;
  };

  export type $UserSharedPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "UserShared";
    objects: {
      page: Prisma.$PagePayload<ExtArgs>;
      user: Prisma.$UserPayload<ExtArgs>;
      role: Prisma.$RolePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        pageId: string;
        userId: string;
        roleId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["userShared"]
    >;
    composites: {};
  };

  type UserSharedGetPayload<
    S extends boolean | null | undefined | UserSharedDefaultArgs,
  > = $Result.GetResult<Prisma.$UserSharedPayload, S>;

  type UserSharedCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    UserSharedFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: UserSharedCountAggregateInputType | true;
  };

  export interface UserSharedDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["UserShared"];
      meta: { name: "UserShared" };
    };
    /**
     * Find zero or one UserShared that matches the filter.
     * @param {UserSharedFindUniqueArgs} args - Arguments to find a UserShared
     * @example
     * // Get one UserShared
     * const userShared = await prisma.userShared.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSharedFindUniqueArgs>(
      args: SelectSubset<T, UserSharedFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserSharedClient<
      $Result.GetResult<
        Prisma.$UserSharedPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one UserShared that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSharedFindUniqueOrThrowArgs} args - Arguments to find a UserShared
     * @example
     * // Get one UserShared
     * const userShared = await prisma.userShared.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSharedFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserSharedFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserSharedClient<
      $Result.GetResult<
        Prisma.$UserSharedPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first UserShared that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSharedFindFirstArgs} args - Arguments to find a UserShared
     * @example
     * // Get one UserShared
     * const userShared = await prisma.userShared.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSharedFindFirstArgs>(
      args?: SelectSubset<T, UserSharedFindFirstArgs<ExtArgs>>,
    ): Prisma__UserSharedClient<
      $Result.GetResult<
        Prisma.$UserSharedPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first UserShared that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSharedFindFirstOrThrowArgs} args - Arguments to find a UserShared
     * @example
     * // Get one UserShared
     * const userShared = await prisma.userShared.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSharedFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserSharedFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserSharedClient<
      $Result.GetResult<
        Prisma.$UserSharedPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more UserShareds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSharedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserShareds
     * const userShareds = await prisma.userShared.findMany()
     *
     * // Get first 10 UserShareds
     * const userShareds = await prisma.userShared.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userSharedWithIdOnly = await prisma.userShared.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserSharedFindManyArgs>(
      args?: SelectSubset<T, UserSharedFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserSharedPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a UserShared.
     * @param {UserSharedCreateArgs} args - Arguments to create a UserShared.
     * @example
     * // Create one UserShared
     * const UserShared = await prisma.userShared.create({
     *   data: {
     *     // ... data to create a UserShared
     *   }
     * })
     *
     */
    create<T extends UserSharedCreateArgs>(
      args: SelectSubset<T, UserSharedCreateArgs<ExtArgs>>,
    ): Prisma__UserSharedClient<
      $Result.GetResult<
        Prisma.$UserSharedPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many UserShareds.
     * @param {UserSharedCreateManyArgs} args - Arguments to create many UserShareds.
     * @example
     * // Create many UserShareds
     * const userShared = await prisma.userShared.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserSharedCreateManyArgs>(
      args?: SelectSubset<T, UserSharedCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many UserShareds and returns the data saved in the database.
     * @param {UserSharedCreateManyAndReturnArgs} args - Arguments to create many UserShareds.
     * @example
     * // Create many UserShareds
     * const userShared = await prisma.userShared.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many UserShareds and only return the `id`
     * const userSharedWithIdOnly = await prisma.userShared.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserSharedCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserSharedCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserSharedPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a UserShared.
     * @param {UserSharedDeleteArgs} args - Arguments to delete one UserShared.
     * @example
     * // Delete one UserShared
     * const UserShared = await prisma.userShared.delete({
     *   where: {
     *     // ... filter to delete one UserShared
     *   }
     * })
     *
     */
    delete<T extends UserSharedDeleteArgs>(
      args: SelectSubset<T, UserSharedDeleteArgs<ExtArgs>>,
    ): Prisma__UserSharedClient<
      $Result.GetResult<
        Prisma.$UserSharedPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one UserShared.
     * @param {UserSharedUpdateArgs} args - Arguments to update one UserShared.
     * @example
     * // Update one UserShared
     * const userShared = await prisma.userShared.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserSharedUpdateArgs>(
      args: SelectSubset<T, UserSharedUpdateArgs<ExtArgs>>,
    ): Prisma__UserSharedClient<
      $Result.GetResult<
        Prisma.$UserSharedPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more UserShareds.
     * @param {UserSharedDeleteManyArgs} args - Arguments to filter UserShareds to delete.
     * @example
     * // Delete a few UserShareds
     * const { count } = await prisma.userShared.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserSharedDeleteManyArgs>(
      args?: SelectSubset<T, UserSharedDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more UserShareds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSharedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserShareds
     * const userShared = await prisma.userShared.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserSharedUpdateManyArgs>(
      args: SelectSubset<T, UserSharedUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more UserShareds and returns the data updated in the database.
     * @param {UserSharedUpdateManyAndReturnArgs} args - Arguments to update many UserShareds.
     * @example
     * // Update many UserShareds
     * const userShared = await prisma.userShared.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more UserShareds and only return the `id`
     * const userSharedWithIdOnly = await prisma.userShared.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserSharedUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserSharedUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserSharedPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one UserShared.
     * @param {UserSharedUpsertArgs} args - Arguments to update or create a UserShared.
     * @example
     * // Update or create a UserShared
     * const userShared = await prisma.userShared.upsert({
     *   create: {
     *     // ... data to create a UserShared
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserShared we want to update
     *   }
     * })
     */
    upsert<T extends UserSharedUpsertArgs>(
      args: SelectSubset<T, UserSharedUpsertArgs<ExtArgs>>,
    ): Prisma__UserSharedClient<
      $Result.GetResult<
        Prisma.$UserSharedPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of UserShareds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSharedCountArgs} args - Arguments to filter UserShareds to count.
     * @example
     * // Count the number of UserShareds
     * const count = await prisma.userShared.count({
     *   where: {
     *     // ... the filter for the UserShareds we want to count
     *   }
     * })
     **/
    count<T extends UserSharedCountArgs>(
      args?: Subset<T, UserSharedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserSharedCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a UserShared.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSharedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserSharedAggregateArgs>(
      args: Subset<T, UserSharedAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserSharedAggregateType<T>>;

    /**
     * Group by UserShared.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSharedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserSharedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSharedGroupByArgs["orderBy"] }
        : { orderBy?: UserSharedGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserSharedGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetUserSharedGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the UserShared model
     */
    readonly fields: UserSharedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserShared.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSharedClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    page<T extends PageDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PageDefaultArgs<ExtArgs>>,
    ): Prisma__PageClient<
      | $Result.GetResult<
          Prisma.$PagePayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, RoleDefaultArgs<ExtArgs>>,
    ): Prisma__RoleClient<
      | $Result.GetResult<
          Prisma.$RolePayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the UserShared model
   */
  interface UserSharedFieldRefs {
    readonly id: FieldRef<"UserShared", "String">;
    readonly pageId: FieldRef<"UserShared", "String">;
    readonly userId: FieldRef<"UserShared", "String">;
    readonly roleId: FieldRef<"UserShared", "String">;
    readonly createdAt: FieldRef<"UserShared", "DateTime">;
    readonly updatedAt: FieldRef<"UserShared", "DateTime">;
  }

  // Custom InputTypes
  /**
   * UserShared findUnique
   */
  export type UserSharedFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserShared
     */
    select?: UserSharedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserShared
     */
    omit?: UserSharedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSharedInclude<ExtArgs> | null;
    /**
     * Filter, which UserShared to fetch.
     */
    where: UserSharedWhereUniqueInput;
  };

  /**
   * UserShared findUniqueOrThrow
   */
  export type UserSharedFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserShared
     */
    select?: UserSharedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserShared
     */
    omit?: UserSharedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSharedInclude<ExtArgs> | null;
    /**
     * Filter, which UserShared to fetch.
     */
    where: UserSharedWhereUniqueInput;
  };

  /**
   * UserShared findFirst
   */
  export type UserSharedFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserShared
     */
    select?: UserSharedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserShared
     */
    omit?: UserSharedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSharedInclude<ExtArgs> | null;
    /**
     * Filter, which UserShared to fetch.
     */
    where?: UserSharedWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserShareds to fetch.
     */
    orderBy?:
      | UserSharedOrderByWithRelationInput
      | UserSharedOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserShareds.
     */
    cursor?: UserSharedWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserShareds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserShareds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserShareds.
     */
    distinct?: UserSharedScalarFieldEnum | UserSharedScalarFieldEnum[];
  };

  /**
   * UserShared findFirstOrThrow
   */
  export type UserSharedFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserShared
     */
    select?: UserSharedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserShared
     */
    omit?: UserSharedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSharedInclude<ExtArgs> | null;
    /**
     * Filter, which UserShared to fetch.
     */
    where?: UserSharedWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserShareds to fetch.
     */
    orderBy?:
      | UserSharedOrderByWithRelationInput
      | UserSharedOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserShareds.
     */
    cursor?: UserSharedWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserShareds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserShareds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserShareds.
     */
    distinct?: UserSharedScalarFieldEnum | UserSharedScalarFieldEnum[];
  };

  /**
   * UserShared findMany
   */
  export type UserSharedFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserShared
     */
    select?: UserSharedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserShared
     */
    omit?: UserSharedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSharedInclude<ExtArgs> | null;
    /**
     * Filter, which UserShareds to fetch.
     */
    where?: UserSharedWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserShareds to fetch.
     */
    orderBy?:
      | UserSharedOrderByWithRelationInput
      | UserSharedOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing UserShareds.
     */
    cursor?: UserSharedWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserShareds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserShareds.
     */
    skip?: number;
    distinct?: UserSharedScalarFieldEnum | UserSharedScalarFieldEnum[];
  };

  /**
   * UserShared create
   */
  export type UserSharedCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserShared
     */
    select?: UserSharedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserShared
     */
    omit?: UserSharedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSharedInclude<ExtArgs> | null;
    /**
     * The data needed to create a UserShared.
     */
    data: XOR<UserSharedCreateInput, UserSharedUncheckedCreateInput>;
  };

  /**
   * UserShared createMany
   */
  export type UserSharedCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many UserShareds.
     */
    data: UserSharedCreateManyInput | UserSharedCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * UserShared createManyAndReturn
   */
  export type UserSharedCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserShared
     */
    select?: UserSharedSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserShared
     */
    omit?: UserSharedOmit<ExtArgs> | null;
    /**
     * The data used to create many UserShareds.
     */
    data: UserSharedCreateManyInput | UserSharedCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSharedIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * UserShared update
   */
  export type UserSharedUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserShared
     */
    select?: UserSharedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserShared
     */
    omit?: UserSharedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSharedInclude<ExtArgs> | null;
    /**
     * The data needed to update a UserShared.
     */
    data: XOR<UserSharedUpdateInput, UserSharedUncheckedUpdateInput>;
    /**
     * Choose, which UserShared to update.
     */
    where: UserSharedWhereUniqueInput;
  };

  /**
   * UserShared updateMany
   */
  export type UserSharedUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update UserShareds.
     */
    data: XOR<
      UserSharedUpdateManyMutationInput,
      UserSharedUncheckedUpdateManyInput
    >;
    /**
     * Filter which UserShareds to update
     */
    where?: UserSharedWhereInput;
    /**
     * Limit how many UserShareds to update.
     */
    limit?: number;
  };

  /**
   * UserShared updateManyAndReturn
   */
  export type UserSharedUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserShared
     */
    select?: UserSharedSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserShared
     */
    omit?: UserSharedOmit<ExtArgs> | null;
    /**
     * The data used to update UserShareds.
     */
    data: XOR<
      UserSharedUpdateManyMutationInput,
      UserSharedUncheckedUpdateManyInput
    >;
    /**
     * Filter which UserShareds to update
     */
    where?: UserSharedWhereInput;
    /**
     * Limit how many UserShareds to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSharedIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * UserShared upsert
   */
  export type UserSharedUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserShared
     */
    select?: UserSharedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserShared
     */
    omit?: UserSharedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSharedInclude<ExtArgs> | null;
    /**
     * The filter to search for the UserShared to update in case it exists.
     */
    where: UserSharedWhereUniqueInput;
    /**
     * In case the UserShared found by the `where` argument doesn't exist, create a new UserShared with this data.
     */
    create: XOR<UserSharedCreateInput, UserSharedUncheckedCreateInput>;
    /**
     * In case the UserShared was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSharedUpdateInput, UserSharedUncheckedUpdateInput>;
  };

  /**
   * UserShared delete
   */
  export type UserSharedDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserShared
     */
    select?: UserSharedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserShared
     */
    omit?: UserSharedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSharedInclude<ExtArgs> | null;
    /**
     * Filter which UserShared to delete.
     */
    where: UserSharedWhereUniqueInput;
  };

  /**
   * UserShared deleteMany
   */
  export type UserSharedDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserShareds to delete
     */
    where?: UserSharedWhereInput;
    /**
     * Limit how many UserShareds to delete.
     */
    limit?: number;
  };

  /**
   * UserShared without action
   */
  export type UserSharedDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserShared
     */
    select?: UserSharedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserShared
     */
    omit?: UserSharedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSharedInclude<ExtArgs> | null;
  };

  /**
   * Model Block
   */

  export type AggregateBlock = {
    _count: BlockCountAggregateOutputType | null;
    _avg: BlockAvgAggregateOutputType | null;
    _sum: BlockSumAggregateOutputType | null;
    _min: BlockMinAggregateOutputType | null;
    _max: BlockMaxAggregateOutputType | null;
  };

  export type BlockAvgAggregateOutputType = {
    orderIndex: number | null;
  };

  export type BlockSumAggregateOutputType = {
    orderIndex: number | null;
  };

  export type BlockMinAggregateOutputType = {
    id: string | null;
    pageId: string | null;
    parentId: string | null;
    type: string | null;
    content: string | null;
    orderIndex: number | null;
    isDeleted: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type BlockMaxAggregateOutputType = {
    id: string | null;
    pageId: string | null;
    parentId: string | null;
    type: string | null;
    content: string | null;
    orderIndex: number | null;
    isDeleted: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type BlockCountAggregateOutputType = {
    id: number;
    pageId: number;
    parentId: number;
    type: number;
    content: number;
    orderIndex: number;
    isDeleted: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type BlockAvgAggregateInputType = {
    orderIndex?: true;
  };

  export type BlockSumAggregateInputType = {
    orderIndex?: true;
  };

  export type BlockMinAggregateInputType = {
    id?: true;
    pageId?: true;
    parentId?: true;
    type?: true;
    content?: true;
    orderIndex?: true;
    isDeleted?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type BlockMaxAggregateInputType = {
    id?: true;
    pageId?: true;
    parentId?: true;
    type?: true;
    content?: true;
    orderIndex?: true;
    isDeleted?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type BlockCountAggregateInputType = {
    id?: true;
    pageId?: true;
    parentId?: true;
    type?: true;
    content?: true;
    orderIndex?: true;
    isDeleted?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type BlockAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Block to aggregate.
     */
    where?: BlockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: BlockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Blocks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Blocks
     **/
    _count?: true | BlockCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: BlockAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: BlockSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BlockMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BlockMaxAggregateInputType;
  };

  export type GetBlockAggregateType<T extends BlockAggregateArgs> = {
    [P in keyof T & keyof AggregateBlock]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlock[P]>
      : GetScalarType<T[P], AggregateBlock[P]>;
  };

  export type BlockGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BlockWhereInput;
    orderBy?:
      | BlockOrderByWithAggregationInput
      | BlockOrderByWithAggregationInput[];
    by: BlockScalarFieldEnum[] | BlockScalarFieldEnum;
    having?: BlockScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BlockCountAggregateInputType | true;
    _avg?: BlockAvgAggregateInputType;
    _sum?: BlockSumAggregateInputType;
    _min?: BlockMinAggregateInputType;
    _max?: BlockMaxAggregateInputType;
  };

  export type BlockGroupByOutputType = {
    id: string;
    pageId: string;
    parentId: string | null;
    type: string;
    content: string | null;
    orderIndex: number;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: BlockCountAggregateOutputType | null;
    _avg: BlockAvgAggregateOutputType | null;
    _sum: BlockSumAggregateOutputType | null;
    _min: BlockMinAggregateOutputType | null;
    _max: BlockMaxAggregateOutputType | null;
  };

  type GetBlockGroupByPayload<T extends BlockGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<BlockGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof BlockGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockGroupByOutputType[P]>
            : GetScalarType<T[P], BlockGroupByOutputType[P]>;
        }
      >
    >;

  export type BlockSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      pageId?: boolean;
      parentId?: boolean;
      type?: boolean;
      content?: boolean;
      orderIndex?: boolean;
      isDeleted?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      page?: boolean | PageDefaultArgs<ExtArgs>;
      parent?: boolean | Block$parentArgs<ExtArgs>;
      children?: boolean | Block$childrenArgs<ExtArgs>;
      comments?: boolean | Block$commentsArgs<ExtArgs>;
      _count?: boolean | BlockCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["block"]
  >;

  export type BlockSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      pageId?: boolean;
      parentId?: boolean;
      type?: boolean;
      content?: boolean;
      orderIndex?: boolean;
      isDeleted?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      page?: boolean | PageDefaultArgs<ExtArgs>;
      parent?: boolean | Block$parentArgs<ExtArgs>;
    },
    ExtArgs["result"]["block"]
  >;

  export type BlockSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      pageId?: boolean;
      parentId?: boolean;
      type?: boolean;
      content?: boolean;
      orderIndex?: boolean;
      isDeleted?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      page?: boolean | PageDefaultArgs<ExtArgs>;
      parent?: boolean | Block$parentArgs<ExtArgs>;
    },
    ExtArgs["result"]["block"]
  >;

  export type BlockSelectScalar = {
    id?: boolean;
    pageId?: boolean;
    parentId?: boolean;
    type?: boolean;
    content?: boolean;
    orderIndex?: boolean;
    isDeleted?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type BlockOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "pageId"
    | "parentId"
    | "type"
    | "content"
    | "orderIndex"
    | "isDeleted"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["block"]
  >;
  export type BlockInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    page?: boolean | PageDefaultArgs<ExtArgs>;
    parent?: boolean | Block$parentArgs<ExtArgs>;
    children?: boolean | Block$childrenArgs<ExtArgs>;
    comments?: boolean | Block$commentsArgs<ExtArgs>;
    _count?: boolean | BlockCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type BlockIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    page?: boolean | PageDefaultArgs<ExtArgs>;
    parent?: boolean | Block$parentArgs<ExtArgs>;
  };
  export type BlockIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    page?: boolean | PageDefaultArgs<ExtArgs>;
    parent?: boolean | Block$parentArgs<ExtArgs>;
  };

  export type $BlockPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Block";
    objects: {
      page: Prisma.$PagePayload<ExtArgs>;
      parent: Prisma.$BlockPayload<ExtArgs> | null;
      children: Prisma.$BlockPayload<ExtArgs>[];
      comments: Prisma.$CommentPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        pageId: string;
        parentId: string | null;
        type: string;
        content: string | null;
        orderIndex: number;
        isDeleted: boolean;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["block"]
    >;
    composites: {};
  };

  type BlockGetPayload<
    S extends boolean | null | undefined | BlockDefaultArgs,
  > = $Result.GetResult<Prisma.$BlockPayload, S>;

  type BlockCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<BlockFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: BlockCountAggregateInputType | true;
  };

  export interface BlockDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Block"];
      meta: { name: "Block" };
    };
    /**
     * Find zero or one Block that matches the filter.
     * @param {BlockFindUniqueArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlockFindUniqueArgs>(
      args: SelectSubset<T, BlockFindUniqueArgs<ExtArgs>>,
    ): Prisma__BlockClient<
      $Result.GetResult<
        Prisma.$BlockPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Block that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlockFindUniqueOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlockFindUniqueOrThrowArgs>(
      args: SelectSubset<T, BlockFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__BlockClient<
      $Result.GetResult<
        Prisma.$BlockPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Block that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindFirstArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlockFindFirstArgs>(
      args?: SelectSubset<T, BlockFindFirstArgs<ExtArgs>>,
    ): Prisma__BlockClient<
      $Result.GetResult<
        Prisma.$BlockPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Block that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindFirstOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlockFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BlockFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__BlockClient<
      $Result.GetResult<
        Prisma.$BlockPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Blocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blocks
     * const blocks = await prisma.block.findMany()
     *
     * // Get first 10 Blocks
     * const blocks = await prisma.block.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const blockWithIdOnly = await prisma.block.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BlockFindManyArgs>(
      args?: SelectSubset<T, BlockFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BlockPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Block.
     * @param {BlockCreateArgs} args - Arguments to create a Block.
     * @example
     * // Create one Block
     * const Block = await prisma.block.create({
     *   data: {
     *     // ... data to create a Block
     *   }
     * })
     *
     */
    create<T extends BlockCreateArgs>(
      args: SelectSubset<T, BlockCreateArgs<ExtArgs>>,
    ): Prisma__BlockClient<
      $Result.GetResult<
        Prisma.$BlockPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Blocks.
     * @param {BlockCreateManyArgs} args - Arguments to create many Blocks.
     * @example
     * // Create many Blocks
     * const block = await prisma.block.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BlockCreateManyArgs>(
      args?: SelectSubset<T, BlockCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Blocks and returns the data saved in the database.
     * @param {BlockCreateManyAndReturnArgs} args - Arguments to create many Blocks.
     * @example
     * // Create many Blocks
     * const block = await prisma.block.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Blocks and only return the `id`
     * const blockWithIdOnly = await prisma.block.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BlockCreateManyAndReturnArgs>(
      args?: SelectSubset<T, BlockCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BlockPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Block.
     * @param {BlockDeleteArgs} args - Arguments to delete one Block.
     * @example
     * // Delete one Block
     * const Block = await prisma.block.delete({
     *   where: {
     *     // ... filter to delete one Block
     *   }
     * })
     *
     */
    delete<T extends BlockDeleteArgs>(
      args: SelectSubset<T, BlockDeleteArgs<ExtArgs>>,
    ): Prisma__BlockClient<
      $Result.GetResult<
        Prisma.$BlockPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Block.
     * @param {BlockUpdateArgs} args - Arguments to update one Block.
     * @example
     * // Update one Block
     * const block = await prisma.block.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BlockUpdateArgs>(
      args: SelectSubset<T, BlockUpdateArgs<ExtArgs>>,
    ): Prisma__BlockClient<
      $Result.GetResult<
        Prisma.$BlockPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Blocks.
     * @param {BlockDeleteManyArgs} args - Arguments to filter Blocks to delete.
     * @example
     * // Delete a few Blocks
     * const { count } = await prisma.block.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BlockDeleteManyArgs>(
      args?: SelectSubset<T, BlockDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blocks
     * const block = await prisma.block.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BlockUpdateManyArgs>(
      args: SelectSubset<T, BlockUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Blocks and returns the data updated in the database.
     * @param {BlockUpdateManyAndReturnArgs} args - Arguments to update many Blocks.
     * @example
     * // Update many Blocks
     * const block = await prisma.block.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Blocks and only return the `id`
     * const blockWithIdOnly = await prisma.block.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends BlockUpdateManyAndReturnArgs>(
      args: SelectSubset<T, BlockUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BlockPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Block.
     * @param {BlockUpsertArgs} args - Arguments to update or create a Block.
     * @example
     * // Update or create a Block
     * const block = await prisma.block.upsert({
     *   create: {
     *     // ... data to create a Block
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Block we want to update
     *   }
     * })
     */
    upsert<T extends BlockUpsertArgs>(
      args: SelectSubset<T, BlockUpsertArgs<ExtArgs>>,
    ): Prisma__BlockClient<
      $Result.GetResult<
        Prisma.$BlockPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockCountArgs} args - Arguments to filter Blocks to count.
     * @example
     * // Count the number of Blocks
     * const count = await prisma.block.count({
     *   where: {
     *     // ... the filter for the Blocks we want to count
     *   }
     * })
     **/
    count<T extends BlockCountArgs>(
      args?: Subset<T, BlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], BlockCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BlockAggregateArgs>(
      args: Subset<T, BlockAggregateArgs>,
    ): Prisma.PrismaPromise<GetBlockAggregateType<T>>;

    /**
     * Group by Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends BlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockGroupByArgs["orderBy"] }
        : { orderBy?: BlockGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, BlockGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetBlockGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Block model
     */
    readonly fields: BlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Block.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    page<T extends PageDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PageDefaultArgs<ExtArgs>>,
    ): Prisma__PageClient<
      | $Result.GetResult<
          Prisma.$PagePayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    parent<T extends Block$parentArgs<ExtArgs> = {}>(
      args?: Subset<T, Block$parentArgs<ExtArgs>>,
    ): Prisma__BlockClient<
      $Result.GetResult<
        Prisma.$BlockPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    children<T extends Block$childrenArgs<ExtArgs> = {}>(
      args?: Subset<T, Block$childrenArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$BlockPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    comments<T extends Block$commentsArgs<ExtArgs> = {}>(
      args?: Subset<T, Block$commentsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CommentPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Block model
   */
  interface BlockFieldRefs {
    readonly id: FieldRef<"Block", "String">;
    readonly pageId: FieldRef<"Block", "String">;
    readonly parentId: FieldRef<"Block", "String">;
    readonly type: FieldRef<"Block", "String">;
    readonly content: FieldRef<"Block", "String">;
    readonly orderIndex: FieldRef<"Block", "Int">;
    readonly isDeleted: FieldRef<"Block", "Boolean">;
    readonly createdAt: FieldRef<"Block", "DateTime">;
    readonly updatedAt: FieldRef<"Block", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Block findUnique
   */
  export type BlockFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null;
    /**
     * Filter, which Block to fetch.
     */
    where: BlockWhereUniqueInput;
  };

  /**
   * Block findUniqueOrThrow
   */
  export type BlockFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null;
    /**
     * Filter, which Block to fetch.
     */
    where: BlockWhereUniqueInput;
  };

  /**
   * Block findFirst
   */
  export type BlockFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null;
    /**
     * Filter, which Block to fetch.
     */
    where?: BlockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Blocks.
     */
    cursor?: BlockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Blocks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[];
  };

  /**
   * Block findFirstOrThrow
   */
  export type BlockFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null;
    /**
     * Filter, which Block to fetch.
     */
    where?: BlockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Blocks.
     */
    cursor?: BlockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Blocks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[];
  };

  /**
   * Block findMany
   */
  export type BlockFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null;
    /**
     * Filter, which Blocks to fetch.
     */
    where?: BlockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Blocks.
     */
    cursor?: BlockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Blocks.
     */
    skip?: number;
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[];
  };

  /**
   * Block create
   */
  export type BlockCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null;
    /**
     * The data needed to create a Block.
     */
    data: XOR<BlockCreateInput, BlockUncheckedCreateInput>;
  };

  /**
   * Block createMany
   */
  export type BlockCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Blocks.
     */
    data: BlockCreateManyInput | BlockCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Block createManyAndReturn
   */
  export type BlockCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null;
    /**
     * The data used to create many Blocks.
     */
    data: BlockCreateManyInput | BlockCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Block update
   */
  export type BlockUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null;
    /**
     * The data needed to update a Block.
     */
    data: XOR<BlockUpdateInput, BlockUncheckedUpdateInput>;
    /**
     * Choose, which Block to update.
     */
    where: BlockWhereUniqueInput;
  };

  /**
   * Block updateMany
   */
  export type BlockUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Blocks.
     */
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyInput>;
    /**
     * Filter which Blocks to update
     */
    where?: BlockWhereInput;
    /**
     * Limit how many Blocks to update.
     */
    limit?: number;
  };

  /**
   * Block updateManyAndReturn
   */
  export type BlockUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null;
    /**
     * The data used to update Blocks.
     */
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyInput>;
    /**
     * Filter which Blocks to update
     */
    where?: BlockWhereInput;
    /**
     * Limit how many Blocks to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Block upsert
   */
  export type BlockUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null;
    /**
     * The filter to search for the Block to update in case it exists.
     */
    where: BlockWhereUniqueInput;
    /**
     * In case the Block found by the `where` argument doesn't exist, create a new Block with this data.
     */
    create: XOR<BlockCreateInput, BlockUncheckedCreateInput>;
    /**
     * In case the Block was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockUpdateInput, BlockUncheckedUpdateInput>;
  };

  /**
   * Block delete
   */
  export type BlockDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null;
    /**
     * Filter which Block to delete.
     */
    where: BlockWhereUniqueInput;
  };

  /**
   * Block deleteMany
   */
  export type BlockDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Blocks to delete
     */
    where?: BlockWhereInput;
    /**
     * Limit how many Blocks to delete.
     */
    limit?: number;
  };

  /**
   * Block.parent
   */
  export type Block$parentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null;
    where?: BlockWhereInput;
  };

  /**
   * Block.children
   */
  export type Block$childrenArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null;
    where?: BlockWhereInput;
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[];
    cursor?: BlockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[];
  };

  /**
   * Block.comments
   */
  export type Block$commentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    where?: CommentWhereInput;
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    cursor?: CommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Block without action
   */
  export type BlockDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null;
  };

  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null;
    _min: CommentMinAggregateOutputType | null;
    _max: CommentMaxAggregateOutputType | null;
  };

  export type CommentMinAggregateOutputType = {
    id: string | null;
    blockId: string | null;
    userId: string | null;
    parentId: string | null;
    content: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CommentMaxAggregateOutputType = {
    id: string | null;
    blockId: string | null;
    userId: string | null;
    parentId: string | null;
    content: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CommentCountAggregateOutputType = {
    id: number;
    blockId: number;
    userId: number;
    parentId: number;
    content: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type CommentMinAggregateInputType = {
    id?: true;
    blockId?: true;
    userId?: true;
    parentId?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CommentMaxAggregateInputType = {
    id?: true;
    blockId?: true;
    userId?: true;
    parentId?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CommentCountAggregateInputType = {
    id?: true;
    blockId?: true;
    userId?: true;
    parentId?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type CommentAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Comments
     **/
    _count?: true | CommentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CommentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CommentMaxAggregateInputType;
  };

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
    [P in keyof T & keyof AggregateComment]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>;
  };

  export type CommentGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CommentWhereInput;
    orderBy?:
      | CommentOrderByWithAggregationInput
      | CommentOrderByWithAggregationInput[];
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum;
    having?: CommentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CommentCountAggregateInputType | true;
    _min?: CommentMinAggregateInputType;
    _max?: CommentMaxAggregateInputType;
  };

  export type CommentGroupByOutputType = {
    id: string;
    blockId: string;
    userId: string;
    parentId: string | null;
    content: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: CommentCountAggregateOutputType | null;
    _min: CommentMinAggregateOutputType | null;
    _max: CommentMaxAggregateOutputType | null;
  };

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CommentGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof CommentGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>;
        }
      >
    >;

  export type CommentSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      blockId?: boolean;
      userId?: boolean;
      parentId?: boolean;
      content?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      block?: boolean | BlockDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      parent?: boolean | Comment$parentArgs<ExtArgs>;
      replies?: boolean | Comment$repliesArgs<ExtArgs>;
      _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["comment"]
  >;

  export type CommentSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      blockId?: boolean;
      userId?: boolean;
      parentId?: boolean;
      content?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      block?: boolean | BlockDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      parent?: boolean | Comment$parentArgs<ExtArgs>;
    },
    ExtArgs["result"]["comment"]
  >;

  export type CommentSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      blockId?: boolean;
      userId?: boolean;
      parentId?: boolean;
      content?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      block?: boolean | BlockDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      parent?: boolean | Comment$parentArgs<ExtArgs>;
    },
    ExtArgs["result"]["comment"]
  >;

  export type CommentSelectScalar = {
    id?: boolean;
    blockId?: boolean;
    userId?: boolean;
    parentId?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type CommentOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "blockId"
    | "userId"
    | "parentId"
    | "content"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["comment"]
  >;
  export type CommentInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    block?: boolean | BlockDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
    parent?: boolean | Comment$parentArgs<ExtArgs>;
    replies?: boolean | Comment$repliesArgs<ExtArgs>;
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type CommentIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    block?: boolean | BlockDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
    parent?: boolean | Comment$parentArgs<ExtArgs>;
  };
  export type CommentIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    block?: boolean | BlockDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
    parent?: boolean | Comment$parentArgs<ExtArgs>;
  };

  export type $CommentPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Comment";
    objects: {
      block: Prisma.$BlockPayload<ExtArgs>;
      user: Prisma.$UserPayload<ExtArgs>;
      parent: Prisma.$CommentPayload<ExtArgs> | null;
      replies: Prisma.$CommentPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        blockId: string;
        userId: string;
        parentId: string | null;
        content: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["comment"]
    >;
    composites: {};
  };

  type CommentGetPayload<
    S extends boolean | null | undefined | CommentDefaultArgs,
  > = $Result.GetResult<Prisma.$CommentPayload, S>;

  type CommentCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<CommentFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: CommentCountAggregateInputType | true;
  };

  export interface CommentDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Comment"];
      meta: { name: "Comment" };
    };
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(
      args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>,
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(
      args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>,
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     *
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CommentFindManyArgs>(
      args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     *
     */
    create<T extends CommentCreateArgs>(
      args: SelectSubset<T, CommentCreateArgs<ExtArgs>>,
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CommentCreateManyArgs>(
      args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     *
     */
    delete<T extends CommentDeleteArgs>(
      args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>,
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CommentUpdateArgs>(
      args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>,
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CommentDeleteManyArgs>(
      args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CommentUpdateManyArgs>(
      args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(
      args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>,
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
     **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], CommentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CommentAggregateArgs>(
      args: Subset<T, CommentAggregateArgs>,
    ): Prisma.PrismaPromise<GetCommentAggregateType<T>>;

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs["orderBy"] }
        : { orderBy?: CommentGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetCommentGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Comment model
     */
    readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    block<T extends BlockDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, BlockDefaultArgs<ExtArgs>>,
    ): Prisma__BlockClient<
      | $Result.GetResult<
          Prisma.$BlockPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    parent<T extends Comment$parentArgs<ExtArgs> = {}>(
      args?: Subset<T, Comment$parentArgs<ExtArgs>>,
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    replies<T extends Comment$repliesArgs<ExtArgs> = {}>(
      args?: Subset<T, Comment$repliesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CommentPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", "String">;
    readonly blockId: FieldRef<"Comment", "String">;
    readonly userId: FieldRef<"Comment", "String">;
    readonly parentId: FieldRef<"Comment", "String">;
    readonly content: FieldRef<"Comment", "String">;
    readonly createdAt: FieldRef<"Comment", "DateTime">;
    readonly updatedAt: FieldRef<"Comment", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput;
  };

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput;
  };

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Comment create
   */
  export type CommentCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>;
  };

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Comment update
   */
  export type CommentUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>;
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput;
  };

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>;
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput;
    /**
     * Limit how many Comments to update.
     */
    limit?: number;
  };

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>;
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput;
    /**
     * Limit how many Comments to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput;
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>;
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>;
  };

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput;
  };

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput;
    /**
     * Limit how many Comments to delete.
     */
    limit?: number;
  };

  /**
   * Comment.parent
   */
  export type Comment$parentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    where?: CommentWhereInput;
  };

  /**
   * Comment.replies
   */
  export type Comment$repliesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    where?: CommentWhereInput;
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    cursor?: CommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
  };

  /**
   * Model Media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null;
    _min: MediaMinAggregateOutputType | null;
    _max: MediaMaxAggregateOutputType | null;
  };

  export type MediaMinAggregateOutputType = {
    id: string | null;
    url: string | null;
    type: string | null;
    uploadedBy: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type MediaMaxAggregateOutputType = {
    id: string | null;
    url: string | null;
    type: string | null;
    uploadedBy: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type MediaCountAggregateOutputType = {
    id: number;
    url: number;
    type: number;
    uploadedBy: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type MediaMinAggregateInputType = {
    id?: true;
    url?: true;
    type?: true;
    uploadedBy?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type MediaMaxAggregateInputType = {
    id?: true;
    url?: true;
    type?: true;
    uploadedBy?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type MediaCountAggregateInputType = {
    id?: true;
    url?: true;
    type?: true;
    uploadedBy?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type MediaAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Media to aggregate.
     */
    where?: MediaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MediaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Media from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Media.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Media
     **/
    _count?: true | MediaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MediaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MediaMaxAggregateInputType;
  };

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
    [P in keyof T & keyof AggregateMedia]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>;
  };

  export type MediaGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MediaWhereInput;
    orderBy?:
      | MediaOrderByWithAggregationInput
      | MediaOrderByWithAggregationInput[];
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum;
    having?: MediaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MediaCountAggregateInputType | true;
    _min?: MediaMinAggregateInputType;
    _max?: MediaMaxAggregateInputType;
  };

  export type MediaGroupByOutputType = {
    id: string;
    url: string;
    type: string;
    uploadedBy: string;
    createdAt: Date;
    updatedAt: Date;
    _count: MediaCountAggregateOutputType | null;
    _min: MediaMinAggregateOutputType | null;
    _max: MediaMaxAggregateOutputType | null;
  };

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<MediaGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof MediaGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>;
        }
      >
    >;

  export type MediaSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      url?: boolean;
      type?: boolean;
      uploadedBy?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["media"]
  >;

  export type MediaSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      url?: boolean;
      type?: boolean;
      uploadedBy?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["media"]
  >;

  export type MediaSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      url?: boolean;
      type?: boolean;
      uploadedBy?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["media"]
  >;

  export type MediaSelectScalar = {
    id?: boolean;
    url?: boolean;
    type?: boolean;
    uploadedBy?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type MediaOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "url" | "type" | "uploadedBy" | "createdAt" | "updatedAt",
    ExtArgs["result"]["media"]
  >;
  export type MediaInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type MediaIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type MediaIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $MediaPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Media";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        url: string;
        type: string;
        uploadedBy: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["media"]
    >;
    composites: {};
  };

  type MediaGetPayload<
    S extends boolean | null | undefined | MediaDefaultArgs,
  > = $Result.GetResult<Prisma.$MediaPayload, S>;

  type MediaCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<MediaFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: MediaCountAggregateInputType | true;
  };

  export interface MediaDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Media"];
      meta: { name: "Media" };
    };
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFindUniqueArgs>(
      args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>,
    ): Prisma__MediaClient<
      $Result.GetResult<
        Prisma.$MediaPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs>(
      args: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__MediaClient<
      $Result.GetResult<
        Prisma.$MediaPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFindFirstArgs>(
      args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>,
    ): Prisma__MediaClient<
      $Result.GetResult<
        Prisma.$MediaPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__MediaClient<
      $Result.GetResult<
        Prisma.$MediaPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     *
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MediaFindManyArgs>(
      args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MediaPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     *
     */
    create<T extends MediaCreateArgs>(
      args: SelectSubset<T, MediaCreateArgs<ExtArgs>>,
    ): Prisma__MediaClient<
      $Result.GetResult<
        Prisma.$MediaPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Media.
     * @param {MediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MediaCreateManyArgs>(
      args?: SelectSubset<T, MediaCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Media and returns the data saved in the database.
     * @param {MediaCreateManyAndReturnArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MediaCreateManyAndReturnArgs>(
      args?: SelectSubset<T, MediaCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MediaPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     *
     */
    delete<T extends MediaDeleteArgs>(
      args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>,
    ): Prisma__MediaClient<
      $Result.GetResult<
        Prisma.$MediaPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MediaUpdateArgs>(
      args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>,
    ): Prisma__MediaClient<
      $Result.GetResult<
        Prisma.$MediaPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MediaDeleteManyArgs>(
      args?: SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MediaUpdateManyArgs>(
      args: SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Media and returns the data updated in the database.
     * @param {MediaUpdateManyAndReturnArgs} args - Arguments to update many Media.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends MediaUpdateManyAndReturnArgs>(
      args: SelectSubset<T, MediaUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MediaPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends MediaUpsertArgs>(
      args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>,
    ): Prisma__MediaClient<
      $Result.GetResult<
        Prisma.$MediaPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
     **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], MediaCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MediaAggregateArgs>(
      args: Subset<T, MediaAggregateArgs>,
    ): Prisma.PrismaPromise<GetMediaAggregateType<T>>;

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs["orderBy"] }
        : { orderBy?: MediaGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetMediaGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Media model
     */
    readonly fields: MediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Media model
   */
  interface MediaFieldRefs {
    readonly id: FieldRef<"Media", "String">;
    readonly url: FieldRef<"Media", "String">;
    readonly type: FieldRef<"Media", "String">;
    readonly uploadedBy: FieldRef<"Media", "String">;
    readonly createdAt: FieldRef<"Media", "DateTime">;
    readonly updatedAt: FieldRef<"Media", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null;
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput;
  };

  /**
   * Media findUniqueOrThrow
   */
  export type MediaFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null;
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput;
  };

  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null;
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Media from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Media.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[];
  };

  /**
   * Media findFirstOrThrow
   */
  export type MediaFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null;
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Media from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Media.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[];
  };

  /**
   * Media findMany
   */
  export type MediaFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null;
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Media.
     */
    cursor?: MediaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Media from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Media.
     */
    skip?: number;
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[];
  };

  /**
   * Media create
   */
  export type MediaCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null;
    /**
     * The data needed to create a Media.
     */
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>;
  };

  /**
   * Media createMany
   */
  export type MediaCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Media createManyAndReturn
   */
  export type MediaCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null;
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Media update
   */
  export type MediaUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null;
    /**
     * The data needed to update a Media.
     */
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>;
    /**
     * Choose, which Media to update.
     */
    where: MediaWhereUniqueInput;
  };

  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>;
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput;
    /**
     * Limit how many Media to update.
     */
    limit?: number;
  };

  /**
   * Media updateManyAndReturn
   */
  export type MediaUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null;
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>;
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput;
    /**
     * Limit how many Media to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Media upsert
   */
  export type MediaUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null;
    /**
     * The filter to search for the Media to update in case it exists.
     */
    where: MediaWhereUniqueInput;
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     */
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>;
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>;
  };

  /**
   * Media delete
   */
  export type MediaDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null;
    /**
     * Filter which Media to delete.
     */
    where: MediaWhereUniqueInput;
  };

  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Media to delete
     */
    where?: MediaWhereInput;
    /**
     * Limit how many Media to delete.
     */
    limit?: number;
  };

  /**
   * Media without action
   */
  export type MediaDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: "id";
    username: "username";
    email: "email";
    passwordHash: "passwordHash";
    isActive: "isActive";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const RoleScalarFieldEnum: {
    id: "id";
    name: "name";
    description: "description";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type RoleScalarFieldEnum =
    (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum];

  export const PermissionScalarFieldEnum: {
    id: "id";
    name: "name";
    description: "description";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type PermissionScalarFieldEnum =
    (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum];

  export const RolePermissionScalarFieldEnum: {
    roleId: "roleId";
    permissionId: "permissionId";
  };

  export type RolePermissionScalarFieldEnum =
    (typeof RolePermissionScalarFieldEnum)[keyof typeof RolePermissionScalarFieldEnum];

  export const UserRoleScalarFieldEnum: {
    userId: "userId";
    roleId: "roleId";
  };

  export type UserRoleScalarFieldEnum =
    (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum];

  export const PageScalarFieldEnum: {
    id: "id";
    userId: "userId";
    title: "title";
    description: "description";
    isDeleted: "isDeleted";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type PageScalarFieldEnum =
    (typeof PageScalarFieldEnum)[keyof typeof PageScalarFieldEnum];

  export const UserSharedScalarFieldEnum: {
    id: "id";
    pageId: "pageId";
    userId: "userId";
    roleId: "roleId";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type UserSharedScalarFieldEnum =
    (typeof UserSharedScalarFieldEnum)[keyof typeof UserSharedScalarFieldEnum];

  export const BlockScalarFieldEnum: {
    id: "id";
    pageId: "pageId";
    parentId: "parentId";
    type: "type";
    content: "content";
    orderIndex: "orderIndex";
    isDeleted: "isDeleted";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type BlockScalarFieldEnum =
    (typeof BlockScalarFieldEnum)[keyof typeof BlockScalarFieldEnum];

  export const CommentScalarFieldEnum: {
    id: "id";
    blockId: "blockId";
    userId: "userId";
    parentId: "parentId";
    content: "content";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type CommentScalarFieldEnum =
    (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum];

  export const MediaScalarFieldEnum: {
    id: "id";
    url: "url";
    type: "type";
    uploadedBy: "uploadedBy";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type MediaScalarFieldEnum =
    (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: "first";
    last: "last";
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String[]"
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Boolean"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime[]"
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int[]"
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float[]"
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<"User"> | string;
    username?: StringFilter<"User"> | string;
    email?: StringFilter<"User"> | string;
    passwordHash?: StringFilter<"User"> | string;
    isActive?: BoolFilter<"User"> | boolean;
    createdAt?: DateTimeFilter<"User"> | Date | string;
    updatedAt?: DateTimeFilter<"User"> | Date | string;
    roles?: UserRoleListRelationFilter;
    sharedPages?: UserSharedListRelationFilter;
    pages?: PageListRelationFilter;
    comments?: CommentListRelationFilter;
    media?: MediaListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    username?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    isActive?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    roles?: UserRoleOrderByRelationAggregateInput;
    sharedPages?: UserSharedOrderByRelationAggregateInput;
    pages?: PageOrderByRelationAggregateInput;
    comments?: CommentOrderByRelationAggregateInput;
    media?: MediaOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      username?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      passwordHash?: StringFilter<"User"> | string;
      isActive?: BoolFilter<"User"> | boolean;
      createdAt?: DateTimeFilter<"User"> | Date | string;
      updatedAt?: DateTimeFilter<"User"> | Date | string;
      roles?: UserRoleListRelationFilter;
      sharedPages?: UserSharedListRelationFilter;
      pages?: PageListRelationFilter;
      comments?: CommentListRelationFilter;
      media?: MediaListRelationFilter;
    },
    "id" | "username" | "email"
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    username?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    isActive?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"User"> | string;
    username?: StringWithAggregatesFilter<"User"> | string;
    email?: StringWithAggregatesFilter<"User"> | string;
    passwordHash?: StringWithAggregatesFilter<"User"> | string;
    isActive?: BoolWithAggregatesFilter<"User"> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
  };

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[];
    OR?: RoleWhereInput[];
    NOT?: RoleWhereInput | RoleWhereInput[];
    id?: StringFilter<"Role"> | string;
    name?: StringFilter<"Role"> | string;
    description?: StringNullableFilter<"Role"> | string | null;
    createdAt?: DateTimeFilter<"Role"> | Date | string;
    updatedAt?: DateTimeFilter<"Role"> | Date | string;
    users?: UserRoleListRelationFilter;
    permissions?: RolePermissionListRelationFilter;
    sharedPages?: UserSharedListRelationFilter;
  };

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    users?: UserRoleOrderByRelationAggregateInput;
    permissions?: RolePermissionOrderByRelationAggregateInput;
    sharedPages?: UserSharedOrderByRelationAggregateInput;
  };

  export type RoleWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      name?: string;
      AND?: RoleWhereInput | RoleWhereInput[];
      OR?: RoleWhereInput[];
      NOT?: RoleWhereInput | RoleWhereInput[];
      description?: StringNullableFilter<"Role"> | string | null;
      createdAt?: DateTimeFilter<"Role"> | Date | string;
      updatedAt?: DateTimeFilter<"Role"> | Date | string;
      users?: UserRoleListRelationFilter;
      permissions?: RolePermissionListRelationFilter;
      sharedPages?: UserSharedListRelationFilter;
    },
    "id" | "name"
  >;

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: RoleCountOrderByAggregateInput;
    _max?: RoleMaxOrderByAggregateInput;
    _min?: RoleMinOrderByAggregateInput;
  };

  export type RoleScalarWhereWithAggregatesInput = {
    AND?:
      | RoleScalarWhereWithAggregatesInput
      | RoleScalarWhereWithAggregatesInput[];
    OR?: RoleScalarWhereWithAggregatesInput[];
    NOT?:
      | RoleScalarWhereWithAggregatesInput
      | RoleScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Role"> | string;
    name?: StringWithAggregatesFilter<"Role"> | string;
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string;
  };

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[];
    OR?: PermissionWhereInput[];
    NOT?: PermissionWhereInput | PermissionWhereInput[];
    id?: StringFilter<"Permission"> | string;
    name?: StringFilter<"Permission"> | string;
    description?: StringNullableFilter<"Permission"> | string | null;
    createdAt?: DateTimeFilter<"Permission"> | Date | string;
    updatedAt?: DateTimeFilter<"Permission"> | Date | string;
    roles?: RolePermissionListRelationFilter;
  };

  export type PermissionOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    roles?: RolePermissionOrderByRelationAggregateInput;
  };

  export type PermissionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      name?: string;
      AND?: PermissionWhereInput | PermissionWhereInput[];
      OR?: PermissionWhereInput[];
      NOT?: PermissionWhereInput | PermissionWhereInput[];
      description?: StringNullableFilter<"Permission"> | string | null;
      createdAt?: DateTimeFilter<"Permission"> | Date | string;
      updatedAt?: DateTimeFilter<"Permission"> | Date | string;
      roles?: RolePermissionListRelationFilter;
    },
    "id" | "name"
  >;

  export type PermissionOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: PermissionCountOrderByAggregateInput;
    _max?: PermissionMaxOrderByAggregateInput;
    _min?: PermissionMinOrderByAggregateInput;
  };

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?:
      | PermissionScalarWhereWithAggregatesInput
      | PermissionScalarWhereWithAggregatesInput[];
    OR?: PermissionScalarWhereWithAggregatesInput[];
    NOT?:
      | PermissionScalarWhereWithAggregatesInput
      | PermissionScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Permission"> | string;
    name?: StringWithAggregatesFilter<"Permission"> | string;
    description?:
      | StringNullableWithAggregatesFilter<"Permission">
      | string
      | null;
    createdAt?: DateTimeWithAggregatesFilter<"Permission"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Permission"> | Date | string;
  };

  export type RolePermissionWhereInput = {
    AND?: RolePermissionWhereInput | RolePermissionWhereInput[];
    OR?: RolePermissionWhereInput[];
    NOT?: RolePermissionWhereInput | RolePermissionWhereInput[];
    roleId?: StringFilter<"RolePermission"> | string;
    permissionId?: StringFilter<"RolePermission"> | string;
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>;
    permission?: XOR<PermissionScalarRelationFilter, PermissionWhereInput>;
  };

  export type RolePermissionOrderByWithRelationInput = {
    roleId?: SortOrder;
    permissionId?: SortOrder;
    role?: RoleOrderByWithRelationInput;
    permission?: PermissionOrderByWithRelationInput;
  };

  export type RolePermissionWhereUniqueInput = Prisma.AtLeast<
    {
      roleId_permissionId?: RolePermissionRoleIdPermissionIdCompoundUniqueInput;
      AND?: RolePermissionWhereInput | RolePermissionWhereInput[];
      OR?: RolePermissionWhereInput[];
      NOT?: RolePermissionWhereInput | RolePermissionWhereInput[];
      roleId?: StringFilter<"RolePermission"> | string;
      permissionId?: StringFilter<"RolePermission"> | string;
      role?: XOR<RoleScalarRelationFilter, RoleWhereInput>;
      permission?: XOR<PermissionScalarRelationFilter, PermissionWhereInput>;
    },
    "roleId_permissionId"
  >;

  export type RolePermissionOrderByWithAggregationInput = {
    roleId?: SortOrder;
    permissionId?: SortOrder;
    _count?: RolePermissionCountOrderByAggregateInput;
    _max?: RolePermissionMaxOrderByAggregateInput;
    _min?: RolePermissionMinOrderByAggregateInput;
  };

  export type RolePermissionScalarWhereWithAggregatesInput = {
    AND?:
      | RolePermissionScalarWhereWithAggregatesInput
      | RolePermissionScalarWhereWithAggregatesInput[];
    OR?: RolePermissionScalarWhereWithAggregatesInput[];
    NOT?:
      | RolePermissionScalarWhereWithAggregatesInput
      | RolePermissionScalarWhereWithAggregatesInput[];
    roleId?: StringWithAggregatesFilter<"RolePermission"> | string;
    permissionId?: StringWithAggregatesFilter<"RolePermission"> | string;
  };

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[];
    OR?: UserRoleWhereInput[];
    NOT?: UserRoleWhereInput | UserRoleWhereInput[];
    userId?: StringFilter<"UserRole"> | string;
    roleId?: StringFilter<"UserRole"> | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>;
  };

  export type UserRoleOrderByWithRelationInput = {
    userId?: SortOrder;
    roleId?: SortOrder;
    user?: UserOrderByWithRelationInput;
    role?: RoleOrderByWithRelationInput;
  };

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<
    {
      userId_roleId?: UserRoleUserIdRoleIdCompoundUniqueInput;
      AND?: UserRoleWhereInput | UserRoleWhereInput[];
      OR?: UserRoleWhereInput[];
      NOT?: UserRoleWhereInput | UserRoleWhereInput[];
      userId?: StringFilter<"UserRole"> | string;
      roleId?: StringFilter<"UserRole"> | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      role?: XOR<RoleScalarRelationFilter, RoleWhereInput>;
    },
    "userId_roleId"
  >;

  export type UserRoleOrderByWithAggregationInput = {
    userId?: SortOrder;
    roleId?: SortOrder;
    _count?: UserRoleCountOrderByAggregateInput;
    _max?: UserRoleMaxOrderByAggregateInput;
    _min?: UserRoleMinOrderByAggregateInput;
  };

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?:
      | UserRoleScalarWhereWithAggregatesInput
      | UserRoleScalarWhereWithAggregatesInput[];
    OR?: UserRoleScalarWhereWithAggregatesInput[];
    NOT?:
      | UserRoleScalarWhereWithAggregatesInput
      | UserRoleScalarWhereWithAggregatesInput[];
    userId?: StringWithAggregatesFilter<"UserRole"> | string;
    roleId?: StringWithAggregatesFilter<"UserRole"> | string;
  };

  export type PageWhereInput = {
    AND?: PageWhereInput | PageWhereInput[];
    OR?: PageWhereInput[];
    NOT?: PageWhereInput | PageWhereInput[];
    id?: StringFilter<"Page"> | string;
    userId?: StringFilter<"Page"> | string;
    title?: StringNullableFilter<"Page"> | string | null;
    description?: StringNullableFilter<"Page"> | string | null;
    isDeleted?: BoolFilter<"Page"> | boolean;
    createdAt?: DateTimeFilter<"Page"> | Date | string;
    updatedAt?: DateTimeFilter<"Page"> | Date | string;
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>;
    blocks?: BlockListRelationFilter;
    sharedUsers?: UserSharedListRelationFilter;
  };

  export type PageOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    title?: SortOrderInput | SortOrder;
    description?: SortOrderInput | SortOrder;
    isDeleted?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    owner?: UserOrderByWithRelationInput;
    blocks?: BlockOrderByRelationAggregateInput;
    sharedUsers?: UserSharedOrderByRelationAggregateInput;
  };

  export type PageWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: PageWhereInput | PageWhereInput[];
      OR?: PageWhereInput[];
      NOT?: PageWhereInput | PageWhereInput[];
      userId?: StringFilter<"Page"> | string;
      title?: StringNullableFilter<"Page"> | string | null;
      description?: StringNullableFilter<"Page"> | string | null;
      isDeleted?: BoolFilter<"Page"> | boolean;
      createdAt?: DateTimeFilter<"Page"> | Date | string;
      updatedAt?: DateTimeFilter<"Page"> | Date | string;
      owner?: XOR<UserScalarRelationFilter, UserWhereInput>;
      blocks?: BlockListRelationFilter;
      sharedUsers?: UserSharedListRelationFilter;
    },
    "id"
  >;

  export type PageOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    title?: SortOrderInput | SortOrder;
    description?: SortOrderInput | SortOrder;
    isDeleted?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: PageCountOrderByAggregateInput;
    _max?: PageMaxOrderByAggregateInput;
    _min?: PageMinOrderByAggregateInput;
  };

  export type PageScalarWhereWithAggregatesInput = {
    AND?:
      | PageScalarWhereWithAggregatesInput
      | PageScalarWhereWithAggregatesInput[];
    OR?: PageScalarWhereWithAggregatesInput[];
    NOT?:
      | PageScalarWhereWithAggregatesInput
      | PageScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Page"> | string;
    userId?: StringWithAggregatesFilter<"Page"> | string;
    title?: StringNullableWithAggregatesFilter<"Page"> | string | null;
    description?: StringNullableWithAggregatesFilter<"Page"> | string | null;
    isDeleted?: BoolWithAggregatesFilter<"Page"> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<"Page"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Page"> | Date | string;
  };

  export type UserSharedWhereInput = {
    AND?: UserSharedWhereInput | UserSharedWhereInput[];
    OR?: UserSharedWhereInput[];
    NOT?: UserSharedWhereInput | UserSharedWhereInput[];
    id?: StringFilter<"UserShared"> | string;
    pageId?: StringFilter<"UserShared"> | string;
    userId?: StringFilter<"UserShared"> | string;
    roleId?: StringFilter<"UserShared"> | string;
    createdAt?: DateTimeFilter<"UserShared"> | Date | string;
    updatedAt?: DateTimeFilter<"UserShared"> | Date | string;
    page?: XOR<PageScalarRelationFilter, PageWhereInput>;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>;
  };

  export type UserSharedOrderByWithRelationInput = {
    id?: SortOrder;
    pageId?: SortOrder;
    userId?: SortOrder;
    roleId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    page?: PageOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
    role?: RoleOrderByWithRelationInput;
  };

  export type UserSharedWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: UserSharedWhereInput | UserSharedWhereInput[];
      OR?: UserSharedWhereInput[];
      NOT?: UserSharedWhereInput | UserSharedWhereInput[];
      pageId?: StringFilter<"UserShared"> | string;
      userId?: StringFilter<"UserShared"> | string;
      roleId?: StringFilter<"UserShared"> | string;
      createdAt?: DateTimeFilter<"UserShared"> | Date | string;
      updatedAt?: DateTimeFilter<"UserShared"> | Date | string;
      page?: XOR<PageScalarRelationFilter, PageWhereInput>;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      role?: XOR<RoleScalarRelationFilter, RoleWhereInput>;
    },
    "id"
  >;

  export type UserSharedOrderByWithAggregationInput = {
    id?: SortOrder;
    pageId?: SortOrder;
    userId?: SortOrder;
    roleId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserSharedCountOrderByAggregateInput;
    _max?: UserSharedMaxOrderByAggregateInput;
    _min?: UserSharedMinOrderByAggregateInput;
  };

  export type UserSharedScalarWhereWithAggregatesInput = {
    AND?:
      | UserSharedScalarWhereWithAggregatesInput
      | UserSharedScalarWhereWithAggregatesInput[];
    OR?: UserSharedScalarWhereWithAggregatesInput[];
    NOT?:
      | UserSharedScalarWhereWithAggregatesInput
      | UserSharedScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"UserShared"> | string;
    pageId?: StringWithAggregatesFilter<"UserShared"> | string;
    userId?: StringWithAggregatesFilter<"UserShared"> | string;
    roleId?: StringWithAggregatesFilter<"UserShared"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"UserShared"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"UserShared"> | Date | string;
  };

  export type BlockWhereInput = {
    AND?: BlockWhereInput | BlockWhereInput[];
    OR?: BlockWhereInput[];
    NOT?: BlockWhereInput | BlockWhereInput[];
    id?: StringFilter<"Block"> | string;
    pageId?: StringFilter<"Block"> | string;
    parentId?: StringNullableFilter<"Block"> | string | null;
    type?: StringFilter<"Block"> | string;
    content?: StringNullableFilter<"Block"> | string | null;
    orderIndex?: IntFilter<"Block"> | number;
    isDeleted?: BoolFilter<"Block"> | boolean;
    createdAt?: DateTimeFilter<"Block"> | Date | string;
    updatedAt?: DateTimeFilter<"Block"> | Date | string;
    page?: XOR<PageScalarRelationFilter, PageWhereInput>;
    parent?: XOR<BlockNullableScalarRelationFilter, BlockWhereInput> | null;
    children?: BlockListRelationFilter;
    comments?: CommentListRelationFilter;
  };

  export type BlockOrderByWithRelationInput = {
    id?: SortOrder;
    pageId?: SortOrder;
    parentId?: SortOrderInput | SortOrder;
    type?: SortOrder;
    content?: SortOrderInput | SortOrder;
    orderIndex?: SortOrder;
    isDeleted?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    page?: PageOrderByWithRelationInput;
    parent?: BlockOrderByWithRelationInput;
    children?: BlockOrderByRelationAggregateInput;
    comments?: CommentOrderByRelationAggregateInput;
  };

  export type BlockWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: BlockWhereInput | BlockWhereInput[];
      OR?: BlockWhereInput[];
      NOT?: BlockWhereInput | BlockWhereInput[];
      pageId?: StringFilter<"Block"> | string;
      parentId?: StringNullableFilter<"Block"> | string | null;
      type?: StringFilter<"Block"> | string;
      content?: StringNullableFilter<"Block"> | string | null;
      orderIndex?: IntFilter<"Block"> | number;
      isDeleted?: BoolFilter<"Block"> | boolean;
      createdAt?: DateTimeFilter<"Block"> | Date | string;
      updatedAt?: DateTimeFilter<"Block"> | Date | string;
      page?: XOR<PageScalarRelationFilter, PageWhereInput>;
      parent?: XOR<BlockNullableScalarRelationFilter, BlockWhereInput> | null;
      children?: BlockListRelationFilter;
      comments?: CommentListRelationFilter;
    },
    "id"
  >;

  export type BlockOrderByWithAggregationInput = {
    id?: SortOrder;
    pageId?: SortOrder;
    parentId?: SortOrderInput | SortOrder;
    type?: SortOrder;
    content?: SortOrderInput | SortOrder;
    orderIndex?: SortOrder;
    isDeleted?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: BlockCountOrderByAggregateInput;
    _avg?: BlockAvgOrderByAggregateInput;
    _max?: BlockMaxOrderByAggregateInput;
    _min?: BlockMinOrderByAggregateInput;
    _sum?: BlockSumOrderByAggregateInput;
  };

  export type BlockScalarWhereWithAggregatesInput = {
    AND?:
      | BlockScalarWhereWithAggregatesInput
      | BlockScalarWhereWithAggregatesInput[];
    OR?: BlockScalarWhereWithAggregatesInput[];
    NOT?:
      | BlockScalarWhereWithAggregatesInput
      | BlockScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Block"> | string;
    pageId?: StringWithAggregatesFilter<"Block"> | string;
    parentId?: StringNullableWithAggregatesFilter<"Block"> | string | null;
    type?: StringWithAggregatesFilter<"Block"> | string;
    content?: StringNullableWithAggregatesFilter<"Block"> | string | null;
    orderIndex?: IntWithAggregatesFilter<"Block"> | number;
    isDeleted?: BoolWithAggregatesFilter<"Block"> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<"Block"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Block"> | Date | string;
  };

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[];
    OR?: CommentWhereInput[];
    NOT?: CommentWhereInput | CommentWhereInput[];
    id?: StringFilter<"Comment"> | string;
    blockId?: StringFilter<"Comment"> | string;
    userId?: StringFilter<"Comment"> | string;
    parentId?: StringNullableFilter<"Comment"> | string | null;
    content?: StringNullableFilter<"Comment"> | string | null;
    createdAt?: DateTimeFilter<"Comment"> | Date | string;
    updatedAt?: DateTimeFilter<"Comment"> | Date | string;
    block?: XOR<BlockScalarRelationFilter, BlockWhereInput>;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null;
    replies?: CommentListRelationFilter;
  };

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder;
    blockId?: SortOrder;
    userId?: SortOrder;
    parentId?: SortOrderInput | SortOrder;
    content?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    block?: BlockOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
    parent?: CommentOrderByWithRelationInput;
    replies?: CommentOrderByRelationAggregateInput;
  };

  export type CommentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: CommentWhereInput | CommentWhereInput[];
      OR?: CommentWhereInput[];
      NOT?: CommentWhereInput | CommentWhereInput[];
      blockId?: StringFilter<"Comment"> | string;
      userId?: StringFilter<"Comment"> | string;
      parentId?: StringNullableFilter<"Comment"> | string | null;
      content?: StringNullableFilter<"Comment"> | string | null;
      createdAt?: DateTimeFilter<"Comment"> | Date | string;
      updatedAt?: DateTimeFilter<"Comment"> | Date | string;
      block?: XOR<BlockScalarRelationFilter, BlockWhereInput>;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      parent?: XOR<
        CommentNullableScalarRelationFilter,
        CommentWhereInput
      > | null;
      replies?: CommentListRelationFilter;
    },
    "id"
  >;

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder;
    blockId?: SortOrder;
    userId?: SortOrder;
    parentId?: SortOrderInput | SortOrder;
    content?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: CommentCountOrderByAggregateInput;
    _max?: CommentMaxOrderByAggregateInput;
    _min?: CommentMinOrderByAggregateInput;
  };

  export type CommentScalarWhereWithAggregatesInput = {
    AND?:
      | CommentScalarWhereWithAggregatesInput
      | CommentScalarWhereWithAggregatesInput[];
    OR?: CommentScalarWhereWithAggregatesInput[];
    NOT?:
      | CommentScalarWhereWithAggregatesInput
      | CommentScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Comment"> | string;
    blockId?: StringWithAggregatesFilter<"Comment"> | string;
    userId?: StringWithAggregatesFilter<"Comment"> | string;
    parentId?: StringNullableWithAggregatesFilter<"Comment"> | string | null;
    content?: StringNullableWithAggregatesFilter<"Comment"> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string;
  };

  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[];
    OR?: MediaWhereInput[];
    NOT?: MediaWhereInput | MediaWhereInput[];
    id?: StringFilter<"Media"> | string;
    url?: StringFilter<"Media"> | string;
    type?: StringFilter<"Media"> | string;
    uploadedBy?: StringFilter<"Media"> | string;
    createdAt?: DateTimeFilter<"Media"> | Date | string;
    updatedAt?: DateTimeFilter<"Media"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder;
    url?: SortOrder;
    type?: SortOrder;
    uploadedBy?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type MediaWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: MediaWhereInput | MediaWhereInput[];
      OR?: MediaWhereInput[];
      NOT?: MediaWhereInput | MediaWhereInput[];
      url?: StringFilter<"Media"> | string;
      type?: StringFilter<"Media"> | string;
      uploadedBy?: StringFilter<"Media"> | string;
      createdAt?: DateTimeFilter<"Media"> | Date | string;
      updatedAt?: DateTimeFilter<"Media"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id"
  >;

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder;
    url?: SortOrder;
    type?: SortOrder;
    uploadedBy?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: MediaCountOrderByAggregateInput;
    _max?: MediaMaxOrderByAggregateInput;
    _min?: MediaMinOrderByAggregateInput;
  };

  export type MediaScalarWhereWithAggregatesInput = {
    AND?:
      | MediaScalarWhereWithAggregatesInput
      | MediaScalarWhereWithAggregatesInput[];
    OR?: MediaScalarWhereWithAggregatesInput[];
    NOT?:
      | MediaScalarWhereWithAggregatesInput
      | MediaScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Media"> | string;
    url?: StringWithAggregatesFilter<"Media"> | string;
    type?: StringWithAggregatesFilter<"Media"> | string;
    uploadedBy?: StringWithAggregatesFilter<"Media"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"Media"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Media"> | Date | string;
  };

  export type UserCreateInput = {
    id?: string;
    username: string;
    email: string;
    passwordHash: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roles?: UserRoleCreateNestedManyWithoutUserInput;
    sharedPages?: UserSharedCreateNestedManyWithoutUserInput;
    pages?: PageCreateNestedManyWithoutOwnerInput;
    comments?: CommentCreateNestedManyWithoutUserInput;
    media?: MediaCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    username: string;
    email: string;
    passwordHash: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput;
    sharedPages?: UserSharedUncheckedCreateNestedManyWithoutUserInput;
    pages?: PageUncheckedCreateNestedManyWithoutOwnerInput;
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput;
    media?: MediaUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: UserRoleUpdateManyWithoutUserNestedInput;
    sharedPages?: UserSharedUpdateManyWithoutUserNestedInput;
    pages?: PageUpdateManyWithoutOwnerNestedInput;
    comments?: CommentUpdateManyWithoutUserNestedInput;
    media?: MediaUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    sharedPages?: UserSharedUncheckedUpdateManyWithoutUserNestedInput;
    pages?: PageUncheckedUpdateManyWithoutOwnerNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput;
    media?: MediaUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    username: string;
    email: string;
    passwordHash: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RoleCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: UserRoleCreateNestedManyWithoutRoleInput;
    permissions?: RolePermissionCreateNestedManyWithoutRoleInput;
    sharedPages?: UserSharedCreateNestedManyWithoutRoleInput;
  };

  export type RoleUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: UserRoleUncheckedCreateNestedManyWithoutRoleInput;
    permissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput;
    sharedPages?: UserSharedUncheckedCreateNestedManyWithoutRoleInput;
  };

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: UserRoleUpdateManyWithoutRoleNestedInput;
    permissions?: RolePermissionUpdateManyWithoutRoleNestedInput;
    sharedPages?: UserSharedUpdateManyWithoutRoleNestedInput;
  };

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput;
    permissions?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput;
    sharedPages?: UserSharedUncheckedUpdateManyWithoutRoleNestedInput;
  };

  export type RoleCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PermissionCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roles?: RolePermissionCreateNestedManyWithoutPermissionInput;
  };

  export type PermissionUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roles?: RolePermissionUncheckedCreateNestedManyWithoutPermissionInput;
  };

  export type PermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: RolePermissionUpdateManyWithoutPermissionNestedInput;
  };

  export type PermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput;
  };

  export type PermissionCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RolePermissionCreateInput = {
    role: RoleCreateNestedOneWithoutPermissionsInput;
    permission: PermissionCreateNestedOneWithoutRolesInput;
  };

  export type RolePermissionUncheckedCreateInput = {
    roleId: string;
    permissionId: string;
  };

  export type RolePermissionUpdateInput = {
    role?: RoleUpdateOneRequiredWithoutPermissionsNestedInput;
    permission?: PermissionUpdateOneRequiredWithoutRolesNestedInput;
  };

  export type RolePermissionUncheckedUpdateInput = {
    roleId?: StringFieldUpdateOperationsInput | string;
    permissionId?: StringFieldUpdateOperationsInput | string;
  };

  export type RolePermissionCreateManyInput = {
    roleId: string;
    permissionId: string;
  };

  export type RolePermissionUpdateManyMutationInput = {};

  export type RolePermissionUncheckedUpdateManyInput = {
    roleId?: StringFieldUpdateOperationsInput | string;
    permissionId?: StringFieldUpdateOperationsInput | string;
  };

  export type UserRoleCreateInput = {
    user: UserCreateNestedOneWithoutRolesInput;
    role: RoleCreateNestedOneWithoutUsersInput;
  };

  export type UserRoleUncheckedCreateInput = {
    userId: string;
    roleId: string;
  };

  export type UserRoleUpdateInput = {
    user?: UserUpdateOneRequiredWithoutRolesNestedInput;
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput;
  };

  export type UserRoleUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    roleId?: StringFieldUpdateOperationsInput | string;
  };

  export type UserRoleCreateManyInput = {
    userId: string;
    roleId: string;
  };

  export type UserRoleUpdateManyMutationInput = {};

  export type UserRoleUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    roleId?: StringFieldUpdateOperationsInput | string;
  };

  export type PageCreateInput = {
    id?: string;
    title?: string | null;
    description?: string | null;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: UserCreateNestedOneWithoutPagesInput;
    blocks?: BlockCreateNestedManyWithoutPageInput;
    sharedUsers?: UserSharedCreateNestedManyWithoutPageInput;
  };

  export type PageUncheckedCreateInput = {
    id?: string;
    userId: string;
    title?: string | null;
    description?: string | null;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    blocks?: BlockUncheckedCreateNestedManyWithoutPageInput;
    sharedUsers?: UserSharedUncheckedCreateNestedManyWithoutPageInput;
  };

  export type PageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: UserUpdateOneRequiredWithoutPagesNestedInput;
    blocks?: BlockUpdateManyWithoutPageNestedInput;
    sharedUsers?: UserSharedUpdateManyWithoutPageNestedInput;
  };

  export type PageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    blocks?: BlockUncheckedUpdateManyWithoutPageNestedInput;
    sharedUsers?: UserSharedUncheckedUpdateManyWithoutPageNestedInput;
  };

  export type PageCreateManyInput = {
    id?: string;
    userId: string;
    title?: string | null;
    description?: string | null;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserSharedCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    page: PageCreateNestedOneWithoutSharedUsersInput;
    user: UserCreateNestedOneWithoutSharedPagesInput;
    role: RoleCreateNestedOneWithoutSharedPagesInput;
  };

  export type UserSharedUncheckedCreateInput = {
    id?: string;
    pageId: string;
    userId: string;
    roleId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserSharedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    page?: PageUpdateOneRequiredWithoutSharedUsersNestedInput;
    user?: UserUpdateOneRequiredWithoutSharedPagesNestedInput;
    role?: RoleUpdateOneRequiredWithoutSharedPagesNestedInput;
  };

  export type UserSharedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pageId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    roleId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserSharedCreateManyInput = {
    id?: string;
    pageId: string;
    userId: string;
    roleId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserSharedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserSharedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pageId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    roleId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BlockCreateInput = {
    id?: string;
    type: string;
    content?: string | null;
    orderIndex: number;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    page: PageCreateNestedOneWithoutBlocksInput;
    parent?: BlockCreateNestedOneWithoutChildrenInput;
    children?: BlockCreateNestedManyWithoutParentInput;
    comments?: CommentCreateNestedManyWithoutBlockInput;
  };

  export type BlockUncheckedCreateInput = {
    id?: string;
    pageId: string;
    parentId?: string | null;
    type: string;
    content?: string | null;
    orderIndex: number;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    children?: BlockUncheckedCreateNestedManyWithoutParentInput;
    comments?: CommentUncheckedCreateNestedManyWithoutBlockInput;
  };

  export type BlockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: IntFieldUpdateOperationsInput | number;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    page?: PageUpdateOneRequiredWithoutBlocksNestedInput;
    parent?: BlockUpdateOneWithoutChildrenNestedInput;
    children?: BlockUpdateManyWithoutParentNestedInput;
    comments?: CommentUpdateManyWithoutBlockNestedInput;
  };

  export type BlockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pageId?: StringFieldUpdateOperationsInput | string;
    parentId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: IntFieldUpdateOperationsInput | number;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    children?: BlockUncheckedUpdateManyWithoutParentNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutBlockNestedInput;
  };

  export type BlockCreateManyInput = {
    id?: string;
    pageId: string;
    parentId?: string | null;
    type: string;
    content?: string | null;
    orderIndex: number;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type BlockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: IntFieldUpdateOperationsInput | number;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BlockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pageId?: StringFieldUpdateOperationsInput | string;
    parentId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: IntFieldUpdateOperationsInput | number;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentCreateInput = {
    id?: string;
    content?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    block: BlockCreateNestedOneWithoutCommentsInput;
    user: UserCreateNestedOneWithoutCommentsInput;
    parent?: CommentCreateNestedOneWithoutRepliesInput;
    replies?: CommentCreateNestedManyWithoutParentInput;
  };

  export type CommentUncheckedCreateInput = {
    id?: string;
    blockId: string;
    userId: string;
    parentId?: string | null;
    content?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput;
  };

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    block?: BlockUpdateOneRequiredWithoutCommentsNestedInput;
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput;
    parent?: CommentUpdateOneWithoutRepliesNestedInput;
    replies?: CommentUpdateManyWithoutParentNestedInput;
  };

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    blockId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    parentId?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput;
  };

  export type CommentCreateManyInput = {
    id?: string;
    blockId: string;
    userId: string;
    parentId?: string | null;
    content?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    blockId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    parentId?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MediaCreateInput = {
    id?: string;
    url: string;
    type: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutMediaInput;
  };

  export type MediaUncheckedCreateInput = {
    id?: string;
    url: string;
    type: string;
    uploadedBy: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type MediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutMediaNestedInput;
  };

  export type MediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    uploadedBy?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MediaCreateManyInput = {
    id?: string;
    url: string;
    type: string;
    uploadedBy: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type MediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    uploadedBy?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRoleListRelationFilter = {
    every?: UserRoleWhereInput;
    some?: UserRoleWhereInput;
    none?: UserRoleWhereInput;
  };

  export type UserSharedListRelationFilter = {
    every?: UserSharedWhereInput;
    some?: UserSharedWhereInput;
    none?: UserSharedWhereInput;
  };

  export type PageListRelationFilter = {
    every?: PageWhereInput;
    some?: PageWhereInput;
    none?: PageWhereInput;
  };

  export type CommentListRelationFilter = {
    every?: CommentWhereInput;
    some?: CommentWhereInput;
    none?: CommentWhereInput;
  };

  export type MediaListRelationFilter = {
    every?: MediaWhereInput;
    some?: MediaWhereInput;
    none?: MediaWhereInput;
  };

  export type UserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserSharedOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type PageOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type MediaOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    isActive?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    isActive?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    isActive?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type RolePermissionListRelationFilter = {
    every?: RolePermissionWhereInput;
    some?: RolePermissionWhereInput;
    none?: RolePermissionWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type RolePermissionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type PermissionCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PermissionMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PermissionMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput;
    isNot?: RoleWhereInput;
  };

  export type PermissionScalarRelationFilter = {
    is?: PermissionWhereInput;
    isNot?: PermissionWhereInput;
  };

  export type RolePermissionRoleIdPermissionIdCompoundUniqueInput = {
    roleId: string;
    permissionId: string;
  };

  export type RolePermissionCountOrderByAggregateInput = {
    roleId?: SortOrder;
    permissionId?: SortOrder;
  };

  export type RolePermissionMaxOrderByAggregateInput = {
    roleId?: SortOrder;
    permissionId?: SortOrder;
  };

  export type RolePermissionMinOrderByAggregateInput = {
    roleId?: SortOrder;
    permissionId?: SortOrder;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type UserRoleUserIdRoleIdCompoundUniqueInput = {
    userId: string;
    roleId: string;
  };

  export type UserRoleCountOrderByAggregateInput = {
    userId?: SortOrder;
    roleId?: SortOrder;
  };

  export type UserRoleMaxOrderByAggregateInput = {
    userId?: SortOrder;
    roleId?: SortOrder;
  };

  export type UserRoleMinOrderByAggregateInput = {
    userId?: SortOrder;
    roleId?: SortOrder;
  };

  export type BlockListRelationFilter = {
    every?: BlockWhereInput;
    some?: BlockWhereInput;
    none?: BlockWhereInput;
  };

  export type BlockOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type PageCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    isDeleted?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PageMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    isDeleted?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PageMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    isDeleted?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PageScalarRelationFilter = {
    is?: PageWhereInput;
    isNot?: PageWhereInput;
  };

  export type UserSharedCountOrderByAggregateInput = {
    id?: SortOrder;
    pageId?: SortOrder;
    userId?: SortOrder;
    roleId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserSharedMaxOrderByAggregateInput = {
    id?: SortOrder;
    pageId?: SortOrder;
    userId?: SortOrder;
    roleId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserSharedMinOrderByAggregateInput = {
    id?: SortOrder;
    pageId?: SortOrder;
    userId?: SortOrder;
    roleId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type BlockNullableScalarRelationFilter = {
    is?: BlockWhereInput | null;
    isNot?: BlockWhereInput | null;
  };

  export type BlockCountOrderByAggregateInput = {
    id?: SortOrder;
    pageId?: SortOrder;
    parentId?: SortOrder;
    type?: SortOrder;
    content?: SortOrder;
    orderIndex?: SortOrder;
    isDeleted?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type BlockAvgOrderByAggregateInput = {
    orderIndex?: SortOrder;
  };

  export type BlockMaxOrderByAggregateInput = {
    id?: SortOrder;
    pageId?: SortOrder;
    parentId?: SortOrder;
    type?: SortOrder;
    content?: SortOrder;
    orderIndex?: SortOrder;
    isDeleted?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type BlockMinOrderByAggregateInput = {
    id?: SortOrder;
    pageId?: SortOrder;
    parentId?: SortOrder;
    type?: SortOrder;
    content?: SortOrder;
    orderIndex?: SortOrder;
    isDeleted?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type BlockSumOrderByAggregateInput = {
    orderIndex?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type BlockScalarRelationFilter = {
    is?: BlockWhereInput;
    isNot?: BlockWhereInput;
  };

  export type CommentNullableScalarRelationFilter = {
    is?: CommentWhereInput | null;
    isNot?: CommentWhereInput | null;
  };

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder;
    blockId?: SortOrder;
    userId?: SortOrder;
    parentId?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder;
    blockId?: SortOrder;
    userId?: SortOrder;
    parentId?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder;
    blockId?: SortOrder;
    userId?: SortOrder;
    parentId?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder;
    url?: SortOrder;
    type?: SortOrder;
    uploadedBy?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder;
    url?: SortOrder;
    type?: SortOrder;
    uploadedBy?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder;
    url?: SortOrder;
    type?: SortOrder;
    uploadedBy?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserRoleCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          UserRoleCreateWithoutUserInput,
          UserRoleUncheckedCreateWithoutUserInput
        >
      | UserRoleCreateWithoutUserInput[]
      | UserRoleUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserRoleCreateOrConnectWithoutUserInput
      | UserRoleCreateOrConnectWithoutUserInput[];
    createMany?: UserRoleCreateManyUserInputEnvelope;
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[];
  };

  export type UserSharedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          UserSharedCreateWithoutUserInput,
          UserSharedUncheckedCreateWithoutUserInput
        >
      | UserSharedCreateWithoutUserInput[]
      | UserSharedUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserSharedCreateOrConnectWithoutUserInput
      | UserSharedCreateOrConnectWithoutUserInput[];
    createMany?: UserSharedCreateManyUserInputEnvelope;
    connect?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
  };

  export type PageCreateNestedManyWithoutOwnerInput = {
    create?:
      | XOR<PageCreateWithoutOwnerInput, PageUncheckedCreateWithoutOwnerInput>
      | PageCreateWithoutOwnerInput[]
      | PageUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?:
      | PageCreateOrConnectWithoutOwnerInput
      | PageCreateOrConnectWithoutOwnerInput[];
    createMany?: PageCreateManyOwnerInputEnvelope;
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[];
  };

  export type CommentCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          CommentCreateWithoutUserInput,
          CommentUncheckedCreateWithoutUserInput
        >
      | CommentCreateWithoutUserInput[]
      | CommentUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutUserInput
      | CommentCreateOrConnectWithoutUserInput[];
    createMany?: CommentCreateManyUserInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type MediaCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<MediaCreateWithoutUserInput, MediaUncheckedCreateWithoutUserInput>
      | MediaCreateWithoutUserInput[]
      | MediaUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | MediaCreateOrConnectWithoutUserInput
      | MediaCreateOrConnectWithoutUserInput[];
    createMany?: MediaCreateManyUserInputEnvelope;
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[];
  };

  export type UserRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          UserRoleCreateWithoutUserInput,
          UserRoleUncheckedCreateWithoutUserInput
        >
      | UserRoleCreateWithoutUserInput[]
      | UserRoleUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserRoleCreateOrConnectWithoutUserInput
      | UserRoleCreateOrConnectWithoutUserInput[];
    createMany?: UserRoleCreateManyUserInputEnvelope;
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[];
  };

  export type UserSharedUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          UserSharedCreateWithoutUserInput,
          UserSharedUncheckedCreateWithoutUserInput
        >
      | UserSharedCreateWithoutUserInput[]
      | UserSharedUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserSharedCreateOrConnectWithoutUserInput
      | UserSharedCreateOrConnectWithoutUserInput[];
    createMany?: UserSharedCreateManyUserInputEnvelope;
    connect?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
  };

  export type PageUncheckedCreateNestedManyWithoutOwnerInput = {
    create?:
      | XOR<PageCreateWithoutOwnerInput, PageUncheckedCreateWithoutOwnerInput>
      | PageCreateWithoutOwnerInput[]
      | PageUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?:
      | PageCreateOrConnectWithoutOwnerInput
      | PageCreateOrConnectWithoutOwnerInput[];
    createMany?: PageCreateManyOwnerInputEnvelope;
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[];
  };

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          CommentCreateWithoutUserInput,
          CommentUncheckedCreateWithoutUserInput
        >
      | CommentCreateWithoutUserInput[]
      | CommentUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutUserInput
      | CommentCreateOrConnectWithoutUserInput[];
    createMany?: CommentCreateManyUserInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type MediaUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<MediaCreateWithoutUserInput, MediaUncheckedCreateWithoutUserInput>
      | MediaCreateWithoutUserInput[]
      | MediaUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | MediaCreateOrConnectWithoutUserInput
      | MediaCreateOrConnectWithoutUserInput[];
    createMany?: MediaCreateManyUserInputEnvelope;
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type UserRoleUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          UserRoleCreateWithoutUserInput,
          UserRoleUncheckedCreateWithoutUserInput
        >
      | UserRoleCreateWithoutUserInput[]
      | UserRoleUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserRoleCreateOrConnectWithoutUserInput
      | UserRoleCreateOrConnectWithoutUserInput[];
    upsert?:
      | UserRoleUpsertWithWhereUniqueWithoutUserInput
      | UserRoleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: UserRoleCreateManyUserInputEnvelope;
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[];
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[];
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[];
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[];
    update?:
      | UserRoleUpdateWithWhereUniqueWithoutUserInput
      | UserRoleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | UserRoleUpdateManyWithWhereWithoutUserInput
      | UserRoleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[];
  };

  export type UserSharedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          UserSharedCreateWithoutUserInput,
          UserSharedUncheckedCreateWithoutUserInput
        >
      | UserSharedCreateWithoutUserInput[]
      | UserSharedUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserSharedCreateOrConnectWithoutUserInput
      | UserSharedCreateOrConnectWithoutUserInput[];
    upsert?:
      | UserSharedUpsertWithWhereUniqueWithoutUserInput
      | UserSharedUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: UserSharedCreateManyUserInputEnvelope;
    set?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
    disconnect?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
    delete?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
    connect?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
    update?:
      | UserSharedUpdateWithWhereUniqueWithoutUserInput
      | UserSharedUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | UserSharedUpdateManyWithWhereWithoutUserInput
      | UserSharedUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: UserSharedScalarWhereInput | UserSharedScalarWhereInput[];
  };

  export type PageUpdateManyWithoutOwnerNestedInput = {
    create?:
      | XOR<PageCreateWithoutOwnerInput, PageUncheckedCreateWithoutOwnerInput>
      | PageCreateWithoutOwnerInput[]
      | PageUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?:
      | PageCreateOrConnectWithoutOwnerInput
      | PageCreateOrConnectWithoutOwnerInput[];
    upsert?:
      | PageUpsertWithWhereUniqueWithoutOwnerInput
      | PageUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: PageCreateManyOwnerInputEnvelope;
    set?: PageWhereUniqueInput | PageWhereUniqueInput[];
    disconnect?: PageWhereUniqueInput | PageWhereUniqueInput[];
    delete?: PageWhereUniqueInput | PageWhereUniqueInput[];
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[];
    update?:
      | PageUpdateWithWhereUniqueWithoutOwnerInput
      | PageUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?:
      | PageUpdateManyWithWhereWithoutOwnerInput
      | PageUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: PageScalarWhereInput | PageScalarWhereInput[];
  };

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutUserInput,
          CommentUncheckedCreateWithoutUserInput
        >
      | CommentCreateWithoutUserInput[]
      | CommentUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutUserInput
      | CommentCreateOrConnectWithoutUserInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutUserInput
      | CommentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: CommentCreateManyUserInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutUserInput
      | CommentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutUserInput
      | CommentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type MediaUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<MediaCreateWithoutUserInput, MediaUncheckedCreateWithoutUserInput>
      | MediaCreateWithoutUserInput[]
      | MediaUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | MediaCreateOrConnectWithoutUserInput
      | MediaCreateOrConnectWithoutUserInput[];
    upsert?:
      | MediaUpsertWithWhereUniqueWithoutUserInput
      | MediaUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: MediaCreateManyUserInputEnvelope;
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[];
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[];
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[];
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[];
    update?:
      | MediaUpdateWithWhereUniqueWithoutUserInput
      | MediaUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | MediaUpdateManyWithWhereWithoutUserInput
      | MediaUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[];
  };

  export type UserRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          UserRoleCreateWithoutUserInput,
          UserRoleUncheckedCreateWithoutUserInput
        >
      | UserRoleCreateWithoutUserInput[]
      | UserRoleUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserRoleCreateOrConnectWithoutUserInput
      | UserRoleCreateOrConnectWithoutUserInput[];
    upsert?:
      | UserRoleUpsertWithWhereUniqueWithoutUserInput
      | UserRoleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: UserRoleCreateManyUserInputEnvelope;
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[];
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[];
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[];
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[];
    update?:
      | UserRoleUpdateWithWhereUniqueWithoutUserInput
      | UserRoleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | UserRoleUpdateManyWithWhereWithoutUserInput
      | UserRoleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[];
  };

  export type UserSharedUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          UserSharedCreateWithoutUserInput,
          UserSharedUncheckedCreateWithoutUserInput
        >
      | UserSharedCreateWithoutUserInput[]
      | UserSharedUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserSharedCreateOrConnectWithoutUserInput
      | UserSharedCreateOrConnectWithoutUserInput[];
    upsert?:
      | UserSharedUpsertWithWhereUniqueWithoutUserInput
      | UserSharedUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: UserSharedCreateManyUserInputEnvelope;
    set?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
    disconnect?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
    delete?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
    connect?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
    update?:
      | UserSharedUpdateWithWhereUniqueWithoutUserInput
      | UserSharedUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | UserSharedUpdateManyWithWhereWithoutUserInput
      | UserSharedUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: UserSharedScalarWhereInput | UserSharedScalarWhereInput[];
  };

  export type PageUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?:
      | XOR<PageCreateWithoutOwnerInput, PageUncheckedCreateWithoutOwnerInput>
      | PageCreateWithoutOwnerInput[]
      | PageUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?:
      | PageCreateOrConnectWithoutOwnerInput
      | PageCreateOrConnectWithoutOwnerInput[];
    upsert?:
      | PageUpsertWithWhereUniqueWithoutOwnerInput
      | PageUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: PageCreateManyOwnerInputEnvelope;
    set?: PageWhereUniqueInput | PageWhereUniqueInput[];
    disconnect?: PageWhereUniqueInput | PageWhereUniqueInput[];
    delete?: PageWhereUniqueInput | PageWhereUniqueInput[];
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[];
    update?:
      | PageUpdateWithWhereUniqueWithoutOwnerInput
      | PageUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?:
      | PageUpdateManyWithWhereWithoutOwnerInput
      | PageUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: PageScalarWhereInput | PageScalarWhereInput[];
  };

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutUserInput,
          CommentUncheckedCreateWithoutUserInput
        >
      | CommentCreateWithoutUserInput[]
      | CommentUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutUserInput
      | CommentCreateOrConnectWithoutUserInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutUserInput
      | CommentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: CommentCreateManyUserInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutUserInput
      | CommentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutUserInput
      | CommentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type MediaUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<MediaCreateWithoutUserInput, MediaUncheckedCreateWithoutUserInput>
      | MediaCreateWithoutUserInput[]
      | MediaUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | MediaCreateOrConnectWithoutUserInput
      | MediaCreateOrConnectWithoutUserInput[];
    upsert?:
      | MediaUpsertWithWhereUniqueWithoutUserInput
      | MediaUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: MediaCreateManyUserInputEnvelope;
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[];
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[];
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[];
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[];
    update?:
      | MediaUpdateWithWhereUniqueWithoutUserInput
      | MediaUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | MediaUpdateManyWithWhereWithoutUserInput
      | MediaUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[];
  };

  export type UserRoleCreateNestedManyWithoutRoleInput = {
    create?:
      | XOR<
          UserRoleCreateWithoutRoleInput,
          UserRoleUncheckedCreateWithoutRoleInput
        >
      | UserRoleCreateWithoutRoleInput[]
      | UserRoleUncheckedCreateWithoutRoleInput[];
    connectOrCreate?:
      | UserRoleCreateOrConnectWithoutRoleInput
      | UserRoleCreateOrConnectWithoutRoleInput[];
    createMany?: UserRoleCreateManyRoleInputEnvelope;
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[];
  };

  export type RolePermissionCreateNestedManyWithoutRoleInput = {
    create?:
      | XOR<
          RolePermissionCreateWithoutRoleInput,
          RolePermissionUncheckedCreateWithoutRoleInput
        >
      | RolePermissionCreateWithoutRoleInput[]
      | RolePermissionUncheckedCreateWithoutRoleInput[];
    connectOrCreate?:
      | RolePermissionCreateOrConnectWithoutRoleInput
      | RolePermissionCreateOrConnectWithoutRoleInput[];
    createMany?: RolePermissionCreateManyRoleInputEnvelope;
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[];
  };

  export type UserSharedCreateNestedManyWithoutRoleInput = {
    create?:
      | XOR<
          UserSharedCreateWithoutRoleInput,
          UserSharedUncheckedCreateWithoutRoleInput
        >
      | UserSharedCreateWithoutRoleInput[]
      | UserSharedUncheckedCreateWithoutRoleInput[];
    connectOrCreate?:
      | UserSharedCreateOrConnectWithoutRoleInput
      | UserSharedCreateOrConnectWithoutRoleInput[];
    createMany?: UserSharedCreateManyRoleInputEnvelope;
    connect?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
  };

  export type UserRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?:
      | XOR<
          UserRoleCreateWithoutRoleInput,
          UserRoleUncheckedCreateWithoutRoleInput
        >
      | UserRoleCreateWithoutRoleInput[]
      | UserRoleUncheckedCreateWithoutRoleInput[];
    connectOrCreate?:
      | UserRoleCreateOrConnectWithoutRoleInput
      | UserRoleCreateOrConnectWithoutRoleInput[];
    createMany?: UserRoleCreateManyRoleInputEnvelope;
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[];
  };

  export type RolePermissionUncheckedCreateNestedManyWithoutRoleInput = {
    create?:
      | XOR<
          RolePermissionCreateWithoutRoleInput,
          RolePermissionUncheckedCreateWithoutRoleInput
        >
      | RolePermissionCreateWithoutRoleInput[]
      | RolePermissionUncheckedCreateWithoutRoleInput[];
    connectOrCreate?:
      | RolePermissionCreateOrConnectWithoutRoleInput
      | RolePermissionCreateOrConnectWithoutRoleInput[];
    createMany?: RolePermissionCreateManyRoleInputEnvelope;
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[];
  };

  export type UserSharedUncheckedCreateNestedManyWithoutRoleInput = {
    create?:
      | XOR<
          UserSharedCreateWithoutRoleInput,
          UserSharedUncheckedCreateWithoutRoleInput
        >
      | UserSharedCreateWithoutRoleInput[]
      | UserSharedUncheckedCreateWithoutRoleInput[];
    connectOrCreate?:
      | UserSharedCreateOrConnectWithoutRoleInput
      | UserSharedCreateOrConnectWithoutRoleInput[];
    createMany?: UserSharedCreateManyRoleInputEnvelope;
    connect?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type UserRoleUpdateManyWithoutRoleNestedInput = {
    create?:
      | XOR<
          UserRoleCreateWithoutRoleInput,
          UserRoleUncheckedCreateWithoutRoleInput
        >
      | UserRoleCreateWithoutRoleInput[]
      | UserRoleUncheckedCreateWithoutRoleInput[];
    connectOrCreate?:
      | UserRoleCreateOrConnectWithoutRoleInput
      | UserRoleCreateOrConnectWithoutRoleInput[];
    upsert?:
      | UserRoleUpsertWithWhereUniqueWithoutRoleInput
      | UserRoleUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: UserRoleCreateManyRoleInputEnvelope;
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[];
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[];
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[];
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[];
    update?:
      | UserRoleUpdateWithWhereUniqueWithoutRoleInput
      | UserRoleUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?:
      | UserRoleUpdateManyWithWhereWithoutRoleInput
      | UserRoleUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[];
  };

  export type RolePermissionUpdateManyWithoutRoleNestedInput = {
    create?:
      | XOR<
          RolePermissionCreateWithoutRoleInput,
          RolePermissionUncheckedCreateWithoutRoleInput
        >
      | RolePermissionCreateWithoutRoleInput[]
      | RolePermissionUncheckedCreateWithoutRoleInput[];
    connectOrCreate?:
      | RolePermissionCreateOrConnectWithoutRoleInput
      | RolePermissionCreateOrConnectWithoutRoleInput[];
    upsert?:
      | RolePermissionUpsertWithWhereUniqueWithoutRoleInput
      | RolePermissionUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: RolePermissionCreateManyRoleInputEnvelope;
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[];
    disconnect?:
      | RolePermissionWhereUniqueInput
      | RolePermissionWhereUniqueInput[];
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[];
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[];
    update?:
      | RolePermissionUpdateWithWhereUniqueWithoutRoleInput
      | RolePermissionUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?:
      | RolePermissionUpdateManyWithWhereWithoutRoleInput
      | RolePermissionUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?:
      | RolePermissionScalarWhereInput
      | RolePermissionScalarWhereInput[];
  };

  export type UserSharedUpdateManyWithoutRoleNestedInput = {
    create?:
      | XOR<
          UserSharedCreateWithoutRoleInput,
          UserSharedUncheckedCreateWithoutRoleInput
        >
      | UserSharedCreateWithoutRoleInput[]
      | UserSharedUncheckedCreateWithoutRoleInput[];
    connectOrCreate?:
      | UserSharedCreateOrConnectWithoutRoleInput
      | UserSharedCreateOrConnectWithoutRoleInput[];
    upsert?:
      | UserSharedUpsertWithWhereUniqueWithoutRoleInput
      | UserSharedUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: UserSharedCreateManyRoleInputEnvelope;
    set?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
    disconnect?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
    delete?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
    connect?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
    update?:
      | UserSharedUpdateWithWhereUniqueWithoutRoleInput
      | UserSharedUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?:
      | UserSharedUpdateManyWithWhereWithoutRoleInput
      | UserSharedUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: UserSharedScalarWhereInput | UserSharedScalarWhereInput[];
  };

  export type UserRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?:
      | XOR<
          UserRoleCreateWithoutRoleInput,
          UserRoleUncheckedCreateWithoutRoleInput
        >
      | UserRoleCreateWithoutRoleInput[]
      | UserRoleUncheckedCreateWithoutRoleInput[];
    connectOrCreate?:
      | UserRoleCreateOrConnectWithoutRoleInput
      | UserRoleCreateOrConnectWithoutRoleInput[];
    upsert?:
      | UserRoleUpsertWithWhereUniqueWithoutRoleInput
      | UserRoleUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: UserRoleCreateManyRoleInputEnvelope;
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[];
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[];
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[];
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[];
    update?:
      | UserRoleUpdateWithWhereUniqueWithoutRoleInput
      | UserRoleUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?:
      | UserRoleUpdateManyWithWhereWithoutRoleInput
      | UserRoleUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[];
  };

  export type RolePermissionUncheckedUpdateManyWithoutRoleNestedInput = {
    create?:
      | XOR<
          RolePermissionCreateWithoutRoleInput,
          RolePermissionUncheckedCreateWithoutRoleInput
        >
      | RolePermissionCreateWithoutRoleInput[]
      | RolePermissionUncheckedCreateWithoutRoleInput[];
    connectOrCreate?:
      | RolePermissionCreateOrConnectWithoutRoleInput
      | RolePermissionCreateOrConnectWithoutRoleInput[];
    upsert?:
      | RolePermissionUpsertWithWhereUniqueWithoutRoleInput
      | RolePermissionUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: RolePermissionCreateManyRoleInputEnvelope;
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[];
    disconnect?:
      | RolePermissionWhereUniqueInput
      | RolePermissionWhereUniqueInput[];
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[];
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[];
    update?:
      | RolePermissionUpdateWithWhereUniqueWithoutRoleInput
      | RolePermissionUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?:
      | RolePermissionUpdateManyWithWhereWithoutRoleInput
      | RolePermissionUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?:
      | RolePermissionScalarWhereInput
      | RolePermissionScalarWhereInput[];
  };

  export type UserSharedUncheckedUpdateManyWithoutRoleNestedInput = {
    create?:
      | XOR<
          UserSharedCreateWithoutRoleInput,
          UserSharedUncheckedCreateWithoutRoleInput
        >
      | UserSharedCreateWithoutRoleInput[]
      | UserSharedUncheckedCreateWithoutRoleInput[];
    connectOrCreate?:
      | UserSharedCreateOrConnectWithoutRoleInput
      | UserSharedCreateOrConnectWithoutRoleInput[];
    upsert?:
      | UserSharedUpsertWithWhereUniqueWithoutRoleInput
      | UserSharedUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: UserSharedCreateManyRoleInputEnvelope;
    set?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
    disconnect?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
    delete?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
    connect?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
    update?:
      | UserSharedUpdateWithWhereUniqueWithoutRoleInput
      | UserSharedUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?:
      | UserSharedUpdateManyWithWhereWithoutRoleInput
      | UserSharedUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: UserSharedScalarWhereInput | UserSharedScalarWhereInput[];
  };

  export type RolePermissionCreateNestedManyWithoutPermissionInput = {
    create?:
      | XOR<
          RolePermissionCreateWithoutPermissionInput,
          RolePermissionUncheckedCreateWithoutPermissionInput
        >
      | RolePermissionCreateWithoutPermissionInput[]
      | RolePermissionUncheckedCreateWithoutPermissionInput[];
    connectOrCreate?:
      | RolePermissionCreateOrConnectWithoutPermissionInput
      | RolePermissionCreateOrConnectWithoutPermissionInput[];
    createMany?: RolePermissionCreateManyPermissionInputEnvelope;
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[];
  };

  export type RolePermissionUncheckedCreateNestedManyWithoutPermissionInput = {
    create?:
      | XOR<
          RolePermissionCreateWithoutPermissionInput,
          RolePermissionUncheckedCreateWithoutPermissionInput
        >
      | RolePermissionCreateWithoutPermissionInput[]
      | RolePermissionUncheckedCreateWithoutPermissionInput[];
    connectOrCreate?:
      | RolePermissionCreateOrConnectWithoutPermissionInput
      | RolePermissionCreateOrConnectWithoutPermissionInput[];
    createMany?: RolePermissionCreateManyPermissionInputEnvelope;
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[];
  };

  export type RolePermissionUpdateManyWithoutPermissionNestedInput = {
    create?:
      | XOR<
          RolePermissionCreateWithoutPermissionInput,
          RolePermissionUncheckedCreateWithoutPermissionInput
        >
      | RolePermissionCreateWithoutPermissionInput[]
      | RolePermissionUncheckedCreateWithoutPermissionInput[];
    connectOrCreate?:
      | RolePermissionCreateOrConnectWithoutPermissionInput
      | RolePermissionCreateOrConnectWithoutPermissionInput[];
    upsert?:
      | RolePermissionUpsertWithWhereUniqueWithoutPermissionInput
      | RolePermissionUpsertWithWhereUniqueWithoutPermissionInput[];
    createMany?: RolePermissionCreateManyPermissionInputEnvelope;
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[];
    disconnect?:
      | RolePermissionWhereUniqueInput
      | RolePermissionWhereUniqueInput[];
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[];
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[];
    update?:
      | RolePermissionUpdateWithWhereUniqueWithoutPermissionInput
      | RolePermissionUpdateWithWhereUniqueWithoutPermissionInput[];
    updateMany?:
      | RolePermissionUpdateManyWithWhereWithoutPermissionInput
      | RolePermissionUpdateManyWithWhereWithoutPermissionInput[];
    deleteMany?:
      | RolePermissionScalarWhereInput
      | RolePermissionScalarWhereInput[];
  };

  export type RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?:
      | XOR<
          RolePermissionCreateWithoutPermissionInput,
          RolePermissionUncheckedCreateWithoutPermissionInput
        >
      | RolePermissionCreateWithoutPermissionInput[]
      | RolePermissionUncheckedCreateWithoutPermissionInput[];
    connectOrCreate?:
      | RolePermissionCreateOrConnectWithoutPermissionInput
      | RolePermissionCreateOrConnectWithoutPermissionInput[];
    upsert?:
      | RolePermissionUpsertWithWhereUniqueWithoutPermissionInput
      | RolePermissionUpsertWithWhereUniqueWithoutPermissionInput[];
    createMany?: RolePermissionCreateManyPermissionInputEnvelope;
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[];
    disconnect?:
      | RolePermissionWhereUniqueInput
      | RolePermissionWhereUniqueInput[];
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[];
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[];
    update?:
      | RolePermissionUpdateWithWhereUniqueWithoutPermissionInput
      | RolePermissionUpdateWithWhereUniqueWithoutPermissionInput[];
    updateMany?:
      | RolePermissionUpdateManyWithWhereWithoutPermissionInput
      | RolePermissionUpdateManyWithWhereWithoutPermissionInput[];
    deleteMany?:
      | RolePermissionScalarWhereInput
      | RolePermissionScalarWhereInput[];
  };

  export type RoleCreateNestedOneWithoutPermissionsInput = {
    create?: XOR<
      RoleCreateWithoutPermissionsInput,
      RoleUncheckedCreateWithoutPermissionsInput
    >;
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput;
    connect?: RoleWhereUniqueInput;
  };

  export type PermissionCreateNestedOneWithoutRolesInput = {
    create?: XOR<
      PermissionCreateWithoutRolesInput,
      PermissionUncheckedCreateWithoutRolesInput
    >;
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput;
    connect?: PermissionWhereUniqueInput;
  };

  export type RoleUpdateOneRequiredWithoutPermissionsNestedInput = {
    create?: XOR<
      RoleCreateWithoutPermissionsInput,
      RoleUncheckedCreateWithoutPermissionsInput
    >;
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput;
    upsert?: RoleUpsertWithoutPermissionsInput;
    connect?: RoleWhereUniqueInput;
    update?: XOR<
      XOR<
        RoleUpdateToOneWithWhereWithoutPermissionsInput,
        RoleUpdateWithoutPermissionsInput
      >,
      RoleUncheckedUpdateWithoutPermissionsInput
    >;
  };

  export type PermissionUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<
      PermissionCreateWithoutRolesInput,
      PermissionUncheckedCreateWithoutRolesInput
    >;
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput;
    upsert?: PermissionUpsertWithoutRolesInput;
    connect?: PermissionWhereUniqueInput;
    update?: XOR<
      XOR<
        PermissionUpdateToOneWithWhereWithoutRolesInput,
        PermissionUpdateWithoutRolesInput
      >,
      PermissionUncheckedUpdateWithoutRolesInput
    >;
  };

  export type UserCreateNestedOneWithoutRolesInput = {
    create?: XOR<
      UserCreateWithoutRolesInput,
      UserUncheckedCreateWithoutRolesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput;
    connect?: UserWhereUniqueInput;
  };

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<
      RoleCreateWithoutUsersInput,
      RoleUncheckedCreateWithoutUsersInput
    >;
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput;
    connect?: RoleWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<
      UserCreateWithoutRolesInput,
      UserUncheckedCreateWithoutRolesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput;
    upsert?: UserUpsertWithoutRolesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutRolesInput,
        UserUpdateWithoutRolesInput
      >,
      UserUncheckedUpdateWithoutRolesInput
    >;
  };

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<
      RoleCreateWithoutUsersInput,
      RoleUncheckedCreateWithoutUsersInput
    >;
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput;
    upsert?: RoleUpsertWithoutUsersInput;
    connect?: RoleWhereUniqueInput;
    update?: XOR<
      XOR<
        RoleUpdateToOneWithWhereWithoutUsersInput,
        RoleUpdateWithoutUsersInput
      >,
      RoleUncheckedUpdateWithoutUsersInput
    >;
  };

  export type UserCreateNestedOneWithoutPagesInput = {
    create?: XOR<
      UserCreateWithoutPagesInput,
      UserUncheckedCreateWithoutPagesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPagesInput;
    connect?: UserWhereUniqueInput;
  };

  export type BlockCreateNestedManyWithoutPageInput = {
    create?:
      | XOR<BlockCreateWithoutPageInput, BlockUncheckedCreateWithoutPageInput>
      | BlockCreateWithoutPageInput[]
      | BlockUncheckedCreateWithoutPageInput[];
    connectOrCreate?:
      | BlockCreateOrConnectWithoutPageInput
      | BlockCreateOrConnectWithoutPageInput[];
    createMany?: BlockCreateManyPageInputEnvelope;
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
  };

  export type UserSharedCreateNestedManyWithoutPageInput = {
    create?:
      | XOR<
          UserSharedCreateWithoutPageInput,
          UserSharedUncheckedCreateWithoutPageInput
        >
      | UserSharedCreateWithoutPageInput[]
      | UserSharedUncheckedCreateWithoutPageInput[];
    connectOrCreate?:
      | UserSharedCreateOrConnectWithoutPageInput
      | UserSharedCreateOrConnectWithoutPageInput[];
    createMany?: UserSharedCreateManyPageInputEnvelope;
    connect?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
  };

  export type BlockUncheckedCreateNestedManyWithoutPageInput = {
    create?:
      | XOR<BlockCreateWithoutPageInput, BlockUncheckedCreateWithoutPageInput>
      | BlockCreateWithoutPageInput[]
      | BlockUncheckedCreateWithoutPageInput[];
    connectOrCreate?:
      | BlockCreateOrConnectWithoutPageInput
      | BlockCreateOrConnectWithoutPageInput[];
    createMany?: BlockCreateManyPageInputEnvelope;
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
  };

  export type UserSharedUncheckedCreateNestedManyWithoutPageInput = {
    create?:
      | XOR<
          UserSharedCreateWithoutPageInput,
          UserSharedUncheckedCreateWithoutPageInput
        >
      | UserSharedCreateWithoutPageInput[]
      | UserSharedUncheckedCreateWithoutPageInput[];
    connectOrCreate?:
      | UserSharedCreateOrConnectWithoutPageInput
      | UserSharedCreateOrConnectWithoutPageInput[];
    createMany?: UserSharedCreateManyPageInputEnvelope;
    connect?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
  };

  export type UserUpdateOneRequiredWithoutPagesNestedInput = {
    create?: XOR<
      UserCreateWithoutPagesInput,
      UserUncheckedCreateWithoutPagesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPagesInput;
    upsert?: UserUpsertWithoutPagesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutPagesInput,
        UserUpdateWithoutPagesInput
      >,
      UserUncheckedUpdateWithoutPagesInput
    >;
  };

  export type BlockUpdateManyWithoutPageNestedInput = {
    create?:
      | XOR<BlockCreateWithoutPageInput, BlockUncheckedCreateWithoutPageInput>
      | BlockCreateWithoutPageInput[]
      | BlockUncheckedCreateWithoutPageInput[];
    connectOrCreate?:
      | BlockCreateOrConnectWithoutPageInput
      | BlockCreateOrConnectWithoutPageInput[];
    upsert?:
      | BlockUpsertWithWhereUniqueWithoutPageInput
      | BlockUpsertWithWhereUniqueWithoutPageInput[];
    createMany?: BlockCreateManyPageInputEnvelope;
    set?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    disconnect?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    delete?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    update?:
      | BlockUpdateWithWhereUniqueWithoutPageInput
      | BlockUpdateWithWhereUniqueWithoutPageInput[];
    updateMany?:
      | BlockUpdateManyWithWhereWithoutPageInput
      | BlockUpdateManyWithWhereWithoutPageInput[];
    deleteMany?: BlockScalarWhereInput | BlockScalarWhereInput[];
  };

  export type UserSharedUpdateManyWithoutPageNestedInput = {
    create?:
      | XOR<
          UserSharedCreateWithoutPageInput,
          UserSharedUncheckedCreateWithoutPageInput
        >
      | UserSharedCreateWithoutPageInput[]
      | UserSharedUncheckedCreateWithoutPageInput[];
    connectOrCreate?:
      | UserSharedCreateOrConnectWithoutPageInput
      | UserSharedCreateOrConnectWithoutPageInput[];
    upsert?:
      | UserSharedUpsertWithWhereUniqueWithoutPageInput
      | UserSharedUpsertWithWhereUniqueWithoutPageInput[];
    createMany?: UserSharedCreateManyPageInputEnvelope;
    set?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
    disconnect?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
    delete?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
    connect?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
    update?:
      | UserSharedUpdateWithWhereUniqueWithoutPageInput
      | UserSharedUpdateWithWhereUniqueWithoutPageInput[];
    updateMany?:
      | UserSharedUpdateManyWithWhereWithoutPageInput
      | UserSharedUpdateManyWithWhereWithoutPageInput[];
    deleteMany?: UserSharedScalarWhereInput | UserSharedScalarWhereInput[];
  };

  export type BlockUncheckedUpdateManyWithoutPageNestedInput = {
    create?:
      | XOR<BlockCreateWithoutPageInput, BlockUncheckedCreateWithoutPageInput>
      | BlockCreateWithoutPageInput[]
      | BlockUncheckedCreateWithoutPageInput[];
    connectOrCreate?:
      | BlockCreateOrConnectWithoutPageInput
      | BlockCreateOrConnectWithoutPageInput[];
    upsert?:
      | BlockUpsertWithWhereUniqueWithoutPageInput
      | BlockUpsertWithWhereUniqueWithoutPageInput[];
    createMany?: BlockCreateManyPageInputEnvelope;
    set?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    disconnect?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    delete?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    update?:
      | BlockUpdateWithWhereUniqueWithoutPageInput
      | BlockUpdateWithWhereUniqueWithoutPageInput[];
    updateMany?:
      | BlockUpdateManyWithWhereWithoutPageInput
      | BlockUpdateManyWithWhereWithoutPageInput[];
    deleteMany?: BlockScalarWhereInput | BlockScalarWhereInput[];
  };

  export type UserSharedUncheckedUpdateManyWithoutPageNestedInput = {
    create?:
      | XOR<
          UserSharedCreateWithoutPageInput,
          UserSharedUncheckedCreateWithoutPageInput
        >
      | UserSharedCreateWithoutPageInput[]
      | UserSharedUncheckedCreateWithoutPageInput[];
    connectOrCreate?:
      | UserSharedCreateOrConnectWithoutPageInput
      | UserSharedCreateOrConnectWithoutPageInput[];
    upsert?:
      | UserSharedUpsertWithWhereUniqueWithoutPageInput
      | UserSharedUpsertWithWhereUniqueWithoutPageInput[];
    createMany?: UserSharedCreateManyPageInputEnvelope;
    set?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
    disconnect?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
    delete?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
    connect?: UserSharedWhereUniqueInput | UserSharedWhereUniqueInput[];
    update?:
      | UserSharedUpdateWithWhereUniqueWithoutPageInput
      | UserSharedUpdateWithWhereUniqueWithoutPageInput[];
    updateMany?:
      | UserSharedUpdateManyWithWhereWithoutPageInput
      | UserSharedUpdateManyWithWhereWithoutPageInput[];
    deleteMany?: UserSharedScalarWhereInput | UserSharedScalarWhereInput[];
  };

  export type PageCreateNestedOneWithoutSharedUsersInput = {
    create?: XOR<
      PageCreateWithoutSharedUsersInput,
      PageUncheckedCreateWithoutSharedUsersInput
    >;
    connectOrCreate?: PageCreateOrConnectWithoutSharedUsersInput;
    connect?: PageWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutSharedPagesInput = {
    create?: XOR<
      UserCreateWithoutSharedPagesInput,
      UserUncheckedCreateWithoutSharedPagesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSharedPagesInput;
    connect?: UserWhereUniqueInput;
  };

  export type RoleCreateNestedOneWithoutSharedPagesInput = {
    create?: XOR<
      RoleCreateWithoutSharedPagesInput,
      RoleUncheckedCreateWithoutSharedPagesInput
    >;
    connectOrCreate?: RoleCreateOrConnectWithoutSharedPagesInput;
    connect?: RoleWhereUniqueInput;
  };

  export type PageUpdateOneRequiredWithoutSharedUsersNestedInput = {
    create?: XOR<
      PageCreateWithoutSharedUsersInput,
      PageUncheckedCreateWithoutSharedUsersInput
    >;
    connectOrCreate?: PageCreateOrConnectWithoutSharedUsersInput;
    upsert?: PageUpsertWithoutSharedUsersInput;
    connect?: PageWhereUniqueInput;
    update?: XOR<
      XOR<
        PageUpdateToOneWithWhereWithoutSharedUsersInput,
        PageUpdateWithoutSharedUsersInput
      >,
      PageUncheckedUpdateWithoutSharedUsersInput
    >;
  };

  export type UserUpdateOneRequiredWithoutSharedPagesNestedInput = {
    create?: XOR<
      UserCreateWithoutSharedPagesInput,
      UserUncheckedCreateWithoutSharedPagesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSharedPagesInput;
    upsert?: UserUpsertWithoutSharedPagesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutSharedPagesInput,
        UserUpdateWithoutSharedPagesInput
      >,
      UserUncheckedUpdateWithoutSharedPagesInput
    >;
  };

  export type RoleUpdateOneRequiredWithoutSharedPagesNestedInput = {
    create?: XOR<
      RoleCreateWithoutSharedPagesInput,
      RoleUncheckedCreateWithoutSharedPagesInput
    >;
    connectOrCreate?: RoleCreateOrConnectWithoutSharedPagesInput;
    upsert?: RoleUpsertWithoutSharedPagesInput;
    connect?: RoleWhereUniqueInput;
    update?: XOR<
      XOR<
        RoleUpdateToOneWithWhereWithoutSharedPagesInput,
        RoleUpdateWithoutSharedPagesInput
      >,
      RoleUncheckedUpdateWithoutSharedPagesInput
    >;
  };

  export type PageCreateNestedOneWithoutBlocksInput = {
    create?: XOR<
      PageCreateWithoutBlocksInput,
      PageUncheckedCreateWithoutBlocksInput
    >;
    connectOrCreate?: PageCreateOrConnectWithoutBlocksInput;
    connect?: PageWhereUniqueInput;
  };

  export type BlockCreateNestedOneWithoutChildrenInput = {
    create?: XOR<
      BlockCreateWithoutChildrenInput,
      BlockUncheckedCreateWithoutChildrenInput
    >;
    connectOrCreate?: BlockCreateOrConnectWithoutChildrenInput;
    connect?: BlockWhereUniqueInput;
  };

  export type BlockCreateNestedManyWithoutParentInput = {
    create?:
      | XOR<
          BlockCreateWithoutParentInput,
          BlockUncheckedCreateWithoutParentInput
        >
      | BlockCreateWithoutParentInput[]
      | BlockUncheckedCreateWithoutParentInput[];
    connectOrCreate?:
      | BlockCreateOrConnectWithoutParentInput
      | BlockCreateOrConnectWithoutParentInput[];
    createMany?: BlockCreateManyParentInputEnvelope;
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
  };

  export type CommentCreateNestedManyWithoutBlockInput = {
    create?:
      | XOR<
          CommentCreateWithoutBlockInput,
          CommentUncheckedCreateWithoutBlockInput
        >
      | CommentCreateWithoutBlockInput[]
      | CommentUncheckedCreateWithoutBlockInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutBlockInput
      | CommentCreateOrConnectWithoutBlockInput[];
    createMany?: CommentCreateManyBlockInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type BlockUncheckedCreateNestedManyWithoutParentInput = {
    create?:
      | XOR<
          BlockCreateWithoutParentInput,
          BlockUncheckedCreateWithoutParentInput
        >
      | BlockCreateWithoutParentInput[]
      | BlockUncheckedCreateWithoutParentInput[];
    connectOrCreate?:
      | BlockCreateOrConnectWithoutParentInput
      | BlockCreateOrConnectWithoutParentInput[];
    createMany?: BlockCreateManyParentInputEnvelope;
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
  };

  export type CommentUncheckedCreateNestedManyWithoutBlockInput = {
    create?:
      | XOR<
          CommentCreateWithoutBlockInput,
          CommentUncheckedCreateWithoutBlockInput
        >
      | CommentCreateWithoutBlockInput[]
      | CommentUncheckedCreateWithoutBlockInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutBlockInput
      | CommentCreateOrConnectWithoutBlockInput[];
    createMany?: CommentCreateManyBlockInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type PageUpdateOneRequiredWithoutBlocksNestedInput = {
    create?: XOR<
      PageCreateWithoutBlocksInput,
      PageUncheckedCreateWithoutBlocksInput
    >;
    connectOrCreate?: PageCreateOrConnectWithoutBlocksInput;
    upsert?: PageUpsertWithoutBlocksInput;
    connect?: PageWhereUniqueInput;
    update?: XOR<
      XOR<
        PageUpdateToOneWithWhereWithoutBlocksInput,
        PageUpdateWithoutBlocksInput
      >,
      PageUncheckedUpdateWithoutBlocksInput
    >;
  };

  export type BlockUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<
      BlockCreateWithoutChildrenInput,
      BlockUncheckedCreateWithoutChildrenInput
    >;
    connectOrCreate?: BlockCreateOrConnectWithoutChildrenInput;
    upsert?: BlockUpsertWithoutChildrenInput;
    disconnect?: BlockWhereInput | boolean;
    delete?: BlockWhereInput | boolean;
    connect?: BlockWhereUniqueInput;
    update?: XOR<
      XOR<
        BlockUpdateToOneWithWhereWithoutChildrenInput,
        BlockUpdateWithoutChildrenInput
      >,
      BlockUncheckedUpdateWithoutChildrenInput
    >;
  };

  export type BlockUpdateManyWithoutParentNestedInput = {
    create?:
      | XOR<
          BlockCreateWithoutParentInput,
          BlockUncheckedCreateWithoutParentInput
        >
      | BlockCreateWithoutParentInput[]
      | BlockUncheckedCreateWithoutParentInput[];
    connectOrCreate?:
      | BlockCreateOrConnectWithoutParentInput
      | BlockCreateOrConnectWithoutParentInput[];
    upsert?:
      | BlockUpsertWithWhereUniqueWithoutParentInput
      | BlockUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: BlockCreateManyParentInputEnvelope;
    set?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    disconnect?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    delete?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    update?:
      | BlockUpdateWithWhereUniqueWithoutParentInput
      | BlockUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?:
      | BlockUpdateManyWithWhereWithoutParentInput
      | BlockUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: BlockScalarWhereInput | BlockScalarWhereInput[];
  };

  export type CommentUpdateManyWithoutBlockNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutBlockInput,
          CommentUncheckedCreateWithoutBlockInput
        >
      | CommentCreateWithoutBlockInput[]
      | CommentUncheckedCreateWithoutBlockInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutBlockInput
      | CommentCreateOrConnectWithoutBlockInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutBlockInput
      | CommentUpsertWithWhereUniqueWithoutBlockInput[];
    createMany?: CommentCreateManyBlockInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutBlockInput
      | CommentUpdateWithWhereUniqueWithoutBlockInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutBlockInput
      | CommentUpdateManyWithWhereWithoutBlockInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type BlockUncheckedUpdateManyWithoutParentNestedInput = {
    create?:
      | XOR<
          BlockCreateWithoutParentInput,
          BlockUncheckedCreateWithoutParentInput
        >
      | BlockCreateWithoutParentInput[]
      | BlockUncheckedCreateWithoutParentInput[];
    connectOrCreate?:
      | BlockCreateOrConnectWithoutParentInput
      | BlockCreateOrConnectWithoutParentInput[];
    upsert?:
      | BlockUpsertWithWhereUniqueWithoutParentInput
      | BlockUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: BlockCreateManyParentInputEnvelope;
    set?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    disconnect?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    delete?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[];
    update?:
      | BlockUpdateWithWhereUniqueWithoutParentInput
      | BlockUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?:
      | BlockUpdateManyWithWhereWithoutParentInput
      | BlockUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: BlockScalarWhereInput | BlockScalarWhereInput[];
  };

  export type CommentUncheckedUpdateManyWithoutBlockNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutBlockInput,
          CommentUncheckedCreateWithoutBlockInput
        >
      | CommentCreateWithoutBlockInput[]
      | CommentUncheckedCreateWithoutBlockInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutBlockInput
      | CommentCreateOrConnectWithoutBlockInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutBlockInput
      | CommentUpsertWithWhereUniqueWithoutBlockInput[];
    createMany?: CommentCreateManyBlockInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutBlockInput
      | CommentUpdateWithWhereUniqueWithoutBlockInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutBlockInput
      | CommentUpdateManyWithWhereWithoutBlockInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type BlockCreateNestedOneWithoutCommentsInput = {
    create?: XOR<
      BlockCreateWithoutCommentsInput,
      BlockUncheckedCreateWithoutCommentsInput
    >;
    connectOrCreate?: BlockCreateOrConnectWithoutCommentsInput;
    connect?: BlockWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<
      UserCreateWithoutCommentsInput,
      UserUncheckedCreateWithoutCommentsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput;
    connect?: UserWhereUniqueInput;
  };

  export type CommentCreateNestedOneWithoutRepliesInput = {
    create?: XOR<
      CommentCreateWithoutRepliesInput,
      CommentUncheckedCreateWithoutRepliesInput
    >;
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput;
    connect?: CommentWhereUniqueInput;
  };

  export type CommentCreateNestedManyWithoutParentInput = {
    create?:
      | XOR<
          CommentCreateWithoutParentInput,
          CommentUncheckedCreateWithoutParentInput
        >
      | CommentCreateWithoutParentInput[]
      | CommentUncheckedCreateWithoutParentInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutParentInput
      | CommentCreateOrConnectWithoutParentInput[];
    createMany?: CommentCreateManyParentInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type CommentUncheckedCreateNestedManyWithoutParentInput = {
    create?:
      | XOR<
          CommentCreateWithoutParentInput,
          CommentUncheckedCreateWithoutParentInput
        >
      | CommentCreateWithoutParentInput[]
      | CommentUncheckedCreateWithoutParentInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutParentInput
      | CommentCreateOrConnectWithoutParentInput[];
    createMany?: CommentCreateManyParentInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type BlockUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<
      BlockCreateWithoutCommentsInput,
      BlockUncheckedCreateWithoutCommentsInput
    >;
    connectOrCreate?: BlockCreateOrConnectWithoutCommentsInput;
    upsert?: BlockUpsertWithoutCommentsInput;
    connect?: BlockWhereUniqueInput;
    update?: XOR<
      XOR<
        BlockUpdateToOneWithWhereWithoutCommentsInput,
        BlockUpdateWithoutCommentsInput
      >,
      BlockUncheckedUpdateWithoutCommentsInput
    >;
  };

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<
      UserCreateWithoutCommentsInput,
      UserUncheckedCreateWithoutCommentsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput;
    upsert?: UserUpsertWithoutCommentsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutCommentsInput,
        UserUpdateWithoutCommentsInput
      >,
      UserUncheckedUpdateWithoutCommentsInput
    >;
  };

  export type CommentUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<
      CommentCreateWithoutRepliesInput,
      CommentUncheckedCreateWithoutRepliesInput
    >;
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput;
    upsert?: CommentUpsertWithoutRepliesInput;
    disconnect?: CommentWhereInput | boolean;
    delete?: CommentWhereInput | boolean;
    connect?: CommentWhereUniqueInput;
    update?: XOR<
      XOR<
        CommentUpdateToOneWithWhereWithoutRepliesInput,
        CommentUpdateWithoutRepliesInput
      >,
      CommentUncheckedUpdateWithoutRepliesInput
    >;
  };

  export type CommentUpdateManyWithoutParentNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutParentInput,
          CommentUncheckedCreateWithoutParentInput
        >
      | CommentCreateWithoutParentInput[]
      | CommentUncheckedCreateWithoutParentInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutParentInput
      | CommentCreateOrConnectWithoutParentInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutParentInput
      | CommentUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: CommentCreateManyParentInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutParentInput
      | CommentUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutParentInput
      | CommentUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type CommentUncheckedUpdateManyWithoutParentNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutParentInput,
          CommentUncheckedCreateWithoutParentInput
        >
      | CommentCreateWithoutParentInput[]
      | CommentUncheckedCreateWithoutParentInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutParentInput
      | CommentCreateOrConnectWithoutParentInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutParentInput
      | CommentUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: CommentCreateManyParentInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutParentInput
      | CommentUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutParentInput
      | CommentUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutMediaInput = {
    create?: XOR<
      UserCreateWithoutMediaInput,
      UserUncheckedCreateWithoutMediaInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutMediaInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<
      UserCreateWithoutMediaInput,
      UserUncheckedCreateWithoutMediaInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutMediaInput;
    upsert?: UserUpsertWithoutMediaInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutMediaInput,
        UserUpdateWithoutMediaInput
      >,
      UserUncheckedUpdateWithoutMediaInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type UserRoleCreateWithoutUserInput = {
    role: RoleCreateNestedOneWithoutUsersInput;
  };

  export type UserRoleUncheckedCreateWithoutUserInput = {
    roleId: string;
  };

  export type UserRoleCreateOrConnectWithoutUserInput = {
    where: UserRoleWhereUniqueInput;
    create: XOR<
      UserRoleCreateWithoutUserInput,
      UserRoleUncheckedCreateWithoutUserInput
    >;
  };

  export type UserRoleCreateManyUserInputEnvelope = {
    data: UserRoleCreateManyUserInput | UserRoleCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type UserSharedCreateWithoutUserInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    page: PageCreateNestedOneWithoutSharedUsersInput;
    role: RoleCreateNestedOneWithoutSharedPagesInput;
  };

  export type UserSharedUncheckedCreateWithoutUserInput = {
    id?: string;
    pageId: string;
    roleId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserSharedCreateOrConnectWithoutUserInput = {
    where: UserSharedWhereUniqueInput;
    create: XOR<
      UserSharedCreateWithoutUserInput,
      UserSharedUncheckedCreateWithoutUserInput
    >;
  };

  export type UserSharedCreateManyUserInputEnvelope = {
    data: UserSharedCreateManyUserInput | UserSharedCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type PageCreateWithoutOwnerInput = {
    id?: string;
    title?: string | null;
    description?: string | null;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    blocks?: BlockCreateNestedManyWithoutPageInput;
    sharedUsers?: UserSharedCreateNestedManyWithoutPageInput;
  };

  export type PageUncheckedCreateWithoutOwnerInput = {
    id?: string;
    title?: string | null;
    description?: string | null;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    blocks?: BlockUncheckedCreateNestedManyWithoutPageInput;
    sharedUsers?: UserSharedUncheckedCreateNestedManyWithoutPageInput;
  };

  export type PageCreateOrConnectWithoutOwnerInput = {
    where: PageWhereUniqueInput;
    create: XOR<
      PageCreateWithoutOwnerInput,
      PageUncheckedCreateWithoutOwnerInput
    >;
  };

  export type PageCreateManyOwnerInputEnvelope = {
    data: PageCreateManyOwnerInput | PageCreateManyOwnerInput[];
    skipDuplicates?: boolean;
  };

  export type CommentCreateWithoutUserInput = {
    id?: string;
    content?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    block: BlockCreateNestedOneWithoutCommentsInput;
    parent?: CommentCreateNestedOneWithoutRepliesInput;
    replies?: CommentCreateNestedManyWithoutParentInput;
  };

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string;
    blockId: string;
    parentId?: string | null;
    content?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput;
  };

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput;
    create: XOR<
      CommentCreateWithoutUserInput,
      CommentUncheckedCreateWithoutUserInput
    >;
  };

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type MediaCreateWithoutUserInput = {
    id?: string;
    url: string;
    type: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type MediaUncheckedCreateWithoutUserInput = {
    id?: string;
    url: string;
    type: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type MediaCreateOrConnectWithoutUserInput = {
    where: MediaWhereUniqueInput;
    create: XOR<
      MediaCreateWithoutUserInput,
      MediaUncheckedCreateWithoutUserInput
    >;
  };

  export type MediaCreateManyUserInputEnvelope = {
    data: MediaCreateManyUserInput | MediaCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type UserRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput;
    update: XOR<
      UserRoleUpdateWithoutUserInput,
      UserRoleUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      UserRoleCreateWithoutUserInput,
      UserRoleUncheckedCreateWithoutUserInput
    >;
  };

  export type UserRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput;
    data: XOR<
      UserRoleUpdateWithoutUserInput,
      UserRoleUncheckedUpdateWithoutUserInput
    >;
  };

  export type UserRoleUpdateManyWithWhereWithoutUserInput = {
    where: UserRoleScalarWhereInput;
    data: XOR<
      UserRoleUpdateManyMutationInput,
      UserRoleUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type UserRoleScalarWhereInput = {
    AND?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[];
    OR?: UserRoleScalarWhereInput[];
    NOT?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[];
    userId?: StringFilter<"UserRole"> | string;
    roleId?: StringFilter<"UserRole"> | string;
  };

  export type UserSharedUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSharedWhereUniqueInput;
    update: XOR<
      UserSharedUpdateWithoutUserInput,
      UserSharedUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      UserSharedCreateWithoutUserInput,
      UserSharedUncheckedCreateWithoutUserInput
    >;
  };

  export type UserSharedUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSharedWhereUniqueInput;
    data: XOR<
      UserSharedUpdateWithoutUserInput,
      UserSharedUncheckedUpdateWithoutUserInput
    >;
  };

  export type UserSharedUpdateManyWithWhereWithoutUserInput = {
    where: UserSharedScalarWhereInput;
    data: XOR<
      UserSharedUpdateManyMutationInput,
      UserSharedUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type UserSharedScalarWhereInput = {
    AND?: UserSharedScalarWhereInput | UserSharedScalarWhereInput[];
    OR?: UserSharedScalarWhereInput[];
    NOT?: UserSharedScalarWhereInput | UserSharedScalarWhereInput[];
    id?: StringFilter<"UserShared"> | string;
    pageId?: StringFilter<"UserShared"> | string;
    userId?: StringFilter<"UserShared"> | string;
    roleId?: StringFilter<"UserShared"> | string;
    createdAt?: DateTimeFilter<"UserShared"> | Date | string;
    updatedAt?: DateTimeFilter<"UserShared"> | Date | string;
  };

  export type PageUpsertWithWhereUniqueWithoutOwnerInput = {
    where: PageWhereUniqueInput;
    update: XOR<
      PageUpdateWithoutOwnerInput,
      PageUncheckedUpdateWithoutOwnerInput
    >;
    create: XOR<
      PageCreateWithoutOwnerInput,
      PageUncheckedCreateWithoutOwnerInput
    >;
  };

  export type PageUpdateWithWhereUniqueWithoutOwnerInput = {
    where: PageWhereUniqueInput;
    data: XOR<
      PageUpdateWithoutOwnerInput,
      PageUncheckedUpdateWithoutOwnerInput
    >;
  };

  export type PageUpdateManyWithWhereWithoutOwnerInput = {
    where: PageScalarWhereInput;
    data: XOR<
      PageUpdateManyMutationInput,
      PageUncheckedUpdateManyWithoutOwnerInput
    >;
  };

  export type PageScalarWhereInput = {
    AND?: PageScalarWhereInput | PageScalarWhereInput[];
    OR?: PageScalarWhereInput[];
    NOT?: PageScalarWhereInput | PageScalarWhereInput[];
    id?: StringFilter<"Page"> | string;
    userId?: StringFilter<"Page"> | string;
    title?: StringNullableFilter<"Page"> | string | null;
    description?: StringNullableFilter<"Page"> | string | null;
    isDeleted?: BoolFilter<"Page"> | boolean;
    createdAt?: DateTimeFilter<"Page"> | Date | string;
    updatedAt?: DateTimeFilter<"Page"> | Date | string;
  };

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput;
    update: XOR<
      CommentUpdateWithoutUserInput,
      CommentUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      CommentCreateWithoutUserInput,
      CommentUncheckedCreateWithoutUserInput
    >;
  };

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput;
    data: XOR<
      CommentUpdateWithoutUserInput,
      CommentUncheckedUpdateWithoutUserInput
    >;
  };

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput;
    data: XOR<
      CommentUpdateManyMutationInput,
      CommentUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[];
    OR?: CommentScalarWhereInput[];
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[];
    id?: StringFilter<"Comment"> | string;
    blockId?: StringFilter<"Comment"> | string;
    userId?: StringFilter<"Comment"> | string;
    parentId?: StringNullableFilter<"Comment"> | string | null;
    content?: StringNullableFilter<"Comment"> | string | null;
    createdAt?: DateTimeFilter<"Comment"> | Date | string;
    updatedAt?: DateTimeFilter<"Comment"> | Date | string;
  };

  export type MediaUpsertWithWhereUniqueWithoutUserInput = {
    where: MediaWhereUniqueInput;
    update: XOR<
      MediaUpdateWithoutUserInput,
      MediaUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      MediaCreateWithoutUserInput,
      MediaUncheckedCreateWithoutUserInput
    >;
  };

  export type MediaUpdateWithWhereUniqueWithoutUserInput = {
    where: MediaWhereUniqueInput;
    data: XOR<
      MediaUpdateWithoutUserInput,
      MediaUncheckedUpdateWithoutUserInput
    >;
  };

  export type MediaUpdateManyWithWhereWithoutUserInput = {
    where: MediaScalarWhereInput;
    data: XOR<
      MediaUpdateManyMutationInput,
      MediaUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type MediaScalarWhereInput = {
    AND?: MediaScalarWhereInput | MediaScalarWhereInput[];
    OR?: MediaScalarWhereInput[];
    NOT?: MediaScalarWhereInput | MediaScalarWhereInput[];
    id?: StringFilter<"Media"> | string;
    url?: StringFilter<"Media"> | string;
    type?: StringFilter<"Media"> | string;
    uploadedBy?: StringFilter<"Media"> | string;
    createdAt?: DateTimeFilter<"Media"> | Date | string;
    updatedAt?: DateTimeFilter<"Media"> | Date | string;
  };

  export type UserRoleCreateWithoutRoleInput = {
    user: UserCreateNestedOneWithoutRolesInput;
  };

  export type UserRoleUncheckedCreateWithoutRoleInput = {
    userId: string;
  };

  export type UserRoleCreateOrConnectWithoutRoleInput = {
    where: UserRoleWhereUniqueInput;
    create: XOR<
      UserRoleCreateWithoutRoleInput,
      UserRoleUncheckedCreateWithoutRoleInput
    >;
  };

  export type UserRoleCreateManyRoleInputEnvelope = {
    data: UserRoleCreateManyRoleInput | UserRoleCreateManyRoleInput[];
    skipDuplicates?: boolean;
  };

  export type RolePermissionCreateWithoutRoleInput = {
    permission: PermissionCreateNestedOneWithoutRolesInput;
  };

  export type RolePermissionUncheckedCreateWithoutRoleInput = {
    permissionId: string;
  };

  export type RolePermissionCreateOrConnectWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput;
    create: XOR<
      RolePermissionCreateWithoutRoleInput,
      RolePermissionUncheckedCreateWithoutRoleInput
    >;
  };

  export type RolePermissionCreateManyRoleInputEnvelope = {
    data:
      | RolePermissionCreateManyRoleInput
      | RolePermissionCreateManyRoleInput[];
    skipDuplicates?: boolean;
  };

  export type UserSharedCreateWithoutRoleInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    page: PageCreateNestedOneWithoutSharedUsersInput;
    user: UserCreateNestedOneWithoutSharedPagesInput;
  };

  export type UserSharedUncheckedCreateWithoutRoleInput = {
    id?: string;
    pageId: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserSharedCreateOrConnectWithoutRoleInput = {
    where: UserSharedWhereUniqueInput;
    create: XOR<
      UserSharedCreateWithoutRoleInput,
      UserSharedUncheckedCreateWithoutRoleInput
    >;
  };

  export type UserSharedCreateManyRoleInputEnvelope = {
    data: UserSharedCreateManyRoleInput | UserSharedCreateManyRoleInput[];
    skipDuplicates?: boolean;
  };

  export type UserRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput;
    update: XOR<
      UserRoleUpdateWithoutRoleInput,
      UserRoleUncheckedUpdateWithoutRoleInput
    >;
    create: XOR<
      UserRoleCreateWithoutRoleInput,
      UserRoleUncheckedCreateWithoutRoleInput
    >;
  };

  export type UserRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput;
    data: XOR<
      UserRoleUpdateWithoutRoleInput,
      UserRoleUncheckedUpdateWithoutRoleInput
    >;
  };

  export type UserRoleUpdateManyWithWhereWithoutRoleInput = {
    where: UserRoleScalarWhereInput;
    data: XOR<
      UserRoleUpdateManyMutationInput,
      UserRoleUncheckedUpdateManyWithoutRoleInput
    >;
  };

  export type RolePermissionUpsertWithWhereUniqueWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput;
    update: XOR<
      RolePermissionUpdateWithoutRoleInput,
      RolePermissionUncheckedUpdateWithoutRoleInput
    >;
    create: XOR<
      RolePermissionCreateWithoutRoleInput,
      RolePermissionUncheckedCreateWithoutRoleInput
    >;
  };

  export type RolePermissionUpdateWithWhereUniqueWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput;
    data: XOR<
      RolePermissionUpdateWithoutRoleInput,
      RolePermissionUncheckedUpdateWithoutRoleInput
    >;
  };

  export type RolePermissionUpdateManyWithWhereWithoutRoleInput = {
    where: RolePermissionScalarWhereInput;
    data: XOR<
      RolePermissionUpdateManyMutationInput,
      RolePermissionUncheckedUpdateManyWithoutRoleInput
    >;
  };

  export type RolePermissionScalarWhereInput = {
    AND?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[];
    OR?: RolePermissionScalarWhereInput[];
    NOT?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[];
    roleId?: StringFilter<"RolePermission"> | string;
    permissionId?: StringFilter<"RolePermission"> | string;
  };

  export type UserSharedUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserSharedWhereUniqueInput;
    update: XOR<
      UserSharedUpdateWithoutRoleInput,
      UserSharedUncheckedUpdateWithoutRoleInput
    >;
    create: XOR<
      UserSharedCreateWithoutRoleInput,
      UserSharedUncheckedCreateWithoutRoleInput
    >;
  };

  export type UserSharedUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserSharedWhereUniqueInput;
    data: XOR<
      UserSharedUpdateWithoutRoleInput,
      UserSharedUncheckedUpdateWithoutRoleInput
    >;
  };

  export type UserSharedUpdateManyWithWhereWithoutRoleInput = {
    where: UserSharedScalarWhereInput;
    data: XOR<
      UserSharedUpdateManyMutationInput,
      UserSharedUncheckedUpdateManyWithoutRoleInput
    >;
  };

  export type RolePermissionCreateWithoutPermissionInput = {
    role: RoleCreateNestedOneWithoutPermissionsInput;
  };

  export type RolePermissionUncheckedCreateWithoutPermissionInput = {
    roleId: string;
  };

  export type RolePermissionCreateOrConnectWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput;
    create: XOR<
      RolePermissionCreateWithoutPermissionInput,
      RolePermissionUncheckedCreateWithoutPermissionInput
    >;
  };

  export type RolePermissionCreateManyPermissionInputEnvelope = {
    data:
      | RolePermissionCreateManyPermissionInput
      | RolePermissionCreateManyPermissionInput[];
    skipDuplicates?: boolean;
  };

  export type RolePermissionUpsertWithWhereUniqueWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput;
    update: XOR<
      RolePermissionUpdateWithoutPermissionInput,
      RolePermissionUncheckedUpdateWithoutPermissionInput
    >;
    create: XOR<
      RolePermissionCreateWithoutPermissionInput,
      RolePermissionUncheckedCreateWithoutPermissionInput
    >;
  };

  export type RolePermissionUpdateWithWhereUniqueWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput;
    data: XOR<
      RolePermissionUpdateWithoutPermissionInput,
      RolePermissionUncheckedUpdateWithoutPermissionInput
    >;
  };

  export type RolePermissionUpdateManyWithWhereWithoutPermissionInput = {
    where: RolePermissionScalarWhereInput;
    data: XOR<
      RolePermissionUpdateManyMutationInput,
      RolePermissionUncheckedUpdateManyWithoutPermissionInput
    >;
  };

  export type RoleCreateWithoutPermissionsInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: UserRoleCreateNestedManyWithoutRoleInput;
    sharedPages?: UserSharedCreateNestedManyWithoutRoleInput;
  };

  export type RoleUncheckedCreateWithoutPermissionsInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: UserRoleUncheckedCreateNestedManyWithoutRoleInput;
    sharedPages?: UserSharedUncheckedCreateNestedManyWithoutRoleInput;
  };

  export type RoleCreateOrConnectWithoutPermissionsInput = {
    where: RoleWhereUniqueInput;
    create: XOR<
      RoleCreateWithoutPermissionsInput,
      RoleUncheckedCreateWithoutPermissionsInput
    >;
  };

  export type PermissionCreateWithoutRolesInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PermissionUncheckedCreateWithoutRolesInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PermissionCreateOrConnectWithoutRolesInput = {
    where: PermissionWhereUniqueInput;
    create: XOR<
      PermissionCreateWithoutRolesInput,
      PermissionUncheckedCreateWithoutRolesInput
    >;
  };

  export type RoleUpsertWithoutPermissionsInput = {
    update: XOR<
      RoleUpdateWithoutPermissionsInput,
      RoleUncheckedUpdateWithoutPermissionsInput
    >;
    create: XOR<
      RoleCreateWithoutPermissionsInput,
      RoleUncheckedCreateWithoutPermissionsInput
    >;
    where?: RoleWhereInput;
  };

  export type RoleUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: RoleWhereInput;
    data: XOR<
      RoleUpdateWithoutPermissionsInput,
      RoleUncheckedUpdateWithoutPermissionsInput
    >;
  };

  export type RoleUpdateWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: UserRoleUpdateManyWithoutRoleNestedInput;
    sharedPages?: UserSharedUpdateManyWithoutRoleNestedInput;
  };

  export type RoleUncheckedUpdateWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput;
    sharedPages?: UserSharedUncheckedUpdateManyWithoutRoleNestedInput;
  };

  export type PermissionUpsertWithoutRolesInput = {
    update: XOR<
      PermissionUpdateWithoutRolesInput,
      PermissionUncheckedUpdateWithoutRolesInput
    >;
    create: XOR<
      PermissionCreateWithoutRolesInput,
      PermissionUncheckedCreateWithoutRolesInput
    >;
    where?: PermissionWhereInput;
  };

  export type PermissionUpdateToOneWithWhereWithoutRolesInput = {
    where?: PermissionWhereInput;
    data: XOR<
      PermissionUpdateWithoutRolesInput,
      PermissionUncheckedUpdateWithoutRolesInput
    >;
  };

  export type PermissionUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PermissionUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserCreateWithoutRolesInput = {
    id?: string;
    username: string;
    email: string;
    passwordHash: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sharedPages?: UserSharedCreateNestedManyWithoutUserInput;
    pages?: PageCreateNestedManyWithoutOwnerInput;
    comments?: CommentCreateNestedManyWithoutUserInput;
    media?: MediaCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutRolesInput = {
    id?: string;
    username: string;
    email: string;
    passwordHash: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sharedPages?: UserSharedUncheckedCreateNestedManyWithoutUserInput;
    pages?: PageUncheckedCreateNestedManyWithoutOwnerInput;
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput;
    media?: MediaUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutRolesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutRolesInput,
      UserUncheckedCreateWithoutRolesInput
    >;
  };

  export type RoleCreateWithoutUsersInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    permissions?: RolePermissionCreateNestedManyWithoutRoleInput;
    sharedPages?: UserSharedCreateNestedManyWithoutRoleInput;
  };

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    permissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput;
    sharedPages?: UserSharedUncheckedCreateNestedManyWithoutRoleInput;
  };

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput;
    create: XOR<
      RoleCreateWithoutUsersInput,
      RoleUncheckedCreateWithoutUsersInput
    >;
  };

  export type UserUpsertWithoutRolesInput = {
    update: XOR<
      UserUpdateWithoutRolesInput,
      UserUncheckedUpdateWithoutRolesInput
    >;
    create: XOR<
      UserCreateWithoutRolesInput,
      UserUncheckedCreateWithoutRolesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutRolesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutRolesInput,
      UserUncheckedUpdateWithoutRolesInput
    >;
  };

  export type UserUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    sharedPages?: UserSharedUpdateManyWithoutUserNestedInput;
    pages?: PageUpdateManyWithoutOwnerNestedInput;
    comments?: CommentUpdateManyWithoutUserNestedInput;
    media?: MediaUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    sharedPages?: UserSharedUncheckedUpdateManyWithoutUserNestedInput;
    pages?: PageUncheckedUpdateManyWithoutOwnerNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput;
    media?: MediaUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<
      RoleUpdateWithoutUsersInput,
      RoleUncheckedUpdateWithoutUsersInput
    >;
    create: XOR<
      RoleCreateWithoutUsersInput,
      RoleUncheckedCreateWithoutUsersInput
    >;
    where?: RoleWhereInput;
  };

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput;
    data: XOR<
      RoleUpdateWithoutUsersInput,
      RoleUncheckedUpdateWithoutUsersInput
    >;
  };

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    permissions?: RolePermissionUpdateManyWithoutRoleNestedInput;
    sharedPages?: UserSharedUpdateManyWithoutRoleNestedInput;
  };

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    permissions?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput;
    sharedPages?: UserSharedUncheckedUpdateManyWithoutRoleNestedInput;
  };

  export type UserCreateWithoutPagesInput = {
    id?: string;
    username: string;
    email: string;
    passwordHash: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roles?: UserRoleCreateNestedManyWithoutUserInput;
    sharedPages?: UserSharedCreateNestedManyWithoutUserInput;
    comments?: CommentCreateNestedManyWithoutUserInput;
    media?: MediaCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutPagesInput = {
    id?: string;
    username: string;
    email: string;
    passwordHash: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput;
    sharedPages?: UserSharedUncheckedCreateNestedManyWithoutUserInput;
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput;
    media?: MediaUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutPagesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutPagesInput,
      UserUncheckedCreateWithoutPagesInput
    >;
  };

  export type BlockCreateWithoutPageInput = {
    id?: string;
    type: string;
    content?: string | null;
    orderIndex: number;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parent?: BlockCreateNestedOneWithoutChildrenInput;
    children?: BlockCreateNestedManyWithoutParentInput;
    comments?: CommentCreateNestedManyWithoutBlockInput;
  };

  export type BlockUncheckedCreateWithoutPageInput = {
    id?: string;
    parentId?: string | null;
    type: string;
    content?: string | null;
    orderIndex: number;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    children?: BlockUncheckedCreateNestedManyWithoutParentInput;
    comments?: CommentUncheckedCreateNestedManyWithoutBlockInput;
  };

  export type BlockCreateOrConnectWithoutPageInput = {
    where: BlockWhereUniqueInput;
    create: XOR<
      BlockCreateWithoutPageInput,
      BlockUncheckedCreateWithoutPageInput
    >;
  };

  export type BlockCreateManyPageInputEnvelope = {
    data: BlockCreateManyPageInput | BlockCreateManyPageInput[];
    skipDuplicates?: boolean;
  };

  export type UserSharedCreateWithoutPageInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutSharedPagesInput;
    role: RoleCreateNestedOneWithoutSharedPagesInput;
  };

  export type UserSharedUncheckedCreateWithoutPageInput = {
    id?: string;
    userId: string;
    roleId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserSharedCreateOrConnectWithoutPageInput = {
    where: UserSharedWhereUniqueInput;
    create: XOR<
      UserSharedCreateWithoutPageInput,
      UserSharedUncheckedCreateWithoutPageInput
    >;
  };

  export type UserSharedCreateManyPageInputEnvelope = {
    data: UserSharedCreateManyPageInput | UserSharedCreateManyPageInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutPagesInput = {
    update: XOR<
      UserUpdateWithoutPagesInput,
      UserUncheckedUpdateWithoutPagesInput
    >;
    create: XOR<
      UserCreateWithoutPagesInput,
      UserUncheckedCreateWithoutPagesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutPagesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutPagesInput,
      UserUncheckedUpdateWithoutPagesInput
    >;
  };

  export type UserUpdateWithoutPagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: UserRoleUpdateManyWithoutUserNestedInput;
    sharedPages?: UserSharedUpdateManyWithoutUserNestedInput;
    comments?: CommentUpdateManyWithoutUserNestedInput;
    media?: MediaUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutPagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    sharedPages?: UserSharedUncheckedUpdateManyWithoutUserNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput;
    media?: MediaUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type BlockUpsertWithWhereUniqueWithoutPageInput = {
    where: BlockWhereUniqueInput;
    update: XOR<
      BlockUpdateWithoutPageInput,
      BlockUncheckedUpdateWithoutPageInput
    >;
    create: XOR<
      BlockCreateWithoutPageInput,
      BlockUncheckedCreateWithoutPageInput
    >;
  };

  export type BlockUpdateWithWhereUniqueWithoutPageInput = {
    where: BlockWhereUniqueInput;
    data: XOR<
      BlockUpdateWithoutPageInput,
      BlockUncheckedUpdateWithoutPageInput
    >;
  };

  export type BlockUpdateManyWithWhereWithoutPageInput = {
    where: BlockScalarWhereInput;
    data: XOR<
      BlockUpdateManyMutationInput,
      BlockUncheckedUpdateManyWithoutPageInput
    >;
  };

  export type BlockScalarWhereInput = {
    AND?: BlockScalarWhereInput | BlockScalarWhereInput[];
    OR?: BlockScalarWhereInput[];
    NOT?: BlockScalarWhereInput | BlockScalarWhereInput[];
    id?: StringFilter<"Block"> | string;
    pageId?: StringFilter<"Block"> | string;
    parentId?: StringNullableFilter<"Block"> | string | null;
    type?: StringFilter<"Block"> | string;
    content?: StringNullableFilter<"Block"> | string | null;
    orderIndex?: IntFilter<"Block"> | number;
    isDeleted?: BoolFilter<"Block"> | boolean;
    createdAt?: DateTimeFilter<"Block"> | Date | string;
    updatedAt?: DateTimeFilter<"Block"> | Date | string;
  };

  export type UserSharedUpsertWithWhereUniqueWithoutPageInput = {
    where: UserSharedWhereUniqueInput;
    update: XOR<
      UserSharedUpdateWithoutPageInput,
      UserSharedUncheckedUpdateWithoutPageInput
    >;
    create: XOR<
      UserSharedCreateWithoutPageInput,
      UserSharedUncheckedCreateWithoutPageInput
    >;
  };

  export type UserSharedUpdateWithWhereUniqueWithoutPageInput = {
    where: UserSharedWhereUniqueInput;
    data: XOR<
      UserSharedUpdateWithoutPageInput,
      UserSharedUncheckedUpdateWithoutPageInput
    >;
  };

  export type UserSharedUpdateManyWithWhereWithoutPageInput = {
    where: UserSharedScalarWhereInput;
    data: XOR<
      UserSharedUpdateManyMutationInput,
      UserSharedUncheckedUpdateManyWithoutPageInput
    >;
  };

  export type PageCreateWithoutSharedUsersInput = {
    id?: string;
    title?: string | null;
    description?: string | null;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: UserCreateNestedOneWithoutPagesInput;
    blocks?: BlockCreateNestedManyWithoutPageInput;
  };

  export type PageUncheckedCreateWithoutSharedUsersInput = {
    id?: string;
    userId: string;
    title?: string | null;
    description?: string | null;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    blocks?: BlockUncheckedCreateNestedManyWithoutPageInput;
  };

  export type PageCreateOrConnectWithoutSharedUsersInput = {
    where: PageWhereUniqueInput;
    create: XOR<
      PageCreateWithoutSharedUsersInput,
      PageUncheckedCreateWithoutSharedUsersInput
    >;
  };

  export type UserCreateWithoutSharedPagesInput = {
    id?: string;
    username: string;
    email: string;
    passwordHash: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roles?: UserRoleCreateNestedManyWithoutUserInput;
    pages?: PageCreateNestedManyWithoutOwnerInput;
    comments?: CommentCreateNestedManyWithoutUserInput;
    media?: MediaCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutSharedPagesInput = {
    id?: string;
    username: string;
    email: string;
    passwordHash: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput;
    pages?: PageUncheckedCreateNestedManyWithoutOwnerInput;
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput;
    media?: MediaUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutSharedPagesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutSharedPagesInput,
      UserUncheckedCreateWithoutSharedPagesInput
    >;
  };

  export type RoleCreateWithoutSharedPagesInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: UserRoleCreateNestedManyWithoutRoleInput;
    permissions?: RolePermissionCreateNestedManyWithoutRoleInput;
  };

  export type RoleUncheckedCreateWithoutSharedPagesInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: UserRoleUncheckedCreateNestedManyWithoutRoleInput;
    permissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput;
  };

  export type RoleCreateOrConnectWithoutSharedPagesInput = {
    where: RoleWhereUniqueInput;
    create: XOR<
      RoleCreateWithoutSharedPagesInput,
      RoleUncheckedCreateWithoutSharedPagesInput
    >;
  };

  export type PageUpsertWithoutSharedUsersInput = {
    update: XOR<
      PageUpdateWithoutSharedUsersInput,
      PageUncheckedUpdateWithoutSharedUsersInput
    >;
    create: XOR<
      PageCreateWithoutSharedUsersInput,
      PageUncheckedCreateWithoutSharedUsersInput
    >;
    where?: PageWhereInput;
  };

  export type PageUpdateToOneWithWhereWithoutSharedUsersInput = {
    where?: PageWhereInput;
    data: XOR<
      PageUpdateWithoutSharedUsersInput,
      PageUncheckedUpdateWithoutSharedUsersInput
    >;
  };

  export type PageUpdateWithoutSharedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: UserUpdateOneRequiredWithoutPagesNestedInput;
    blocks?: BlockUpdateManyWithoutPageNestedInput;
  };

  export type PageUncheckedUpdateWithoutSharedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    blocks?: BlockUncheckedUpdateManyWithoutPageNestedInput;
  };

  export type UserUpsertWithoutSharedPagesInput = {
    update: XOR<
      UserUpdateWithoutSharedPagesInput,
      UserUncheckedUpdateWithoutSharedPagesInput
    >;
    create: XOR<
      UserCreateWithoutSharedPagesInput,
      UserUncheckedCreateWithoutSharedPagesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutSharedPagesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutSharedPagesInput,
      UserUncheckedUpdateWithoutSharedPagesInput
    >;
  };

  export type UserUpdateWithoutSharedPagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: UserRoleUpdateManyWithoutUserNestedInput;
    pages?: PageUpdateManyWithoutOwnerNestedInput;
    comments?: CommentUpdateManyWithoutUserNestedInput;
    media?: MediaUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutSharedPagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    pages?: PageUncheckedUpdateManyWithoutOwnerNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput;
    media?: MediaUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type RoleUpsertWithoutSharedPagesInput = {
    update: XOR<
      RoleUpdateWithoutSharedPagesInput,
      RoleUncheckedUpdateWithoutSharedPagesInput
    >;
    create: XOR<
      RoleCreateWithoutSharedPagesInput,
      RoleUncheckedCreateWithoutSharedPagesInput
    >;
    where?: RoleWhereInput;
  };

  export type RoleUpdateToOneWithWhereWithoutSharedPagesInput = {
    where?: RoleWhereInput;
    data: XOR<
      RoleUpdateWithoutSharedPagesInput,
      RoleUncheckedUpdateWithoutSharedPagesInput
    >;
  };

  export type RoleUpdateWithoutSharedPagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: UserRoleUpdateManyWithoutRoleNestedInput;
    permissions?: RolePermissionUpdateManyWithoutRoleNestedInput;
  };

  export type RoleUncheckedUpdateWithoutSharedPagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput;
    permissions?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput;
  };

  export type PageCreateWithoutBlocksInput = {
    id?: string;
    title?: string | null;
    description?: string | null;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: UserCreateNestedOneWithoutPagesInput;
    sharedUsers?: UserSharedCreateNestedManyWithoutPageInput;
  };

  export type PageUncheckedCreateWithoutBlocksInput = {
    id?: string;
    userId: string;
    title?: string | null;
    description?: string | null;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sharedUsers?: UserSharedUncheckedCreateNestedManyWithoutPageInput;
  };

  export type PageCreateOrConnectWithoutBlocksInput = {
    where: PageWhereUniqueInput;
    create: XOR<
      PageCreateWithoutBlocksInput,
      PageUncheckedCreateWithoutBlocksInput
    >;
  };

  export type BlockCreateWithoutChildrenInput = {
    id?: string;
    type: string;
    content?: string | null;
    orderIndex: number;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    page: PageCreateNestedOneWithoutBlocksInput;
    parent?: BlockCreateNestedOneWithoutChildrenInput;
    comments?: CommentCreateNestedManyWithoutBlockInput;
  };

  export type BlockUncheckedCreateWithoutChildrenInput = {
    id?: string;
    pageId: string;
    parentId?: string | null;
    type: string;
    content?: string | null;
    orderIndex: number;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: CommentUncheckedCreateNestedManyWithoutBlockInput;
  };

  export type BlockCreateOrConnectWithoutChildrenInput = {
    where: BlockWhereUniqueInput;
    create: XOR<
      BlockCreateWithoutChildrenInput,
      BlockUncheckedCreateWithoutChildrenInput
    >;
  };

  export type BlockCreateWithoutParentInput = {
    id?: string;
    type: string;
    content?: string | null;
    orderIndex: number;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    page: PageCreateNestedOneWithoutBlocksInput;
    children?: BlockCreateNestedManyWithoutParentInput;
    comments?: CommentCreateNestedManyWithoutBlockInput;
  };

  export type BlockUncheckedCreateWithoutParentInput = {
    id?: string;
    pageId: string;
    type: string;
    content?: string | null;
    orderIndex: number;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    children?: BlockUncheckedCreateNestedManyWithoutParentInput;
    comments?: CommentUncheckedCreateNestedManyWithoutBlockInput;
  };

  export type BlockCreateOrConnectWithoutParentInput = {
    where: BlockWhereUniqueInput;
    create: XOR<
      BlockCreateWithoutParentInput,
      BlockUncheckedCreateWithoutParentInput
    >;
  };

  export type BlockCreateManyParentInputEnvelope = {
    data: BlockCreateManyParentInput | BlockCreateManyParentInput[];
    skipDuplicates?: boolean;
  };

  export type CommentCreateWithoutBlockInput = {
    id?: string;
    content?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutCommentsInput;
    parent?: CommentCreateNestedOneWithoutRepliesInput;
    replies?: CommentCreateNestedManyWithoutParentInput;
  };

  export type CommentUncheckedCreateWithoutBlockInput = {
    id?: string;
    userId: string;
    parentId?: string | null;
    content?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput;
  };

  export type CommentCreateOrConnectWithoutBlockInput = {
    where: CommentWhereUniqueInput;
    create: XOR<
      CommentCreateWithoutBlockInput,
      CommentUncheckedCreateWithoutBlockInput
    >;
  };

  export type CommentCreateManyBlockInputEnvelope = {
    data: CommentCreateManyBlockInput | CommentCreateManyBlockInput[];
    skipDuplicates?: boolean;
  };

  export type PageUpsertWithoutBlocksInput = {
    update: XOR<
      PageUpdateWithoutBlocksInput,
      PageUncheckedUpdateWithoutBlocksInput
    >;
    create: XOR<
      PageCreateWithoutBlocksInput,
      PageUncheckedCreateWithoutBlocksInput
    >;
    where?: PageWhereInput;
  };

  export type PageUpdateToOneWithWhereWithoutBlocksInput = {
    where?: PageWhereInput;
    data: XOR<
      PageUpdateWithoutBlocksInput,
      PageUncheckedUpdateWithoutBlocksInput
    >;
  };

  export type PageUpdateWithoutBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: UserUpdateOneRequiredWithoutPagesNestedInput;
    sharedUsers?: UserSharedUpdateManyWithoutPageNestedInput;
  };

  export type PageUncheckedUpdateWithoutBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    sharedUsers?: UserSharedUncheckedUpdateManyWithoutPageNestedInput;
  };

  export type BlockUpsertWithoutChildrenInput = {
    update: XOR<
      BlockUpdateWithoutChildrenInput,
      BlockUncheckedUpdateWithoutChildrenInput
    >;
    create: XOR<
      BlockCreateWithoutChildrenInput,
      BlockUncheckedCreateWithoutChildrenInput
    >;
    where?: BlockWhereInput;
  };

  export type BlockUpdateToOneWithWhereWithoutChildrenInput = {
    where?: BlockWhereInput;
    data: XOR<
      BlockUpdateWithoutChildrenInput,
      BlockUncheckedUpdateWithoutChildrenInput
    >;
  };

  export type BlockUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: IntFieldUpdateOperationsInput | number;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    page?: PageUpdateOneRequiredWithoutBlocksNestedInput;
    parent?: BlockUpdateOneWithoutChildrenNestedInput;
    comments?: CommentUpdateManyWithoutBlockNestedInput;
  };

  export type BlockUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pageId?: StringFieldUpdateOperationsInput | string;
    parentId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: IntFieldUpdateOperationsInput | number;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUncheckedUpdateManyWithoutBlockNestedInput;
  };

  export type BlockUpsertWithWhereUniqueWithoutParentInput = {
    where: BlockWhereUniqueInput;
    update: XOR<
      BlockUpdateWithoutParentInput,
      BlockUncheckedUpdateWithoutParentInput
    >;
    create: XOR<
      BlockCreateWithoutParentInput,
      BlockUncheckedCreateWithoutParentInput
    >;
  };

  export type BlockUpdateWithWhereUniqueWithoutParentInput = {
    where: BlockWhereUniqueInput;
    data: XOR<
      BlockUpdateWithoutParentInput,
      BlockUncheckedUpdateWithoutParentInput
    >;
  };

  export type BlockUpdateManyWithWhereWithoutParentInput = {
    where: BlockScalarWhereInput;
    data: XOR<
      BlockUpdateManyMutationInput,
      BlockUncheckedUpdateManyWithoutParentInput
    >;
  };

  export type CommentUpsertWithWhereUniqueWithoutBlockInput = {
    where: CommentWhereUniqueInput;
    update: XOR<
      CommentUpdateWithoutBlockInput,
      CommentUncheckedUpdateWithoutBlockInput
    >;
    create: XOR<
      CommentCreateWithoutBlockInput,
      CommentUncheckedCreateWithoutBlockInput
    >;
  };

  export type CommentUpdateWithWhereUniqueWithoutBlockInput = {
    where: CommentWhereUniqueInput;
    data: XOR<
      CommentUpdateWithoutBlockInput,
      CommentUncheckedUpdateWithoutBlockInput
    >;
  };

  export type CommentUpdateManyWithWhereWithoutBlockInput = {
    where: CommentScalarWhereInput;
    data: XOR<
      CommentUpdateManyMutationInput,
      CommentUncheckedUpdateManyWithoutBlockInput
    >;
  };

  export type BlockCreateWithoutCommentsInput = {
    id?: string;
    type: string;
    content?: string | null;
    orderIndex: number;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    page: PageCreateNestedOneWithoutBlocksInput;
    parent?: BlockCreateNestedOneWithoutChildrenInput;
    children?: BlockCreateNestedManyWithoutParentInput;
  };

  export type BlockUncheckedCreateWithoutCommentsInput = {
    id?: string;
    pageId: string;
    parentId?: string | null;
    type: string;
    content?: string | null;
    orderIndex: number;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    children?: BlockUncheckedCreateNestedManyWithoutParentInput;
  };

  export type BlockCreateOrConnectWithoutCommentsInput = {
    where: BlockWhereUniqueInput;
    create: XOR<
      BlockCreateWithoutCommentsInput,
      BlockUncheckedCreateWithoutCommentsInput
    >;
  };

  export type UserCreateWithoutCommentsInput = {
    id?: string;
    username: string;
    email: string;
    passwordHash: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roles?: UserRoleCreateNestedManyWithoutUserInput;
    sharedPages?: UserSharedCreateNestedManyWithoutUserInput;
    pages?: PageCreateNestedManyWithoutOwnerInput;
    media?: MediaCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string;
    username: string;
    email: string;
    passwordHash: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput;
    sharedPages?: UserSharedUncheckedCreateNestedManyWithoutUserInput;
    pages?: PageUncheckedCreateNestedManyWithoutOwnerInput;
    media?: MediaUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutCommentsInput,
      UserUncheckedCreateWithoutCommentsInput
    >;
  };

  export type CommentCreateWithoutRepliesInput = {
    id?: string;
    content?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    block: BlockCreateNestedOneWithoutCommentsInput;
    user: UserCreateNestedOneWithoutCommentsInput;
    parent?: CommentCreateNestedOneWithoutRepliesInput;
  };

  export type CommentUncheckedCreateWithoutRepliesInput = {
    id?: string;
    blockId: string;
    userId: string;
    parentId?: string | null;
    content?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CommentCreateOrConnectWithoutRepliesInput = {
    where: CommentWhereUniqueInput;
    create: XOR<
      CommentCreateWithoutRepliesInput,
      CommentUncheckedCreateWithoutRepliesInput
    >;
  };

  export type CommentCreateWithoutParentInput = {
    id?: string;
    content?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    block: BlockCreateNestedOneWithoutCommentsInput;
    user: UserCreateNestedOneWithoutCommentsInput;
    replies?: CommentCreateNestedManyWithoutParentInput;
  };

  export type CommentUncheckedCreateWithoutParentInput = {
    id?: string;
    blockId: string;
    userId: string;
    content?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput;
  };

  export type CommentCreateOrConnectWithoutParentInput = {
    where: CommentWhereUniqueInput;
    create: XOR<
      CommentCreateWithoutParentInput,
      CommentUncheckedCreateWithoutParentInput
    >;
  };

  export type CommentCreateManyParentInputEnvelope = {
    data: CommentCreateManyParentInput | CommentCreateManyParentInput[];
    skipDuplicates?: boolean;
  };

  export type BlockUpsertWithoutCommentsInput = {
    update: XOR<
      BlockUpdateWithoutCommentsInput,
      BlockUncheckedUpdateWithoutCommentsInput
    >;
    create: XOR<
      BlockCreateWithoutCommentsInput,
      BlockUncheckedCreateWithoutCommentsInput
    >;
    where?: BlockWhereInput;
  };

  export type BlockUpdateToOneWithWhereWithoutCommentsInput = {
    where?: BlockWhereInput;
    data: XOR<
      BlockUpdateWithoutCommentsInput,
      BlockUncheckedUpdateWithoutCommentsInput
    >;
  };

  export type BlockUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: IntFieldUpdateOperationsInput | number;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    page?: PageUpdateOneRequiredWithoutBlocksNestedInput;
    parent?: BlockUpdateOneWithoutChildrenNestedInput;
    children?: BlockUpdateManyWithoutParentNestedInput;
  };

  export type BlockUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pageId?: StringFieldUpdateOperationsInput | string;
    parentId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: IntFieldUpdateOperationsInput | number;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    children?: BlockUncheckedUpdateManyWithoutParentNestedInput;
  };

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<
      UserUpdateWithoutCommentsInput,
      UserUncheckedUpdateWithoutCommentsInput
    >;
    create: XOR<
      UserCreateWithoutCommentsInput,
      UserUncheckedCreateWithoutCommentsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutCommentsInput,
      UserUncheckedUpdateWithoutCommentsInput
    >;
  };

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: UserRoleUpdateManyWithoutUserNestedInput;
    sharedPages?: UserSharedUpdateManyWithoutUserNestedInput;
    pages?: PageUpdateManyWithoutOwnerNestedInput;
    media?: MediaUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    sharedPages?: UserSharedUncheckedUpdateManyWithoutUserNestedInput;
    pages?: PageUncheckedUpdateManyWithoutOwnerNestedInput;
    media?: MediaUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type CommentUpsertWithoutRepliesInput = {
    update: XOR<
      CommentUpdateWithoutRepliesInput,
      CommentUncheckedUpdateWithoutRepliesInput
    >;
    create: XOR<
      CommentCreateWithoutRepliesInput,
      CommentUncheckedCreateWithoutRepliesInput
    >;
    where?: CommentWhereInput;
  };

  export type CommentUpdateToOneWithWhereWithoutRepliesInput = {
    where?: CommentWhereInput;
    data: XOR<
      CommentUpdateWithoutRepliesInput,
      CommentUncheckedUpdateWithoutRepliesInput
    >;
  };

  export type CommentUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    block?: BlockUpdateOneRequiredWithoutCommentsNestedInput;
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput;
    parent?: CommentUpdateOneWithoutRepliesNestedInput;
  };

  export type CommentUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    blockId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    parentId?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentUpsertWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput;
    update: XOR<
      CommentUpdateWithoutParentInput,
      CommentUncheckedUpdateWithoutParentInput
    >;
    create: XOR<
      CommentCreateWithoutParentInput,
      CommentUncheckedCreateWithoutParentInput
    >;
  };

  export type CommentUpdateWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput;
    data: XOR<
      CommentUpdateWithoutParentInput,
      CommentUncheckedUpdateWithoutParentInput
    >;
  };

  export type CommentUpdateManyWithWhereWithoutParentInput = {
    where: CommentScalarWhereInput;
    data: XOR<
      CommentUpdateManyMutationInput,
      CommentUncheckedUpdateManyWithoutParentInput
    >;
  };

  export type UserCreateWithoutMediaInput = {
    id?: string;
    username: string;
    email: string;
    passwordHash: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roles?: UserRoleCreateNestedManyWithoutUserInput;
    sharedPages?: UserSharedCreateNestedManyWithoutUserInput;
    pages?: PageCreateNestedManyWithoutOwnerInput;
    comments?: CommentCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutMediaInput = {
    id?: string;
    username: string;
    email: string;
    passwordHash: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput;
    sharedPages?: UserSharedUncheckedCreateNestedManyWithoutUserInput;
    pages?: PageUncheckedCreateNestedManyWithoutOwnerInput;
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutMediaInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutMediaInput,
      UserUncheckedCreateWithoutMediaInput
    >;
  };

  export type UserUpsertWithoutMediaInput = {
    update: XOR<
      UserUpdateWithoutMediaInput,
      UserUncheckedUpdateWithoutMediaInput
    >;
    create: XOR<
      UserCreateWithoutMediaInput,
      UserUncheckedCreateWithoutMediaInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutMediaInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutMediaInput,
      UserUncheckedUpdateWithoutMediaInput
    >;
  };

  export type UserUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: UserRoleUpdateManyWithoutUserNestedInput;
    sharedPages?: UserSharedUpdateManyWithoutUserNestedInput;
    pages?: PageUpdateManyWithoutOwnerNestedInput;
    comments?: CommentUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    sharedPages?: UserSharedUncheckedUpdateManyWithoutUserNestedInput;
    pages?: PageUncheckedUpdateManyWithoutOwnerNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserRoleCreateManyUserInput = {
    roleId: string;
  };

  export type UserSharedCreateManyUserInput = {
    id?: string;
    pageId: string;
    roleId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PageCreateManyOwnerInput = {
    id?: string;
    title?: string | null;
    description?: string | null;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CommentCreateManyUserInput = {
    id?: string;
    blockId: string;
    parentId?: string | null;
    content?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type MediaCreateManyUserInput = {
    id?: string;
    url: string;
    type: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserRoleUpdateWithoutUserInput = {
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput;
  };

  export type UserRoleUncheckedUpdateWithoutUserInput = {
    roleId?: StringFieldUpdateOperationsInput | string;
  };

  export type UserRoleUncheckedUpdateManyWithoutUserInput = {
    roleId?: StringFieldUpdateOperationsInput | string;
  };

  export type UserSharedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    page?: PageUpdateOneRequiredWithoutSharedUsersNestedInput;
    role?: RoleUpdateOneRequiredWithoutSharedPagesNestedInput;
  };

  export type UserSharedUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pageId?: StringFieldUpdateOperationsInput | string;
    roleId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserSharedUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pageId?: StringFieldUpdateOperationsInput | string;
    roleId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PageUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    blocks?: BlockUpdateManyWithoutPageNestedInput;
    sharedUsers?: UserSharedUpdateManyWithoutPageNestedInput;
  };

  export type PageUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    blocks?: BlockUncheckedUpdateManyWithoutPageNestedInput;
    sharedUsers?: UserSharedUncheckedUpdateManyWithoutPageNestedInput;
  };

  export type PageUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    block?: BlockUpdateOneRequiredWithoutCommentsNestedInput;
    parent?: CommentUpdateOneWithoutRepliesNestedInput;
    replies?: CommentUpdateManyWithoutParentNestedInput;
  };

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    blockId?: StringFieldUpdateOperationsInput | string;
    parentId?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput;
  };

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    blockId?: StringFieldUpdateOperationsInput | string;
    parentId?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MediaUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MediaUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MediaUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserRoleCreateManyRoleInput = {
    userId: string;
  };

  export type RolePermissionCreateManyRoleInput = {
    permissionId: string;
  };

  export type UserSharedCreateManyRoleInput = {
    id?: string;
    pageId: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserRoleUpdateWithoutRoleInput = {
    user?: UserUpdateOneRequiredWithoutRolesNestedInput;
  };

  export type UserRoleUncheckedUpdateWithoutRoleInput = {
    userId?: StringFieldUpdateOperationsInput | string;
  };

  export type UserRoleUncheckedUpdateManyWithoutRoleInput = {
    userId?: StringFieldUpdateOperationsInput | string;
  };

  export type RolePermissionUpdateWithoutRoleInput = {
    permission?: PermissionUpdateOneRequiredWithoutRolesNestedInput;
  };

  export type RolePermissionUncheckedUpdateWithoutRoleInput = {
    permissionId?: StringFieldUpdateOperationsInput | string;
  };

  export type RolePermissionUncheckedUpdateManyWithoutRoleInput = {
    permissionId?: StringFieldUpdateOperationsInput | string;
  };

  export type UserSharedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    page?: PageUpdateOneRequiredWithoutSharedUsersNestedInput;
    user?: UserUpdateOneRequiredWithoutSharedPagesNestedInput;
  };

  export type UserSharedUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pageId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserSharedUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pageId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RolePermissionCreateManyPermissionInput = {
    roleId: string;
  };

  export type RolePermissionUpdateWithoutPermissionInput = {
    role?: RoleUpdateOneRequiredWithoutPermissionsNestedInput;
  };

  export type RolePermissionUncheckedUpdateWithoutPermissionInput = {
    roleId?: StringFieldUpdateOperationsInput | string;
  };

  export type RolePermissionUncheckedUpdateManyWithoutPermissionInput = {
    roleId?: StringFieldUpdateOperationsInput | string;
  };

  export type BlockCreateManyPageInput = {
    id?: string;
    parentId?: string | null;
    type: string;
    content?: string | null;
    orderIndex: number;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserSharedCreateManyPageInput = {
    id?: string;
    userId: string;
    roleId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type BlockUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: IntFieldUpdateOperationsInput | number;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: BlockUpdateOneWithoutChildrenNestedInput;
    children?: BlockUpdateManyWithoutParentNestedInput;
    comments?: CommentUpdateManyWithoutBlockNestedInput;
  };

  export type BlockUncheckedUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string;
    parentId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: IntFieldUpdateOperationsInput | number;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    children?: BlockUncheckedUpdateManyWithoutParentNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutBlockNestedInput;
  };

  export type BlockUncheckedUpdateManyWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string;
    parentId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: IntFieldUpdateOperationsInput | number;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserSharedUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutSharedPagesNestedInput;
    role?: RoleUpdateOneRequiredWithoutSharedPagesNestedInput;
  };

  export type UserSharedUncheckedUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    roleId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserSharedUncheckedUpdateManyWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    roleId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BlockCreateManyParentInput = {
    id?: string;
    pageId: string;
    type: string;
    content?: string | null;
    orderIndex: number;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CommentCreateManyBlockInput = {
    id?: string;
    userId: string;
    parentId?: string | null;
    content?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type BlockUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: IntFieldUpdateOperationsInput | number;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    page?: PageUpdateOneRequiredWithoutBlocksNestedInput;
    children?: BlockUpdateManyWithoutParentNestedInput;
    comments?: CommentUpdateManyWithoutBlockNestedInput;
  };

  export type BlockUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pageId?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: IntFieldUpdateOperationsInput | number;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    children?: BlockUncheckedUpdateManyWithoutParentNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutBlockNestedInput;
  };

  export type BlockUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pageId?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: IntFieldUpdateOperationsInput | number;
    isDeleted?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentUpdateWithoutBlockInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput;
    parent?: CommentUpdateOneWithoutRepliesNestedInput;
    replies?: CommentUpdateManyWithoutParentNestedInput;
  };

  export type CommentUncheckedUpdateWithoutBlockInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    parentId?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput;
  };

  export type CommentUncheckedUpdateManyWithoutBlockInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    parentId?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentCreateManyParentInput = {
    id?: string;
    blockId: string;
    userId: string;
    content?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CommentUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    block?: BlockUpdateOneRequiredWithoutCommentsNestedInput;
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput;
    replies?: CommentUpdateManyWithoutParentNestedInput;
  };

  export type CommentUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    blockId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput;
  };

  export type CommentUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    blockId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
