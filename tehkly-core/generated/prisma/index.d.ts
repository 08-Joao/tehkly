
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model SubscriptionPlan
 * 
 */
export type SubscriptionPlan = $Result.DefaultSelection<Prisma.$SubscriptionPlanPayload>
/**
 * Model CloudFeatures
 * 
 */
export type CloudFeatures = $Result.DefaultSelection<Prisma.$CloudFeaturesPayload>
/**
 * Model AgendeFeatures
 * 
 */
export type AgendeFeatures = $Result.DefaultSelection<Prisma.$AgendeFeaturesPayload>
/**
 * Model FreelaFeatures
 * 
 */
export type FreelaFeatures = $Result.DefaultSelection<Prisma.$FreelaFeaturesPayload>
/**
 * Model BusinessFeatures
 * 
 */
export type BusinessFeatures = $Result.DefaultSelection<Prisma.$BusinessFeaturesPayload>
/**
 * Model UserSubscription
 * 
 */
export type UserSubscription = $Result.DefaultSelection<Prisma.$UserSubscriptionPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ROOT: 'ROOT',
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const Service: {
  CLOUD: 'CLOUD',
  AGENDE: 'AGENDE',
  FREELA: 'FREELA',
  BUSINESS: 'BUSINESS'
};

export type Service = (typeof Service)[keyof typeof Service]


export const PlanType: {
  MONTHLY: 'MONTHLY',
  QUARTERLY: 'QUARTERLY',
  ANNUAL: 'ANNUAL'
};

export type PlanType = (typeof PlanType)[keyof typeof PlanType]


export const SubscriptionStatus: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  CANCELLED: 'CANCELLED',
  EXPIRED: 'EXPIRED',
  SUSPENDED: 'SUSPENDED'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  IN_PROCESS: 'IN_PROCESS',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const MercadoPagoPaymentMethod: {
  CREDIT_CARD: 'CREDIT_CARD',
  ACCOUNT_MONEY: 'ACCOUNT_MONEY',
  PIX: 'PIX'
};

export type MercadoPagoPaymentMethod = (typeof MercadoPagoPaymentMethod)[keyof typeof MercadoPagoPaymentMethod]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type Service = $Enums.Service

export const Service: typeof $Enums.Service

export type PlanType = $Enums.PlanType

export const PlanType: typeof $Enums.PlanType

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type MercadoPagoPaymentMethod = $Enums.MercadoPagoPaymentMethod

export const MercadoPagoPaymentMethod: typeof $Enums.MercadoPagoPaymentMethod

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.subscriptionPlan`: Exposes CRUD operations for the **SubscriptionPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubscriptionPlans
    * const subscriptionPlans = await prisma.subscriptionPlan.findMany()
    * ```
    */
  get subscriptionPlan(): Prisma.SubscriptionPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cloudFeatures`: Exposes CRUD operations for the **CloudFeatures** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CloudFeatures
    * const cloudFeatures = await prisma.cloudFeatures.findMany()
    * ```
    */
  get cloudFeatures(): Prisma.CloudFeaturesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agendeFeatures`: Exposes CRUD operations for the **AgendeFeatures** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AgendeFeatures
    * const agendeFeatures = await prisma.agendeFeatures.findMany()
    * ```
    */
  get agendeFeatures(): Prisma.AgendeFeaturesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.freelaFeatures`: Exposes CRUD operations for the **FreelaFeatures** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FreelaFeatures
    * const freelaFeatures = await prisma.freelaFeatures.findMany()
    * ```
    */
  get freelaFeatures(): Prisma.FreelaFeaturesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.businessFeatures`: Exposes CRUD operations for the **BusinessFeatures** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessFeatures
    * const businessFeatures = await prisma.businessFeatures.findMany()
    * ```
    */
  get businessFeatures(): Prisma.BusinessFeaturesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSubscription`: Exposes CRUD operations for the **UserSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSubscriptions
    * const userSubscriptions = await prisma.userSubscription.findMany()
    * ```
    */
  get userSubscription(): Prisma.UserSubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    SubscriptionPlan: 'SubscriptionPlan',
    CloudFeatures: 'CloudFeatures',
    AgendeFeatures: 'AgendeFeatures',
    FreelaFeatures: 'FreelaFeatures',
    BusinessFeatures: 'BusinessFeatures',
    UserSubscription: 'UserSubscription',
    Payment: 'Payment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "subscriptionPlan" | "cloudFeatures" | "agendeFeatures" | "freelaFeatures" | "businessFeatures" | "userSubscription" | "payment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      SubscriptionPlan: {
        payload: Prisma.$SubscriptionPlanPayload<ExtArgs>
        fields: Prisma.SubscriptionPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          findMany: {
            args: Prisma.SubscriptionPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[]
          }
          create: {
            args: Prisma.SubscriptionPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          createMany: {
            args: Prisma.SubscriptionPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          update: {
            args: Prisma.SubscriptionPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptionPlan>
          }
          groupBy: {
            args: Prisma.SubscriptionPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionPlanCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPlanCountAggregateOutputType> | number
          }
        }
      }
      CloudFeatures: {
        payload: Prisma.$CloudFeaturesPayload<ExtArgs>
        fields: Prisma.CloudFeaturesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CloudFeaturesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloudFeaturesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CloudFeaturesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloudFeaturesPayload>
          }
          findFirst: {
            args: Prisma.CloudFeaturesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloudFeaturesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CloudFeaturesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloudFeaturesPayload>
          }
          findMany: {
            args: Prisma.CloudFeaturesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloudFeaturesPayload>[]
          }
          create: {
            args: Prisma.CloudFeaturesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloudFeaturesPayload>
          }
          createMany: {
            args: Prisma.CloudFeaturesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CloudFeaturesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloudFeaturesPayload>[]
          }
          delete: {
            args: Prisma.CloudFeaturesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloudFeaturesPayload>
          }
          update: {
            args: Prisma.CloudFeaturesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloudFeaturesPayload>
          }
          deleteMany: {
            args: Prisma.CloudFeaturesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CloudFeaturesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CloudFeaturesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloudFeaturesPayload>[]
          }
          upsert: {
            args: Prisma.CloudFeaturesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloudFeaturesPayload>
          }
          aggregate: {
            args: Prisma.CloudFeaturesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCloudFeatures>
          }
          groupBy: {
            args: Prisma.CloudFeaturesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CloudFeaturesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CloudFeaturesCountArgs<ExtArgs>
            result: $Utils.Optional<CloudFeaturesCountAggregateOutputType> | number
          }
        }
      }
      AgendeFeatures: {
        payload: Prisma.$AgendeFeaturesPayload<ExtArgs>
        fields: Prisma.AgendeFeaturesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgendeFeaturesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendeFeaturesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgendeFeaturesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendeFeaturesPayload>
          }
          findFirst: {
            args: Prisma.AgendeFeaturesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendeFeaturesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgendeFeaturesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendeFeaturesPayload>
          }
          findMany: {
            args: Prisma.AgendeFeaturesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendeFeaturesPayload>[]
          }
          create: {
            args: Prisma.AgendeFeaturesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendeFeaturesPayload>
          }
          createMany: {
            args: Prisma.AgendeFeaturesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgendeFeaturesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendeFeaturesPayload>[]
          }
          delete: {
            args: Prisma.AgendeFeaturesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendeFeaturesPayload>
          }
          update: {
            args: Prisma.AgendeFeaturesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendeFeaturesPayload>
          }
          deleteMany: {
            args: Prisma.AgendeFeaturesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgendeFeaturesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgendeFeaturesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendeFeaturesPayload>[]
          }
          upsert: {
            args: Prisma.AgendeFeaturesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendeFeaturesPayload>
          }
          aggregate: {
            args: Prisma.AgendeFeaturesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgendeFeatures>
          }
          groupBy: {
            args: Prisma.AgendeFeaturesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgendeFeaturesGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgendeFeaturesCountArgs<ExtArgs>
            result: $Utils.Optional<AgendeFeaturesCountAggregateOutputType> | number
          }
        }
      }
      FreelaFeatures: {
        payload: Prisma.$FreelaFeaturesPayload<ExtArgs>
        fields: Prisma.FreelaFeaturesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FreelaFeaturesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelaFeaturesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FreelaFeaturesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelaFeaturesPayload>
          }
          findFirst: {
            args: Prisma.FreelaFeaturesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelaFeaturesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FreelaFeaturesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelaFeaturesPayload>
          }
          findMany: {
            args: Prisma.FreelaFeaturesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelaFeaturesPayload>[]
          }
          create: {
            args: Prisma.FreelaFeaturesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelaFeaturesPayload>
          }
          createMany: {
            args: Prisma.FreelaFeaturesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FreelaFeaturesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelaFeaturesPayload>[]
          }
          delete: {
            args: Prisma.FreelaFeaturesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelaFeaturesPayload>
          }
          update: {
            args: Prisma.FreelaFeaturesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelaFeaturesPayload>
          }
          deleteMany: {
            args: Prisma.FreelaFeaturesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FreelaFeaturesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FreelaFeaturesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelaFeaturesPayload>[]
          }
          upsert: {
            args: Prisma.FreelaFeaturesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelaFeaturesPayload>
          }
          aggregate: {
            args: Prisma.FreelaFeaturesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFreelaFeatures>
          }
          groupBy: {
            args: Prisma.FreelaFeaturesGroupByArgs<ExtArgs>
            result: $Utils.Optional<FreelaFeaturesGroupByOutputType>[]
          }
          count: {
            args: Prisma.FreelaFeaturesCountArgs<ExtArgs>
            result: $Utils.Optional<FreelaFeaturesCountAggregateOutputType> | number
          }
        }
      }
      BusinessFeatures: {
        payload: Prisma.$BusinessFeaturesPayload<ExtArgs>
        fields: Prisma.BusinessFeaturesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessFeaturesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessFeaturesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessFeaturesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessFeaturesPayload>
          }
          findFirst: {
            args: Prisma.BusinessFeaturesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessFeaturesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessFeaturesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessFeaturesPayload>
          }
          findMany: {
            args: Prisma.BusinessFeaturesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessFeaturesPayload>[]
          }
          create: {
            args: Prisma.BusinessFeaturesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessFeaturesPayload>
          }
          createMany: {
            args: Prisma.BusinessFeaturesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessFeaturesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessFeaturesPayload>[]
          }
          delete: {
            args: Prisma.BusinessFeaturesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessFeaturesPayload>
          }
          update: {
            args: Prisma.BusinessFeaturesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessFeaturesPayload>
          }
          deleteMany: {
            args: Prisma.BusinessFeaturesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessFeaturesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessFeaturesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessFeaturesPayload>[]
          }
          upsert: {
            args: Prisma.BusinessFeaturesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessFeaturesPayload>
          }
          aggregate: {
            args: Prisma.BusinessFeaturesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusinessFeatures>
          }
          groupBy: {
            args: Prisma.BusinessFeaturesGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessFeaturesGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessFeaturesCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessFeaturesCountAggregateOutputType> | number
          }
        }
      }
      UserSubscription: {
        payload: Prisma.$UserSubscriptionPayload<ExtArgs>
        fields: Prisma.UserSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.UserSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          findMany: {
            args: Prisma.UserSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>[]
          }
          create: {
            args: Prisma.UserSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          createMany: {
            args: Prisma.UserSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>[]
          }
          delete: {
            args: Prisma.UserSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          update: {
            args: Prisma.UserSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.UserSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.UserSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.UserSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSubscription>
          }
          groupBy: {
            args: Prisma.UserSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<UserSubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    subscriptionPlan?: SubscriptionPlanOmit
    cloudFeatures?: CloudFeaturesOmit
    agendeFeatures?: AgendeFeaturesOmit
    freelaFeatures?: FreelaFeaturesOmit
    businessFeatures?: BusinessFeaturesOmit
    userSubscription?: UserSubscriptionOmit
    payment?: PaymentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userSubscriptions: number
    payments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSubscriptions?: boolean | UserCountOutputTypeCountUserSubscriptionsArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSubscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type SubscriptionPlanCountOutputType
   */

  export type SubscriptionPlanCountOutputType = {
    userSubscriptions: number
  }

  export type SubscriptionPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSubscriptions?: boolean | SubscriptionPlanCountOutputTypeCountUserSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionPlanCountOutputType without action
   */
  export type SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlanCountOutputType
     */
    select?: SubscriptionPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionPlanCountOutputType without action
   */
  export type SubscriptionPlanCountOutputTypeCountUserSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSubscriptionWhereInput
  }


  /**
   * Count Type UserSubscriptionCountOutputType
   */

  export type UserSubscriptionCountOutputType = {
    payments: number
  }

  export type UserSubscriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | UserSubscriptionCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * UserSubscriptionCountOutputType without action
   */
  export type UserSubscriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscriptionCountOutputType
     */
    select?: UserSubscriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserSubscriptionCountOutputType without action
   */
  export type UserSubscriptionCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    phoneNumber: string | null
    birthDate: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    phoneNumber: string | null
    birthDate: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    phoneNumber: number
    birthDate: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phoneNumber?: true
    birthDate?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phoneNumber?: true
    birthDate?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phoneNumber?: true
    birthDate?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    phoneNumber: string
    birthDate: string
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    phoneNumber?: boolean
    birthDate?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userSubscriptions?: boolean | User$userSubscriptionsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    phoneNumber?: boolean
    birthDate?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    phoneNumber?: boolean
    birthDate?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    phoneNumber?: boolean
    birthDate?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "phoneNumber" | "birthDate" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSubscriptions?: boolean | User$userSubscriptionsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userSubscriptions: Prisma.$UserSubscriptionPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      phoneNumber: string
      birthDate: string
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userSubscriptions<T extends User$userSubscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$userSubscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly birthDate: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userSubscriptions
   */
  export type User$userSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    where?: UserSubscriptionWhereInput
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    cursor?: UserSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model SubscriptionPlan
   */

  export type AggregateSubscriptionPlan = {
    _count: SubscriptionPlanCountAggregateOutputType | null
    _avg: SubscriptionPlanAvgAggregateOutputType | null
    _sum: SubscriptionPlanSumAggregateOutputType | null
    _min: SubscriptionPlanMinAggregateOutputType | null
    _max: SubscriptionPlanMaxAggregateOutputType | null
  }

  export type SubscriptionPlanAvgAggregateOutputType = {
    monthlyPrice: Decimal | null
    quarterlyDiscount: number | null
    annualDiscount: number | null
  }

  export type SubscriptionPlanSumAggregateOutputType = {
    monthlyPrice: Decimal | null
    quarterlyDiscount: number | null
    annualDiscount: number | null
  }

  export type SubscriptionPlanMinAggregateOutputType = {
    id: string | null
    service: $Enums.Service | null
    name: string | null
    description: string | null
    monthlyPrice: Decimal | null
    quarterlyDiscount: number | null
    annualDiscount: number | null
    isActive: boolean | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionPlanMaxAggregateOutputType = {
    id: string | null
    service: $Enums.Service | null
    name: string | null
    description: string | null
    monthlyPrice: Decimal | null
    quarterlyDiscount: number | null
    annualDiscount: number | null
    isActive: boolean | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionPlanCountAggregateOutputType = {
    id: number
    service: number
    name: number
    description: number
    monthlyPrice: number
    quarterlyDiscount: number
    annualDiscount: number
    isActive: number
    isPublic: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionPlanAvgAggregateInputType = {
    monthlyPrice?: true
    quarterlyDiscount?: true
    annualDiscount?: true
  }

  export type SubscriptionPlanSumAggregateInputType = {
    monthlyPrice?: true
    quarterlyDiscount?: true
    annualDiscount?: true
  }

  export type SubscriptionPlanMinAggregateInputType = {
    id?: true
    service?: true
    name?: true
    description?: true
    monthlyPrice?: true
    quarterlyDiscount?: true
    annualDiscount?: true
    isActive?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionPlanMaxAggregateInputType = {
    id?: true
    service?: true
    name?: true
    description?: true
    monthlyPrice?: true
    quarterlyDiscount?: true
    annualDiscount?: true
    isActive?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionPlanCountAggregateInputType = {
    id?: true
    service?: true
    name?: true
    description?: true
    monthlyPrice?: true
    quarterlyDiscount?: true
    annualDiscount?: true
    isActive?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionPlan to aggregate.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubscriptionPlans
    **/
    _count?: true | SubscriptionPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionPlanMaxAggregateInputType
  }

  export type GetSubscriptionPlanAggregateType<T extends SubscriptionPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptionPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionPlan[P]>
      : GetScalarType<T[P], AggregateSubscriptionPlan[P]>
  }




  export type SubscriptionPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionPlanWhereInput
    orderBy?: SubscriptionPlanOrderByWithAggregationInput | SubscriptionPlanOrderByWithAggregationInput[]
    by: SubscriptionPlanScalarFieldEnum[] | SubscriptionPlanScalarFieldEnum
    having?: SubscriptionPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionPlanCountAggregateInputType | true
    _avg?: SubscriptionPlanAvgAggregateInputType
    _sum?: SubscriptionPlanSumAggregateInputType
    _min?: SubscriptionPlanMinAggregateInputType
    _max?: SubscriptionPlanMaxAggregateInputType
  }

  export type SubscriptionPlanGroupByOutputType = {
    id: string
    service: $Enums.Service
    name: string
    description: string | null
    monthlyPrice: Decimal
    quarterlyDiscount: number
    annualDiscount: number
    isActive: boolean
    isPublic: boolean
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionPlanCountAggregateOutputType | null
    _avg: SubscriptionPlanAvgAggregateOutputType | null
    _sum: SubscriptionPlanSumAggregateOutputType | null
    _min: SubscriptionPlanMinAggregateOutputType | null
    _max: SubscriptionPlanMaxAggregateOutputType | null
  }

  type GetSubscriptionPlanGroupByPayload<T extends SubscriptionPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionPlanGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionPlanGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    name?: boolean
    description?: boolean
    monthlyPrice?: boolean
    quarterlyDiscount?: boolean
    annualDiscount?: boolean
    isActive?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cloudFeatures?: boolean | SubscriptionPlan$cloudFeaturesArgs<ExtArgs>
    agendeFeatures?: boolean | SubscriptionPlan$agendeFeaturesArgs<ExtArgs>
    freelaFeatures?: boolean | SubscriptionPlan$freelaFeaturesArgs<ExtArgs>
    businessFeatures?: boolean | SubscriptionPlan$businessFeaturesArgs<ExtArgs>
    userSubscriptions?: boolean | SubscriptionPlan$userSubscriptionsArgs<ExtArgs>
    _count?: boolean | SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionPlan"]>

  export type SubscriptionPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    name?: boolean
    description?: boolean
    monthlyPrice?: boolean
    quarterlyDiscount?: boolean
    annualDiscount?: boolean
    isActive?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subscriptionPlan"]>

  export type SubscriptionPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    name?: boolean
    description?: boolean
    monthlyPrice?: boolean
    quarterlyDiscount?: boolean
    annualDiscount?: boolean
    isActive?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subscriptionPlan"]>

  export type SubscriptionPlanSelectScalar = {
    id?: boolean
    service?: boolean
    name?: boolean
    description?: boolean
    monthlyPrice?: boolean
    quarterlyDiscount?: boolean
    annualDiscount?: boolean
    isActive?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "service" | "name" | "description" | "monthlyPrice" | "quarterlyDiscount" | "annualDiscount" | "isActive" | "isPublic" | "createdAt" | "updatedAt", ExtArgs["result"]["subscriptionPlan"]>
  export type SubscriptionPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cloudFeatures?: boolean | SubscriptionPlan$cloudFeaturesArgs<ExtArgs>
    agendeFeatures?: boolean | SubscriptionPlan$agendeFeaturesArgs<ExtArgs>
    freelaFeatures?: boolean | SubscriptionPlan$freelaFeaturesArgs<ExtArgs>
    businessFeatures?: boolean | SubscriptionPlan$businessFeaturesArgs<ExtArgs>
    userSubscriptions?: boolean | SubscriptionPlan$userSubscriptionsArgs<ExtArgs>
    _count?: boolean | SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubscriptionPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubscriptionPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubscriptionPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubscriptionPlan"
    objects: {
      cloudFeatures: Prisma.$CloudFeaturesPayload<ExtArgs> | null
      agendeFeatures: Prisma.$AgendeFeaturesPayload<ExtArgs> | null
      freelaFeatures: Prisma.$FreelaFeaturesPayload<ExtArgs> | null
      businessFeatures: Prisma.$BusinessFeaturesPayload<ExtArgs> | null
      userSubscriptions: Prisma.$UserSubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      service: $Enums.Service
      name: string
      description: string | null
      monthlyPrice: Prisma.Decimal
      quarterlyDiscount: number
      annualDiscount: number
      isActive: boolean
      isPublic: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscriptionPlan"]>
    composites: {}
  }

  type SubscriptionPlanGetPayload<S extends boolean | null | undefined | SubscriptionPlanDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPlanPayload, S>

  type SubscriptionPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionPlanCountAggregateInputType | true
    }

  export interface SubscriptionPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionPlan'], meta: { name: 'SubscriptionPlan' } }
    /**
     * Find zero or one SubscriptionPlan that matches the filter.
     * @param {SubscriptionPlanFindUniqueArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionPlanFindUniqueArgs>(args: SelectSubset<T, SubscriptionPlanFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubscriptionPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionPlanFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindFirstArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionPlanFindFirstArgs>(args?: SelectSubset<T, SubscriptionPlanFindFirstArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindFirstOrThrowArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubscriptionPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionPlans
     * const subscriptionPlans = await prisma.subscriptionPlan.findMany()
     * 
     * // Get first 10 SubscriptionPlans
     * const subscriptionPlans = await prisma.subscriptionPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionPlanFindManyArgs>(args?: SelectSubset<T, SubscriptionPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubscriptionPlan.
     * @param {SubscriptionPlanCreateArgs} args - Arguments to create a SubscriptionPlan.
     * @example
     * // Create one SubscriptionPlan
     * const SubscriptionPlan = await prisma.subscriptionPlan.create({
     *   data: {
     *     // ... data to create a SubscriptionPlan
     *   }
     * })
     * 
     */
    create<T extends SubscriptionPlanCreateArgs>(args: SelectSubset<T, SubscriptionPlanCreateArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubscriptionPlans.
     * @param {SubscriptionPlanCreateManyArgs} args - Arguments to create many SubscriptionPlans.
     * @example
     * // Create many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionPlanCreateManyArgs>(args?: SelectSubset<T, SubscriptionPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubscriptionPlans and returns the data saved in the database.
     * @param {SubscriptionPlanCreateManyAndReturnArgs} args - Arguments to create many SubscriptionPlans.
     * @example
     * // Create many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubscriptionPlans and only return the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubscriptionPlan.
     * @param {SubscriptionPlanDeleteArgs} args - Arguments to delete one SubscriptionPlan.
     * @example
     * // Delete one SubscriptionPlan
     * const SubscriptionPlan = await prisma.subscriptionPlan.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionPlan
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionPlanDeleteArgs>(args: SelectSubset<T, SubscriptionPlanDeleteArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubscriptionPlan.
     * @param {SubscriptionPlanUpdateArgs} args - Arguments to update one SubscriptionPlan.
     * @example
     * // Update one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionPlanUpdateArgs>(args: SelectSubset<T, SubscriptionPlanUpdateArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubscriptionPlans.
     * @param {SubscriptionPlanDeleteManyArgs} args - Arguments to filter SubscriptionPlans to delete.
     * @example
     * // Delete a few SubscriptionPlans
     * const { count } = await prisma.subscriptionPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionPlanDeleteManyArgs>(args?: SelectSubset<T, SubscriptionPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionPlanUpdateManyArgs>(args: SelectSubset<T, SubscriptionPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionPlans and returns the data updated in the database.
     * @param {SubscriptionPlanUpdateManyAndReturnArgs} args - Arguments to update many SubscriptionPlans.
     * @example
     * // Update many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubscriptionPlans and only return the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubscriptionPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubscriptionPlan.
     * @param {SubscriptionPlanUpsertArgs} args - Arguments to update or create a SubscriptionPlan.
     * @example
     * // Update or create a SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.upsert({
     *   create: {
     *     // ... data to create a SubscriptionPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionPlan we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionPlanUpsertArgs>(args: SelectSubset<T, SubscriptionPlanUpsertArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubscriptionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanCountArgs} args - Arguments to filter SubscriptionPlans to count.
     * @example
     * // Count the number of SubscriptionPlans
     * const count = await prisma.subscriptionPlan.count({
     *   where: {
     *     // ... the filter for the SubscriptionPlans we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionPlanCountArgs>(
      args?: Subset<T, SubscriptionPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionPlanAggregateArgs>(args: Subset<T, SubscriptionPlanAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionPlanAggregateType<T>>

    /**
     * Group by SubscriptionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionPlanGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubscriptionPlan model
   */
  readonly fields: SubscriptionPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cloudFeatures<T extends SubscriptionPlan$cloudFeaturesArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlan$cloudFeaturesArgs<ExtArgs>>): Prisma__CloudFeaturesClient<$Result.GetResult<Prisma.$CloudFeaturesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    agendeFeatures<T extends SubscriptionPlan$agendeFeaturesArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlan$agendeFeaturesArgs<ExtArgs>>): Prisma__AgendeFeaturesClient<$Result.GetResult<Prisma.$AgendeFeaturesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    freelaFeatures<T extends SubscriptionPlan$freelaFeaturesArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlan$freelaFeaturesArgs<ExtArgs>>): Prisma__FreelaFeaturesClient<$Result.GetResult<Prisma.$FreelaFeaturesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    businessFeatures<T extends SubscriptionPlan$businessFeaturesArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlan$businessFeaturesArgs<ExtArgs>>): Prisma__BusinessFeaturesClient<$Result.GetResult<Prisma.$BusinessFeaturesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    userSubscriptions<T extends SubscriptionPlan$userSubscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlan$userSubscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubscriptionPlan model
   */
  interface SubscriptionPlanFieldRefs {
    readonly id: FieldRef<"SubscriptionPlan", 'String'>
    readonly service: FieldRef<"SubscriptionPlan", 'Service'>
    readonly name: FieldRef<"SubscriptionPlan", 'String'>
    readonly description: FieldRef<"SubscriptionPlan", 'String'>
    readonly monthlyPrice: FieldRef<"SubscriptionPlan", 'Decimal'>
    readonly quarterlyDiscount: FieldRef<"SubscriptionPlan", 'Int'>
    readonly annualDiscount: FieldRef<"SubscriptionPlan", 'Int'>
    readonly isActive: FieldRef<"SubscriptionPlan", 'Boolean'>
    readonly isPublic: FieldRef<"SubscriptionPlan", 'Boolean'>
    readonly createdAt: FieldRef<"SubscriptionPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"SubscriptionPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubscriptionPlan findUnique
   */
  export type SubscriptionPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan findUniqueOrThrow
   */
  export type SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan findFirst
   */
  export type SubscriptionPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPlans.
     */
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan findFirstOrThrow
   */
  export type SubscriptionPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPlans.
     */
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan findMany
   */
  export type SubscriptionPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlans to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan create
   */
  export type SubscriptionPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a SubscriptionPlan.
     */
    data: XOR<SubscriptionPlanCreateInput, SubscriptionPlanUncheckedCreateInput>
  }

  /**
   * SubscriptionPlan createMany
   */
  export type SubscriptionPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubscriptionPlans.
     */
    data: SubscriptionPlanCreateManyInput | SubscriptionPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionPlan createManyAndReturn
   */
  export type SubscriptionPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * The data used to create many SubscriptionPlans.
     */
    data: SubscriptionPlanCreateManyInput | SubscriptionPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionPlan update
   */
  export type SubscriptionPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a SubscriptionPlan.
     */
    data: XOR<SubscriptionPlanUpdateInput, SubscriptionPlanUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionPlan to update.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan updateMany
   */
  export type SubscriptionPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubscriptionPlans.
     */
    data: XOR<SubscriptionPlanUpdateManyMutationInput, SubscriptionPlanUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionPlans to update
     */
    where?: SubscriptionPlanWhereInput
    /**
     * Limit how many SubscriptionPlans to update.
     */
    limit?: number
  }

  /**
   * SubscriptionPlan updateManyAndReturn
   */
  export type SubscriptionPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * The data used to update SubscriptionPlans.
     */
    data: XOR<SubscriptionPlanUpdateManyMutationInput, SubscriptionPlanUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionPlans to update
     */
    where?: SubscriptionPlanWhereInput
    /**
     * Limit how many SubscriptionPlans to update.
     */
    limit?: number
  }

  /**
   * SubscriptionPlan upsert
   */
  export type SubscriptionPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the SubscriptionPlan to update in case it exists.
     */
    where: SubscriptionPlanWhereUniqueInput
    /**
     * In case the SubscriptionPlan found by the `where` argument doesn't exist, create a new SubscriptionPlan with this data.
     */
    create: XOR<SubscriptionPlanCreateInput, SubscriptionPlanUncheckedCreateInput>
    /**
     * In case the SubscriptionPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionPlanUpdateInput, SubscriptionPlanUncheckedUpdateInput>
  }

  /**
   * SubscriptionPlan delete
   */
  export type SubscriptionPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter which SubscriptionPlan to delete.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan deleteMany
   */
  export type SubscriptionPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionPlans to delete
     */
    where?: SubscriptionPlanWhereInput
    /**
     * Limit how many SubscriptionPlans to delete.
     */
    limit?: number
  }

  /**
   * SubscriptionPlan.cloudFeatures
   */
  export type SubscriptionPlan$cloudFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudFeatures
     */
    select?: CloudFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CloudFeatures
     */
    omit?: CloudFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CloudFeaturesInclude<ExtArgs> | null
    where?: CloudFeaturesWhereInput
  }

  /**
   * SubscriptionPlan.agendeFeatures
   */
  export type SubscriptionPlan$agendeFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendeFeatures
     */
    select?: AgendeFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendeFeatures
     */
    omit?: AgendeFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendeFeaturesInclude<ExtArgs> | null
    where?: AgendeFeaturesWhereInput
  }

  /**
   * SubscriptionPlan.freelaFeatures
   */
  export type SubscriptionPlan$freelaFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreelaFeatures
     */
    select?: FreelaFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreelaFeatures
     */
    omit?: FreelaFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreelaFeaturesInclude<ExtArgs> | null
    where?: FreelaFeaturesWhereInput
  }

  /**
   * SubscriptionPlan.businessFeatures
   */
  export type SubscriptionPlan$businessFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessFeatures
     */
    select?: BusinessFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessFeatures
     */
    omit?: BusinessFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessFeaturesInclude<ExtArgs> | null
    where?: BusinessFeaturesWhereInput
  }

  /**
   * SubscriptionPlan.userSubscriptions
   */
  export type SubscriptionPlan$userSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    where?: UserSubscriptionWhereInput
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    cursor?: UserSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan without action
   */
  export type SubscriptionPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
  }


  /**
   * Model CloudFeatures
   */

  export type AggregateCloudFeatures = {
    _count: CloudFeaturesCountAggregateOutputType | null
    _avg: CloudFeaturesAvgAggregateOutputType | null
    _sum: CloudFeaturesSumAggregateOutputType | null
    _min: CloudFeaturesMinAggregateOutputType | null
    _max: CloudFeaturesMaxAggregateOutputType | null
  }

  export type CloudFeaturesAvgAggregateOutputType = {
    storageGB: number | null
  }

  export type CloudFeaturesSumAggregateOutputType = {
    storageGB: number | null
  }

  export type CloudFeaturesMinAggregateOutputType = {
    id: string | null
    planId: string | null
    storageGB: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CloudFeaturesMaxAggregateOutputType = {
    id: string | null
    planId: string | null
    storageGB: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CloudFeaturesCountAggregateOutputType = {
    id: number
    planId: number
    storageGB: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CloudFeaturesAvgAggregateInputType = {
    storageGB?: true
  }

  export type CloudFeaturesSumAggregateInputType = {
    storageGB?: true
  }

  export type CloudFeaturesMinAggregateInputType = {
    id?: true
    planId?: true
    storageGB?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CloudFeaturesMaxAggregateInputType = {
    id?: true
    planId?: true
    storageGB?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CloudFeaturesCountAggregateInputType = {
    id?: true
    planId?: true
    storageGB?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CloudFeaturesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CloudFeatures to aggregate.
     */
    where?: CloudFeaturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CloudFeatures to fetch.
     */
    orderBy?: CloudFeaturesOrderByWithRelationInput | CloudFeaturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CloudFeaturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CloudFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CloudFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CloudFeatures
    **/
    _count?: true | CloudFeaturesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CloudFeaturesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CloudFeaturesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CloudFeaturesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CloudFeaturesMaxAggregateInputType
  }

  export type GetCloudFeaturesAggregateType<T extends CloudFeaturesAggregateArgs> = {
        [P in keyof T & keyof AggregateCloudFeatures]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCloudFeatures[P]>
      : GetScalarType<T[P], AggregateCloudFeatures[P]>
  }




  export type CloudFeaturesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CloudFeaturesWhereInput
    orderBy?: CloudFeaturesOrderByWithAggregationInput | CloudFeaturesOrderByWithAggregationInput[]
    by: CloudFeaturesScalarFieldEnum[] | CloudFeaturesScalarFieldEnum
    having?: CloudFeaturesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CloudFeaturesCountAggregateInputType | true
    _avg?: CloudFeaturesAvgAggregateInputType
    _sum?: CloudFeaturesSumAggregateInputType
    _min?: CloudFeaturesMinAggregateInputType
    _max?: CloudFeaturesMaxAggregateInputType
  }

  export type CloudFeaturesGroupByOutputType = {
    id: string
    planId: string
    storageGB: number
    createdAt: Date
    updatedAt: Date
    _count: CloudFeaturesCountAggregateOutputType | null
    _avg: CloudFeaturesAvgAggregateOutputType | null
    _sum: CloudFeaturesSumAggregateOutputType | null
    _min: CloudFeaturesMinAggregateOutputType | null
    _max: CloudFeaturesMaxAggregateOutputType | null
  }

  type GetCloudFeaturesGroupByPayload<T extends CloudFeaturesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CloudFeaturesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CloudFeaturesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CloudFeaturesGroupByOutputType[P]>
            : GetScalarType<T[P], CloudFeaturesGroupByOutputType[P]>
        }
      >
    >


  export type CloudFeaturesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    storageGB?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cloudFeatures"]>

  export type CloudFeaturesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    storageGB?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cloudFeatures"]>

  export type CloudFeaturesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    storageGB?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cloudFeatures"]>

  export type CloudFeaturesSelectScalar = {
    id?: boolean
    planId?: boolean
    storageGB?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CloudFeaturesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "planId" | "storageGB" | "createdAt" | "updatedAt", ExtArgs["result"]["cloudFeatures"]>
  export type CloudFeaturesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }
  export type CloudFeaturesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }
  export type CloudFeaturesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }

  export type $CloudFeaturesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CloudFeatures"
    objects: {
      plan: Prisma.$SubscriptionPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      planId: string
      storageGB: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cloudFeatures"]>
    composites: {}
  }

  type CloudFeaturesGetPayload<S extends boolean | null | undefined | CloudFeaturesDefaultArgs> = $Result.GetResult<Prisma.$CloudFeaturesPayload, S>

  type CloudFeaturesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CloudFeaturesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CloudFeaturesCountAggregateInputType | true
    }

  export interface CloudFeaturesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CloudFeatures'], meta: { name: 'CloudFeatures' } }
    /**
     * Find zero or one CloudFeatures that matches the filter.
     * @param {CloudFeaturesFindUniqueArgs} args - Arguments to find a CloudFeatures
     * @example
     * // Get one CloudFeatures
     * const cloudFeatures = await prisma.cloudFeatures.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CloudFeaturesFindUniqueArgs>(args: SelectSubset<T, CloudFeaturesFindUniqueArgs<ExtArgs>>): Prisma__CloudFeaturesClient<$Result.GetResult<Prisma.$CloudFeaturesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CloudFeatures that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CloudFeaturesFindUniqueOrThrowArgs} args - Arguments to find a CloudFeatures
     * @example
     * // Get one CloudFeatures
     * const cloudFeatures = await prisma.cloudFeatures.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CloudFeaturesFindUniqueOrThrowArgs>(args: SelectSubset<T, CloudFeaturesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CloudFeaturesClient<$Result.GetResult<Prisma.$CloudFeaturesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CloudFeatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloudFeaturesFindFirstArgs} args - Arguments to find a CloudFeatures
     * @example
     * // Get one CloudFeatures
     * const cloudFeatures = await prisma.cloudFeatures.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CloudFeaturesFindFirstArgs>(args?: SelectSubset<T, CloudFeaturesFindFirstArgs<ExtArgs>>): Prisma__CloudFeaturesClient<$Result.GetResult<Prisma.$CloudFeaturesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CloudFeatures that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloudFeaturesFindFirstOrThrowArgs} args - Arguments to find a CloudFeatures
     * @example
     * // Get one CloudFeatures
     * const cloudFeatures = await prisma.cloudFeatures.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CloudFeaturesFindFirstOrThrowArgs>(args?: SelectSubset<T, CloudFeaturesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CloudFeaturesClient<$Result.GetResult<Prisma.$CloudFeaturesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CloudFeatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloudFeaturesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CloudFeatures
     * const cloudFeatures = await prisma.cloudFeatures.findMany()
     * 
     * // Get first 10 CloudFeatures
     * const cloudFeatures = await prisma.cloudFeatures.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cloudFeaturesWithIdOnly = await prisma.cloudFeatures.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CloudFeaturesFindManyArgs>(args?: SelectSubset<T, CloudFeaturesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CloudFeaturesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CloudFeatures.
     * @param {CloudFeaturesCreateArgs} args - Arguments to create a CloudFeatures.
     * @example
     * // Create one CloudFeatures
     * const CloudFeatures = await prisma.cloudFeatures.create({
     *   data: {
     *     // ... data to create a CloudFeatures
     *   }
     * })
     * 
     */
    create<T extends CloudFeaturesCreateArgs>(args: SelectSubset<T, CloudFeaturesCreateArgs<ExtArgs>>): Prisma__CloudFeaturesClient<$Result.GetResult<Prisma.$CloudFeaturesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CloudFeatures.
     * @param {CloudFeaturesCreateManyArgs} args - Arguments to create many CloudFeatures.
     * @example
     * // Create many CloudFeatures
     * const cloudFeatures = await prisma.cloudFeatures.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CloudFeaturesCreateManyArgs>(args?: SelectSubset<T, CloudFeaturesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CloudFeatures and returns the data saved in the database.
     * @param {CloudFeaturesCreateManyAndReturnArgs} args - Arguments to create many CloudFeatures.
     * @example
     * // Create many CloudFeatures
     * const cloudFeatures = await prisma.cloudFeatures.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CloudFeatures and only return the `id`
     * const cloudFeaturesWithIdOnly = await prisma.cloudFeatures.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CloudFeaturesCreateManyAndReturnArgs>(args?: SelectSubset<T, CloudFeaturesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CloudFeaturesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CloudFeatures.
     * @param {CloudFeaturesDeleteArgs} args - Arguments to delete one CloudFeatures.
     * @example
     * // Delete one CloudFeatures
     * const CloudFeatures = await prisma.cloudFeatures.delete({
     *   where: {
     *     // ... filter to delete one CloudFeatures
     *   }
     * })
     * 
     */
    delete<T extends CloudFeaturesDeleteArgs>(args: SelectSubset<T, CloudFeaturesDeleteArgs<ExtArgs>>): Prisma__CloudFeaturesClient<$Result.GetResult<Prisma.$CloudFeaturesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CloudFeatures.
     * @param {CloudFeaturesUpdateArgs} args - Arguments to update one CloudFeatures.
     * @example
     * // Update one CloudFeatures
     * const cloudFeatures = await prisma.cloudFeatures.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CloudFeaturesUpdateArgs>(args: SelectSubset<T, CloudFeaturesUpdateArgs<ExtArgs>>): Prisma__CloudFeaturesClient<$Result.GetResult<Prisma.$CloudFeaturesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CloudFeatures.
     * @param {CloudFeaturesDeleteManyArgs} args - Arguments to filter CloudFeatures to delete.
     * @example
     * // Delete a few CloudFeatures
     * const { count } = await prisma.cloudFeatures.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CloudFeaturesDeleteManyArgs>(args?: SelectSubset<T, CloudFeaturesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CloudFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloudFeaturesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CloudFeatures
     * const cloudFeatures = await prisma.cloudFeatures.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CloudFeaturesUpdateManyArgs>(args: SelectSubset<T, CloudFeaturesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CloudFeatures and returns the data updated in the database.
     * @param {CloudFeaturesUpdateManyAndReturnArgs} args - Arguments to update many CloudFeatures.
     * @example
     * // Update many CloudFeatures
     * const cloudFeatures = await prisma.cloudFeatures.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CloudFeatures and only return the `id`
     * const cloudFeaturesWithIdOnly = await prisma.cloudFeatures.updateManyAndReturn({
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
    updateManyAndReturn<T extends CloudFeaturesUpdateManyAndReturnArgs>(args: SelectSubset<T, CloudFeaturesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CloudFeaturesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CloudFeatures.
     * @param {CloudFeaturesUpsertArgs} args - Arguments to update or create a CloudFeatures.
     * @example
     * // Update or create a CloudFeatures
     * const cloudFeatures = await prisma.cloudFeatures.upsert({
     *   create: {
     *     // ... data to create a CloudFeatures
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CloudFeatures we want to update
     *   }
     * })
     */
    upsert<T extends CloudFeaturesUpsertArgs>(args: SelectSubset<T, CloudFeaturesUpsertArgs<ExtArgs>>): Prisma__CloudFeaturesClient<$Result.GetResult<Prisma.$CloudFeaturesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CloudFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloudFeaturesCountArgs} args - Arguments to filter CloudFeatures to count.
     * @example
     * // Count the number of CloudFeatures
     * const count = await prisma.cloudFeatures.count({
     *   where: {
     *     // ... the filter for the CloudFeatures we want to count
     *   }
     * })
    **/
    count<T extends CloudFeaturesCountArgs>(
      args?: Subset<T, CloudFeaturesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CloudFeaturesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CloudFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloudFeaturesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CloudFeaturesAggregateArgs>(args: Subset<T, CloudFeaturesAggregateArgs>): Prisma.PrismaPromise<GetCloudFeaturesAggregateType<T>>

    /**
     * Group by CloudFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloudFeaturesGroupByArgs} args - Group by arguments.
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
      T extends CloudFeaturesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CloudFeaturesGroupByArgs['orderBy'] }
        : { orderBy?: CloudFeaturesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CloudFeaturesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCloudFeaturesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CloudFeatures model
   */
  readonly fields: CloudFeaturesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CloudFeatures.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CloudFeaturesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends SubscriptionPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlanDefaultArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CloudFeatures model
   */
  interface CloudFeaturesFieldRefs {
    readonly id: FieldRef<"CloudFeatures", 'String'>
    readonly planId: FieldRef<"CloudFeatures", 'String'>
    readonly storageGB: FieldRef<"CloudFeatures", 'Int'>
    readonly createdAt: FieldRef<"CloudFeatures", 'DateTime'>
    readonly updatedAt: FieldRef<"CloudFeatures", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CloudFeatures findUnique
   */
  export type CloudFeaturesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudFeatures
     */
    select?: CloudFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CloudFeatures
     */
    omit?: CloudFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CloudFeaturesInclude<ExtArgs> | null
    /**
     * Filter, which CloudFeatures to fetch.
     */
    where: CloudFeaturesWhereUniqueInput
  }

  /**
   * CloudFeatures findUniqueOrThrow
   */
  export type CloudFeaturesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudFeatures
     */
    select?: CloudFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CloudFeatures
     */
    omit?: CloudFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CloudFeaturesInclude<ExtArgs> | null
    /**
     * Filter, which CloudFeatures to fetch.
     */
    where: CloudFeaturesWhereUniqueInput
  }

  /**
   * CloudFeatures findFirst
   */
  export type CloudFeaturesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudFeatures
     */
    select?: CloudFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CloudFeatures
     */
    omit?: CloudFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CloudFeaturesInclude<ExtArgs> | null
    /**
     * Filter, which CloudFeatures to fetch.
     */
    where?: CloudFeaturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CloudFeatures to fetch.
     */
    orderBy?: CloudFeaturesOrderByWithRelationInput | CloudFeaturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CloudFeatures.
     */
    cursor?: CloudFeaturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CloudFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CloudFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CloudFeatures.
     */
    distinct?: CloudFeaturesScalarFieldEnum | CloudFeaturesScalarFieldEnum[]
  }

  /**
   * CloudFeatures findFirstOrThrow
   */
  export type CloudFeaturesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudFeatures
     */
    select?: CloudFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CloudFeatures
     */
    omit?: CloudFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CloudFeaturesInclude<ExtArgs> | null
    /**
     * Filter, which CloudFeatures to fetch.
     */
    where?: CloudFeaturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CloudFeatures to fetch.
     */
    orderBy?: CloudFeaturesOrderByWithRelationInput | CloudFeaturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CloudFeatures.
     */
    cursor?: CloudFeaturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CloudFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CloudFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CloudFeatures.
     */
    distinct?: CloudFeaturesScalarFieldEnum | CloudFeaturesScalarFieldEnum[]
  }

  /**
   * CloudFeatures findMany
   */
  export type CloudFeaturesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudFeatures
     */
    select?: CloudFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CloudFeatures
     */
    omit?: CloudFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CloudFeaturesInclude<ExtArgs> | null
    /**
     * Filter, which CloudFeatures to fetch.
     */
    where?: CloudFeaturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CloudFeatures to fetch.
     */
    orderBy?: CloudFeaturesOrderByWithRelationInput | CloudFeaturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CloudFeatures.
     */
    cursor?: CloudFeaturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CloudFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CloudFeatures.
     */
    skip?: number
    distinct?: CloudFeaturesScalarFieldEnum | CloudFeaturesScalarFieldEnum[]
  }

  /**
   * CloudFeatures create
   */
  export type CloudFeaturesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudFeatures
     */
    select?: CloudFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CloudFeatures
     */
    omit?: CloudFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CloudFeaturesInclude<ExtArgs> | null
    /**
     * The data needed to create a CloudFeatures.
     */
    data: XOR<CloudFeaturesCreateInput, CloudFeaturesUncheckedCreateInput>
  }

  /**
   * CloudFeatures createMany
   */
  export type CloudFeaturesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CloudFeatures.
     */
    data: CloudFeaturesCreateManyInput | CloudFeaturesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CloudFeatures createManyAndReturn
   */
  export type CloudFeaturesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudFeatures
     */
    select?: CloudFeaturesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CloudFeatures
     */
    omit?: CloudFeaturesOmit<ExtArgs> | null
    /**
     * The data used to create many CloudFeatures.
     */
    data: CloudFeaturesCreateManyInput | CloudFeaturesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CloudFeaturesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CloudFeatures update
   */
  export type CloudFeaturesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudFeatures
     */
    select?: CloudFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CloudFeatures
     */
    omit?: CloudFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CloudFeaturesInclude<ExtArgs> | null
    /**
     * The data needed to update a CloudFeatures.
     */
    data: XOR<CloudFeaturesUpdateInput, CloudFeaturesUncheckedUpdateInput>
    /**
     * Choose, which CloudFeatures to update.
     */
    where: CloudFeaturesWhereUniqueInput
  }

  /**
   * CloudFeatures updateMany
   */
  export type CloudFeaturesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CloudFeatures.
     */
    data: XOR<CloudFeaturesUpdateManyMutationInput, CloudFeaturesUncheckedUpdateManyInput>
    /**
     * Filter which CloudFeatures to update
     */
    where?: CloudFeaturesWhereInput
    /**
     * Limit how many CloudFeatures to update.
     */
    limit?: number
  }

  /**
   * CloudFeatures updateManyAndReturn
   */
  export type CloudFeaturesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudFeatures
     */
    select?: CloudFeaturesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CloudFeatures
     */
    omit?: CloudFeaturesOmit<ExtArgs> | null
    /**
     * The data used to update CloudFeatures.
     */
    data: XOR<CloudFeaturesUpdateManyMutationInput, CloudFeaturesUncheckedUpdateManyInput>
    /**
     * Filter which CloudFeatures to update
     */
    where?: CloudFeaturesWhereInput
    /**
     * Limit how many CloudFeatures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CloudFeaturesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CloudFeatures upsert
   */
  export type CloudFeaturesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudFeatures
     */
    select?: CloudFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CloudFeatures
     */
    omit?: CloudFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CloudFeaturesInclude<ExtArgs> | null
    /**
     * The filter to search for the CloudFeatures to update in case it exists.
     */
    where: CloudFeaturesWhereUniqueInput
    /**
     * In case the CloudFeatures found by the `where` argument doesn't exist, create a new CloudFeatures with this data.
     */
    create: XOR<CloudFeaturesCreateInput, CloudFeaturesUncheckedCreateInput>
    /**
     * In case the CloudFeatures was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CloudFeaturesUpdateInput, CloudFeaturesUncheckedUpdateInput>
  }

  /**
   * CloudFeatures delete
   */
  export type CloudFeaturesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudFeatures
     */
    select?: CloudFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CloudFeatures
     */
    omit?: CloudFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CloudFeaturesInclude<ExtArgs> | null
    /**
     * Filter which CloudFeatures to delete.
     */
    where: CloudFeaturesWhereUniqueInput
  }

  /**
   * CloudFeatures deleteMany
   */
  export type CloudFeaturesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CloudFeatures to delete
     */
    where?: CloudFeaturesWhereInput
    /**
     * Limit how many CloudFeatures to delete.
     */
    limit?: number
  }

  /**
   * CloudFeatures without action
   */
  export type CloudFeaturesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudFeatures
     */
    select?: CloudFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CloudFeatures
     */
    omit?: CloudFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CloudFeaturesInclude<ExtArgs> | null
  }


  /**
   * Model AgendeFeatures
   */

  export type AggregateAgendeFeatures = {
    _count: AgendeFeaturesCountAggregateOutputType | null
    _avg: AgendeFeaturesAvgAggregateOutputType | null
    _sum: AgendeFeaturesSumAggregateOutputType | null
    _min: AgendeFeaturesMinAggregateOutputType | null
    _max: AgendeFeaturesMaxAggregateOutputType | null
  }

  export type AgendeFeaturesAvgAggregateOutputType = {
    maxAppointmentsPerMonth: number | null
    maxOrganizations: number | null
    maxPointsPerOrganization: number | null
  }

  export type AgendeFeaturesSumAggregateOutputType = {
    maxAppointmentsPerMonth: number | null
    maxOrganizations: number | null
    maxPointsPerOrganization: number | null
  }

  export type AgendeFeaturesMinAggregateOutputType = {
    id: string | null
    planId: string | null
    maxAppointmentsPerMonth: number | null
    maxOrganizations: number | null
    maxPointsPerOrganization: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgendeFeaturesMaxAggregateOutputType = {
    id: string | null
    planId: string | null
    maxAppointmentsPerMonth: number | null
    maxOrganizations: number | null
    maxPointsPerOrganization: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgendeFeaturesCountAggregateOutputType = {
    id: number
    planId: number
    maxAppointmentsPerMonth: number
    maxOrganizations: number
    maxPointsPerOrganization: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AgendeFeaturesAvgAggregateInputType = {
    maxAppointmentsPerMonth?: true
    maxOrganizations?: true
    maxPointsPerOrganization?: true
  }

  export type AgendeFeaturesSumAggregateInputType = {
    maxAppointmentsPerMonth?: true
    maxOrganizations?: true
    maxPointsPerOrganization?: true
  }

  export type AgendeFeaturesMinAggregateInputType = {
    id?: true
    planId?: true
    maxAppointmentsPerMonth?: true
    maxOrganizations?: true
    maxPointsPerOrganization?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgendeFeaturesMaxAggregateInputType = {
    id?: true
    planId?: true
    maxAppointmentsPerMonth?: true
    maxOrganizations?: true
    maxPointsPerOrganization?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgendeFeaturesCountAggregateInputType = {
    id?: true
    planId?: true
    maxAppointmentsPerMonth?: true
    maxOrganizations?: true
    maxPointsPerOrganization?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AgendeFeaturesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgendeFeatures to aggregate.
     */
    where?: AgendeFeaturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgendeFeatures to fetch.
     */
    orderBy?: AgendeFeaturesOrderByWithRelationInput | AgendeFeaturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgendeFeaturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgendeFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgendeFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AgendeFeatures
    **/
    _count?: true | AgendeFeaturesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgendeFeaturesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgendeFeaturesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgendeFeaturesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgendeFeaturesMaxAggregateInputType
  }

  export type GetAgendeFeaturesAggregateType<T extends AgendeFeaturesAggregateArgs> = {
        [P in keyof T & keyof AggregateAgendeFeatures]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgendeFeatures[P]>
      : GetScalarType<T[P], AggregateAgendeFeatures[P]>
  }




  export type AgendeFeaturesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendeFeaturesWhereInput
    orderBy?: AgendeFeaturesOrderByWithAggregationInput | AgendeFeaturesOrderByWithAggregationInput[]
    by: AgendeFeaturesScalarFieldEnum[] | AgendeFeaturesScalarFieldEnum
    having?: AgendeFeaturesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgendeFeaturesCountAggregateInputType | true
    _avg?: AgendeFeaturesAvgAggregateInputType
    _sum?: AgendeFeaturesSumAggregateInputType
    _min?: AgendeFeaturesMinAggregateInputType
    _max?: AgendeFeaturesMaxAggregateInputType
  }

  export type AgendeFeaturesGroupByOutputType = {
    id: string
    planId: string
    maxAppointmentsPerMonth: number
    maxOrganizations: number
    maxPointsPerOrganization: number
    createdAt: Date
    updatedAt: Date
    _count: AgendeFeaturesCountAggregateOutputType | null
    _avg: AgendeFeaturesAvgAggregateOutputType | null
    _sum: AgendeFeaturesSumAggregateOutputType | null
    _min: AgendeFeaturesMinAggregateOutputType | null
    _max: AgendeFeaturesMaxAggregateOutputType | null
  }

  type GetAgendeFeaturesGroupByPayload<T extends AgendeFeaturesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgendeFeaturesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgendeFeaturesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgendeFeaturesGroupByOutputType[P]>
            : GetScalarType<T[P], AgendeFeaturesGroupByOutputType[P]>
        }
      >
    >


  export type AgendeFeaturesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    maxAppointmentsPerMonth?: boolean
    maxOrganizations?: boolean
    maxPointsPerOrganization?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agendeFeatures"]>

  export type AgendeFeaturesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    maxAppointmentsPerMonth?: boolean
    maxOrganizations?: boolean
    maxPointsPerOrganization?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agendeFeatures"]>

  export type AgendeFeaturesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    maxAppointmentsPerMonth?: boolean
    maxOrganizations?: boolean
    maxPointsPerOrganization?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agendeFeatures"]>

  export type AgendeFeaturesSelectScalar = {
    id?: boolean
    planId?: boolean
    maxAppointmentsPerMonth?: boolean
    maxOrganizations?: boolean
    maxPointsPerOrganization?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AgendeFeaturesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "planId" | "maxAppointmentsPerMonth" | "maxOrganizations" | "maxPointsPerOrganization" | "createdAt" | "updatedAt", ExtArgs["result"]["agendeFeatures"]>
  export type AgendeFeaturesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }
  export type AgendeFeaturesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }
  export type AgendeFeaturesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }

  export type $AgendeFeaturesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AgendeFeatures"
    objects: {
      plan: Prisma.$SubscriptionPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      planId: string
      maxAppointmentsPerMonth: number
      maxOrganizations: number
      maxPointsPerOrganization: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["agendeFeatures"]>
    composites: {}
  }

  type AgendeFeaturesGetPayload<S extends boolean | null | undefined | AgendeFeaturesDefaultArgs> = $Result.GetResult<Prisma.$AgendeFeaturesPayload, S>

  type AgendeFeaturesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgendeFeaturesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgendeFeaturesCountAggregateInputType | true
    }

  export interface AgendeFeaturesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AgendeFeatures'], meta: { name: 'AgendeFeatures' } }
    /**
     * Find zero or one AgendeFeatures that matches the filter.
     * @param {AgendeFeaturesFindUniqueArgs} args - Arguments to find a AgendeFeatures
     * @example
     * // Get one AgendeFeatures
     * const agendeFeatures = await prisma.agendeFeatures.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgendeFeaturesFindUniqueArgs>(args: SelectSubset<T, AgendeFeaturesFindUniqueArgs<ExtArgs>>): Prisma__AgendeFeaturesClient<$Result.GetResult<Prisma.$AgendeFeaturesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AgendeFeatures that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgendeFeaturesFindUniqueOrThrowArgs} args - Arguments to find a AgendeFeatures
     * @example
     * // Get one AgendeFeatures
     * const agendeFeatures = await prisma.agendeFeatures.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgendeFeaturesFindUniqueOrThrowArgs>(args: SelectSubset<T, AgendeFeaturesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgendeFeaturesClient<$Result.GetResult<Prisma.$AgendeFeaturesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgendeFeatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendeFeaturesFindFirstArgs} args - Arguments to find a AgendeFeatures
     * @example
     * // Get one AgendeFeatures
     * const agendeFeatures = await prisma.agendeFeatures.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgendeFeaturesFindFirstArgs>(args?: SelectSubset<T, AgendeFeaturesFindFirstArgs<ExtArgs>>): Prisma__AgendeFeaturesClient<$Result.GetResult<Prisma.$AgendeFeaturesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgendeFeatures that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendeFeaturesFindFirstOrThrowArgs} args - Arguments to find a AgendeFeatures
     * @example
     * // Get one AgendeFeatures
     * const agendeFeatures = await prisma.agendeFeatures.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgendeFeaturesFindFirstOrThrowArgs>(args?: SelectSubset<T, AgendeFeaturesFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgendeFeaturesClient<$Result.GetResult<Prisma.$AgendeFeaturesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AgendeFeatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendeFeaturesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AgendeFeatures
     * const agendeFeatures = await prisma.agendeFeatures.findMany()
     * 
     * // Get first 10 AgendeFeatures
     * const agendeFeatures = await prisma.agendeFeatures.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agendeFeaturesWithIdOnly = await prisma.agendeFeatures.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgendeFeaturesFindManyArgs>(args?: SelectSubset<T, AgendeFeaturesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendeFeaturesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AgendeFeatures.
     * @param {AgendeFeaturesCreateArgs} args - Arguments to create a AgendeFeatures.
     * @example
     * // Create one AgendeFeatures
     * const AgendeFeatures = await prisma.agendeFeatures.create({
     *   data: {
     *     // ... data to create a AgendeFeatures
     *   }
     * })
     * 
     */
    create<T extends AgendeFeaturesCreateArgs>(args: SelectSubset<T, AgendeFeaturesCreateArgs<ExtArgs>>): Prisma__AgendeFeaturesClient<$Result.GetResult<Prisma.$AgendeFeaturesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AgendeFeatures.
     * @param {AgendeFeaturesCreateManyArgs} args - Arguments to create many AgendeFeatures.
     * @example
     * // Create many AgendeFeatures
     * const agendeFeatures = await prisma.agendeFeatures.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgendeFeaturesCreateManyArgs>(args?: SelectSubset<T, AgendeFeaturesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AgendeFeatures and returns the data saved in the database.
     * @param {AgendeFeaturesCreateManyAndReturnArgs} args - Arguments to create many AgendeFeatures.
     * @example
     * // Create many AgendeFeatures
     * const agendeFeatures = await prisma.agendeFeatures.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AgendeFeatures and only return the `id`
     * const agendeFeaturesWithIdOnly = await prisma.agendeFeatures.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgendeFeaturesCreateManyAndReturnArgs>(args?: SelectSubset<T, AgendeFeaturesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendeFeaturesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AgendeFeatures.
     * @param {AgendeFeaturesDeleteArgs} args - Arguments to delete one AgendeFeatures.
     * @example
     * // Delete one AgendeFeatures
     * const AgendeFeatures = await prisma.agendeFeatures.delete({
     *   where: {
     *     // ... filter to delete one AgendeFeatures
     *   }
     * })
     * 
     */
    delete<T extends AgendeFeaturesDeleteArgs>(args: SelectSubset<T, AgendeFeaturesDeleteArgs<ExtArgs>>): Prisma__AgendeFeaturesClient<$Result.GetResult<Prisma.$AgendeFeaturesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AgendeFeatures.
     * @param {AgendeFeaturesUpdateArgs} args - Arguments to update one AgendeFeatures.
     * @example
     * // Update one AgendeFeatures
     * const agendeFeatures = await prisma.agendeFeatures.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgendeFeaturesUpdateArgs>(args: SelectSubset<T, AgendeFeaturesUpdateArgs<ExtArgs>>): Prisma__AgendeFeaturesClient<$Result.GetResult<Prisma.$AgendeFeaturesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AgendeFeatures.
     * @param {AgendeFeaturesDeleteManyArgs} args - Arguments to filter AgendeFeatures to delete.
     * @example
     * // Delete a few AgendeFeatures
     * const { count } = await prisma.agendeFeatures.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgendeFeaturesDeleteManyArgs>(args?: SelectSubset<T, AgendeFeaturesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgendeFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendeFeaturesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AgendeFeatures
     * const agendeFeatures = await prisma.agendeFeatures.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgendeFeaturesUpdateManyArgs>(args: SelectSubset<T, AgendeFeaturesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgendeFeatures and returns the data updated in the database.
     * @param {AgendeFeaturesUpdateManyAndReturnArgs} args - Arguments to update many AgendeFeatures.
     * @example
     * // Update many AgendeFeatures
     * const agendeFeatures = await prisma.agendeFeatures.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AgendeFeatures and only return the `id`
     * const agendeFeaturesWithIdOnly = await prisma.agendeFeatures.updateManyAndReturn({
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
    updateManyAndReturn<T extends AgendeFeaturesUpdateManyAndReturnArgs>(args: SelectSubset<T, AgendeFeaturesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendeFeaturesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AgendeFeatures.
     * @param {AgendeFeaturesUpsertArgs} args - Arguments to update or create a AgendeFeatures.
     * @example
     * // Update or create a AgendeFeatures
     * const agendeFeatures = await prisma.agendeFeatures.upsert({
     *   create: {
     *     // ... data to create a AgendeFeatures
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AgendeFeatures we want to update
     *   }
     * })
     */
    upsert<T extends AgendeFeaturesUpsertArgs>(args: SelectSubset<T, AgendeFeaturesUpsertArgs<ExtArgs>>): Prisma__AgendeFeaturesClient<$Result.GetResult<Prisma.$AgendeFeaturesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AgendeFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendeFeaturesCountArgs} args - Arguments to filter AgendeFeatures to count.
     * @example
     * // Count the number of AgendeFeatures
     * const count = await prisma.agendeFeatures.count({
     *   where: {
     *     // ... the filter for the AgendeFeatures we want to count
     *   }
     * })
    **/
    count<T extends AgendeFeaturesCountArgs>(
      args?: Subset<T, AgendeFeaturesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgendeFeaturesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AgendeFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendeFeaturesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgendeFeaturesAggregateArgs>(args: Subset<T, AgendeFeaturesAggregateArgs>): Prisma.PrismaPromise<GetAgendeFeaturesAggregateType<T>>

    /**
     * Group by AgendeFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendeFeaturesGroupByArgs} args - Group by arguments.
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
      T extends AgendeFeaturesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgendeFeaturesGroupByArgs['orderBy'] }
        : { orderBy?: AgendeFeaturesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgendeFeaturesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgendeFeaturesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AgendeFeatures model
   */
  readonly fields: AgendeFeaturesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AgendeFeatures.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgendeFeaturesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends SubscriptionPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlanDefaultArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AgendeFeatures model
   */
  interface AgendeFeaturesFieldRefs {
    readonly id: FieldRef<"AgendeFeatures", 'String'>
    readonly planId: FieldRef<"AgendeFeatures", 'String'>
    readonly maxAppointmentsPerMonth: FieldRef<"AgendeFeatures", 'Int'>
    readonly maxOrganizations: FieldRef<"AgendeFeatures", 'Int'>
    readonly maxPointsPerOrganization: FieldRef<"AgendeFeatures", 'Int'>
    readonly createdAt: FieldRef<"AgendeFeatures", 'DateTime'>
    readonly updatedAt: FieldRef<"AgendeFeatures", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AgendeFeatures findUnique
   */
  export type AgendeFeaturesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendeFeatures
     */
    select?: AgendeFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendeFeatures
     */
    omit?: AgendeFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendeFeaturesInclude<ExtArgs> | null
    /**
     * Filter, which AgendeFeatures to fetch.
     */
    where: AgendeFeaturesWhereUniqueInput
  }

  /**
   * AgendeFeatures findUniqueOrThrow
   */
  export type AgendeFeaturesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendeFeatures
     */
    select?: AgendeFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendeFeatures
     */
    omit?: AgendeFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendeFeaturesInclude<ExtArgs> | null
    /**
     * Filter, which AgendeFeatures to fetch.
     */
    where: AgendeFeaturesWhereUniqueInput
  }

  /**
   * AgendeFeatures findFirst
   */
  export type AgendeFeaturesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendeFeatures
     */
    select?: AgendeFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendeFeatures
     */
    omit?: AgendeFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendeFeaturesInclude<ExtArgs> | null
    /**
     * Filter, which AgendeFeatures to fetch.
     */
    where?: AgendeFeaturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgendeFeatures to fetch.
     */
    orderBy?: AgendeFeaturesOrderByWithRelationInput | AgendeFeaturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgendeFeatures.
     */
    cursor?: AgendeFeaturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgendeFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgendeFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgendeFeatures.
     */
    distinct?: AgendeFeaturesScalarFieldEnum | AgendeFeaturesScalarFieldEnum[]
  }

  /**
   * AgendeFeatures findFirstOrThrow
   */
  export type AgendeFeaturesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendeFeatures
     */
    select?: AgendeFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendeFeatures
     */
    omit?: AgendeFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendeFeaturesInclude<ExtArgs> | null
    /**
     * Filter, which AgendeFeatures to fetch.
     */
    where?: AgendeFeaturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgendeFeatures to fetch.
     */
    orderBy?: AgendeFeaturesOrderByWithRelationInput | AgendeFeaturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgendeFeatures.
     */
    cursor?: AgendeFeaturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgendeFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgendeFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgendeFeatures.
     */
    distinct?: AgendeFeaturesScalarFieldEnum | AgendeFeaturesScalarFieldEnum[]
  }

  /**
   * AgendeFeatures findMany
   */
  export type AgendeFeaturesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendeFeatures
     */
    select?: AgendeFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendeFeatures
     */
    omit?: AgendeFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendeFeaturesInclude<ExtArgs> | null
    /**
     * Filter, which AgendeFeatures to fetch.
     */
    where?: AgendeFeaturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgendeFeatures to fetch.
     */
    orderBy?: AgendeFeaturesOrderByWithRelationInput | AgendeFeaturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AgendeFeatures.
     */
    cursor?: AgendeFeaturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgendeFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgendeFeatures.
     */
    skip?: number
    distinct?: AgendeFeaturesScalarFieldEnum | AgendeFeaturesScalarFieldEnum[]
  }

  /**
   * AgendeFeatures create
   */
  export type AgendeFeaturesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendeFeatures
     */
    select?: AgendeFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendeFeatures
     */
    omit?: AgendeFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendeFeaturesInclude<ExtArgs> | null
    /**
     * The data needed to create a AgendeFeatures.
     */
    data: XOR<AgendeFeaturesCreateInput, AgendeFeaturesUncheckedCreateInput>
  }

  /**
   * AgendeFeatures createMany
   */
  export type AgendeFeaturesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AgendeFeatures.
     */
    data: AgendeFeaturesCreateManyInput | AgendeFeaturesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AgendeFeatures createManyAndReturn
   */
  export type AgendeFeaturesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendeFeatures
     */
    select?: AgendeFeaturesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgendeFeatures
     */
    omit?: AgendeFeaturesOmit<ExtArgs> | null
    /**
     * The data used to create many AgendeFeatures.
     */
    data: AgendeFeaturesCreateManyInput | AgendeFeaturesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendeFeaturesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgendeFeatures update
   */
  export type AgendeFeaturesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendeFeatures
     */
    select?: AgendeFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendeFeatures
     */
    omit?: AgendeFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendeFeaturesInclude<ExtArgs> | null
    /**
     * The data needed to update a AgendeFeatures.
     */
    data: XOR<AgendeFeaturesUpdateInput, AgendeFeaturesUncheckedUpdateInput>
    /**
     * Choose, which AgendeFeatures to update.
     */
    where: AgendeFeaturesWhereUniqueInput
  }

  /**
   * AgendeFeatures updateMany
   */
  export type AgendeFeaturesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AgendeFeatures.
     */
    data: XOR<AgendeFeaturesUpdateManyMutationInput, AgendeFeaturesUncheckedUpdateManyInput>
    /**
     * Filter which AgendeFeatures to update
     */
    where?: AgendeFeaturesWhereInput
    /**
     * Limit how many AgendeFeatures to update.
     */
    limit?: number
  }

  /**
   * AgendeFeatures updateManyAndReturn
   */
  export type AgendeFeaturesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendeFeatures
     */
    select?: AgendeFeaturesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgendeFeatures
     */
    omit?: AgendeFeaturesOmit<ExtArgs> | null
    /**
     * The data used to update AgendeFeatures.
     */
    data: XOR<AgendeFeaturesUpdateManyMutationInput, AgendeFeaturesUncheckedUpdateManyInput>
    /**
     * Filter which AgendeFeatures to update
     */
    where?: AgendeFeaturesWhereInput
    /**
     * Limit how many AgendeFeatures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendeFeaturesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgendeFeatures upsert
   */
  export type AgendeFeaturesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendeFeatures
     */
    select?: AgendeFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendeFeatures
     */
    omit?: AgendeFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendeFeaturesInclude<ExtArgs> | null
    /**
     * The filter to search for the AgendeFeatures to update in case it exists.
     */
    where: AgendeFeaturesWhereUniqueInput
    /**
     * In case the AgendeFeatures found by the `where` argument doesn't exist, create a new AgendeFeatures with this data.
     */
    create: XOR<AgendeFeaturesCreateInput, AgendeFeaturesUncheckedCreateInput>
    /**
     * In case the AgendeFeatures was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgendeFeaturesUpdateInput, AgendeFeaturesUncheckedUpdateInput>
  }

  /**
   * AgendeFeatures delete
   */
  export type AgendeFeaturesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendeFeatures
     */
    select?: AgendeFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendeFeatures
     */
    omit?: AgendeFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendeFeaturesInclude<ExtArgs> | null
    /**
     * Filter which AgendeFeatures to delete.
     */
    where: AgendeFeaturesWhereUniqueInput
  }

  /**
   * AgendeFeatures deleteMany
   */
  export type AgendeFeaturesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgendeFeatures to delete
     */
    where?: AgendeFeaturesWhereInput
    /**
     * Limit how many AgendeFeatures to delete.
     */
    limit?: number
  }

  /**
   * AgendeFeatures without action
   */
  export type AgendeFeaturesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendeFeatures
     */
    select?: AgendeFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendeFeatures
     */
    omit?: AgendeFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendeFeaturesInclude<ExtArgs> | null
  }


  /**
   * Model FreelaFeatures
   */

  export type AggregateFreelaFeatures = {
    _count: FreelaFeaturesCountAggregateOutputType | null
    _min: FreelaFeaturesMinAggregateOutputType | null
    _max: FreelaFeaturesMaxAggregateOutputType | null
  }

  export type FreelaFeaturesMinAggregateOutputType = {
    id: string | null
    planId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FreelaFeaturesMaxAggregateOutputType = {
    id: string | null
    planId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FreelaFeaturesCountAggregateOutputType = {
    id: number
    planId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FreelaFeaturesMinAggregateInputType = {
    id?: true
    planId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FreelaFeaturesMaxAggregateInputType = {
    id?: true
    planId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FreelaFeaturesCountAggregateInputType = {
    id?: true
    planId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FreelaFeaturesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FreelaFeatures to aggregate.
     */
    where?: FreelaFeaturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FreelaFeatures to fetch.
     */
    orderBy?: FreelaFeaturesOrderByWithRelationInput | FreelaFeaturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FreelaFeaturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FreelaFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FreelaFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FreelaFeatures
    **/
    _count?: true | FreelaFeaturesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FreelaFeaturesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FreelaFeaturesMaxAggregateInputType
  }

  export type GetFreelaFeaturesAggregateType<T extends FreelaFeaturesAggregateArgs> = {
        [P in keyof T & keyof AggregateFreelaFeatures]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFreelaFeatures[P]>
      : GetScalarType<T[P], AggregateFreelaFeatures[P]>
  }




  export type FreelaFeaturesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FreelaFeaturesWhereInput
    orderBy?: FreelaFeaturesOrderByWithAggregationInput | FreelaFeaturesOrderByWithAggregationInput[]
    by: FreelaFeaturesScalarFieldEnum[] | FreelaFeaturesScalarFieldEnum
    having?: FreelaFeaturesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FreelaFeaturesCountAggregateInputType | true
    _min?: FreelaFeaturesMinAggregateInputType
    _max?: FreelaFeaturesMaxAggregateInputType
  }

  export type FreelaFeaturesGroupByOutputType = {
    id: string
    planId: string
    createdAt: Date
    updatedAt: Date
    _count: FreelaFeaturesCountAggregateOutputType | null
    _min: FreelaFeaturesMinAggregateOutputType | null
    _max: FreelaFeaturesMaxAggregateOutputType | null
  }

  type GetFreelaFeaturesGroupByPayload<T extends FreelaFeaturesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FreelaFeaturesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FreelaFeaturesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FreelaFeaturesGroupByOutputType[P]>
            : GetScalarType<T[P], FreelaFeaturesGroupByOutputType[P]>
        }
      >
    >


  export type FreelaFeaturesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["freelaFeatures"]>

  export type FreelaFeaturesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["freelaFeatures"]>

  export type FreelaFeaturesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["freelaFeatures"]>

  export type FreelaFeaturesSelectScalar = {
    id?: boolean
    planId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FreelaFeaturesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "planId" | "createdAt" | "updatedAt", ExtArgs["result"]["freelaFeatures"]>
  export type FreelaFeaturesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }
  export type FreelaFeaturesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }
  export type FreelaFeaturesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }

  export type $FreelaFeaturesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FreelaFeatures"
    objects: {
      plan: Prisma.$SubscriptionPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      planId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["freelaFeatures"]>
    composites: {}
  }

  type FreelaFeaturesGetPayload<S extends boolean | null | undefined | FreelaFeaturesDefaultArgs> = $Result.GetResult<Prisma.$FreelaFeaturesPayload, S>

  type FreelaFeaturesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FreelaFeaturesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FreelaFeaturesCountAggregateInputType | true
    }

  export interface FreelaFeaturesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FreelaFeatures'], meta: { name: 'FreelaFeatures' } }
    /**
     * Find zero or one FreelaFeatures that matches the filter.
     * @param {FreelaFeaturesFindUniqueArgs} args - Arguments to find a FreelaFeatures
     * @example
     * // Get one FreelaFeatures
     * const freelaFeatures = await prisma.freelaFeatures.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FreelaFeaturesFindUniqueArgs>(args: SelectSubset<T, FreelaFeaturesFindUniqueArgs<ExtArgs>>): Prisma__FreelaFeaturesClient<$Result.GetResult<Prisma.$FreelaFeaturesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FreelaFeatures that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FreelaFeaturesFindUniqueOrThrowArgs} args - Arguments to find a FreelaFeatures
     * @example
     * // Get one FreelaFeatures
     * const freelaFeatures = await prisma.freelaFeatures.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FreelaFeaturesFindUniqueOrThrowArgs>(args: SelectSubset<T, FreelaFeaturesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FreelaFeaturesClient<$Result.GetResult<Prisma.$FreelaFeaturesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FreelaFeatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreelaFeaturesFindFirstArgs} args - Arguments to find a FreelaFeatures
     * @example
     * // Get one FreelaFeatures
     * const freelaFeatures = await prisma.freelaFeatures.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FreelaFeaturesFindFirstArgs>(args?: SelectSubset<T, FreelaFeaturesFindFirstArgs<ExtArgs>>): Prisma__FreelaFeaturesClient<$Result.GetResult<Prisma.$FreelaFeaturesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FreelaFeatures that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreelaFeaturesFindFirstOrThrowArgs} args - Arguments to find a FreelaFeatures
     * @example
     * // Get one FreelaFeatures
     * const freelaFeatures = await prisma.freelaFeatures.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FreelaFeaturesFindFirstOrThrowArgs>(args?: SelectSubset<T, FreelaFeaturesFindFirstOrThrowArgs<ExtArgs>>): Prisma__FreelaFeaturesClient<$Result.GetResult<Prisma.$FreelaFeaturesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FreelaFeatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreelaFeaturesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FreelaFeatures
     * const freelaFeatures = await prisma.freelaFeatures.findMany()
     * 
     * // Get first 10 FreelaFeatures
     * const freelaFeatures = await prisma.freelaFeatures.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const freelaFeaturesWithIdOnly = await prisma.freelaFeatures.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FreelaFeaturesFindManyArgs>(args?: SelectSubset<T, FreelaFeaturesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FreelaFeaturesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FreelaFeatures.
     * @param {FreelaFeaturesCreateArgs} args - Arguments to create a FreelaFeatures.
     * @example
     * // Create one FreelaFeatures
     * const FreelaFeatures = await prisma.freelaFeatures.create({
     *   data: {
     *     // ... data to create a FreelaFeatures
     *   }
     * })
     * 
     */
    create<T extends FreelaFeaturesCreateArgs>(args: SelectSubset<T, FreelaFeaturesCreateArgs<ExtArgs>>): Prisma__FreelaFeaturesClient<$Result.GetResult<Prisma.$FreelaFeaturesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FreelaFeatures.
     * @param {FreelaFeaturesCreateManyArgs} args - Arguments to create many FreelaFeatures.
     * @example
     * // Create many FreelaFeatures
     * const freelaFeatures = await prisma.freelaFeatures.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FreelaFeaturesCreateManyArgs>(args?: SelectSubset<T, FreelaFeaturesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FreelaFeatures and returns the data saved in the database.
     * @param {FreelaFeaturesCreateManyAndReturnArgs} args - Arguments to create many FreelaFeatures.
     * @example
     * // Create many FreelaFeatures
     * const freelaFeatures = await prisma.freelaFeatures.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FreelaFeatures and only return the `id`
     * const freelaFeaturesWithIdOnly = await prisma.freelaFeatures.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FreelaFeaturesCreateManyAndReturnArgs>(args?: SelectSubset<T, FreelaFeaturesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FreelaFeaturesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FreelaFeatures.
     * @param {FreelaFeaturesDeleteArgs} args - Arguments to delete one FreelaFeatures.
     * @example
     * // Delete one FreelaFeatures
     * const FreelaFeatures = await prisma.freelaFeatures.delete({
     *   where: {
     *     // ... filter to delete one FreelaFeatures
     *   }
     * })
     * 
     */
    delete<T extends FreelaFeaturesDeleteArgs>(args: SelectSubset<T, FreelaFeaturesDeleteArgs<ExtArgs>>): Prisma__FreelaFeaturesClient<$Result.GetResult<Prisma.$FreelaFeaturesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FreelaFeatures.
     * @param {FreelaFeaturesUpdateArgs} args - Arguments to update one FreelaFeatures.
     * @example
     * // Update one FreelaFeatures
     * const freelaFeatures = await prisma.freelaFeatures.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FreelaFeaturesUpdateArgs>(args: SelectSubset<T, FreelaFeaturesUpdateArgs<ExtArgs>>): Prisma__FreelaFeaturesClient<$Result.GetResult<Prisma.$FreelaFeaturesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FreelaFeatures.
     * @param {FreelaFeaturesDeleteManyArgs} args - Arguments to filter FreelaFeatures to delete.
     * @example
     * // Delete a few FreelaFeatures
     * const { count } = await prisma.freelaFeatures.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FreelaFeaturesDeleteManyArgs>(args?: SelectSubset<T, FreelaFeaturesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FreelaFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreelaFeaturesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FreelaFeatures
     * const freelaFeatures = await prisma.freelaFeatures.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FreelaFeaturesUpdateManyArgs>(args: SelectSubset<T, FreelaFeaturesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FreelaFeatures and returns the data updated in the database.
     * @param {FreelaFeaturesUpdateManyAndReturnArgs} args - Arguments to update many FreelaFeatures.
     * @example
     * // Update many FreelaFeatures
     * const freelaFeatures = await prisma.freelaFeatures.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FreelaFeatures and only return the `id`
     * const freelaFeaturesWithIdOnly = await prisma.freelaFeatures.updateManyAndReturn({
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
    updateManyAndReturn<T extends FreelaFeaturesUpdateManyAndReturnArgs>(args: SelectSubset<T, FreelaFeaturesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FreelaFeaturesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FreelaFeatures.
     * @param {FreelaFeaturesUpsertArgs} args - Arguments to update or create a FreelaFeatures.
     * @example
     * // Update or create a FreelaFeatures
     * const freelaFeatures = await prisma.freelaFeatures.upsert({
     *   create: {
     *     // ... data to create a FreelaFeatures
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FreelaFeatures we want to update
     *   }
     * })
     */
    upsert<T extends FreelaFeaturesUpsertArgs>(args: SelectSubset<T, FreelaFeaturesUpsertArgs<ExtArgs>>): Prisma__FreelaFeaturesClient<$Result.GetResult<Prisma.$FreelaFeaturesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FreelaFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreelaFeaturesCountArgs} args - Arguments to filter FreelaFeatures to count.
     * @example
     * // Count the number of FreelaFeatures
     * const count = await prisma.freelaFeatures.count({
     *   where: {
     *     // ... the filter for the FreelaFeatures we want to count
     *   }
     * })
    **/
    count<T extends FreelaFeaturesCountArgs>(
      args?: Subset<T, FreelaFeaturesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FreelaFeaturesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FreelaFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreelaFeaturesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FreelaFeaturesAggregateArgs>(args: Subset<T, FreelaFeaturesAggregateArgs>): Prisma.PrismaPromise<GetFreelaFeaturesAggregateType<T>>

    /**
     * Group by FreelaFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreelaFeaturesGroupByArgs} args - Group by arguments.
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
      T extends FreelaFeaturesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FreelaFeaturesGroupByArgs['orderBy'] }
        : { orderBy?: FreelaFeaturesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FreelaFeaturesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFreelaFeaturesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FreelaFeatures model
   */
  readonly fields: FreelaFeaturesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FreelaFeatures.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FreelaFeaturesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends SubscriptionPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlanDefaultArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FreelaFeatures model
   */
  interface FreelaFeaturesFieldRefs {
    readonly id: FieldRef<"FreelaFeatures", 'String'>
    readonly planId: FieldRef<"FreelaFeatures", 'String'>
    readonly createdAt: FieldRef<"FreelaFeatures", 'DateTime'>
    readonly updatedAt: FieldRef<"FreelaFeatures", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FreelaFeatures findUnique
   */
  export type FreelaFeaturesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreelaFeatures
     */
    select?: FreelaFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreelaFeatures
     */
    omit?: FreelaFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreelaFeaturesInclude<ExtArgs> | null
    /**
     * Filter, which FreelaFeatures to fetch.
     */
    where: FreelaFeaturesWhereUniqueInput
  }

  /**
   * FreelaFeatures findUniqueOrThrow
   */
  export type FreelaFeaturesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreelaFeatures
     */
    select?: FreelaFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreelaFeatures
     */
    omit?: FreelaFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreelaFeaturesInclude<ExtArgs> | null
    /**
     * Filter, which FreelaFeatures to fetch.
     */
    where: FreelaFeaturesWhereUniqueInput
  }

  /**
   * FreelaFeatures findFirst
   */
  export type FreelaFeaturesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreelaFeatures
     */
    select?: FreelaFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreelaFeatures
     */
    omit?: FreelaFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreelaFeaturesInclude<ExtArgs> | null
    /**
     * Filter, which FreelaFeatures to fetch.
     */
    where?: FreelaFeaturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FreelaFeatures to fetch.
     */
    orderBy?: FreelaFeaturesOrderByWithRelationInput | FreelaFeaturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FreelaFeatures.
     */
    cursor?: FreelaFeaturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FreelaFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FreelaFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FreelaFeatures.
     */
    distinct?: FreelaFeaturesScalarFieldEnum | FreelaFeaturesScalarFieldEnum[]
  }

  /**
   * FreelaFeatures findFirstOrThrow
   */
  export type FreelaFeaturesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreelaFeatures
     */
    select?: FreelaFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreelaFeatures
     */
    omit?: FreelaFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreelaFeaturesInclude<ExtArgs> | null
    /**
     * Filter, which FreelaFeatures to fetch.
     */
    where?: FreelaFeaturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FreelaFeatures to fetch.
     */
    orderBy?: FreelaFeaturesOrderByWithRelationInput | FreelaFeaturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FreelaFeatures.
     */
    cursor?: FreelaFeaturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FreelaFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FreelaFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FreelaFeatures.
     */
    distinct?: FreelaFeaturesScalarFieldEnum | FreelaFeaturesScalarFieldEnum[]
  }

  /**
   * FreelaFeatures findMany
   */
  export type FreelaFeaturesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreelaFeatures
     */
    select?: FreelaFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreelaFeatures
     */
    omit?: FreelaFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreelaFeaturesInclude<ExtArgs> | null
    /**
     * Filter, which FreelaFeatures to fetch.
     */
    where?: FreelaFeaturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FreelaFeatures to fetch.
     */
    orderBy?: FreelaFeaturesOrderByWithRelationInput | FreelaFeaturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FreelaFeatures.
     */
    cursor?: FreelaFeaturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FreelaFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FreelaFeatures.
     */
    skip?: number
    distinct?: FreelaFeaturesScalarFieldEnum | FreelaFeaturesScalarFieldEnum[]
  }

  /**
   * FreelaFeatures create
   */
  export type FreelaFeaturesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreelaFeatures
     */
    select?: FreelaFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreelaFeatures
     */
    omit?: FreelaFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreelaFeaturesInclude<ExtArgs> | null
    /**
     * The data needed to create a FreelaFeatures.
     */
    data: XOR<FreelaFeaturesCreateInput, FreelaFeaturesUncheckedCreateInput>
  }

  /**
   * FreelaFeatures createMany
   */
  export type FreelaFeaturesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FreelaFeatures.
     */
    data: FreelaFeaturesCreateManyInput | FreelaFeaturesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FreelaFeatures createManyAndReturn
   */
  export type FreelaFeaturesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreelaFeatures
     */
    select?: FreelaFeaturesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FreelaFeatures
     */
    omit?: FreelaFeaturesOmit<ExtArgs> | null
    /**
     * The data used to create many FreelaFeatures.
     */
    data: FreelaFeaturesCreateManyInput | FreelaFeaturesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreelaFeaturesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FreelaFeatures update
   */
  export type FreelaFeaturesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreelaFeatures
     */
    select?: FreelaFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreelaFeatures
     */
    omit?: FreelaFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreelaFeaturesInclude<ExtArgs> | null
    /**
     * The data needed to update a FreelaFeatures.
     */
    data: XOR<FreelaFeaturesUpdateInput, FreelaFeaturesUncheckedUpdateInput>
    /**
     * Choose, which FreelaFeatures to update.
     */
    where: FreelaFeaturesWhereUniqueInput
  }

  /**
   * FreelaFeatures updateMany
   */
  export type FreelaFeaturesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FreelaFeatures.
     */
    data: XOR<FreelaFeaturesUpdateManyMutationInput, FreelaFeaturesUncheckedUpdateManyInput>
    /**
     * Filter which FreelaFeatures to update
     */
    where?: FreelaFeaturesWhereInput
    /**
     * Limit how many FreelaFeatures to update.
     */
    limit?: number
  }

  /**
   * FreelaFeatures updateManyAndReturn
   */
  export type FreelaFeaturesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreelaFeatures
     */
    select?: FreelaFeaturesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FreelaFeatures
     */
    omit?: FreelaFeaturesOmit<ExtArgs> | null
    /**
     * The data used to update FreelaFeatures.
     */
    data: XOR<FreelaFeaturesUpdateManyMutationInput, FreelaFeaturesUncheckedUpdateManyInput>
    /**
     * Filter which FreelaFeatures to update
     */
    where?: FreelaFeaturesWhereInput
    /**
     * Limit how many FreelaFeatures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreelaFeaturesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FreelaFeatures upsert
   */
  export type FreelaFeaturesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreelaFeatures
     */
    select?: FreelaFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreelaFeatures
     */
    omit?: FreelaFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreelaFeaturesInclude<ExtArgs> | null
    /**
     * The filter to search for the FreelaFeatures to update in case it exists.
     */
    where: FreelaFeaturesWhereUniqueInput
    /**
     * In case the FreelaFeatures found by the `where` argument doesn't exist, create a new FreelaFeatures with this data.
     */
    create: XOR<FreelaFeaturesCreateInput, FreelaFeaturesUncheckedCreateInput>
    /**
     * In case the FreelaFeatures was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FreelaFeaturesUpdateInput, FreelaFeaturesUncheckedUpdateInput>
  }

  /**
   * FreelaFeatures delete
   */
  export type FreelaFeaturesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreelaFeatures
     */
    select?: FreelaFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreelaFeatures
     */
    omit?: FreelaFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreelaFeaturesInclude<ExtArgs> | null
    /**
     * Filter which FreelaFeatures to delete.
     */
    where: FreelaFeaturesWhereUniqueInput
  }

  /**
   * FreelaFeatures deleteMany
   */
  export type FreelaFeaturesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FreelaFeatures to delete
     */
    where?: FreelaFeaturesWhereInput
    /**
     * Limit how many FreelaFeatures to delete.
     */
    limit?: number
  }

  /**
   * FreelaFeatures without action
   */
  export type FreelaFeaturesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreelaFeatures
     */
    select?: FreelaFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreelaFeatures
     */
    omit?: FreelaFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreelaFeaturesInclude<ExtArgs> | null
  }


  /**
   * Model BusinessFeatures
   */

  export type AggregateBusinessFeatures = {
    _count: BusinessFeaturesCountAggregateOutputType | null
    _min: BusinessFeaturesMinAggregateOutputType | null
    _max: BusinessFeaturesMaxAggregateOutputType | null
  }

  export type BusinessFeaturesMinAggregateOutputType = {
    id: string | null
    planId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessFeaturesMaxAggregateOutputType = {
    id: string | null
    planId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessFeaturesCountAggregateOutputType = {
    id: number
    planId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BusinessFeaturesMinAggregateInputType = {
    id?: true
    planId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessFeaturesMaxAggregateInputType = {
    id?: true
    planId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessFeaturesCountAggregateInputType = {
    id?: true
    planId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BusinessFeaturesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessFeatures to aggregate.
     */
    where?: BusinessFeaturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessFeatures to fetch.
     */
    orderBy?: BusinessFeaturesOrderByWithRelationInput | BusinessFeaturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessFeaturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessFeatures
    **/
    _count?: true | BusinessFeaturesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessFeaturesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessFeaturesMaxAggregateInputType
  }

  export type GetBusinessFeaturesAggregateType<T extends BusinessFeaturesAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessFeatures]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessFeatures[P]>
      : GetScalarType<T[P], AggregateBusinessFeatures[P]>
  }




  export type BusinessFeaturesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessFeaturesWhereInput
    orderBy?: BusinessFeaturesOrderByWithAggregationInput | BusinessFeaturesOrderByWithAggregationInput[]
    by: BusinessFeaturesScalarFieldEnum[] | BusinessFeaturesScalarFieldEnum
    having?: BusinessFeaturesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessFeaturesCountAggregateInputType | true
    _min?: BusinessFeaturesMinAggregateInputType
    _max?: BusinessFeaturesMaxAggregateInputType
  }

  export type BusinessFeaturesGroupByOutputType = {
    id: string
    planId: string
    createdAt: Date
    updatedAt: Date
    _count: BusinessFeaturesCountAggregateOutputType | null
    _min: BusinessFeaturesMinAggregateOutputType | null
    _max: BusinessFeaturesMaxAggregateOutputType | null
  }

  type GetBusinessFeaturesGroupByPayload<T extends BusinessFeaturesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessFeaturesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessFeaturesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessFeaturesGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessFeaturesGroupByOutputType[P]>
        }
      >
    >


  export type BusinessFeaturesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessFeatures"]>

  export type BusinessFeaturesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessFeatures"]>

  export type BusinessFeaturesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessFeatures"]>

  export type BusinessFeaturesSelectScalar = {
    id?: boolean
    planId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BusinessFeaturesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "planId" | "createdAt" | "updatedAt", ExtArgs["result"]["businessFeatures"]>
  export type BusinessFeaturesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }
  export type BusinessFeaturesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }
  export type BusinessFeaturesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }

  export type $BusinessFeaturesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusinessFeatures"
    objects: {
      plan: Prisma.$SubscriptionPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      planId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["businessFeatures"]>
    composites: {}
  }

  type BusinessFeaturesGetPayload<S extends boolean | null | undefined | BusinessFeaturesDefaultArgs> = $Result.GetResult<Prisma.$BusinessFeaturesPayload, S>

  type BusinessFeaturesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessFeaturesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessFeaturesCountAggregateInputType | true
    }

  export interface BusinessFeaturesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessFeatures'], meta: { name: 'BusinessFeatures' } }
    /**
     * Find zero or one BusinessFeatures that matches the filter.
     * @param {BusinessFeaturesFindUniqueArgs} args - Arguments to find a BusinessFeatures
     * @example
     * // Get one BusinessFeatures
     * const businessFeatures = await prisma.businessFeatures.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessFeaturesFindUniqueArgs>(args: SelectSubset<T, BusinessFeaturesFindUniqueArgs<ExtArgs>>): Prisma__BusinessFeaturesClient<$Result.GetResult<Prisma.$BusinessFeaturesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusinessFeatures that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessFeaturesFindUniqueOrThrowArgs} args - Arguments to find a BusinessFeatures
     * @example
     * // Get one BusinessFeatures
     * const businessFeatures = await prisma.businessFeatures.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessFeaturesFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessFeaturesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessFeaturesClient<$Result.GetResult<Prisma.$BusinessFeaturesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessFeatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFeaturesFindFirstArgs} args - Arguments to find a BusinessFeatures
     * @example
     * // Get one BusinessFeatures
     * const businessFeatures = await prisma.businessFeatures.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessFeaturesFindFirstArgs>(args?: SelectSubset<T, BusinessFeaturesFindFirstArgs<ExtArgs>>): Prisma__BusinessFeaturesClient<$Result.GetResult<Prisma.$BusinessFeaturesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessFeatures that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFeaturesFindFirstOrThrowArgs} args - Arguments to find a BusinessFeatures
     * @example
     * // Get one BusinessFeatures
     * const businessFeatures = await prisma.businessFeatures.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessFeaturesFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessFeaturesFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessFeaturesClient<$Result.GetResult<Prisma.$BusinessFeaturesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusinessFeatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFeaturesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessFeatures
     * const businessFeatures = await prisma.businessFeatures.findMany()
     * 
     * // Get first 10 BusinessFeatures
     * const businessFeatures = await prisma.businessFeatures.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessFeaturesWithIdOnly = await prisma.businessFeatures.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessFeaturesFindManyArgs>(args?: SelectSubset<T, BusinessFeaturesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessFeaturesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusinessFeatures.
     * @param {BusinessFeaturesCreateArgs} args - Arguments to create a BusinessFeatures.
     * @example
     * // Create one BusinessFeatures
     * const BusinessFeatures = await prisma.businessFeatures.create({
     *   data: {
     *     // ... data to create a BusinessFeatures
     *   }
     * })
     * 
     */
    create<T extends BusinessFeaturesCreateArgs>(args: SelectSubset<T, BusinessFeaturesCreateArgs<ExtArgs>>): Prisma__BusinessFeaturesClient<$Result.GetResult<Prisma.$BusinessFeaturesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusinessFeatures.
     * @param {BusinessFeaturesCreateManyArgs} args - Arguments to create many BusinessFeatures.
     * @example
     * // Create many BusinessFeatures
     * const businessFeatures = await prisma.businessFeatures.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessFeaturesCreateManyArgs>(args?: SelectSubset<T, BusinessFeaturesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BusinessFeatures and returns the data saved in the database.
     * @param {BusinessFeaturesCreateManyAndReturnArgs} args - Arguments to create many BusinessFeatures.
     * @example
     * // Create many BusinessFeatures
     * const businessFeatures = await prisma.businessFeatures.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BusinessFeatures and only return the `id`
     * const businessFeaturesWithIdOnly = await prisma.businessFeatures.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessFeaturesCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessFeaturesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessFeaturesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BusinessFeatures.
     * @param {BusinessFeaturesDeleteArgs} args - Arguments to delete one BusinessFeatures.
     * @example
     * // Delete one BusinessFeatures
     * const BusinessFeatures = await prisma.businessFeatures.delete({
     *   where: {
     *     // ... filter to delete one BusinessFeatures
     *   }
     * })
     * 
     */
    delete<T extends BusinessFeaturesDeleteArgs>(args: SelectSubset<T, BusinessFeaturesDeleteArgs<ExtArgs>>): Prisma__BusinessFeaturesClient<$Result.GetResult<Prisma.$BusinessFeaturesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusinessFeatures.
     * @param {BusinessFeaturesUpdateArgs} args - Arguments to update one BusinessFeatures.
     * @example
     * // Update one BusinessFeatures
     * const businessFeatures = await prisma.businessFeatures.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessFeaturesUpdateArgs>(args: SelectSubset<T, BusinessFeaturesUpdateArgs<ExtArgs>>): Prisma__BusinessFeaturesClient<$Result.GetResult<Prisma.$BusinessFeaturesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusinessFeatures.
     * @param {BusinessFeaturesDeleteManyArgs} args - Arguments to filter BusinessFeatures to delete.
     * @example
     * // Delete a few BusinessFeatures
     * const { count } = await prisma.businessFeatures.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessFeaturesDeleteManyArgs>(args?: SelectSubset<T, BusinessFeaturesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFeaturesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessFeatures
     * const businessFeatures = await prisma.businessFeatures.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessFeaturesUpdateManyArgs>(args: SelectSubset<T, BusinessFeaturesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessFeatures and returns the data updated in the database.
     * @param {BusinessFeaturesUpdateManyAndReturnArgs} args - Arguments to update many BusinessFeatures.
     * @example
     * // Update many BusinessFeatures
     * const businessFeatures = await prisma.businessFeatures.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BusinessFeatures and only return the `id`
     * const businessFeaturesWithIdOnly = await prisma.businessFeatures.updateManyAndReturn({
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
    updateManyAndReturn<T extends BusinessFeaturesUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessFeaturesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessFeaturesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BusinessFeatures.
     * @param {BusinessFeaturesUpsertArgs} args - Arguments to update or create a BusinessFeatures.
     * @example
     * // Update or create a BusinessFeatures
     * const businessFeatures = await prisma.businessFeatures.upsert({
     *   create: {
     *     // ... data to create a BusinessFeatures
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessFeatures we want to update
     *   }
     * })
     */
    upsert<T extends BusinessFeaturesUpsertArgs>(args: SelectSubset<T, BusinessFeaturesUpsertArgs<ExtArgs>>): Prisma__BusinessFeaturesClient<$Result.GetResult<Prisma.$BusinessFeaturesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusinessFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFeaturesCountArgs} args - Arguments to filter BusinessFeatures to count.
     * @example
     * // Count the number of BusinessFeatures
     * const count = await prisma.businessFeatures.count({
     *   where: {
     *     // ... the filter for the BusinessFeatures we want to count
     *   }
     * })
    **/
    count<T extends BusinessFeaturesCountArgs>(
      args?: Subset<T, BusinessFeaturesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessFeaturesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFeaturesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BusinessFeaturesAggregateArgs>(args: Subset<T, BusinessFeaturesAggregateArgs>): Prisma.PrismaPromise<GetBusinessFeaturesAggregateType<T>>

    /**
     * Group by BusinessFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFeaturesGroupByArgs} args - Group by arguments.
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
      T extends BusinessFeaturesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessFeaturesGroupByArgs['orderBy'] }
        : { orderBy?: BusinessFeaturesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessFeaturesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessFeaturesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessFeatures model
   */
  readonly fields: BusinessFeaturesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessFeatures.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessFeaturesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends SubscriptionPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlanDefaultArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BusinessFeatures model
   */
  interface BusinessFeaturesFieldRefs {
    readonly id: FieldRef<"BusinessFeatures", 'String'>
    readonly planId: FieldRef<"BusinessFeatures", 'String'>
    readonly createdAt: FieldRef<"BusinessFeatures", 'DateTime'>
    readonly updatedAt: FieldRef<"BusinessFeatures", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BusinessFeatures findUnique
   */
  export type BusinessFeaturesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessFeatures
     */
    select?: BusinessFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessFeatures
     */
    omit?: BusinessFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessFeaturesInclude<ExtArgs> | null
    /**
     * Filter, which BusinessFeatures to fetch.
     */
    where: BusinessFeaturesWhereUniqueInput
  }

  /**
   * BusinessFeatures findUniqueOrThrow
   */
  export type BusinessFeaturesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessFeatures
     */
    select?: BusinessFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessFeatures
     */
    omit?: BusinessFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessFeaturesInclude<ExtArgs> | null
    /**
     * Filter, which BusinessFeatures to fetch.
     */
    where: BusinessFeaturesWhereUniqueInput
  }

  /**
   * BusinessFeatures findFirst
   */
  export type BusinessFeaturesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessFeatures
     */
    select?: BusinessFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessFeatures
     */
    omit?: BusinessFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessFeaturesInclude<ExtArgs> | null
    /**
     * Filter, which BusinessFeatures to fetch.
     */
    where?: BusinessFeaturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessFeatures to fetch.
     */
    orderBy?: BusinessFeaturesOrderByWithRelationInput | BusinessFeaturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessFeatures.
     */
    cursor?: BusinessFeaturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessFeatures.
     */
    distinct?: BusinessFeaturesScalarFieldEnum | BusinessFeaturesScalarFieldEnum[]
  }

  /**
   * BusinessFeatures findFirstOrThrow
   */
  export type BusinessFeaturesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessFeatures
     */
    select?: BusinessFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessFeatures
     */
    omit?: BusinessFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessFeaturesInclude<ExtArgs> | null
    /**
     * Filter, which BusinessFeatures to fetch.
     */
    where?: BusinessFeaturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessFeatures to fetch.
     */
    orderBy?: BusinessFeaturesOrderByWithRelationInput | BusinessFeaturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessFeatures.
     */
    cursor?: BusinessFeaturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessFeatures.
     */
    distinct?: BusinessFeaturesScalarFieldEnum | BusinessFeaturesScalarFieldEnum[]
  }

  /**
   * BusinessFeatures findMany
   */
  export type BusinessFeaturesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessFeatures
     */
    select?: BusinessFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessFeatures
     */
    omit?: BusinessFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessFeaturesInclude<ExtArgs> | null
    /**
     * Filter, which BusinessFeatures to fetch.
     */
    where?: BusinessFeaturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessFeatures to fetch.
     */
    orderBy?: BusinessFeaturesOrderByWithRelationInput | BusinessFeaturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessFeatures.
     */
    cursor?: BusinessFeaturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessFeatures.
     */
    skip?: number
    distinct?: BusinessFeaturesScalarFieldEnum | BusinessFeaturesScalarFieldEnum[]
  }

  /**
   * BusinessFeatures create
   */
  export type BusinessFeaturesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessFeatures
     */
    select?: BusinessFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessFeatures
     */
    omit?: BusinessFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessFeaturesInclude<ExtArgs> | null
    /**
     * The data needed to create a BusinessFeatures.
     */
    data: XOR<BusinessFeaturesCreateInput, BusinessFeaturesUncheckedCreateInput>
  }

  /**
   * BusinessFeatures createMany
   */
  export type BusinessFeaturesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessFeatures.
     */
    data: BusinessFeaturesCreateManyInput | BusinessFeaturesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessFeatures createManyAndReturn
   */
  export type BusinessFeaturesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessFeatures
     */
    select?: BusinessFeaturesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessFeatures
     */
    omit?: BusinessFeaturesOmit<ExtArgs> | null
    /**
     * The data used to create many BusinessFeatures.
     */
    data: BusinessFeaturesCreateManyInput | BusinessFeaturesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessFeaturesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusinessFeatures update
   */
  export type BusinessFeaturesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessFeatures
     */
    select?: BusinessFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessFeatures
     */
    omit?: BusinessFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessFeaturesInclude<ExtArgs> | null
    /**
     * The data needed to update a BusinessFeatures.
     */
    data: XOR<BusinessFeaturesUpdateInput, BusinessFeaturesUncheckedUpdateInput>
    /**
     * Choose, which BusinessFeatures to update.
     */
    where: BusinessFeaturesWhereUniqueInput
  }

  /**
   * BusinessFeatures updateMany
   */
  export type BusinessFeaturesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessFeatures.
     */
    data: XOR<BusinessFeaturesUpdateManyMutationInput, BusinessFeaturesUncheckedUpdateManyInput>
    /**
     * Filter which BusinessFeatures to update
     */
    where?: BusinessFeaturesWhereInput
    /**
     * Limit how many BusinessFeatures to update.
     */
    limit?: number
  }

  /**
   * BusinessFeatures updateManyAndReturn
   */
  export type BusinessFeaturesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessFeatures
     */
    select?: BusinessFeaturesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessFeatures
     */
    omit?: BusinessFeaturesOmit<ExtArgs> | null
    /**
     * The data used to update BusinessFeatures.
     */
    data: XOR<BusinessFeaturesUpdateManyMutationInput, BusinessFeaturesUncheckedUpdateManyInput>
    /**
     * Filter which BusinessFeatures to update
     */
    where?: BusinessFeaturesWhereInput
    /**
     * Limit how many BusinessFeatures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessFeaturesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusinessFeatures upsert
   */
  export type BusinessFeaturesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessFeatures
     */
    select?: BusinessFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessFeatures
     */
    omit?: BusinessFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessFeaturesInclude<ExtArgs> | null
    /**
     * The filter to search for the BusinessFeatures to update in case it exists.
     */
    where: BusinessFeaturesWhereUniqueInput
    /**
     * In case the BusinessFeatures found by the `where` argument doesn't exist, create a new BusinessFeatures with this data.
     */
    create: XOR<BusinessFeaturesCreateInput, BusinessFeaturesUncheckedCreateInput>
    /**
     * In case the BusinessFeatures was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessFeaturesUpdateInput, BusinessFeaturesUncheckedUpdateInput>
  }

  /**
   * BusinessFeatures delete
   */
  export type BusinessFeaturesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessFeatures
     */
    select?: BusinessFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessFeatures
     */
    omit?: BusinessFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessFeaturesInclude<ExtArgs> | null
    /**
     * Filter which BusinessFeatures to delete.
     */
    where: BusinessFeaturesWhereUniqueInput
  }

  /**
   * BusinessFeatures deleteMany
   */
  export type BusinessFeaturesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessFeatures to delete
     */
    where?: BusinessFeaturesWhereInput
    /**
     * Limit how many BusinessFeatures to delete.
     */
    limit?: number
  }

  /**
   * BusinessFeatures without action
   */
  export type BusinessFeaturesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessFeatures
     */
    select?: BusinessFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessFeatures
     */
    omit?: BusinessFeaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessFeaturesInclude<ExtArgs> | null
  }


  /**
   * Model UserSubscription
   */

  export type AggregateUserSubscription = {
    _count: UserSubscriptionCountAggregateOutputType | null
    _avg: UserSubscriptionAvgAggregateOutputType | null
    _sum: UserSubscriptionSumAggregateOutputType | null
    _min: UserSubscriptionMinAggregateOutputType | null
    _max: UserSubscriptionMaxAggregateOutputType | null
  }

  export type UserSubscriptionAvgAggregateOutputType = {
    monthlyPrice: Decimal | null
    discountPercent: number | null
    totalAmount: Decimal | null
  }

  export type UserSubscriptionSumAggregateOutputType = {
    monthlyPrice: Decimal | null
    discountPercent: number | null
    totalAmount: Decimal | null
  }

  export type UserSubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    planId: string | null
    planType: $Enums.PlanType | null
    monthlyPrice: Decimal | null
    discountPercent: number | null
    totalAmount: Decimal | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.SubscriptionStatus | null
    autoRenew: boolean | null
    mpPreferenceId: string | null
    mpSubscriptionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    planId: string | null
    planType: $Enums.PlanType | null
    monthlyPrice: Decimal | null
    discountPercent: number | null
    totalAmount: Decimal | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.SubscriptionStatus | null
    autoRenew: boolean | null
    mpPreferenceId: string | null
    mpSubscriptionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    planId: number
    planType: number
    monthlyPrice: number
    discountPercent: number
    totalAmount: number
    startDate: number
    endDate: number
    status: number
    autoRenew: number
    mpPreferenceId: number
    mpSubscriptionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserSubscriptionAvgAggregateInputType = {
    monthlyPrice?: true
    discountPercent?: true
    totalAmount?: true
  }

  export type UserSubscriptionSumAggregateInputType = {
    monthlyPrice?: true
    discountPercent?: true
    totalAmount?: true
  }

  export type UserSubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    planType?: true
    monthlyPrice?: true
    discountPercent?: true
    totalAmount?: true
    startDate?: true
    endDate?: true
    status?: true
    autoRenew?: true
    mpPreferenceId?: true
    mpSubscriptionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    planType?: true
    monthlyPrice?: true
    discountPercent?: true
    totalAmount?: true
    startDate?: true
    endDate?: true
    status?: true
    autoRenew?: true
    mpPreferenceId?: true
    mpSubscriptionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    planType?: true
    monthlyPrice?: true
    discountPercent?: true
    totalAmount?: true
    startDate?: true
    endDate?: true
    status?: true
    autoRenew?: true
    mpPreferenceId?: true
    mpSubscriptionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSubscription to aggregate.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSubscriptions
    **/
    _count?: true | UserSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSubscriptionMaxAggregateInputType
  }

  export type GetUserSubscriptionAggregateType<T extends UserSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSubscription[P]>
      : GetScalarType<T[P], AggregateUserSubscription[P]>
  }




  export type UserSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSubscriptionWhereInput
    orderBy?: UserSubscriptionOrderByWithAggregationInput | UserSubscriptionOrderByWithAggregationInput[]
    by: UserSubscriptionScalarFieldEnum[] | UserSubscriptionScalarFieldEnum
    having?: UserSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSubscriptionCountAggregateInputType | true
    _avg?: UserSubscriptionAvgAggregateInputType
    _sum?: UserSubscriptionSumAggregateInputType
    _min?: UserSubscriptionMinAggregateInputType
    _max?: UserSubscriptionMaxAggregateInputType
  }

  export type UserSubscriptionGroupByOutputType = {
    id: string
    userId: string
    planId: string
    planType: $Enums.PlanType
    monthlyPrice: Decimal
    discountPercent: number
    totalAmount: Decimal
    startDate: Date
    endDate: Date
    status: $Enums.SubscriptionStatus
    autoRenew: boolean
    mpPreferenceId: string | null
    mpSubscriptionId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserSubscriptionCountAggregateOutputType | null
    _avg: UserSubscriptionAvgAggregateOutputType | null
    _sum: UserSubscriptionSumAggregateOutputType | null
    _min: UserSubscriptionMinAggregateOutputType | null
    _max: UserSubscriptionMaxAggregateOutputType | null
  }

  type GetUserSubscriptionGroupByPayload<T extends UserSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], UserSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type UserSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    planType?: boolean
    monthlyPrice?: boolean
    discountPercent?: boolean
    totalAmount?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    autoRenew?: boolean
    mpPreferenceId?: boolean
    mpSubscriptionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    payments?: boolean | UserSubscription$paymentsArgs<ExtArgs>
    _count?: boolean | UserSubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubscription"]>

  export type UserSubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    planType?: boolean
    monthlyPrice?: boolean
    discountPercent?: boolean
    totalAmount?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    autoRenew?: boolean
    mpPreferenceId?: boolean
    mpSubscriptionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubscription"]>

  export type UserSubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    planType?: boolean
    monthlyPrice?: boolean
    discountPercent?: boolean
    totalAmount?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    autoRenew?: boolean
    mpPreferenceId?: boolean
    mpSubscriptionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubscription"]>

  export type UserSubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    planId?: boolean
    planType?: boolean
    monthlyPrice?: boolean
    discountPercent?: boolean
    totalAmount?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    autoRenew?: boolean
    mpPreferenceId?: boolean
    mpSubscriptionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserSubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "planId" | "planType" | "monthlyPrice" | "discountPercent" | "totalAmount" | "startDate" | "endDate" | "status" | "autoRenew" | "mpPreferenceId" | "mpSubscriptionId" | "createdAt" | "updatedAt", ExtArgs["result"]["userSubscription"]>
  export type UserSubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    payments?: boolean | UserSubscription$paymentsArgs<ExtArgs>
    _count?: boolean | UserSubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserSubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }
  export type UserSubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }

  export type $UserSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSubscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      plan: Prisma.$SubscriptionPlanPayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      planId: string
      planType: $Enums.PlanType
      monthlyPrice: Prisma.Decimal
      discountPercent: number
      totalAmount: Prisma.Decimal
      startDate: Date
      endDate: Date
      status: $Enums.SubscriptionStatus
      autoRenew: boolean
      mpPreferenceId: string | null
      mpSubscriptionId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userSubscription"]>
    composites: {}
  }

  type UserSubscriptionGetPayload<S extends boolean | null | undefined | UserSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$UserSubscriptionPayload, S>

  type UserSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSubscriptionCountAggregateInputType | true
    }

  export interface UserSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSubscription'], meta: { name: 'UserSubscription' } }
    /**
     * Find zero or one UserSubscription that matches the filter.
     * @param {UserSubscriptionFindUniqueArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSubscriptionFindUniqueArgs>(args: SelectSubset<T, UserSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionFindFirstArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSubscriptionFindFirstArgs>(args?: SelectSubset<T, UserSubscriptionFindFirstArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionFindFirstOrThrowArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSubscriptions
     * const userSubscriptions = await prisma.userSubscription.findMany()
     * 
     * // Get first 10 UserSubscriptions
     * const userSubscriptions = await prisma.userSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSubscriptionWithIdOnly = await prisma.userSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSubscriptionFindManyArgs>(args?: SelectSubset<T, UserSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSubscription.
     * @param {UserSubscriptionCreateArgs} args - Arguments to create a UserSubscription.
     * @example
     * // Create one UserSubscription
     * const UserSubscription = await prisma.userSubscription.create({
     *   data: {
     *     // ... data to create a UserSubscription
     *   }
     * })
     * 
     */
    create<T extends UserSubscriptionCreateArgs>(args: SelectSubset<T, UserSubscriptionCreateArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSubscriptions.
     * @param {UserSubscriptionCreateManyArgs} args - Arguments to create many UserSubscriptions.
     * @example
     * // Create many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSubscriptionCreateManyArgs>(args?: SelectSubset<T, UserSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSubscriptions and returns the data saved in the database.
     * @param {UserSubscriptionCreateManyAndReturnArgs} args - Arguments to create many UserSubscriptions.
     * @example
     * // Create many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSubscriptions and only return the `id`
     * const userSubscriptionWithIdOnly = await prisma.userSubscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSubscription.
     * @param {UserSubscriptionDeleteArgs} args - Arguments to delete one UserSubscription.
     * @example
     * // Delete one UserSubscription
     * const UserSubscription = await prisma.userSubscription.delete({
     *   where: {
     *     // ... filter to delete one UserSubscription
     *   }
     * })
     * 
     */
    delete<T extends UserSubscriptionDeleteArgs>(args: SelectSubset<T, UserSubscriptionDeleteArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSubscription.
     * @param {UserSubscriptionUpdateArgs} args - Arguments to update one UserSubscription.
     * @example
     * // Update one UserSubscription
     * const userSubscription = await prisma.userSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSubscriptionUpdateArgs>(args: SelectSubset<T, UserSubscriptionUpdateArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSubscriptions.
     * @param {UserSubscriptionDeleteManyArgs} args - Arguments to filter UserSubscriptions to delete.
     * @example
     * // Delete a few UserSubscriptions
     * const { count } = await prisma.userSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSubscriptionDeleteManyArgs>(args?: SelectSubset<T, UserSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSubscriptionUpdateManyArgs>(args: SelectSubset<T, UserSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSubscriptions and returns the data updated in the database.
     * @param {UserSubscriptionUpdateManyAndReturnArgs} args - Arguments to update many UserSubscriptions.
     * @example
     * // Update many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSubscriptions and only return the `id`
     * const userSubscriptionWithIdOnly = await prisma.userSubscription.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserSubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSubscription.
     * @param {UserSubscriptionUpsertArgs} args - Arguments to update or create a UserSubscription.
     * @example
     * // Update or create a UserSubscription
     * const userSubscription = await prisma.userSubscription.upsert({
     *   create: {
     *     // ... data to create a UserSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSubscription we want to update
     *   }
     * })
     */
    upsert<T extends UserSubscriptionUpsertArgs>(args: SelectSubset<T, UserSubscriptionUpsertArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionCountArgs} args - Arguments to filter UserSubscriptions to count.
     * @example
     * // Count the number of UserSubscriptions
     * const count = await prisma.userSubscription.count({
     *   where: {
     *     // ... the filter for the UserSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends UserSubscriptionCountArgs>(
      args?: Subset<T, UserSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSubscriptionAggregateArgs>(args: Subset<T, UserSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetUserSubscriptionAggregateType<T>>

    /**
     * Group by UserSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionGroupByArgs} args - Group by arguments.
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
      T extends UserSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: UserSubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSubscription model
   */
  readonly fields: UserSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plan<T extends SubscriptionPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlanDefaultArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends UserSubscription$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, UserSubscription$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSubscription model
   */
  interface UserSubscriptionFieldRefs {
    readonly id: FieldRef<"UserSubscription", 'String'>
    readonly userId: FieldRef<"UserSubscription", 'String'>
    readonly planId: FieldRef<"UserSubscription", 'String'>
    readonly planType: FieldRef<"UserSubscription", 'PlanType'>
    readonly monthlyPrice: FieldRef<"UserSubscription", 'Decimal'>
    readonly discountPercent: FieldRef<"UserSubscription", 'Int'>
    readonly totalAmount: FieldRef<"UserSubscription", 'Decimal'>
    readonly startDate: FieldRef<"UserSubscription", 'DateTime'>
    readonly endDate: FieldRef<"UserSubscription", 'DateTime'>
    readonly status: FieldRef<"UserSubscription", 'SubscriptionStatus'>
    readonly autoRenew: FieldRef<"UserSubscription", 'Boolean'>
    readonly mpPreferenceId: FieldRef<"UserSubscription", 'String'>
    readonly mpSubscriptionId: FieldRef<"UserSubscription", 'String'>
    readonly createdAt: FieldRef<"UserSubscription", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSubscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSubscription findUnique
   */
  export type UserSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription findUniqueOrThrow
   */
  export type UserSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription findFirst
   */
  export type UserSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSubscriptions.
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSubscriptions.
     */
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * UserSubscription findFirstOrThrow
   */
  export type UserSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSubscriptions.
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSubscriptions.
     */
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * UserSubscription findMany
   */
  export type UserSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscriptions to fetch.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSubscriptions.
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * UserSubscription create
   */
  export type UserSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSubscription.
     */
    data: XOR<UserSubscriptionCreateInput, UserSubscriptionUncheckedCreateInput>
  }

  /**
   * UserSubscription createMany
   */
  export type UserSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSubscriptions.
     */
    data: UserSubscriptionCreateManyInput | UserSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSubscription createManyAndReturn
   */
  export type UserSubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many UserSubscriptions.
     */
    data: UserSubscriptionCreateManyInput | UserSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSubscription update
   */
  export type UserSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSubscription.
     */
    data: XOR<UserSubscriptionUpdateInput, UserSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which UserSubscription to update.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription updateMany
   */
  export type UserSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSubscriptions.
     */
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which UserSubscriptions to update
     */
    where?: UserSubscriptionWhereInput
    /**
     * Limit how many UserSubscriptions to update.
     */
    limit?: number
  }

  /**
   * UserSubscription updateManyAndReturn
   */
  export type UserSubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update UserSubscriptions.
     */
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which UserSubscriptions to update
     */
    where?: UserSubscriptionWhereInput
    /**
     * Limit how many UserSubscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSubscription upsert
   */
  export type UserSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSubscription to update in case it exists.
     */
    where: UserSubscriptionWhereUniqueInput
    /**
     * In case the UserSubscription found by the `where` argument doesn't exist, create a new UserSubscription with this data.
     */
    create: XOR<UserSubscriptionCreateInput, UserSubscriptionUncheckedCreateInput>
    /**
     * In case the UserSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSubscriptionUpdateInput, UserSubscriptionUncheckedUpdateInput>
  }

  /**
   * UserSubscription delete
   */
  export type UserSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter which UserSubscription to delete.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription deleteMany
   */
  export type UserSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSubscriptions to delete
     */
    where?: UserSubscriptionWhereInput
    /**
     * Limit how many UserSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * UserSubscription.payments
   */
  export type UserSubscription$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * UserSubscription without action
   */
  export type UserSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
    discountAmount: Decimal | null
    finalAmount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
    discountAmount: Decimal | null
    finalAmount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    userSubscriptionId: string | null
    amount: Decimal | null
    discountAmount: Decimal | null
    finalAmount: Decimal | null
    paymentMethod: $Enums.MercadoPagoPaymentMethod | null
    mpPaymentId: string | null
    mpStatus: string | null
    mpStatusDetail: string | null
    status: $Enums.PaymentStatus | null
    paidAt: Date | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    userSubscriptionId: string | null
    amount: Decimal | null
    discountAmount: Decimal | null
    finalAmount: Decimal | null
    paymentMethod: $Enums.MercadoPagoPaymentMethod | null
    mpPaymentId: string | null
    mpStatus: string | null
    mpStatusDetail: string | null
    status: $Enums.PaymentStatus | null
    paidAt: Date | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    userId: number
    userSubscriptionId: number
    amount: number
    discountAmount: number
    finalAmount: number
    paymentMethod: number
    mpPaymentId: number
    mpStatus: number
    mpStatusDetail: number
    status: number
    paidAt: number
    metadata: number
    errorMessage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
    discountAmount?: true
    finalAmount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
    discountAmount?: true
    finalAmount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    userId?: true
    userSubscriptionId?: true
    amount?: true
    discountAmount?: true
    finalAmount?: true
    paymentMethod?: true
    mpPaymentId?: true
    mpStatus?: true
    mpStatusDetail?: true
    status?: true
    paidAt?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    userId?: true
    userSubscriptionId?: true
    amount?: true
    discountAmount?: true
    finalAmount?: true
    paymentMethod?: true
    mpPaymentId?: true
    mpStatus?: true
    mpStatusDetail?: true
    status?: true
    paidAt?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    userId?: true
    userSubscriptionId?: true
    amount?: true
    discountAmount?: true
    finalAmount?: true
    paymentMethod?: true
    mpPaymentId?: true
    mpStatus?: true
    mpStatusDetail?: true
    status?: true
    paidAt?: true
    metadata?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    userId: string
    userSubscriptionId: string
    amount: Decimal
    discountAmount: Decimal
    finalAmount: Decimal
    paymentMethod: $Enums.MercadoPagoPaymentMethod
    mpPaymentId: string | null
    mpStatus: string | null
    mpStatusDetail: string | null
    status: $Enums.PaymentStatus
    paidAt: Date | null
    metadata: JsonValue | null
    errorMessage: string | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userSubscriptionId?: boolean
    amount?: boolean
    discountAmount?: boolean
    finalAmount?: boolean
    paymentMethod?: boolean
    mpPaymentId?: boolean
    mpStatus?: boolean
    mpStatusDetail?: boolean
    status?: boolean
    paidAt?: boolean
    metadata?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    userSubscription?: boolean | UserSubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userSubscriptionId?: boolean
    amount?: boolean
    discountAmount?: boolean
    finalAmount?: boolean
    paymentMethod?: boolean
    mpPaymentId?: boolean
    mpStatus?: boolean
    mpStatusDetail?: boolean
    status?: boolean
    paidAt?: boolean
    metadata?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    userSubscription?: boolean | UserSubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userSubscriptionId?: boolean
    amount?: boolean
    discountAmount?: boolean
    finalAmount?: boolean
    paymentMethod?: boolean
    mpPaymentId?: boolean
    mpStatus?: boolean
    mpStatusDetail?: boolean
    status?: boolean
    paidAt?: boolean
    metadata?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    userSubscription?: boolean | UserSubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    userId?: boolean
    userSubscriptionId?: boolean
    amount?: boolean
    discountAmount?: boolean
    finalAmount?: boolean
    paymentMethod?: boolean
    mpPaymentId?: boolean
    mpStatus?: boolean
    mpStatusDetail?: boolean
    status?: boolean
    paidAt?: boolean
    metadata?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "userSubscriptionId" | "amount" | "discountAmount" | "finalAmount" | "paymentMethod" | "mpPaymentId" | "mpStatus" | "mpStatusDetail" | "status" | "paidAt" | "metadata" | "errorMessage" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    userSubscription?: boolean | UserSubscriptionDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    userSubscription?: boolean | UserSubscriptionDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    userSubscription?: boolean | UserSubscriptionDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      userSubscription: Prisma.$UserSubscriptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      userSubscriptionId: string
      amount: Prisma.Decimal
      discountAmount: Prisma.Decimal
      finalAmount: Prisma.Decimal
      paymentMethod: $Enums.MercadoPagoPaymentMethod
      mpPaymentId: string | null
      mpStatus: string | null
      mpStatusDetail: string | null
      status: $Enums.PaymentStatus
      paidAt: Date | null
      metadata: Prisma.JsonValue | null
      errorMessage: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userSubscription<T extends UserSubscriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserSubscriptionDefaultArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly userId: FieldRef<"Payment", 'String'>
    readonly userSubscriptionId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly discountAmount: FieldRef<"Payment", 'Decimal'>
    readonly finalAmount: FieldRef<"Payment", 'Decimal'>
    readonly paymentMethod: FieldRef<"Payment", 'MercadoPagoPaymentMethod'>
    readonly mpPaymentId: FieldRef<"Payment", 'String'>
    readonly mpStatus: FieldRef<"Payment", 'String'>
    readonly mpStatusDetail: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly metadata: FieldRef<"Payment", 'Json'>
    readonly errorMessage: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    phoneNumber: 'phoneNumber',
    birthDate: 'birthDate',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SubscriptionPlanScalarFieldEnum: {
    id: 'id',
    service: 'service',
    name: 'name',
    description: 'description',
    monthlyPrice: 'monthlyPrice',
    quarterlyDiscount: 'quarterlyDiscount',
    annualDiscount: 'annualDiscount',
    isActive: 'isActive',
    isPublic: 'isPublic',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionPlanScalarFieldEnum = (typeof SubscriptionPlanScalarFieldEnum)[keyof typeof SubscriptionPlanScalarFieldEnum]


  export const CloudFeaturesScalarFieldEnum: {
    id: 'id',
    planId: 'planId',
    storageGB: 'storageGB',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CloudFeaturesScalarFieldEnum = (typeof CloudFeaturesScalarFieldEnum)[keyof typeof CloudFeaturesScalarFieldEnum]


  export const AgendeFeaturesScalarFieldEnum: {
    id: 'id',
    planId: 'planId',
    maxAppointmentsPerMonth: 'maxAppointmentsPerMonth',
    maxOrganizations: 'maxOrganizations',
    maxPointsPerOrganization: 'maxPointsPerOrganization',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AgendeFeaturesScalarFieldEnum = (typeof AgendeFeaturesScalarFieldEnum)[keyof typeof AgendeFeaturesScalarFieldEnum]


  export const FreelaFeaturesScalarFieldEnum: {
    id: 'id',
    planId: 'planId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FreelaFeaturesScalarFieldEnum = (typeof FreelaFeaturesScalarFieldEnum)[keyof typeof FreelaFeaturesScalarFieldEnum]


  export const BusinessFeaturesScalarFieldEnum: {
    id: 'id',
    planId: 'planId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BusinessFeaturesScalarFieldEnum = (typeof BusinessFeaturesScalarFieldEnum)[keyof typeof BusinessFeaturesScalarFieldEnum]


  export const UserSubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    planId: 'planId',
    planType: 'planType',
    monthlyPrice: 'monthlyPrice',
    discountPercent: 'discountPercent',
    totalAmount: 'totalAmount',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    autoRenew: 'autoRenew',
    mpPreferenceId: 'mpPreferenceId',
    mpSubscriptionId: 'mpSubscriptionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSubscriptionScalarFieldEnum = (typeof UserSubscriptionScalarFieldEnum)[keyof typeof UserSubscriptionScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    userSubscriptionId: 'userSubscriptionId',
    amount: 'amount',
    discountAmount: 'discountAmount',
    finalAmount: 'finalAmount',
    paymentMethod: 'paymentMethod',
    mpPaymentId: 'mpPaymentId',
    mpStatus: 'mpStatus',
    mpStatusDetail: 'mpStatusDetail',
    status: 'status',
    paidAt: 'paidAt',
    metadata: 'metadata',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Service'
   */
  export type EnumServiceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Service'>
    


  /**
   * Reference to a field of type 'Service[]'
   */
  export type ListEnumServiceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Service[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PlanType'
   */
  export type EnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType'>
    


  /**
   * Reference to a field of type 'PlanType[]'
   */
  export type ListEnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType[]'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>
    


  /**
   * Reference to a field of type 'MercadoPagoPaymentMethod'
   */
  export type EnumMercadoPagoPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MercadoPagoPaymentMethod'>
    


  /**
   * Reference to a field of type 'MercadoPagoPaymentMethod[]'
   */
  export type ListEnumMercadoPagoPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MercadoPagoPaymentMethod[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringFilter<"User"> | string
    birthDate?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userSubscriptions?: UserSubscriptionListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    birthDate?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userSubscriptions?: UserSubscriptionOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phoneNumber?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    birthDate?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userSubscriptions?: UserSubscriptionListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id" | "email" | "phoneNumber">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    birthDate?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    birthDate?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SubscriptionPlanWhereInput = {
    AND?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    OR?: SubscriptionPlanWhereInput[]
    NOT?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    id?: StringFilter<"SubscriptionPlan"> | string
    service?: EnumServiceFilter<"SubscriptionPlan"> | $Enums.Service
    name?: StringFilter<"SubscriptionPlan"> | string
    description?: StringNullableFilter<"SubscriptionPlan"> | string | null
    monthlyPrice?: DecimalFilter<"SubscriptionPlan"> | Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: IntFilter<"SubscriptionPlan"> | number
    annualDiscount?: IntFilter<"SubscriptionPlan"> | number
    isActive?: BoolFilter<"SubscriptionPlan"> | boolean
    isPublic?: BoolFilter<"SubscriptionPlan"> | boolean
    createdAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    cloudFeatures?: XOR<CloudFeaturesNullableScalarRelationFilter, CloudFeaturesWhereInput> | null
    agendeFeatures?: XOR<AgendeFeaturesNullableScalarRelationFilter, AgendeFeaturesWhereInput> | null
    freelaFeatures?: XOR<FreelaFeaturesNullableScalarRelationFilter, FreelaFeaturesWhereInput> | null
    businessFeatures?: XOR<BusinessFeaturesNullableScalarRelationFilter, BusinessFeaturesWhereInput> | null
    userSubscriptions?: UserSubscriptionListRelationFilter
  }

  export type SubscriptionPlanOrderByWithRelationInput = {
    id?: SortOrder
    service?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    monthlyPrice?: SortOrder
    quarterlyDiscount?: SortOrder
    annualDiscount?: SortOrder
    isActive?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cloudFeatures?: CloudFeaturesOrderByWithRelationInput
    agendeFeatures?: AgendeFeaturesOrderByWithRelationInput
    freelaFeatures?: FreelaFeaturesOrderByWithRelationInput
    businessFeatures?: BusinessFeaturesOrderByWithRelationInput
    userSubscriptions?: UserSubscriptionOrderByRelationAggregateInput
  }

  export type SubscriptionPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    service_name?: SubscriptionPlanServiceNameCompoundUniqueInput
    AND?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    OR?: SubscriptionPlanWhereInput[]
    NOT?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    service?: EnumServiceFilter<"SubscriptionPlan"> | $Enums.Service
    name?: StringFilter<"SubscriptionPlan"> | string
    description?: StringNullableFilter<"SubscriptionPlan"> | string | null
    monthlyPrice?: DecimalFilter<"SubscriptionPlan"> | Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: IntFilter<"SubscriptionPlan"> | number
    annualDiscount?: IntFilter<"SubscriptionPlan"> | number
    isActive?: BoolFilter<"SubscriptionPlan"> | boolean
    isPublic?: BoolFilter<"SubscriptionPlan"> | boolean
    createdAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    cloudFeatures?: XOR<CloudFeaturesNullableScalarRelationFilter, CloudFeaturesWhereInput> | null
    agendeFeatures?: XOR<AgendeFeaturesNullableScalarRelationFilter, AgendeFeaturesWhereInput> | null
    freelaFeatures?: XOR<FreelaFeaturesNullableScalarRelationFilter, FreelaFeaturesWhereInput> | null
    businessFeatures?: XOR<BusinessFeaturesNullableScalarRelationFilter, BusinessFeaturesWhereInput> | null
    userSubscriptions?: UserSubscriptionListRelationFilter
  }, "id" | "service_name">

  export type SubscriptionPlanOrderByWithAggregationInput = {
    id?: SortOrder
    service?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    monthlyPrice?: SortOrder
    quarterlyDiscount?: SortOrder
    annualDiscount?: SortOrder
    isActive?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionPlanCountOrderByAggregateInput
    _avg?: SubscriptionPlanAvgOrderByAggregateInput
    _max?: SubscriptionPlanMaxOrderByAggregateInput
    _min?: SubscriptionPlanMinOrderByAggregateInput
    _sum?: SubscriptionPlanSumOrderByAggregateInput
  }

  export type SubscriptionPlanScalarWhereWithAggregatesInput = {
    AND?: SubscriptionPlanScalarWhereWithAggregatesInput | SubscriptionPlanScalarWhereWithAggregatesInput[]
    OR?: SubscriptionPlanScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionPlanScalarWhereWithAggregatesInput | SubscriptionPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubscriptionPlan"> | string
    service?: EnumServiceWithAggregatesFilter<"SubscriptionPlan"> | $Enums.Service
    name?: StringWithAggregatesFilter<"SubscriptionPlan"> | string
    description?: StringNullableWithAggregatesFilter<"SubscriptionPlan"> | string | null
    monthlyPrice?: DecimalWithAggregatesFilter<"SubscriptionPlan"> | Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: IntWithAggregatesFilter<"SubscriptionPlan"> | number
    annualDiscount?: IntWithAggregatesFilter<"SubscriptionPlan"> | number
    isActive?: BoolWithAggregatesFilter<"SubscriptionPlan"> | boolean
    isPublic?: BoolWithAggregatesFilter<"SubscriptionPlan"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SubscriptionPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubscriptionPlan"> | Date | string
  }

  export type CloudFeaturesWhereInput = {
    AND?: CloudFeaturesWhereInput | CloudFeaturesWhereInput[]
    OR?: CloudFeaturesWhereInput[]
    NOT?: CloudFeaturesWhereInput | CloudFeaturesWhereInput[]
    id?: StringFilter<"CloudFeatures"> | string
    planId?: StringFilter<"CloudFeatures"> | string
    storageGB?: IntFilter<"CloudFeatures"> | number
    createdAt?: DateTimeFilter<"CloudFeatures"> | Date | string
    updatedAt?: DateTimeFilter<"CloudFeatures"> | Date | string
    plan?: XOR<SubscriptionPlanScalarRelationFilter, SubscriptionPlanWhereInput>
  }

  export type CloudFeaturesOrderByWithRelationInput = {
    id?: SortOrder
    planId?: SortOrder
    storageGB?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SubscriptionPlanOrderByWithRelationInput
  }

  export type CloudFeaturesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    planId?: string
    AND?: CloudFeaturesWhereInput | CloudFeaturesWhereInput[]
    OR?: CloudFeaturesWhereInput[]
    NOT?: CloudFeaturesWhereInput | CloudFeaturesWhereInput[]
    storageGB?: IntFilter<"CloudFeatures"> | number
    createdAt?: DateTimeFilter<"CloudFeatures"> | Date | string
    updatedAt?: DateTimeFilter<"CloudFeatures"> | Date | string
    plan?: XOR<SubscriptionPlanScalarRelationFilter, SubscriptionPlanWhereInput>
  }, "id" | "planId">

  export type CloudFeaturesOrderByWithAggregationInput = {
    id?: SortOrder
    planId?: SortOrder
    storageGB?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CloudFeaturesCountOrderByAggregateInput
    _avg?: CloudFeaturesAvgOrderByAggregateInput
    _max?: CloudFeaturesMaxOrderByAggregateInput
    _min?: CloudFeaturesMinOrderByAggregateInput
    _sum?: CloudFeaturesSumOrderByAggregateInput
  }

  export type CloudFeaturesScalarWhereWithAggregatesInput = {
    AND?: CloudFeaturesScalarWhereWithAggregatesInput | CloudFeaturesScalarWhereWithAggregatesInput[]
    OR?: CloudFeaturesScalarWhereWithAggregatesInput[]
    NOT?: CloudFeaturesScalarWhereWithAggregatesInput | CloudFeaturesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CloudFeatures"> | string
    planId?: StringWithAggregatesFilter<"CloudFeatures"> | string
    storageGB?: IntWithAggregatesFilter<"CloudFeatures"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CloudFeatures"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CloudFeatures"> | Date | string
  }

  export type AgendeFeaturesWhereInput = {
    AND?: AgendeFeaturesWhereInput | AgendeFeaturesWhereInput[]
    OR?: AgendeFeaturesWhereInput[]
    NOT?: AgendeFeaturesWhereInput | AgendeFeaturesWhereInput[]
    id?: StringFilter<"AgendeFeatures"> | string
    planId?: StringFilter<"AgendeFeatures"> | string
    maxAppointmentsPerMonth?: IntFilter<"AgendeFeatures"> | number
    maxOrganizations?: IntFilter<"AgendeFeatures"> | number
    maxPointsPerOrganization?: IntFilter<"AgendeFeatures"> | number
    createdAt?: DateTimeFilter<"AgendeFeatures"> | Date | string
    updatedAt?: DateTimeFilter<"AgendeFeatures"> | Date | string
    plan?: XOR<SubscriptionPlanScalarRelationFilter, SubscriptionPlanWhereInput>
  }

  export type AgendeFeaturesOrderByWithRelationInput = {
    id?: SortOrder
    planId?: SortOrder
    maxAppointmentsPerMonth?: SortOrder
    maxOrganizations?: SortOrder
    maxPointsPerOrganization?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SubscriptionPlanOrderByWithRelationInput
  }

  export type AgendeFeaturesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    planId?: string
    AND?: AgendeFeaturesWhereInput | AgendeFeaturesWhereInput[]
    OR?: AgendeFeaturesWhereInput[]
    NOT?: AgendeFeaturesWhereInput | AgendeFeaturesWhereInput[]
    maxAppointmentsPerMonth?: IntFilter<"AgendeFeatures"> | number
    maxOrganizations?: IntFilter<"AgendeFeatures"> | number
    maxPointsPerOrganization?: IntFilter<"AgendeFeatures"> | number
    createdAt?: DateTimeFilter<"AgendeFeatures"> | Date | string
    updatedAt?: DateTimeFilter<"AgendeFeatures"> | Date | string
    plan?: XOR<SubscriptionPlanScalarRelationFilter, SubscriptionPlanWhereInput>
  }, "id" | "planId">

  export type AgendeFeaturesOrderByWithAggregationInput = {
    id?: SortOrder
    planId?: SortOrder
    maxAppointmentsPerMonth?: SortOrder
    maxOrganizations?: SortOrder
    maxPointsPerOrganization?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AgendeFeaturesCountOrderByAggregateInput
    _avg?: AgendeFeaturesAvgOrderByAggregateInput
    _max?: AgendeFeaturesMaxOrderByAggregateInput
    _min?: AgendeFeaturesMinOrderByAggregateInput
    _sum?: AgendeFeaturesSumOrderByAggregateInput
  }

  export type AgendeFeaturesScalarWhereWithAggregatesInput = {
    AND?: AgendeFeaturesScalarWhereWithAggregatesInput | AgendeFeaturesScalarWhereWithAggregatesInput[]
    OR?: AgendeFeaturesScalarWhereWithAggregatesInput[]
    NOT?: AgendeFeaturesScalarWhereWithAggregatesInput | AgendeFeaturesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AgendeFeatures"> | string
    planId?: StringWithAggregatesFilter<"AgendeFeatures"> | string
    maxAppointmentsPerMonth?: IntWithAggregatesFilter<"AgendeFeatures"> | number
    maxOrganizations?: IntWithAggregatesFilter<"AgendeFeatures"> | number
    maxPointsPerOrganization?: IntWithAggregatesFilter<"AgendeFeatures"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AgendeFeatures"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AgendeFeatures"> | Date | string
  }

  export type FreelaFeaturesWhereInput = {
    AND?: FreelaFeaturesWhereInput | FreelaFeaturesWhereInput[]
    OR?: FreelaFeaturesWhereInput[]
    NOT?: FreelaFeaturesWhereInput | FreelaFeaturesWhereInput[]
    id?: StringFilter<"FreelaFeatures"> | string
    planId?: StringFilter<"FreelaFeatures"> | string
    createdAt?: DateTimeFilter<"FreelaFeatures"> | Date | string
    updatedAt?: DateTimeFilter<"FreelaFeatures"> | Date | string
    plan?: XOR<SubscriptionPlanScalarRelationFilter, SubscriptionPlanWhereInput>
  }

  export type FreelaFeaturesOrderByWithRelationInput = {
    id?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SubscriptionPlanOrderByWithRelationInput
  }

  export type FreelaFeaturesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    planId?: string
    AND?: FreelaFeaturesWhereInput | FreelaFeaturesWhereInput[]
    OR?: FreelaFeaturesWhereInput[]
    NOT?: FreelaFeaturesWhereInput | FreelaFeaturesWhereInput[]
    createdAt?: DateTimeFilter<"FreelaFeatures"> | Date | string
    updatedAt?: DateTimeFilter<"FreelaFeatures"> | Date | string
    plan?: XOR<SubscriptionPlanScalarRelationFilter, SubscriptionPlanWhereInput>
  }, "id" | "planId">

  export type FreelaFeaturesOrderByWithAggregationInput = {
    id?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FreelaFeaturesCountOrderByAggregateInput
    _max?: FreelaFeaturesMaxOrderByAggregateInput
    _min?: FreelaFeaturesMinOrderByAggregateInput
  }

  export type FreelaFeaturesScalarWhereWithAggregatesInput = {
    AND?: FreelaFeaturesScalarWhereWithAggregatesInput | FreelaFeaturesScalarWhereWithAggregatesInput[]
    OR?: FreelaFeaturesScalarWhereWithAggregatesInput[]
    NOT?: FreelaFeaturesScalarWhereWithAggregatesInput | FreelaFeaturesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FreelaFeatures"> | string
    planId?: StringWithAggregatesFilter<"FreelaFeatures"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FreelaFeatures"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FreelaFeatures"> | Date | string
  }

  export type BusinessFeaturesWhereInput = {
    AND?: BusinessFeaturesWhereInput | BusinessFeaturesWhereInput[]
    OR?: BusinessFeaturesWhereInput[]
    NOT?: BusinessFeaturesWhereInput | BusinessFeaturesWhereInput[]
    id?: StringFilter<"BusinessFeatures"> | string
    planId?: StringFilter<"BusinessFeatures"> | string
    createdAt?: DateTimeFilter<"BusinessFeatures"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessFeatures"> | Date | string
    plan?: XOR<SubscriptionPlanScalarRelationFilter, SubscriptionPlanWhereInput>
  }

  export type BusinessFeaturesOrderByWithRelationInput = {
    id?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SubscriptionPlanOrderByWithRelationInput
  }

  export type BusinessFeaturesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    planId?: string
    AND?: BusinessFeaturesWhereInput | BusinessFeaturesWhereInput[]
    OR?: BusinessFeaturesWhereInput[]
    NOT?: BusinessFeaturesWhereInput | BusinessFeaturesWhereInput[]
    createdAt?: DateTimeFilter<"BusinessFeatures"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessFeatures"> | Date | string
    plan?: XOR<SubscriptionPlanScalarRelationFilter, SubscriptionPlanWhereInput>
  }, "id" | "planId">

  export type BusinessFeaturesOrderByWithAggregationInput = {
    id?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BusinessFeaturesCountOrderByAggregateInput
    _max?: BusinessFeaturesMaxOrderByAggregateInput
    _min?: BusinessFeaturesMinOrderByAggregateInput
  }

  export type BusinessFeaturesScalarWhereWithAggregatesInput = {
    AND?: BusinessFeaturesScalarWhereWithAggregatesInput | BusinessFeaturesScalarWhereWithAggregatesInput[]
    OR?: BusinessFeaturesScalarWhereWithAggregatesInput[]
    NOT?: BusinessFeaturesScalarWhereWithAggregatesInput | BusinessFeaturesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BusinessFeatures"> | string
    planId?: StringWithAggregatesFilter<"BusinessFeatures"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BusinessFeatures"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BusinessFeatures"> | Date | string
  }

  export type UserSubscriptionWhereInput = {
    AND?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    OR?: UserSubscriptionWhereInput[]
    NOT?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    id?: StringFilter<"UserSubscription"> | string
    userId?: StringFilter<"UserSubscription"> | string
    planId?: StringFilter<"UserSubscription"> | string
    planType?: EnumPlanTypeFilter<"UserSubscription"> | $Enums.PlanType
    monthlyPrice?: DecimalFilter<"UserSubscription"> | Decimal | DecimalJsLike | number | string
    discountPercent?: IntFilter<"UserSubscription"> | number
    totalAmount?: DecimalFilter<"UserSubscription"> | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFilter<"UserSubscription"> | Date | string
    endDate?: DateTimeFilter<"UserSubscription"> | Date | string
    status?: EnumSubscriptionStatusFilter<"UserSubscription"> | $Enums.SubscriptionStatus
    autoRenew?: BoolFilter<"UserSubscription"> | boolean
    mpPreferenceId?: StringNullableFilter<"UserSubscription"> | string | null
    mpSubscriptionId?: StringNullableFilter<"UserSubscription"> | string | null
    createdAt?: DateTimeFilter<"UserSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"UserSubscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    plan?: XOR<SubscriptionPlanScalarRelationFilter, SubscriptionPlanWhereInput>
    payments?: PaymentListRelationFilter
  }

  export type UserSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    planType?: SortOrder
    monthlyPrice?: SortOrder
    discountPercent?: SortOrder
    totalAmount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    autoRenew?: SortOrder
    mpPreferenceId?: SortOrderInput | SortOrder
    mpSubscriptionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    plan?: SubscriptionPlanOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type UserSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    OR?: UserSubscriptionWhereInput[]
    NOT?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    userId?: StringFilter<"UserSubscription"> | string
    planId?: StringFilter<"UserSubscription"> | string
    planType?: EnumPlanTypeFilter<"UserSubscription"> | $Enums.PlanType
    monthlyPrice?: DecimalFilter<"UserSubscription"> | Decimal | DecimalJsLike | number | string
    discountPercent?: IntFilter<"UserSubscription"> | number
    totalAmount?: DecimalFilter<"UserSubscription"> | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFilter<"UserSubscription"> | Date | string
    endDate?: DateTimeFilter<"UserSubscription"> | Date | string
    status?: EnumSubscriptionStatusFilter<"UserSubscription"> | $Enums.SubscriptionStatus
    autoRenew?: BoolFilter<"UserSubscription"> | boolean
    mpPreferenceId?: StringNullableFilter<"UserSubscription"> | string | null
    mpSubscriptionId?: StringNullableFilter<"UserSubscription"> | string | null
    createdAt?: DateTimeFilter<"UserSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"UserSubscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    plan?: XOR<SubscriptionPlanScalarRelationFilter, SubscriptionPlanWhereInput>
    payments?: PaymentListRelationFilter
  }, "id">

  export type UserSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    planType?: SortOrder
    monthlyPrice?: SortOrder
    discountPercent?: SortOrder
    totalAmount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    autoRenew?: SortOrder
    mpPreferenceId?: SortOrderInput | SortOrder
    mpSubscriptionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserSubscriptionCountOrderByAggregateInput
    _avg?: UserSubscriptionAvgOrderByAggregateInput
    _max?: UserSubscriptionMaxOrderByAggregateInput
    _min?: UserSubscriptionMinOrderByAggregateInput
    _sum?: UserSubscriptionSumOrderByAggregateInput
  }

  export type UserSubscriptionScalarWhereWithAggregatesInput = {
    AND?: UserSubscriptionScalarWhereWithAggregatesInput | UserSubscriptionScalarWhereWithAggregatesInput[]
    OR?: UserSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: UserSubscriptionScalarWhereWithAggregatesInput | UserSubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSubscription"> | string
    userId?: StringWithAggregatesFilter<"UserSubscription"> | string
    planId?: StringWithAggregatesFilter<"UserSubscription"> | string
    planType?: EnumPlanTypeWithAggregatesFilter<"UserSubscription"> | $Enums.PlanType
    monthlyPrice?: DecimalWithAggregatesFilter<"UserSubscription"> | Decimal | DecimalJsLike | number | string
    discountPercent?: IntWithAggregatesFilter<"UserSubscription"> | number
    totalAmount?: DecimalWithAggregatesFilter<"UserSubscription"> | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeWithAggregatesFilter<"UserSubscription"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"UserSubscription"> | Date | string
    status?: EnumSubscriptionStatusWithAggregatesFilter<"UserSubscription"> | $Enums.SubscriptionStatus
    autoRenew?: BoolWithAggregatesFilter<"UserSubscription"> | boolean
    mpPreferenceId?: StringNullableWithAggregatesFilter<"UserSubscription"> | string | null
    mpSubscriptionId?: StringNullableWithAggregatesFilter<"UserSubscription"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserSubscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSubscription"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    userSubscriptionId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumMercadoPagoPaymentMethodFilter<"Payment"> | $Enums.MercadoPagoPaymentMethod
    mpPaymentId?: StringNullableFilter<"Payment"> | string | null
    mpStatus?: StringNullableFilter<"Payment"> | string | null
    mpStatusDetail?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    metadata?: JsonNullableFilter<"Payment">
    errorMessage?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    userSubscription?: XOR<UserSubscriptionScalarRelationFilter, UserSubscriptionWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    userSubscriptionId?: SortOrder
    amount?: SortOrder
    discountAmount?: SortOrder
    finalAmount?: SortOrder
    paymentMethod?: SortOrder
    mpPaymentId?: SortOrderInput | SortOrder
    mpStatus?: SortOrderInput | SortOrder
    mpStatusDetail?: SortOrderInput | SortOrder
    status?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    userSubscription?: UserSubscriptionOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    mpPaymentId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    userId?: StringFilter<"Payment"> | string
    userSubscriptionId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumMercadoPagoPaymentMethodFilter<"Payment"> | $Enums.MercadoPagoPaymentMethod
    mpStatus?: StringNullableFilter<"Payment"> | string | null
    mpStatusDetail?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    metadata?: JsonNullableFilter<"Payment">
    errorMessage?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    userSubscription?: XOR<UserSubscriptionScalarRelationFilter, UserSubscriptionWhereInput>
  }, "id" | "mpPaymentId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    userSubscriptionId?: SortOrder
    amount?: SortOrder
    discountAmount?: SortOrder
    finalAmount?: SortOrder
    paymentMethod?: SortOrder
    mpPaymentId?: SortOrderInput | SortOrder
    mpStatus?: SortOrderInput | SortOrder
    mpStatusDetail?: SortOrderInput | SortOrder
    status?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    userId?: StringWithAggregatesFilter<"Payment"> | string
    userSubscriptionId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumMercadoPagoPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.MercadoPagoPaymentMethod
    mpPaymentId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    mpStatus?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    mpStatusDetail?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    paidAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Payment">
    errorMessage?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    phoneNumber: string
    birthDate: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    userSubscriptions?: UserSubscriptionCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    phoneNumber: string
    birthDate: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    userSubscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSubscriptions?: UserSubscriptionUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSubscriptions?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    phoneNumber: string
    birthDate: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPlanCreateInput = {
    id?: string
    service: $Enums.Service
    name: string
    description?: string | null
    monthlyPrice: Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: number
    annualDiscount?: number
    isActive?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cloudFeatures?: CloudFeaturesCreateNestedOneWithoutPlanInput
    agendeFeatures?: AgendeFeaturesCreateNestedOneWithoutPlanInput
    freelaFeatures?: FreelaFeaturesCreateNestedOneWithoutPlanInput
    businessFeatures?: BusinessFeaturesCreateNestedOneWithoutPlanInput
    userSubscriptions?: UserSubscriptionCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanUncheckedCreateInput = {
    id?: string
    service: $Enums.Service
    name: string
    description?: string | null
    monthlyPrice: Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: number
    annualDiscount?: number
    isActive?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cloudFeatures?: CloudFeaturesUncheckedCreateNestedOneWithoutPlanInput
    agendeFeatures?: AgendeFeaturesUncheckedCreateNestedOneWithoutPlanInput
    freelaFeatures?: FreelaFeaturesUncheckedCreateNestedOneWithoutPlanInput
    businessFeatures?: BusinessFeaturesUncheckedCreateNestedOneWithoutPlanInput
    userSubscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: EnumServiceFieldUpdateOperationsInput | $Enums.Service
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: IntFieldUpdateOperationsInput | number
    annualDiscount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cloudFeatures?: CloudFeaturesUpdateOneWithoutPlanNestedInput
    agendeFeatures?: AgendeFeaturesUpdateOneWithoutPlanNestedInput
    freelaFeatures?: FreelaFeaturesUpdateOneWithoutPlanNestedInput
    businessFeatures?: BusinessFeaturesUpdateOneWithoutPlanNestedInput
    userSubscriptions?: UserSubscriptionUpdateManyWithoutPlanNestedInput
  }

  export type SubscriptionPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: EnumServiceFieldUpdateOperationsInput | $Enums.Service
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: IntFieldUpdateOperationsInput | number
    annualDiscount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cloudFeatures?: CloudFeaturesUncheckedUpdateOneWithoutPlanNestedInput
    agendeFeatures?: AgendeFeaturesUncheckedUpdateOneWithoutPlanNestedInput
    freelaFeatures?: FreelaFeaturesUncheckedUpdateOneWithoutPlanNestedInput
    businessFeatures?: BusinessFeaturesUncheckedUpdateOneWithoutPlanNestedInput
    userSubscriptions?: UserSubscriptionUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type SubscriptionPlanCreateManyInput = {
    id?: string
    service: $Enums.Service
    name: string
    description?: string | null
    monthlyPrice: Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: number
    annualDiscount?: number
    isActive?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: EnumServiceFieldUpdateOperationsInput | $Enums.Service
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: IntFieldUpdateOperationsInput | number
    annualDiscount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: EnumServiceFieldUpdateOperationsInput | $Enums.Service
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: IntFieldUpdateOperationsInput | number
    annualDiscount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CloudFeaturesCreateInput = {
    id?: string
    storageGB: number
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: SubscriptionPlanCreateNestedOneWithoutCloudFeaturesInput
  }

  export type CloudFeaturesUncheckedCreateInput = {
    id?: string
    planId: string
    storageGB: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CloudFeaturesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storageGB?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: SubscriptionPlanUpdateOneRequiredWithoutCloudFeaturesNestedInput
  }

  export type CloudFeaturesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    storageGB?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CloudFeaturesCreateManyInput = {
    id?: string
    planId: string
    storageGB: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CloudFeaturesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    storageGB?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CloudFeaturesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    storageGB?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendeFeaturesCreateInput = {
    id?: string
    maxAppointmentsPerMonth: number
    maxOrganizations: number
    maxPointsPerOrganization: number
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: SubscriptionPlanCreateNestedOneWithoutAgendeFeaturesInput
  }

  export type AgendeFeaturesUncheckedCreateInput = {
    id?: string
    planId: string
    maxAppointmentsPerMonth: number
    maxOrganizations: number
    maxPointsPerOrganization: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgendeFeaturesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxAppointmentsPerMonth?: IntFieldUpdateOperationsInput | number
    maxOrganizations?: IntFieldUpdateOperationsInput | number
    maxPointsPerOrganization?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: SubscriptionPlanUpdateOneRequiredWithoutAgendeFeaturesNestedInput
  }

  export type AgendeFeaturesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    maxAppointmentsPerMonth?: IntFieldUpdateOperationsInput | number
    maxOrganizations?: IntFieldUpdateOperationsInput | number
    maxPointsPerOrganization?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendeFeaturesCreateManyInput = {
    id?: string
    planId: string
    maxAppointmentsPerMonth: number
    maxOrganizations: number
    maxPointsPerOrganization: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgendeFeaturesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxAppointmentsPerMonth?: IntFieldUpdateOperationsInput | number
    maxOrganizations?: IntFieldUpdateOperationsInput | number
    maxPointsPerOrganization?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendeFeaturesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    maxAppointmentsPerMonth?: IntFieldUpdateOperationsInput | number
    maxOrganizations?: IntFieldUpdateOperationsInput | number
    maxPointsPerOrganization?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FreelaFeaturesCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: SubscriptionPlanCreateNestedOneWithoutFreelaFeaturesInput
  }

  export type FreelaFeaturesUncheckedCreateInput = {
    id?: string
    planId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FreelaFeaturesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: SubscriptionPlanUpdateOneRequiredWithoutFreelaFeaturesNestedInput
  }

  export type FreelaFeaturesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FreelaFeaturesCreateManyInput = {
    id?: string
    planId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FreelaFeaturesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FreelaFeaturesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessFeaturesCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: SubscriptionPlanCreateNestedOneWithoutBusinessFeaturesInput
  }

  export type BusinessFeaturesUncheckedCreateInput = {
    id?: string
    planId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessFeaturesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: SubscriptionPlanUpdateOneRequiredWithoutBusinessFeaturesNestedInput
  }

  export type BusinessFeaturesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessFeaturesCreateManyInput = {
    id?: string
    planId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessFeaturesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessFeaturesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionCreateInput = {
    id?: string
    planType: $Enums.PlanType
    monthlyPrice: Decimal | DecimalJsLike | number | string
    discountPercent?: number
    totalAmount: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.SubscriptionStatus
    autoRenew?: boolean
    mpPreferenceId?: string | null
    mpSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserSubscriptionsInput
    plan: SubscriptionPlanCreateNestedOneWithoutUserSubscriptionsInput
    payments?: PaymentCreateNestedManyWithoutUserSubscriptionInput
  }

  export type UserSubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    planId: string
    planType: $Enums.PlanType
    monthlyPrice: Decimal | DecimalJsLike | number | string
    discountPercent?: number
    totalAmount: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.SubscriptionStatus
    autoRenew?: boolean
    mpPreferenceId?: string | null
    mpSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutUserSubscriptionInput
  }

  export type UserSubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    monthlyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    mpPreferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    mpSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserSubscriptionsNestedInput
    plan?: SubscriptionPlanUpdateOneRequiredWithoutUserSubscriptionsNestedInput
    payments?: PaymentUpdateManyWithoutUserSubscriptionNestedInput
  }

  export type UserSubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    monthlyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    mpPreferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    mpSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutUserSubscriptionNestedInput
  }

  export type UserSubscriptionCreateManyInput = {
    id?: string
    userId: string
    planId: string
    planType: $Enums.PlanType
    monthlyPrice: Decimal | DecimalJsLike | number | string
    discountPercent?: number
    totalAmount: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.SubscriptionStatus
    autoRenew?: boolean
    mpPreferenceId?: string | null
    mpSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    monthlyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    mpPreferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    mpSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    monthlyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    mpPreferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    mpSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    finalAmount: Decimal | DecimalJsLike | number | string
    paymentMethod: $Enums.MercadoPagoPaymentMethod
    mpPaymentId?: string | null
    mpStatus?: string | null
    mpStatusDetail?: string | null
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
    userSubscription: UserSubscriptionCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    userId: string
    userSubscriptionId: string
    amount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    finalAmount: Decimal | DecimalJsLike | number | string
    paymentMethod: $Enums.MercadoPagoPaymentMethod
    mpPaymentId?: string | null
    mpStatus?: string | null
    mpStatusDetail?: string | null
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumMercadoPagoPaymentMethodFieldUpdateOperationsInput | $Enums.MercadoPagoPaymentMethod
    mpPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    mpStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mpStatusDetail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
    userSubscription?: UserSubscriptionUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userSubscriptionId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumMercadoPagoPaymentMethodFieldUpdateOperationsInput | $Enums.MercadoPagoPaymentMethod
    mpPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    mpStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mpStatusDetail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    userId: string
    userSubscriptionId: string
    amount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    finalAmount: Decimal | DecimalJsLike | number | string
    paymentMethod: $Enums.MercadoPagoPaymentMethod
    mpPaymentId?: string | null
    mpStatus?: string | null
    mpStatusDetail?: string | null
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumMercadoPagoPaymentMethodFieldUpdateOperationsInput | $Enums.MercadoPagoPaymentMethod
    mpPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    mpStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mpStatusDetail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userSubscriptionId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumMercadoPagoPaymentMethodFieldUpdateOperationsInput | $Enums.MercadoPagoPaymentMethod
    mpPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    mpStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mpStatusDetail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserSubscriptionListRelationFilter = {
    every?: UserSubscriptionWhereInput
    some?: UserSubscriptionWhereInput
    none?: UserSubscriptionWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserSubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    birthDate?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    birthDate?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    birthDate?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumServiceFilter<$PrismaModel = never> = {
    equals?: $Enums.Service | EnumServiceFieldRefInput<$PrismaModel>
    in?: $Enums.Service[] | ListEnumServiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Service[] | ListEnumServiceFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceFilter<$PrismaModel> | $Enums.Service
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CloudFeaturesNullableScalarRelationFilter = {
    is?: CloudFeaturesWhereInput | null
    isNot?: CloudFeaturesWhereInput | null
  }

  export type AgendeFeaturesNullableScalarRelationFilter = {
    is?: AgendeFeaturesWhereInput | null
    isNot?: AgendeFeaturesWhereInput | null
  }

  export type FreelaFeaturesNullableScalarRelationFilter = {
    is?: FreelaFeaturesWhereInput | null
    isNot?: FreelaFeaturesWhereInput | null
  }

  export type BusinessFeaturesNullableScalarRelationFilter = {
    is?: BusinessFeaturesWhereInput | null
    isNot?: BusinessFeaturesWhereInput | null
  }

  export type SubscriptionPlanServiceNameCompoundUniqueInput = {
    service: $Enums.Service
    name: string
  }

  export type SubscriptionPlanCountOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    name?: SortOrder
    description?: SortOrder
    monthlyPrice?: SortOrder
    quarterlyDiscount?: SortOrder
    annualDiscount?: SortOrder
    isActive?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionPlanAvgOrderByAggregateInput = {
    monthlyPrice?: SortOrder
    quarterlyDiscount?: SortOrder
    annualDiscount?: SortOrder
  }

  export type SubscriptionPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    name?: SortOrder
    description?: SortOrder
    monthlyPrice?: SortOrder
    quarterlyDiscount?: SortOrder
    annualDiscount?: SortOrder
    isActive?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionPlanMinOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    name?: SortOrder
    description?: SortOrder
    monthlyPrice?: SortOrder
    quarterlyDiscount?: SortOrder
    annualDiscount?: SortOrder
    isActive?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionPlanSumOrderByAggregateInput = {
    monthlyPrice?: SortOrder
    quarterlyDiscount?: SortOrder
    annualDiscount?: SortOrder
  }

  export type EnumServiceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Service | EnumServiceFieldRefInput<$PrismaModel>
    in?: $Enums.Service[] | ListEnumServiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Service[] | ListEnumServiceFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceWithAggregatesFilter<$PrismaModel> | $Enums.Service
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceFilter<$PrismaModel>
    _max?: NestedEnumServiceFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SubscriptionPlanScalarRelationFilter = {
    is?: SubscriptionPlanWhereInput
    isNot?: SubscriptionPlanWhereInput
  }

  export type CloudFeaturesCountOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    storageGB?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CloudFeaturesAvgOrderByAggregateInput = {
    storageGB?: SortOrder
  }

  export type CloudFeaturesMaxOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    storageGB?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CloudFeaturesMinOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    storageGB?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CloudFeaturesSumOrderByAggregateInput = {
    storageGB?: SortOrder
  }

  export type AgendeFeaturesCountOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    maxAppointmentsPerMonth?: SortOrder
    maxOrganizations?: SortOrder
    maxPointsPerOrganization?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgendeFeaturesAvgOrderByAggregateInput = {
    maxAppointmentsPerMonth?: SortOrder
    maxOrganizations?: SortOrder
    maxPointsPerOrganization?: SortOrder
  }

  export type AgendeFeaturesMaxOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    maxAppointmentsPerMonth?: SortOrder
    maxOrganizations?: SortOrder
    maxPointsPerOrganization?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgendeFeaturesMinOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    maxAppointmentsPerMonth?: SortOrder
    maxOrganizations?: SortOrder
    maxPointsPerOrganization?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgendeFeaturesSumOrderByAggregateInput = {
    maxAppointmentsPerMonth?: SortOrder
    maxOrganizations?: SortOrder
    maxPointsPerOrganization?: SortOrder
  }

  export type FreelaFeaturesCountOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FreelaFeaturesMaxOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FreelaFeaturesMinOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessFeaturesCountOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessFeaturesMaxOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessFeaturesMinOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    planType?: SortOrder
    monthlyPrice?: SortOrder
    discountPercent?: SortOrder
    totalAmount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    autoRenew?: SortOrder
    mpPreferenceId?: SortOrder
    mpSubscriptionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSubscriptionAvgOrderByAggregateInput = {
    monthlyPrice?: SortOrder
    discountPercent?: SortOrder
    totalAmount?: SortOrder
  }

  export type UserSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    planType?: SortOrder
    monthlyPrice?: SortOrder
    discountPercent?: SortOrder
    totalAmount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    autoRenew?: SortOrder
    mpPreferenceId?: SortOrder
    mpSubscriptionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    planType?: SortOrder
    monthlyPrice?: SortOrder
    discountPercent?: SortOrder
    totalAmount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    autoRenew?: SortOrder
    mpPreferenceId?: SortOrder
    mpSubscriptionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSubscriptionSumOrderByAggregateInput = {
    monthlyPrice?: SortOrder
    discountPercent?: SortOrder
    totalAmount?: SortOrder
  }

  export type EnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type EnumMercadoPagoPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.MercadoPagoPaymentMethod | EnumMercadoPagoPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.MercadoPagoPaymentMethod[] | ListEnumMercadoPagoPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.MercadoPagoPaymentMethod[] | ListEnumMercadoPagoPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumMercadoPagoPaymentMethodFilter<$PrismaModel> | $Enums.MercadoPagoPaymentMethod
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserSubscriptionScalarRelationFilter = {
    is?: UserSubscriptionWhereInput
    isNot?: UserSubscriptionWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userSubscriptionId?: SortOrder
    amount?: SortOrder
    discountAmount?: SortOrder
    finalAmount?: SortOrder
    paymentMethod?: SortOrder
    mpPaymentId?: SortOrder
    mpStatus?: SortOrder
    mpStatusDetail?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    metadata?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
    discountAmount?: SortOrder
    finalAmount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userSubscriptionId?: SortOrder
    amount?: SortOrder
    discountAmount?: SortOrder
    finalAmount?: SortOrder
    paymentMethod?: SortOrder
    mpPaymentId?: SortOrder
    mpStatus?: SortOrder
    mpStatusDetail?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userSubscriptionId?: SortOrder
    amount?: SortOrder
    discountAmount?: SortOrder
    finalAmount?: SortOrder
    paymentMethod?: SortOrder
    mpPaymentId?: SortOrder
    mpStatus?: SortOrder
    mpStatusDetail?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
    discountAmount?: SortOrder
    finalAmount?: SortOrder
  }

  export type EnumMercadoPagoPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MercadoPagoPaymentMethod | EnumMercadoPagoPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.MercadoPagoPaymentMethod[] | ListEnumMercadoPagoPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.MercadoPagoPaymentMethod[] | ListEnumMercadoPagoPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumMercadoPagoPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.MercadoPagoPaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMercadoPagoPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumMercadoPagoPaymentMethodFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type UserSubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput> | UserSubscriptionCreateWithoutUserInput[] | UserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput | UserSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: UserSubscriptionCreateManyUserInputEnvelope
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type UserSubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput> | UserSubscriptionCreateWithoutUserInput[] | UserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput | UserSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: UserSubscriptionCreateManyUserInputEnvelope
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserSubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput> | UserSubscriptionCreateWithoutUserInput[] | UserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput | UserSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: UserSubscriptionUpsertWithWhereUniqueWithoutUserInput | UserSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSubscriptionCreateManyUserInputEnvelope
    set?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    disconnect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    delete?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    update?: UserSubscriptionUpdateWithWhereUniqueWithoutUserInput | UserSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSubscriptionUpdateManyWithWhereWithoutUserInput | UserSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput> | UserSubscriptionCreateWithoutUserInput[] | UserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput | UserSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: UserSubscriptionUpsertWithWhereUniqueWithoutUserInput | UserSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSubscriptionCreateManyUserInputEnvelope
    set?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    disconnect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    delete?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    update?: UserSubscriptionUpdateWithWhereUniqueWithoutUserInput | UserSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSubscriptionUpdateManyWithWhereWithoutUserInput | UserSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type CloudFeaturesCreateNestedOneWithoutPlanInput = {
    create?: XOR<CloudFeaturesCreateWithoutPlanInput, CloudFeaturesUncheckedCreateWithoutPlanInput>
    connectOrCreate?: CloudFeaturesCreateOrConnectWithoutPlanInput
    connect?: CloudFeaturesWhereUniqueInput
  }

  export type AgendeFeaturesCreateNestedOneWithoutPlanInput = {
    create?: XOR<AgendeFeaturesCreateWithoutPlanInput, AgendeFeaturesUncheckedCreateWithoutPlanInput>
    connectOrCreate?: AgendeFeaturesCreateOrConnectWithoutPlanInput
    connect?: AgendeFeaturesWhereUniqueInput
  }

  export type FreelaFeaturesCreateNestedOneWithoutPlanInput = {
    create?: XOR<FreelaFeaturesCreateWithoutPlanInput, FreelaFeaturesUncheckedCreateWithoutPlanInput>
    connectOrCreate?: FreelaFeaturesCreateOrConnectWithoutPlanInput
    connect?: FreelaFeaturesWhereUniqueInput
  }

  export type BusinessFeaturesCreateNestedOneWithoutPlanInput = {
    create?: XOR<BusinessFeaturesCreateWithoutPlanInput, BusinessFeaturesUncheckedCreateWithoutPlanInput>
    connectOrCreate?: BusinessFeaturesCreateOrConnectWithoutPlanInput
    connect?: BusinessFeaturesWhereUniqueInput
  }

  export type UserSubscriptionCreateNestedManyWithoutPlanInput = {
    create?: XOR<UserSubscriptionCreateWithoutPlanInput, UserSubscriptionUncheckedCreateWithoutPlanInput> | UserSubscriptionCreateWithoutPlanInput[] | UserSubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutPlanInput | UserSubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: UserSubscriptionCreateManyPlanInputEnvelope
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
  }

  export type CloudFeaturesUncheckedCreateNestedOneWithoutPlanInput = {
    create?: XOR<CloudFeaturesCreateWithoutPlanInput, CloudFeaturesUncheckedCreateWithoutPlanInput>
    connectOrCreate?: CloudFeaturesCreateOrConnectWithoutPlanInput
    connect?: CloudFeaturesWhereUniqueInput
  }

  export type AgendeFeaturesUncheckedCreateNestedOneWithoutPlanInput = {
    create?: XOR<AgendeFeaturesCreateWithoutPlanInput, AgendeFeaturesUncheckedCreateWithoutPlanInput>
    connectOrCreate?: AgendeFeaturesCreateOrConnectWithoutPlanInput
    connect?: AgendeFeaturesWhereUniqueInput
  }

  export type FreelaFeaturesUncheckedCreateNestedOneWithoutPlanInput = {
    create?: XOR<FreelaFeaturesCreateWithoutPlanInput, FreelaFeaturesUncheckedCreateWithoutPlanInput>
    connectOrCreate?: FreelaFeaturesCreateOrConnectWithoutPlanInput
    connect?: FreelaFeaturesWhereUniqueInput
  }

  export type BusinessFeaturesUncheckedCreateNestedOneWithoutPlanInput = {
    create?: XOR<BusinessFeaturesCreateWithoutPlanInput, BusinessFeaturesUncheckedCreateWithoutPlanInput>
    connectOrCreate?: BusinessFeaturesCreateOrConnectWithoutPlanInput
    connect?: BusinessFeaturesWhereUniqueInput
  }

  export type UserSubscriptionUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<UserSubscriptionCreateWithoutPlanInput, UserSubscriptionUncheckedCreateWithoutPlanInput> | UserSubscriptionCreateWithoutPlanInput[] | UserSubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutPlanInput | UserSubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: UserSubscriptionCreateManyPlanInputEnvelope
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
  }

  export type EnumServiceFieldUpdateOperationsInput = {
    set?: $Enums.Service
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CloudFeaturesUpdateOneWithoutPlanNestedInput = {
    create?: XOR<CloudFeaturesCreateWithoutPlanInput, CloudFeaturesUncheckedCreateWithoutPlanInput>
    connectOrCreate?: CloudFeaturesCreateOrConnectWithoutPlanInput
    upsert?: CloudFeaturesUpsertWithoutPlanInput
    disconnect?: CloudFeaturesWhereInput | boolean
    delete?: CloudFeaturesWhereInput | boolean
    connect?: CloudFeaturesWhereUniqueInput
    update?: XOR<XOR<CloudFeaturesUpdateToOneWithWhereWithoutPlanInput, CloudFeaturesUpdateWithoutPlanInput>, CloudFeaturesUncheckedUpdateWithoutPlanInput>
  }

  export type AgendeFeaturesUpdateOneWithoutPlanNestedInput = {
    create?: XOR<AgendeFeaturesCreateWithoutPlanInput, AgendeFeaturesUncheckedCreateWithoutPlanInput>
    connectOrCreate?: AgendeFeaturesCreateOrConnectWithoutPlanInput
    upsert?: AgendeFeaturesUpsertWithoutPlanInput
    disconnect?: AgendeFeaturesWhereInput | boolean
    delete?: AgendeFeaturesWhereInput | boolean
    connect?: AgendeFeaturesWhereUniqueInput
    update?: XOR<XOR<AgendeFeaturesUpdateToOneWithWhereWithoutPlanInput, AgendeFeaturesUpdateWithoutPlanInput>, AgendeFeaturesUncheckedUpdateWithoutPlanInput>
  }

  export type FreelaFeaturesUpdateOneWithoutPlanNestedInput = {
    create?: XOR<FreelaFeaturesCreateWithoutPlanInput, FreelaFeaturesUncheckedCreateWithoutPlanInput>
    connectOrCreate?: FreelaFeaturesCreateOrConnectWithoutPlanInput
    upsert?: FreelaFeaturesUpsertWithoutPlanInput
    disconnect?: FreelaFeaturesWhereInput | boolean
    delete?: FreelaFeaturesWhereInput | boolean
    connect?: FreelaFeaturesWhereUniqueInput
    update?: XOR<XOR<FreelaFeaturesUpdateToOneWithWhereWithoutPlanInput, FreelaFeaturesUpdateWithoutPlanInput>, FreelaFeaturesUncheckedUpdateWithoutPlanInput>
  }

  export type BusinessFeaturesUpdateOneWithoutPlanNestedInput = {
    create?: XOR<BusinessFeaturesCreateWithoutPlanInput, BusinessFeaturesUncheckedCreateWithoutPlanInput>
    connectOrCreate?: BusinessFeaturesCreateOrConnectWithoutPlanInput
    upsert?: BusinessFeaturesUpsertWithoutPlanInput
    disconnect?: BusinessFeaturesWhereInput | boolean
    delete?: BusinessFeaturesWhereInput | boolean
    connect?: BusinessFeaturesWhereUniqueInput
    update?: XOR<XOR<BusinessFeaturesUpdateToOneWithWhereWithoutPlanInput, BusinessFeaturesUpdateWithoutPlanInput>, BusinessFeaturesUncheckedUpdateWithoutPlanInput>
  }

  export type UserSubscriptionUpdateManyWithoutPlanNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutPlanInput, UserSubscriptionUncheckedCreateWithoutPlanInput> | UserSubscriptionCreateWithoutPlanInput[] | UserSubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutPlanInput | UserSubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: UserSubscriptionUpsertWithWhereUniqueWithoutPlanInput | UserSubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: UserSubscriptionCreateManyPlanInputEnvelope
    set?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    disconnect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    delete?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    update?: UserSubscriptionUpdateWithWhereUniqueWithoutPlanInput | UserSubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: UserSubscriptionUpdateManyWithWhereWithoutPlanInput | UserSubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
  }

  export type CloudFeaturesUncheckedUpdateOneWithoutPlanNestedInput = {
    create?: XOR<CloudFeaturesCreateWithoutPlanInput, CloudFeaturesUncheckedCreateWithoutPlanInput>
    connectOrCreate?: CloudFeaturesCreateOrConnectWithoutPlanInput
    upsert?: CloudFeaturesUpsertWithoutPlanInput
    disconnect?: CloudFeaturesWhereInput | boolean
    delete?: CloudFeaturesWhereInput | boolean
    connect?: CloudFeaturesWhereUniqueInput
    update?: XOR<XOR<CloudFeaturesUpdateToOneWithWhereWithoutPlanInput, CloudFeaturesUpdateWithoutPlanInput>, CloudFeaturesUncheckedUpdateWithoutPlanInput>
  }

  export type AgendeFeaturesUncheckedUpdateOneWithoutPlanNestedInput = {
    create?: XOR<AgendeFeaturesCreateWithoutPlanInput, AgendeFeaturesUncheckedCreateWithoutPlanInput>
    connectOrCreate?: AgendeFeaturesCreateOrConnectWithoutPlanInput
    upsert?: AgendeFeaturesUpsertWithoutPlanInput
    disconnect?: AgendeFeaturesWhereInput | boolean
    delete?: AgendeFeaturesWhereInput | boolean
    connect?: AgendeFeaturesWhereUniqueInput
    update?: XOR<XOR<AgendeFeaturesUpdateToOneWithWhereWithoutPlanInput, AgendeFeaturesUpdateWithoutPlanInput>, AgendeFeaturesUncheckedUpdateWithoutPlanInput>
  }

  export type FreelaFeaturesUncheckedUpdateOneWithoutPlanNestedInput = {
    create?: XOR<FreelaFeaturesCreateWithoutPlanInput, FreelaFeaturesUncheckedCreateWithoutPlanInput>
    connectOrCreate?: FreelaFeaturesCreateOrConnectWithoutPlanInput
    upsert?: FreelaFeaturesUpsertWithoutPlanInput
    disconnect?: FreelaFeaturesWhereInput | boolean
    delete?: FreelaFeaturesWhereInput | boolean
    connect?: FreelaFeaturesWhereUniqueInput
    update?: XOR<XOR<FreelaFeaturesUpdateToOneWithWhereWithoutPlanInput, FreelaFeaturesUpdateWithoutPlanInput>, FreelaFeaturesUncheckedUpdateWithoutPlanInput>
  }

  export type BusinessFeaturesUncheckedUpdateOneWithoutPlanNestedInput = {
    create?: XOR<BusinessFeaturesCreateWithoutPlanInput, BusinessFeaturesUncheckedCreateWithoutPlanInput>
    connectOrCreate?: BusinessFeaturesCreateOrConnectWithoutPlanInput
    upsert?: BusinessFeaturesUpsertWithoutPlanInput
    disconnect?: BusinessFeaturesWhereInput | boolean
    delete?: BusinessFeaturesWhereInput | boolean
    connect?: BusinessFeaturesWhereUniqueInput
    update?: XOR<XOR<BusinessFeaturesUpdateToOneWithWhereWithoutPlanInput, BusinessFeaturesUpdateWithoutPlanInput>, BusinessFeaturesUncheckedUpdateWithoutPlanInput>
  }

  export type UserSubscriptionUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutPlanInput, UserSubscriptionUncheckedCreateWithoutPlanInput> | UserSubscriptionCreateWithoutPlanInput[] | UserSubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutPlanInput | UserSubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: UserSubscriptionUpsertWithWhereUniqueWithoutPlanInput | UserSubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: UserSubscriptionCreateManyPlanInputEnvelope
    set?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    disconnect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    delete?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    update?: UserSubscriptionUpdateWithWhereUniqueWithoutPlanInput | UserSubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: UserSubscriptionUpdateManyWithWhereWithoutPlanInput | UserSubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
  }

  export type SubscriptionPlanCreateNestedOneWithoutCloudFeaturesInput = {
    create?: XOR<SubscriptionPlanCreateWithoutCloudFeaturesInput, SubscriptionPlanUncheckedCreateWithoutCloudFeaturesInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutCloudFeaturesInput
    connect?: SubscriptionPlanWhereUniqueInput
  }

  export type SubscriptionPlanUpdateOneRequiredWithoutCloudFeaturesNestedInput = {
    create?: XOR<SubscriptionPlanCreateWithoutCloudFeaturesInput, SubscriptionPlanUncheckedCreateWithoutCloudFeaturesInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutCloudFeaturesInput
    upsert?: SubscriptionPlanUpsertWithoutCloudFeaturesInput
    connect?: SubscriptionPlanWhereUniqueInput
    update?: XOR<XOR<SubscriptionPlanUpdateToOneWithWhereWithoutCloudFeaturesInput, SubscriptionPlanUpdateWithoutCloudFeaturesInput>, SubscriptionPlanUncheckedUpdateWithoutCloudFeaturesInput>
  }

  export type SubscriptionPlanCreateNestedOneWithoutAgendeFeaturesInput = {
    create?: XOR<SubscriptionPlanCreateWithoutAgendeFeaturesInput, SubscriptionPlanUncheckedCreateWithoutAgendeFeaturesInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutAgendeFeaturesInput
    connect?: SubscriptionPlanWhereUniqueInput
  }

  export type SubscriptionPlanUpdateOneRequiredWithoutAgendeFeaturesNestedInput = {
    create?: XOR<SubscriptionPlanCreateWithoutAgendeFeaturesInput, SubscriptionPlanUncheckedCreateWithoutAgendeFeaturesInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutAgendeFeaturesInput
    upsert?: SubscriptionPlanUpsertWithoutAgendeFeaturesInput
    connect?: SubscriptionPlanWhereUniqueInput
    update?: XOR<XOR<SubscriptionPlanUpdateToOneWithWhereWithoutAgendeFeaturesInput, SubscriptionPlanUpdateWithoutAgendeFeaturesInput>, SubscriptionPlanUncheckedUpdateWithoutAgendeFeaturesInput>
  }

  export type SubscriptionPlanCreateNestedOneWithoutFreelaFeaturesInput = {
    create?: XOR<SubscriptionPlanCreateWithoutFreelaFeaturesInput, SubscriptionPlanUncheckedCreateWithoutFreelaFeaturesInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutFreelaFeaturesInput
    connect?: SubscriptionPlanWhereUniqueInput
  }

  export type SubscriptionPlanUpdateOneRequiredWithoutFreelaFeaturesNestedInput = {
    create?: XOR<SubscriptionPlanCreateWithoutFreelaFeaturesInput, SubscriptionPlanUncheckedCreateWithoutFreelaFeaturesInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutFreelaFeaturesInput
    upsert?: SubscriptionPlanUpsertWithoutFreelaFeaturesInput
    connect?: SubscriptionPlanWhereUniqueInput
    update?: XOR<XOR<SubscriptionPlanUpdateToOneWithWhereWithoutFreelaFeaturesInput, SubscriptionPlanUpdateWithoutFreelaFeaturesInput>, SubscriptionPlanUncheckedUpdateWithoutFreelaFeaturesInput>
  }

  export type SubscriptionPlanCreateNestedOneWithoutBusinessFeaturesInput = {
    create?: XOR<SubscriptionPlanCreateWithoutBusinessFeaturesInput, SubscriptionPlanUncheckedCreateWithoutBusinessFeaturesInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutBusinessFeaturesInput
    connect?: SubscriptionPlanWhereUniqueInput
  }

  export type SubscriptionPlanUpdateOneRequiredWithoutBusinessFeaturesNestedInput = {
    create?: XOR<SubscriptionPlanCreateWithoutBusinessFeaturesInput, SubscriptionPlanUncheckedCreateWithoutBusinessFeaturesInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutBusinessFeaturesInput
    upsert?: SubscriptionPlanUpsertWithoutBusinessFeaturesInput
    connect?: SubscriptionPlanWhereUniqueInput
    update?: XOR<XOR<SubscriptionPlanUpdateToOneWithWhereWithoutBusinessFeaturesInput, SubscriptionPlanUpdateWithoutBusinessFeaturesInput>, SubscriptionPlanUncheckedUpdateWithoutBusinessFeaturesInput>
  }

  export type UserCreateNestedOneWithoutUserSubscriptionsInput = {
    create?: XOR<UserCreateWithoutUserSubscriptionsInput, UserUncheckedCreateWithoutUserSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type SubscriptionPlanCreateNestedOneWithoutUserSubscriptionsInput = {
    create?: XOR<SubscriptionPlanCreateWithoutUserSubscriptionsInput, SubscriptionPlanUncheckedCreateWithoutUserSubscriptionsInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutUserSubscriptionsInput
    connect?: SubscriptionPlanWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutUserSubscriptionInput = {
    create?: XOR<PaymentCreateWithoutUserSubscriptionInput, PaymentUncheckedCreateWithoutUserSubscriptionInput> | PaymentCreateWithoutUserSubscriptionInput[] | PaymentUncheckedCreateWithoutUserSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserSubscriptionInput | PaymentCreateOrConnectWithoutUserSubscriptionInput[]
    createMany?: PaymentCreateManyUserSubscriptionInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserSubscriptionInput = {
    create?: XOR<PaymentCreateWithoutUserSubscriptionInput, PaymentUncheckedCreateWithoutUserSubscriptionInput> | PaymentCreateWithoutUserSubscriptionInput[] | PaymentUncheckedCreateWithoutUserSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserSubscriptionInput | PaymentCreateOrConnectWithoutUserSubscriptionInput[]
    createMany?: PaymentCreateManyUserSubscriptionInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumPlanTypeFieldUpdateOperationsInput = {
    set?: $Enums.PlanType
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type UserUpdateOneRequiredWithoutUserSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutUserSubscriptionsInput, UserUncheckedCreateWithoutUserSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSubscriptionsInput
    upsert?: UserUpsertWithoutUserSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserSubscriptionsInput, UserUpdateWithoutUserSubscriptionsInput>, UserUncheckedUpdateWithoutUserSubscriptionsInput>
  }

  export type SubscriptionPlanUpdateOneRequiredWithoutUserSubscriptionsNestedInput = {
    create?: XOR<SubscriptionPlanCreateWithoutUserSubscriptionsInput, SubscriptionPlanUncheckedCreateWithoutUserSubscriptionsInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutUserSubscriptionsInput
    upsert?: SubscriptionPlanUpsertWithoutUserSubscriptionsInput
    connect?: SubscriptionPlanWhereUniqueInput
    update?: XOR<XOR<SubscriptionPlanUpdateToOneWithWhereWithoutUserSubscriptionsInput, SubscriptionPlanUpdateWithoutUserSubscriptionsInput>, SubscriptionPlanUncheckedUpdateWithoutUserSubscriptionsInput>
  }

  export type PaymentUpdateManyWithoutUserSubscriptionNestedInput = {
    create?: XOR<PaymentCreateWithoutUserSubscriptionInput, PaymentUncheckedCreateWithoutUserSubscriptionInput> | PaymentCreateWithoutUserSubscriptionInput[] | PaymentUncheckedCreateWithoutUserSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserSubscriptionInput | PaymentCreateOrConnectWithoutUserSubscriptionInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserSubscriptionInput | PaymentUpsertWithWhereUniqueWithoutUserSubscriptionInput[]
    createMany?: PaymentCreateManyUserSubscriptionInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserSubscriptionInput | PaymentUpdateWithWhereUniqueWithoutUserSubscriptionInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserSubscriptionInput | PaymentUpdateManyWithWhereWithoutUserSubscriptionInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserSubscriptionNestedInput = {
    create?: XOR<PaymentCreateWithoutUserSubscriptionInput, PaymentUncheckedCreateWithoutUserSubscriptionInput> | PaymentCreateWithoutUserSubscriptionInput[] | PaymentUncheckedCreateWithoutUserSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserSubscriptionInput | PaymentCreateOrConnectWithoutUserSubscriptionInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserSubscriptionInput | PaymentUpsertWithWhereUniqueWithoutUserSubscriptionInput[]
    createMany?: PaymentCreateManyUserSubscriptionInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserSubscriptionInput | PaymentUpdateWithWhereUniqueWithoutUserSubscriptionInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserSubscriptionInput | PaymentUpdateManyWithWhereWithoutUserSubscriptionInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserSubscriptionCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserSubscriptionCreateWithoutPaymentsInput, UserSubscriptionUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutPaymentsInput
    connect?: UserSubscriptionWhereUniqueInput
  }

  export type EnumMercadoPagoPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.MercadoPagoPaymentMethod
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserSubscriptionUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutPaymentsInput, UserSubscriptionUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutPaymentsInput
    upsert?: UserSubscriptionUpsertWithoutPaymentsInput
    connect?: UserSubscriptionWhereUniqueInput
    update?: XOR<XOR<UserSubscriptionUpdateToOneWithWhereWithoutPaymentsInput, UserSubscriptionUpdateWithoutPaymentsInput>, UserSubscriptionUncheckedUpdateWithoutPaymentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumServiceFilter<$PrismaModel = never> = {
    equals?: $Enums.Service | EnumServiceFieldRefInput<$PrismaModel>
    in?: $Enums.Service[] | ListEnumServiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Service[] | ListEnumServiceFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceFilter<$PrismaModel> | $Enums.Service
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumServiceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Service | EnumServiceFieldRefInput<$PrismaModel>
    in?: $Enums.Service[] | ListEnumServiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Service[] | ListEnumServiceFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceWithAggregatesFilter<$PrismaModel> | $Enums.Service
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceFilter<$PrismaModel>
    _max?: NestedEnumServiceFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
  }

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type NestedEnumMercadoPagoPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.MercadoPagoPaymentMethod | EnumMercadoPagoPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.MercadoPagoPaymentMethod[] | ListEnumMercadoPagoPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.MercadoPagoPaymentMethod[] | ListEnumMercadoPagoPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumMercadoPagoPaymentMethodFilter<$PrismaModel> | $Enums.MercadoPagoPaymentMethod
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumMercadoPagoPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MercadoPagoPaymentMethod | EnumMercadoPagoPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.MercadoPagoPaymentMethod[] | ListEnumMercadoPagoPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.MercadoPagoPaymentMethod[] | ListEnumMercadoPagoPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumMercadoPagoPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.MercadoPagoPaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMercadoPagoPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumMercadoPagoPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserSubscriptionCreateWithoutUserInput = {
    id?: string
    planType: $Enums.PlanType
    monthlyPrice: Decimal | DecimalJsLike | number | string
    discountPercent?: number
    totalAmount: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.SubscriptionStatus
    autoRenew?: boolean
    mpPreferenceId?: string | null
    mpSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: SubscriptionPlanCreateNestedOneWithoutUserSubscriptionsInput
    payments?: PaymentCreateNestedManyWithoutUserSubscriptionInput
  }

  export type UserSubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    planId: string
    planType: $Enums.PlanType
    monthlyPrice: Decimal | DecimalJsLike | number | string
    discountPercent?: number
    totalAmount: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.SubscriptionStatus
    autoRenew?: boolean
    mpPreferenceId?: string | null
    mpSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutUserSubscriptionInput
  }

  export type UserSubscriptionCreateOrConnectWithoutUserInput = {
    where: UserSubscriptionWhereUniqueInput
    create: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type UserSubscriptionCreateManyUserInputEnvelope = {
    data: UserSubscriptionCreateManyUserInput | UserSubscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    finalAmount: Decimal | DecimalJsLike | number | string
    paymentMethod: $Enums.MercadoPagoPaymentMethod
    mpPaymentId?: string | null
    mpStatus?: string | null
    mpStatusDetail?: string | null
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userSubscription: UserSubscriptionCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: string
    userSubscriptionId: string
    amount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    finalAmount: Decimal | DecimalJsLike | number | string
    paymentMethod: $Enums.MercadoPagoPaymentMethod
    mpPaymentId?: string | null
    mpStatus?: string | null
    mpStatusDetail?: string | null
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSubscriptionWhereUniqueInput
    update: XOR<UserSubscriptionUpdateWithoutUserInput, UserSubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type UserSubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSubscriptionWhereUniqueInput
    data: XOR<UserSubscriptionUpdateWithoutUserInput, UserSubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type UserSubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: UserSubscriptionScalarWhereInput
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSubscriptionScalarWhereInput = {
    AND?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
    OR?: UserSubscriptionScalarWhereInput[]
    NOT?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
    id?: StringFilter<"UserSubscription"> | string
    userId?: StringFilter<"UserSubscription"> | string
    planId?: StringFilter<"UserSubscription"> | string
    planType?: EnumPlanTypeFilter<"UserSubscription"> | $Enums.PlanType
    monthlyPrice?: DecimalFilter<"UserSubscription"> | Decimal | DecimalJsLike | number | string
    discountPercent?: IntFilter<"UserSubscription"> | number
    totalAmount?: DecimalFilter<"UserSubscription"> | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFilter<"UserSubscription"> | Date | string
    endDate?: DateTimeFilter<"UserSubscription"> | Date | string
    status?: EnumSubscriptionStatusFilter<"UserSubscription"> | $Enums.SubscriptionStatus
    autoRenew?: BoolFilter<"UserSubscription"> | boolean
    mpPreferenceId?: StringNullableFilter<"UserSubscription"> | string | null
    mpSubscriptionId?: StringNullableFilter<"UserSubscription"> | string | null
    createdAt?: DateTimeFilter<"UserSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"UserSubscription"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    userSubscriptionId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumMercadoPagoPaymentMethodFilter<"Payment"> | $Enums.MercadoPagoPaymentMethod
    mpPaymentId?: StringNullableFilter<"Payment"> | string | null
    mpStatus?: StringNullableFilter<"Payment"> | string | null
    mpStatusDetail?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    metadata?: JsonNullableFilter<"Payment">
    errorMessage?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type CloudFeaturesCreateWithoutPlanInput = {
    id?: string
    storageGB: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CloudFeaturesUncheckedCreateWithoutPlanInput = {
    id?: string
    storageGB: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CloudFeaturesCreateOrConnectWithoutPlanInput = {
    where: CloudFeaturesWhereUniqueInput
    create: XOR<CloudFeaturesCreateWithoutPlanInput, CloudFeaturesUncheckedCreateWithoutPlanInput>
  }

  export type AgendeFeaturesCreateWithoutPlanInput = {
    id?: string
    maxAppointmentsPerMonth: number
    maxOrganizations: number
    maxPointsPerOrganization: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgendeFeaturesUncheckedCreateWithoutPlanInput = {
    id?: string
    maxAppointmentsPerMonth: number
    maxOrganizations: number
    maxPointsPerOrganization: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgendeFeaturesCreateOrConnectWithoutPlanInput = {
    where: AgendeFeaturesWhereUniqueInput
    create: XOR<AgendeFeaturesCreateWithoutPlanInput, AgendeFeaturesUncheckedCreateWithoutPlanInput>
  }

  export type FreelaFeaturesCreateWithoutPlanInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FreelaFeaturesUncheckedCreateWithoutPlanInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FreelaFeaturesCreateOrConnectWithoutPlanInput = {
    where: FreelaFeaturesWhereUniqueInput
    create: XOR<FreelaFeaturesCreateWithoutPlanInput, FreelaFeaturesUncheckedCreateWithoutPlanInput>
  }

  export type BusinessFeaturesCreateWithoutPlanInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessFeaturesUncheckedCreateWithoutPlanInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessFeaturesCreateOrConnectWithoutPlanInput = {
    where: BusinessFeaturesWhereUniqueInput
    create: XOR<BusinessFeaturesCreateWithoutPlanInput, BusinessFeaturesUncheckedCreateWithoutPlanInput>
  }

  export type UserSubscriptionCreateWithoutPlanInput = {
    id?: string
    planType: $Enums.PlanType
    monthlyPrice: Decimal | DecimalJsLike | number | string
    discountPercent?: number
    totalAmount: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.SubscriptionStatus
    autoRenew?: boolean
    mpPreferenceId?: string | null
    mpSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserSubscriptionsInput
    payments?: PaymentCreateNestedManyWithoutUserSubscriptionInput
  }

  export type UserSubscriptionUncheckedCreateWithoutPlanInput = {
    id?: string
    userId: string
    planType: $Enums.PlanType
    monthlyPrice: Decimal | DecimalJsLike | number | string
    discountPercent?: number
    totalAmount: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.SubscriptionStatus
    autoRenew?: boolean
    mpPreferenceId?: string | null
    mpSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutUserSubscriptionInput
  }

  export type UserSubscriptionCreateOrConnectWithoutPlanInput = {
    where: UserSubscriptionWhereUniqueInput
    create: XOR<UserSubscriptionCreateWithoutPlanInput, UserSubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type UserSubscriptionCreateManyPlanInputEnvelope = {
    data: UserSubscriptionCreateManyPlanInput | UserSubscriptionCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type CloudFeaturesUpsertWithoutPlanInput = {
    update: XOR<CloudFeaturesUpdateWithoutPlanInput, CloudFeaturesUncheckedUpdateWithoutPlanInput>
    create: XOR<CloudFeaturesCreateWithoutPlanInput, CloudFeaturesUncheckedCreateWithoutPlanInput>
    where?: CloudFeaturesWhereInput
  }

  export type CloudFeaturesUpdateToOneWithWhereWithoutPlanInput = {
    where?: CloudFeaturesWhereInput
    data: XOR<CloudFeaturesUpdateWithoutPlanInput, CloudFeaturesUncheckedUpdateWithoutPlanInput>
  }

  export type CloudFeaturesUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    storageGB?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CloudFeaturesUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    storageGB?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendeFeaturesUpsertWithoutPlanInput = {
    update: XOR<AgendeFeaturesUpdateWithoutPlanInput, AgendeFeaturesUncheckedUpdateWithoutPlanInput>
    create: XOR<AgendeFeaturesCreateWithoutPlanInput, AgendeFeaturesUncheckedCreateWithoutPlanInput>
    where?: AgendeFeaturesWhereInput
  }

  export type AgendeFeaturesUpdateToOneWithWhereWithoutPlanInput = {
    where?: AgendeFeaturesWhereInput
    data: XOR<AgendeFeaturesUpdateWithoutPlanInput, AgendeFeaturesUncheckedUpdateWithoutPlanInput>
  }

  export type AgendeFeaturesUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxAppointmentsPerMonth?: IntFieldUpdateOperationsInput | number
    maxOrganizations?: IntFieldUpdateOperationsInput | number
    maxPointsPerOrganization?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendeFeaturesUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxAppointmentsPerMonth?: IntFieldUpdateOperationsInput | number
    maxOrganizations?: IntFieldUpdateOperationsInput | number
    maxPointsPerOrganization?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FreelaFeaturesUpsertWithoutPlanInput = {
    update: XOR<FreelaFeaturesUpdateWithoutPlanInput, FreelaFeaturesUncheckedUpdateWithoutPlanInput>
    create: XOR<FreelaFeaturesCreateWithoutPlanInput, FreelaFeaturesUncheckedCreateWithoutPlanInput>
    where?: FreelaFeaturesWhereInput
  }

  export type FreelaFeaturesUpdateToOneWithWhereWithoutPlanInput = {
    where?: FreelaFeaturesWhereInput
    data: XOR<FreelaFeaturesUpdateWithoutPlanInput, FreelaFeaturesUncheckedUpdateWithoutPlanInput>
  }

  export type FreelaFeaturesUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FreelaFeaturesUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessFeaturesUpsertWithoutPlanInput = {
    update: XOR<BusinessFeaturesUpdateWithoutPlanInput, BusinessFeaturesUncheckedUpdateWithoutPlanInput>
    create: XOR<BusinessFeaturesCreateWithoutPlanInput, BusinessFeaturesUncheckedCreateWithoutPlanInput>
    where?: BusinessFeaturesWhereInput
  }

  export type BusinessFeaturesUpdateToOneWithWhereWithoutPlanInput = {
    where?: BusinessFeaturesWhereInput
    data: XOR<BusinessFeaturesUpdateWithoutPlanInput, BusinessFeaturesUncheckedUpdateWithoutPlanInput>
  }

  export type BusinessFeaturesUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessFeaturesUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionUpsertWithWhereUniqueWithoutPlanInput = {
    where: UserSubscriptionWhereUniqueInput
    update: XOR<UserSubscriptionUpdateWithoutPlanInput, UserSubscriptionUncheckedUpdateWithoutPlanInput>
    create: XOR<UserSubscriptionCreateWithoutPlanInput, UserSubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type UserSubscriptionUpdateWithWhereUniqueWithoutPlanInput = {
    where: UserSubscriptionWhereUniqueInput
    data: XOR<UserSubscriptionUpdateWithoutPlanInput, UserSubscriptionUncheckedUpdateWithoutPlanInput>
  }

  export type UserSubscriptionUpdateManyWithWhereWithoutPlanInput = {
    where: UserSubscriptionScalarWhereInput
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyWithoutPlanInput>
  }

  export type SubscriptionPlanCreateWithoutCloudFeaturesInput = {
    id?: string
    service: $Enums.Service
    name: string
    description?: string | null
    monthlyPrice: Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: number
    annualDiscount?: number
    isActive?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    agendeFeatures?: AgendeFeaturesCreateNestedOneWithoutPlanInput
    freelaFeatures?: FreelaFeaturesCreateNestedOneWithoutPlanInput
    businessFeatures?: BusinessFeaturesCreateNestedOneWithoutPlanInput
    userSubscriptions?: UserSubscriptionCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanUncheckedCreateWithoutCloudFeaturesInput = {
    id?: string
    service: $Enums.Service
    name: string
    description?: string | null
    monthlyPrice: Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: number
    annualDiscount?: number
    isActive?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    agendeFeatures?: AgendeFeaturesUncheckedCreateNestedOneWithoutPlanInput
    freelaFeatures?: FreelaFeaturesUncheckedCreateNestedOneWithoutPlanInput
    businessFeatures?: BusinessFeaturesUncheckedCreateNestedOneWithoutPlanInput
    userSubscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanCreateOrConnectWithoutCloudFeaturesInput = {
    where: SubscriptionPlanWhereUniqueInput
    create: XOR<SubscriptionPlanCreateWithoutCloudFeaturesInput, SubscriptionPlanUncheckedCreateWithoutCloudFeaturesInput>
  }

  export type SubscriptionPlanUpsertWithoutCloudFeaturesInput = {
    update: XOR<SubscriptionPlanUpdateWithoutCloudFeaturesInput, SubscriptionPlanUncheckedUpdateWithoutCloudFeaturesInput>
    create: XOR<SubscriptionPlanCreateWithoutCloudFeaturesInput, SubscriptionPlanUncheckedCreateWithoutCloudFeaturesInput>
    where?: SubscriptionPlanWhereInput
  }

  export type SubscriptionPlanUpdateToOneWithWhereWithoutCloudFeaturesInput = {
    where?: SubscriptionPlanWhereInput
    data: XOR<SubscriptionPlanUpdateWithoutCloudFeaturesInput, SubscriptionPlanUncheckedUpdateWithoutCloudFeaturesInput>
  }

  export type SubscriptionPlanUpdateWithoutCloudFeaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: EnumServiceFieldUpdateOperationsInput | $Enums.Service
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: IntFieldUpdateOperationsInput | number
    annualDiscount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agendeFeatures?: AgendeFeaturesUpdateOneWithoutPlanNestedInput
    freelaFeatures?: FreelaFeaturesUpdateOneWithoutPlanNestedInput
    businessFeatures?: BusinessFeaturesUpdateOneWithoutPlanNestedInput
    userSubscriptions?: UserSubscriptionUpdateManyWithoutPlanNestedInput
  }

  export type SubscriptionPlanUncheckedUpdateWithoutCloudFeaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: EnumServiceFieldUpdateOperationsInput | $Enums.Service
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: IntFieldUpdateOperationsInput | number
    annualDiscount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agendeFeatures?: AgendeFeaturesUncheckedUpdateOneWithoutPlanNestedInput
    freelaFeatures?: FreelaFeaturesUncheckedUpdateOneWithoutPlanNestedInput
    businessFeatures?: BusinessFeaturesUncheckedUpdateOneWithoutPlanNestedInput
    userSubscriptions?: UserSubscriptionUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type SubscriptionPlanCreateWithoutAgendeFeaturesInput = {
    id?: string
    service: $Enums.Service
    name: string
    description?: string | null
    monthlyPrice: Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: number
    annualDiscount?: number
    isActive?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cloudFeatures?: CloudFeaturesCreateNestedOneWithoutPlanInput
    freelaFeatures?: FreelaFeaturesCreateNestedOneWithoutPlanInput
    businessFeatures?: BusinessFeaturesCreateNestedOneWithoutPlanInput
    userSubscriptions?: UserSubscriptionCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanUncheckedCreateWithoutAgendeFeaturesInput = {
    id?: string
    service: $Enums.Service
    name: string
    description?: string | null
    monthlyPrice: Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: number
    annualDiscount?: number
    isActive?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cloudFeatures?: CloudFeaturesUncheckedCreateNestedOneWithoutPlanInput
    freelaFeatures?: FreelaFeaturesUncheckedCreateNestedOneWithoutPlanInput
    businessFeatures?: BusinessFeaturesUncheckedCreateNestedOneWithoutPlanInput
    userSubscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanCreateOrConnectWithoutAgendeFeaturesInput = {
    where: SubscriptionPlanWhereUniqueInput
    create: XOR<SubscriptionPlanCreateWithoutAgendeFeaturesInput, SubscriptionPlanUncheckedCreateWithoutAgendeFeaturesInput>
  }

  export type SubscriptionPlanUpsertWithoutAgendeFeaturesInput = {
    update: XOR<SubscriptionPlanUpdateWithoutAgendeFeaturesInput, SubscriptionPlanUncheckedUpdateWithoutAgendeFeaturesInput>
    create: XOR<SubscriptionPlanCreateWithoutAgendeFeaturesInput, SubscriptionPlanUncheckedCreateWithoutAgendeFeaturesInput>
    where?: SubscriptionPlanWhereInput
  }

  export type SubscriptionPlanUpdateToOneWithWhereWithoutAgendeFeaturesInput = {
    where?: SubscriptionPlanWhereInput
    data: XOR<SubscriptionPlanUpdateWithoutAgendeFeaturesInput, SubscriptionPlanUncheckedUpdateWithoutAgendeFeaturesInput>
  }

  export type SubscriptionPlanUpdateWithoutAgendeFeaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: EnumServiceFieldUpdateOperationsInput | $Enums.Service
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: IntFieldUpdateOperationsInput | number
    annualDiscount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cloudFeatures?: CloudFeaturesUpdateOneWithoutPlanNestedInput
    freelaFeatures?: FreelaFeaturesUpdateOneWithoutPlanNestedInput
    businessFeatures?: BusinessFeaturesUpdateOneWithoutPlanNestedInput
    userSubscriptions?: UserSubscriptionUpdateManyWithoutPlanNestedInput
  }

  export type SubscriptionPlanUncheckedUpdateWithoutAgendeFeaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: EnumServiceFieldUpdateOperationsInput | $Enums.Service
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: IntFieldUpdateOperationsInput | number
    annualDiscount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cloudFeatures?: CloudFeaturesUncheckedUpdateOneWithoutPlanNestedInput
    freelaFeatures?: FreelaFeaturesUncheckedUpdateOneWithoutPlanNestedInput
    businessFeatures?: BusinessFeaturesUncheckedUpdateOneWithoutPlanNestedInput
    userSubscriptions?: UserSubscriptionUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type SubscriptionPlanCreateWithoutFreelaFeaturesInput = {
    id?: string
    service: $Enums.Service
    name: string
    description?: string | null
    monthlyPrice: Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: number
    annualDiscount?: number
    isActive?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cloudFeatures?: CloudFeaturesCreateNestedOneWithoutPlanInput
    agendeFeatures?: AgendeFeaturesCreateNestedOneWithoutPlanInput
    businessFeatures?: BusinessFeaturesCreateNestedOneWithoutPlanInput
    userSubscriptions?: UserSubscriptionCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanUncheckedCreateWithoutFreelaFeaturesInput = {
    id?: string
    service: $Enums.Service
    name: string
    description?: string | null
    monthlyPrice: Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: number
    annualDiscount?: number
    isActive?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cloudFeatures?: CloudFeaturesUncheckedCreateNestedOneWithoutPlanInput
    agendeFeatures?: AgendeFeaturesUncheckedCreateNestedOneWithoutPlanInput
    businessFeatures?: BusinessFeaturesUncheckedCreateNestedOneWithoutPlanInput
    userSubscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanCreateOrConnectWithoutFreelaFeaturesInput = {
    where: SubscriptionPlanWhereUniqueInput
    create: XOR<SubscriptionPlanCreateWithoutFreelaFeaturesInput, SubscriptionPlanUncheckedCreateWithoutFreelaFeaturesInput>
  }

  export type SubscriptionPlanUpsertWithoutFreelaFeaturesInput = {
    update: XOR<SubscriptionPlanUpdateWithoutFreelaFeaturesInput, SubscriptionPlanUncheckedUpdateWithoutFreelaFeaturesInput>
    create: XOR<SubscriptionPlanCreateWithoutFreelaFeaturesInput, SubscriptionPlanUncheckedCreateWithoutFreelaFeaturesInput>
    where?: SubscriptionPlanWhereInput
  }

  export type SubscriptionPlanUpdateToOneWithWhereWithoutFreelaFeaturesInput = {
    where?: SubscriptionPlanWhereInput
    data: XOR<SubscriptionPlanUpdateWithoutFreelaFeaturesInput, SubscriptionPlanUncheckedUpdateWithoutFreelaFeaturesInput>
  }

  export type SubscriptionPlanUpdateWithoutFreelaFeaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: EnumServiceFieldUpdateOperationsInput | $Enums.Service
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: IntFieldUpdateOperationsInput | number
    annualDiscount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cloudFeatures?: CloudFeaturesUpdateOneWithoutPlanNestedInput
    agendeFeatures?: AgendeFeaturesUpdateOneWithoutPlanNestedInput
    businessFeatures?: BusinessFeaturesUpdateOneWithoutPlanNestedInput
    userSubscriptions?: UserSubscriptionUpdateManyWithoutPlanNestedInput
  }

  export type SubscriptionPlanUncheckedUpdateWithoutFreelaFeaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: EnumServiceFieldUpdateOperationsInput | $Enums.Service
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: IntFieldUpdateOperationsInput | number
    annualDiscount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cloudFeatures?: CloudFeaturesUncheckedUpdateOneWithoutPlanNestedInput
    agendeFeatures?: AgendeFeaturesUncheckedUpdateOneWithoutPlanNestedInput
    businessFeatures?: BusinessFeaturesUncheckedUpdateOneWithoutPlanNestedInput
    userSubscriptions?: UserSubscriptionUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type SubscriptionPlanCreateWithoutBusinessFeaturesInput = {
    id?: string
    service: $Enums.Service
    name: string
    description?: string | null
    monthlyPrice: Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: number
    annualDiscount?: number
    isActive?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cloudFeatures?: CloudFeaturesCreateNestedOneWithoutPlanInput
    agendeFeatures?: AgendeFeaturesCreateNestedOneWithoutPlanInput
    freelaFeatures?: FreelaFeaturesCreateNestedOneWithoutPlanInput
    userSubscriptions?: UserSubscriptionCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanUncheckedCreateWithoutBusinessFeaturesInput = {
    id?: string
    service: $Enums.Service
    name: string
    description?: string | null
    monthlyPrice: Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: number
    annualDiscount?: number
    isActive?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cloudFeatures?: CloudFeaturesUncheckedCreateNestedOneWithoutPlanInput
    agendeFeatures?: AgendeFeaturesUncheckedCreateNestedOneWithoutPlanInput
    freelaFeatures?: FreelaFeaturesUncheckedCreateNestedOneWithoutPlanInput
    userSubscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanCreateOrConnectWithoutBusinessFeaturesInput = {
    where: SubscriptionPlanWhereUniqueInput
    create: XOR<SubscriptionPlanCreateWithoutBusinessFeaturesInput, SubscriptionPlanUncheckedCreateWithoutBusinessFeaturesInput>
  }

  export type SubscriptionPlanUpsertWithoutBusinessFeaturesInput = {
    update: XOR<SubscriptionPlanUpdateWithoutBusinessFeaturesInput, SubscriptionPlanUncheckedUpdateWithoutBusinessFeaturesInput>
    create: XOR<SubscriptionPlanCreateWithoutBusinessFeaturesInput, SubscriptionPlanUncheckedCreateWithoutBusinessFeaturesInput>
    where?: SubscriptionPlanWhereInput
  }

  export type SubscriptionPlanUpdateToOneWithWhereWithoutBusinessFeaturesInput = {
    where?: SubscriptionPlanWhereInput
    data: XOR<SubscriptionPlanUpdateWithoutBusinessFeaturesInput, SubscriptionPlanUncheckedUpdateWithoutBusinessFeaturesInput>
  }

  export type SubscriptionPlanUpdateWithoutBusinessFeaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: EnumServiceFieldUpdateOperationsInput | $Enums.Service
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: IntFieldUpdateOperationsInput | number
    annualDiscount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cloudFeatures?: CloudFeaturesUpdateOneWithoutPlanNestedInput
    agendeFeatures?: AgendeFeaturesUpdateOneWithoutPlanNestedInput
    freelaFeatures?: FreelaFeaturesUpdateOneWithoutPlanNestedInput
    userSubscriptions?: UserSubscriptionUpdateManyWithoutPlanNestedInput
  }

  export type SubscriptionPlanUncheckedUpdateWithoutBusinessFeaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: EnumServiceFieldUpdateOperationsInput | $Enums.Service
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: IntFieldUpdateOperationsInput | number
    annualDiscount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cloudFeatures?: CloudFeaturesUncheckedUpdateOneWithoutPlanNestedInput
    agendeFeatures?: AgendeFeaturesUncheckedUpdateOneWithoutPlanNestedInput
    freelaFeatures?: FreelaFeaturesUncheckedUpdateOneWithoutPlanNestedInput
    userSubscriptions?: UserSubscriptionUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type UserCreateWithoutUserSubscriptionsInput = {
    id?: string
    email: string
    name?: string | null
    phoneNumber: string
    birthDate: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserSubscriptionsInput = {
    id?: string
    email: string
    name?: string | null
    phoneNumber: string
    birthDate: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserSubscriptionsInput, UserUncheckedCreateWithoutUserSubscriptionsInput>
  }

  export type SubscriptionPlanCreateWithoutUserSubscriptionsInput = {
    id?: string
    service: $Enums.Service
    name: string
    description?: string | null
    monthlyPrice: Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: number
    annualDiscount?: number
    isActive?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cloudFeatures?: CloudFeaturesCreateNestedOneWithoutPlanInput
    agendeFeatures?: AgendeFeaturesCreateNestedOneWithoutPlanInput
    freelaFeatures?: FreelaFeaturesCreateNestedOneWithoutPlanInput
    businessFeatures?: BusinessFeaturesCreateNestedOneWithoutPlanInput
  }

  export type SubscriptionPlanUncheckedCreateWithoutUserSubscriptionsInput = {
    id?: string
    service: $Enums.Service
    name: string
    description?: string | null
    monthlyPrice: Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: number
    annualDiscount?: number
    isActive?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cloudFeatures?: CloudFeaturesUncheckedCreateNestedOneWithoutPlanInput
    agendeFeatures?: AgendeFeaturesUncheckedCreateNestedOneWithoutPlanInput
    freelaFeatures?: FreelaFeaturesUncheckedCreateNestedOneWithoutPlanInput
    businessFeatures?: BusinessFeaturesUncheckedCreateNestedOneWithoutPlanInput
  }

  export type SubscriptionPlanCreateOrConnectWithoutUserSubscriptionsInput = {
    where: SubscriptionPlanWhereUniqueInput
    create: XOR<SubscriptionPlanCreateWithoutUserSubscriptionsInput, SubscriptionPlanUncheckedCreateWithoutUserSubscriptionsInput>
  }

  export type PaymentCreateWithoutUserSubscriptionInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    finalAmount: Decimal | DecimalJsLike | number | string
    paymentMethod: $Enums.MercadoPagoPaymentMethod
    mpPaymentId?: string | null
    mpStatus?: string | null
    mpStatusDetail?: string | null
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutUserSubscriptionInput = {
    id?: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    finalAmount: Decimal | DecimalJsLike | number | string
    paymentMethod: $Enums.MercadoPagoPaymentMethod
    mpPaymentId?: string | null
    mpStatus?: string | null
    mpStatusDetail?: string | null
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutUserSubscriptionInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserSubscriptionInput, PaymentUncheckedCreateWithoutUserSubscriptionInput>
  }

  export type PaymentCreateManyUserSubscriptionInputEnvelope = {
    data: PaymentCreateManyUserSubscriptionInput | PaymentCreateManyUserSubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutUserSubscriptionsInput = {
    update: XOR<UserUpdateWithoutUserSubscriptionsInput, UserUncheckedUpdateWithoutUserSubscriptionsInput>
    create: XOR<UserCreateWithoutUserSubscriptionsInput, UserUncheckedCreateWithoutUserSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserSubscriptionsInput, UserUncheckedUpdateWithoutUserSubscriptionsInput>
  }

  export type UserUpdateWithoutUserSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubscriptionPlanUpsertWithoutUserSubscriptionsInput = {
    update: XOR<SubscriptionPlanUpdateWithoutUserSubscriptionsInput, SubscriptionPlanUncheckedUpdateWithoutUserSubscriptionsInput>
    create: XOR<SubscriptionPlanCreateWithoutUserSubscriptionsInput, SubscriptionPlanUncheckedCreateWithoutUserSubscriptionsInput>
    where?: SubscriptionPlanWhereInput
  }

  export type SubscriptionPlanUpdateToOneWithWhereWithoutUserSubscriptionsInput = {
    where?: SubscriptionPlanWhereInput
    data: XOR<SubscriptionPlanUpdateWithoutUserSubscriptionsInput, SubscriptionPlanUncheckedUpdateWithoutUserSubscriptionsInput>
  }

  export type SubscriptionPlanUpdateWithoutUserSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: EnumServiceFieldUpdateOperationsInput | $Enums.Service
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: IntFieldUpdateOperationsInput | number
    annualDiscount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cloudFeatures?: CloudFeaturesUpdateOneWithoutPlanNestedInput
    agendeFeatures?: AgendeFeaturesUpdateOneWithoutPlanNestedInput
    freelaFeatures?: FreelaFeaturesUpdateOneWithoutPlanNestedInput
    businessFeatures?: BusinessFeaturesUpdateOneWithoutPlanNestedInput
  }

  export type SubscriptionPlanUncheckedUpdateWithoutUserSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: EnumServiceFieldUpdateOperationsInput | $Enums.Service
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quarterlyDiscount?: IntFieldUpdateOperationsInput | number
    annualDiscount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cloudFeatures?: CloudFeaturesUncheckedUpdateOneWithoutPlanNestedInput
    agendeFeatures?: AgendeFeaturesUncheckedUpdateOneWithoutPlanNestedInput
    freelaFeatures?: FreelaFeaturesUncheckedUpdateOneWithoutPlanNestedInput
    businessFeatures?: BusinessFeaturesUncheckedUpdateOneWithoutPlanNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserSubscriptionInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserSubscriptionInput, PaymentUncheckedUpdateWithoutUserSubscriptionInput>
    create: XOR<PaymentCreateWithoutUserSubscriptionInput, PaymentUncheckedCreateWithoutUserSubscriptionInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserSubscriptionInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserSubscriptionInput, PaymentUncheckedUpdateWithoutUserSubscriptionInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserSubscriptionInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserSubscriptionInput>
  }

  export type UserCreateWithoutPaymentsInput = {
    id?: string
    email: string
    name?: string | null
    phoneNumber: string
    birthDate: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    userSubscriptions?: UserSubscriptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: string
    email: string
    name?: string | null
    phoneNumber: string
    birthDate: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    userSubscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type UserSubscriptionCreateWithoutPaymentsInput = {
    id?: string
    planType: $Enums.PlanType
    monthlyPrice: Decimal | DecimalJsLike | number | string
    discountPercent?: number
    totalAmount: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.SubscriptionStatus
    autoRenew?: boolean
    mpPreferenceId?: string | null
    mpSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserSubscriptionsInput
    plan: SubscriptionPlanCreateNestedOneWithoutUserSubscriptionsInput
  }

  export type UserSubscriptionUncheckedCreateWithoutPaymentsInput = {
    id?: string
    userId: string
    planId: string
    planType: $Enums.PlanType
    monthlyPrice: Decimal | DecimalJsLike | number | string
    discountPercent?: number
    totalAmount: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.SubscriptionStatus
    autoRenew?: boolean
    mpPreferenceId?: string | null
    mpSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSubscriptionCreateOrConnectWithoutPaymentsInput = {
    where: UserSubscriptionWhereUniqueInput
    create: XOR<UserSubscriptionCreateWithoutPaymentsInput, UserSubscriptionUncheckedCreateWithoutPaymentsInput>
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSubscriptions?: UserSubscriptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSubscriptions?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserSubscriptionUpsertWithoutPaymentsInput = {
    update: XOR<UserSubscriptionUpdateWithoutPaymentsInput, UserSubscriptionUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserSubscriptionCreateWithoutPaymentsInput, UserSubscriptionUncheckedCreateWithoutPaymentsInput>
    where?: UserSubscriptionWhereInput
  }

  export type UserSubscriptionUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserSubscriptionWhereInput
    data: XOR<UserSubscriptionUpdateWithoutPaymentsInput, UserSubscriptionUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserSubscriptionUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    monthlyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    mpPreferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    mpSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserSubscriptionsNestedInput
    plan?: SubscriptionPlanUpdateOneRequiredWithoutUserSubscriptionsNestedInput
  }

  export type UserSubscriptionUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    monthlyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    mpPreferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    mpSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionCreateManyUserInput = {
    id?: string
    planId: string
    planType: $Enums.PlanType
    monthlyPrice: Decimal | DecimalJsLike | number | string
    discountPercent?: number
    totalAmount: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.SubscriptionStatus
    autoRenew?: boolean
    mpPreferenceId?: string | null
    mpSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyUserInput = {
    id?: string
    userSubscriptionId: string
    amount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    finalAmount: Decimal | DecimalJsLike | number | string
    paymentMethod: $Enums.MercadoPagoPaymentMethod
    mpPaymentId?: string | null
    mpStatus?: string | null
    mpStatusDetail?: string | null
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    monthlyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    mpPreferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    mpSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: SubscriptionPlanUpdateOneRequiredWithoutUserSubscriptionsNestedInput
    payments?: PaymentUpdateManyWithoutUserSubscriptionNestedInput
  }

  export type UserSubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    monthlyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    mpPreferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    mpSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutUserSubscriptionNestedInput
  }

  export type UserSubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    monthlyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    mpPreferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    mpSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumMercadoPagoPaymentMethodFieldUpdateOperationsInput | $Enums.MercadoPagoPaymentMethod
    mpPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    mpStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mpStatusDetail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSubscription?: UserSubscriptionUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userSubscriptionId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumMercadoPagoPaymentMethodFieldUpdateOperationsInput | $Enums.MercadoPagoPaymentMethod
    mpPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    mpStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mpStatusDetail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userSubscriptionId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumMercadoPagoPaymentMethodFieldUpdateOperationsInput | $Enums.MercadoPagoPaymentMethod
    mpPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    mpStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mpStatusDetail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionCreateManyPlanInput = {
    id?: string
    userId: string
    planType: $Enums.PlanType
    monthlyPrice: Decimal | DecimalJsLike | number | string
    discountPercent?: number
    totalAmount: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.SubscriptionStatus
    autoRenew?: boolean
    mpPreferenceId?: string | null
    mpSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSubscriptionUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    monthlyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    mpPreferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    mpSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserSubscriptionsNestedInput
    payments?: PaymentUpdateManyWithoutUserSubscriptionNestedInput
  }

  export type UserSubscriptionUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    monthlyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    mpPreferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    mpSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutUserSubscriptionNestedInput
  }

  export type UserSubscriptionUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    monthlyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    mpPreferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    mpSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyUserSubscriptionInput = {
    id?: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    finalAmount: Decimal | DecimalJsLike | number | string
    paymentMethod: $Enums.MercadoPagoPaymentMethod
    mpPaymentId?: string | null
    mpStatus?: string | null
    mpStatusDetail?: string | null
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateWithoutUserSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumMercadoPagoPaymentMethodFieldUpdateOperationsInput | $Enums.MercadoPagoPaymentMethod
    mpPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    mpStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mpStatusDetail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutUserSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumMercadoPagoPaymentMethodFieldUpdateOperationsInput | $Enums.MercadoPagoPaymentMethod
    mpPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    mpStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mpStatusDetail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutUserSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumMercadoPagoPaymentMethodFieldUpdateOperationsInput | $Enums.MercadoPagoPaymentMethod
    mpPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    mpStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mpStatusDetail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}