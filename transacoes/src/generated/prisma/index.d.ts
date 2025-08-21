
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
 * Model ContaBancaria
 * 
 */
export type ContaBancaria = $Result.DefaultSelection<Prisma.$ContaBancariaPayload>
/**
 * Model Transacao
 * 
 */
export type Transacao = $Result.DefaultSelection<Prisma.$TransacaoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  Chegou: 'Chegou',
  num_chegou: 'num_chegou'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ContaBancarias
 * const contaBancarias = await prisma.contaBancaria.findMany()
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
   * // Fetch zero or more ContaBancarias
   * const contaBancarias = await prisma.contaBancaria.findMany()
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
   * `prisma.contaBancaria`: Exposes CRUD operations for the **ContaBancaria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContaBancarias
    * const contaBancarias = await prisma.contaBancaria.findMany()
    * ```
    */
  get contaBancaria(): Prisma.ContaBancariaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transacao`: Exposes CRUD operations for the **Transacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transacaos
    * const transacaos = await prisma.transacao.findMany()
    * ```
    */
  get transacao(): Prisma.TransacaoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    ContaBancaria: 'ContaBancaria',
    Transacao: 'Transacao'
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
      modelProps: "contaBancaria" | "transacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ContaBancaria: {
        payload: Prisma.$ContaBancariaPayload<ExtArgs>
        fields: Prisma.ContaBancariaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContaBancariaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaBancariaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContaBancariaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaBancariaPayload>
          }
          findFirst: {
            args: Prisma.ContaBancariaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaBancariaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContaBancariaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaBancariaPayload>
          }
          findMany: {
            args: Prisma.ContaBancariaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaBancariaPayload>[]
          }
          create: {
            args: Prisma.ContaBancariaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaBancariaPayload>
          }
          createMany: {
            args: Prisma.ContaBancariaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContaBancariaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaBancariaPayload>[]
          }
          delete: {
            args: Prisma.ContaBancariaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaBancariaPayload>
          }
          update: {
            args: Prisma.ContaBancariaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaBancariaPayload>
          }
          deleteMany: {
            args: Prisma.ContaBancariaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContaBancariaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContaBancariaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaBancariaPayload>[]
          }
          upsert: {
            args: Prisma.ContaBancariaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaBancariaPayload>
          }
          aggregate: {
            args: Prisma.ContaBancariaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContaBancaria>
          }
          groupBy: {
            args: Prisma.ContaBancariaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContaBancariaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContaBancariaCountArgs<ExtArgs>
            result: $Utils.Optional<ContaBancariaCountAggregateOutputType> | number
          }
        }
      }
      Transacao: {
        payload: Prisma.$TransacaoPayload<ExtArgs>
        fields: Prisma.TransacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          findFirst: {
            args: Prisma.TransacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          findMany: {
            args: Prisma.TransacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>[]
          }
          create: {
            args: Prisma.TransacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          createMany: {
            args: Prisma.TransacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>[]
          }
          delete: {
            args: Prisma.TransacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          update: {
            args: Prisma.TransacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          deleteMany: {
            args: Prisma.TransacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>[]
          }
          upsert: {
            args: Prisma.TransacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          aggregate: {
            args: Prisma.TransacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransacao>
          }
          groupBy: {
            args: Prisma.TransacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransacaoCountArgs<ExtArgs>
            result: $Utils.Optional<TransacaoCountAggregateOutputType> | number
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
    contaBancaria?: ContaBancariaOmit
    transacao?: TransacaoOmit
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
   * Count Type ContaBancariaCountOutputType
   */

  export type ContaBancariaCountOutputType = {
    transacoesOrigem: number
    transacoesDestino: number
  }

  export type ContaBancariaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transacoesOrigem?: boolean | ContaBancariaCountOutputTypeCountTransacoesOrigemArgs
    transacoesDestino?: boolean | ContaBancariaCountOutputTypeCountTransacoesDestinoArgs
  }

  // Custom InputTypes
  /**
   * ContaBancariaCountOutputType without action
   */
  export type ContaBancariaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContaBancariaCountOutputType
     */
    select?: ContaBancariaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContaBancariaCountOutputType without action
   */
  export type ContaBancariaCountOutputTypeCountTransacoesOrigemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransacaoWhereInput
  }

  /**
   * ContaBancariaCountOutputType without action
   */
  export type ContaBancariaCountOutputTypeCountTransacoesDestinoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransacaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ContaBancaria
   */

  export type AggregateContaBancaria = {
    _count: ContaBancariaCountAggregateOutputType | null
    _avg: ContaBancariaAvgAggregateOutputType | null
    _sum: ContaBancariaSumAggregateOutputType | null
    _min: ContaBancariaMinAggregateOutputType | null
    _max: ContaBancariaMaxAggregateOutputType | null
  }

  export type ContaBancariaAvgAggregateOutputType = {
    id: number | null
    saldo: number | null
  }

  export type ContaBancariaSumAggregateOutputType = {
    id: number | null
    saldo: number | null
  }

  export type ContaBancariaMinAggregateOutputType = {
    id: number | null
    nomeDono: string | null
    saldo: number | null
  }

  export type ContaBancariaMaxAggregateOutputType = {
    id: number | null
    nomeDono: string | null
    saldo: number | null
  }

  export type ContaBancariaCountAggregateOutputType = {
    id: number
    nomeDono: number
    saldo: number
    _all: number
  }


  export type ContaBancariaAvgAggregateInputType = {
    id?: true
    saldo?: true
  }

  export type ContaBancariaSumAggregateInputType = {
    id?: true
    saldo?: true
  }

  export type ContaBancariaMinAggregateInputType = {
    id?: true
    nomeDono?: true
    saldo?: true
  }

  export type ContaBancariaMaxAggregateInputType = {
    id?: true
    nomeDono?: true
    saldo?: true
  }

  export type ContaBancariaCountAggregateInputType = {
    id?: true
    nomeDono?: true
    saldo?: true
    _all?: true
  }

  export type ContaBancariaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContaBancaria to aggregate.
     */
    where?: ContaBancariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContaBancarias to fetch.
     */
    orderBy?: ContaBancariaOrderByWithRelationInput | ContaBancariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContaBancariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContaBancarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContaBancarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContaBancarias
    **/
    _count?: true | ContaBancariaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContaBancariaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContaBancariaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContaBancariaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContaBancariaMaxAggregateInputType
  }

  export type GetContaBancariaAggregateType<T extends ContaBancariaAggregateArgs> = {
        [P in keyof T & keyof AggregateContaBancaria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContaBancaria[P]>
      : GetScalarType<T[P], AggregateContaBancaria[P]>
  }




  export type ContaBancariaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContaBancariaWhereInput
    orderBy?: ContaBancariaOrderByWithAggregationInput | ContaBancariaOrderByWithAggregationInput[]
    by: ContaBancariaScalarFieldEnum[] | ContaBancariaScalarFieldEnum
    having?: ContaBancariaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContaBancariaCountAggregateInputType | true
    _avg?: ContaBancariaAvgAggregateInputType
    _sum?: ContaBancariaSumAggregateInputType
    _min?: ContaBancariaMinAggregateInputType
    _max?: ContaBancariaMaxAggregateInputType
  }

  export type ContaBancariaGroupByOutputType = {
    id: number
    nomeDono: string
    saldo: number
    _count: ContaBancariaCountAggregateOutputType | null
    _avg: ContaBancariaAvgAggregateOutputType | null
    _sum: ContaBancariaSumAggregateOutputType | null
    _min: ContaBancariaMinAggregateOutputType | null
    _max: ContaBancariaMaxAggregateOutputType | null
  }

  type GetContaBancariaGroupByPayload<T extends ContaBancariaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContaBancariaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContaBancariaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContaBancariaGroupByOutputType[P]>
            : GetScalarType<T[P], ContaBancariaGroupByOutputType[P]>
        }
      >
    >


  export type ContaBancariaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeDono?: boolean
    saldo?: boolean
    transacoesOrigem?: boolean | ContaBancaria$transacoesOrigemArgs<ExtArgs>
    transacoesDestino?: boolean | ContaBancaria$transacoesDestinoArgs<ExtArgs>
    _count?: boolean | ContaBancariaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contaBancaria"]>

  export type ContaBancariaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeDono?: boolean
    saldo?: boolean
  }, ExtArgs["result"]["contaBancaria"]>

  export type ContaBancariaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeDono?: boolean
    saldo?: boolean
  }, ExtArgs["result"]["contaBancaria"]>

  export type ContaBancariaSelectScalar = {
    id?: boolean
    nomeDono?: boolean
    saldo?: boolean
  }

  export type ContaBancariaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeDono" | "saldo", ExtArgs["result"]["contaBancaria"]>
  export type ContaBancariaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transacoesOrigem?: boolean | ContaBancaria$transacoesOrigemArgs<ExtArgs>
    transacoesDestino?: boolean | ContaBancaria$transacoesDestinoArgs<ExtArgs>
    _count?: boolean | ContaBancariaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContaBancariaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ContaBancariaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ContaBancariaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContaBancaria"
    objects: {
      transacoesOrigem: Prisma.$TransacaoPayload<ExtArgs>[]
      transacoesDestino: Prisma.$TransacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nomeDono: string
      saldo: number
    }, ExtArgs["result"]["contaBancaria"]>
    composites: {}
  }

  type ContaBancariaGetPayload<S extends boolean | null | undefined | ContaBancariaDefaultArgs> = $Result.GetResult<Prisma.$ContaBancariaPayload, S>

  type ContaBancariaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContaBancariaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContaBancariaCountAggregateInputType | true
    }

  export interface ContaBancariaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContaBancaria'], meta: { name: 'ContaBancaria' } }
    /**
     * Find zero or one ContaBancaria that matches the filter.
     * @param {ContaBancariaFindUniqueArgs} args - Arguments to find a ContaBancaria
     * @example
     * // Get one ContaBancaria
     * const contaBancaria = await prisma.contaBancaria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContaBancariaFindUniqueArgs>(args: SelectSubset<T, ContaBancariaFindUniqueArgs<ExtArgs>>): Prisma__ContaBancariaClient<$Result.GetResult<Prisma.$ContaBancariaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContaBancaria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContaBancariaFindUniqueOrThrowArgs} args - Arguments to find a ContaBancaria
     * @example
     * // Get one ContaBancaria
     * const contaBancaria = await prisma.contaBancaria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContaBancariaFindUniqueOrThrowArgs>(args: SelectSubset<T, ContaBancariaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContaBancariaClient<$Result.GetResult<Prisma.$ContaBancariaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContaBancaria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContaBancariaFindFirstArgs} args - Arguments to find a ContaBancaria
     * @example
     * // Get one ContaBancaria
     * const contaBancaria = await prisma.contaBancaria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContaBancariaFindFirstArgs>(args?: SelectSubset<T, ContaBancariaFindFirstArgs<ExtArgs>>): Prisma__ContaBancariaClient<$Result.GetResult<Prisma.$ContaBancariaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContaBancaria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContaBancariaFindFirstOrThrowArgs} args - Arguments to find a ContaBancaria
     * @example
     * // Get one ContaBancaria
     * const contaBancaria = await prisma.contaBancaria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContaBancariaFindFirstOrThrowArgs>(args?: SelectSubset<T, ContaBancariaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContaBancariaClient<$Result.GetResult<Prisma.$ContaBancariaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContaBancarias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContaBancariaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContaBancarias
     * const contaBancarias = await prisma.contaBancaria.findMany()
     * 
     * // Get first 10 ContaBancarias
     * const contaBancarias = await prisma.contaBancaria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contaBancariaWithIdOnly = await prisma.contaBancaria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContaBancariaFindManyArgs>(args?: SelectSubset<T, ContaBancariaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContaBancariaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContaBancaria.
     * @param {ContaBancariaCreateArgs} args - Arguments to create a ContaBancaria.
     * @example
     * // Create one ContaBancaria
     * const ContaBancaria = await prisma.contaBancaria.create({
     *   data: {
     *     // ... data to create a ContaBancaria
     *   }
     * })
     * 
     */
    create<T extends ContaBancariaCreateArgs>(args: SelectSubset<T, ContaBancariaCreateArgs<ExtArgs>>): Prisma__ContaBancariaClient<$Result.GetResult<Prisma.$ContaBancariaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContaBancarias.
     * @param {ContaBancariaCreateManyArgs} args - Arguments to create many ContaBancarias.
     * @example
     * // Create many ContaBancarias
     * const contaBancaria = await prisma.contaBancaria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContaBancariaCreateManyArgs>(args?: SelectSubset<T, ContaBancariaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContaBancarias and returns the data saved in the database.
     * @param {ContaBancariaCreateManyAndReturnArgs} args - Arguments to create many ContaBancarias.
     * @example
     * // Create many ContaBancarias
     * const contaBancaria = await prisma.contaBancaria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContaBancarias and only return the `id`
     * const contaBancariaWithIdOnly = await prisma.contaBancaria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContaBancariaCreateManyAndReturnArgs>(args?: SelectSubset<T, ContaBancariaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContaBancariaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContaBancaria.
     * @param {ContaBancariaDeleteArgs} args - Arguments to delete one ContaBancaria.
     * @example
     * // Delete one ContaBancaria
     * const ContaBancaria = await prisma.contaBancaria.delete({
     *   where: {
     *     // ... filter to delete one ContaBancaria
     *   }
     * })
     * 
     */
    delete<T extends ContaBancariaDeleteArgs>(args: SelectSubset<T, ContaBancariaDeleteArgs<ExtArgs>>): Prisma__ContaBancariaClient<$Result.GetResult<Prisma.$ContaBancariaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContaBancaria.
     * @param {ContaBancariaUpdateArgs} args - Arguments to update one ContaBancaria.
     * @example
     * // Update one ContaBancaria
     * const contaBancaria = await prisma.contaBancaria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContaBancariaUpdateArgs>(args: SelectSubset<T, ContaBancariaUpdateArgs<ExtArgs>>): Prisma__ContaBancariaClient<$Result.GetResult<Prisma.$ContaBancariaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContaBancarias.
     * @param {ContaBancariaDeleteManyArgs} args - Arguments to filter ContaBancarias to delete.
     * @example
     * // Delete a few ContaBancarias
     * const { count } = await prisma.contaBancaria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContaBancariaDeleteManyArgs>(args?: SelectSubset<T, ContaBancariaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContaBancarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContaBancariaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContaBancarias
     * const contaBancaria = await prisma.contaBancaria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContaBancariaUpdateManyArgs>(args: SelectSubset<T, ContaBancariaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContaBancarias and returns the data updated in the database.
     * @param {ContaBancariaUpdateManyAndReturnArgs} args - Arguments to update many ContaBancarias.
     * @example
     * // Update many ContaBancarias
     * const contaBancaria = await prisma.contaBancaria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContaBancarias and only return the `id`
     * const contaBancariaWithIdOnly = await prisma.contaBancaria.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContaBancariaUpdateManyAndReturnArgs>(args: SelectSubset<T, ContaBancariaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContaBancariaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContaBancaria.
     * @param {ContaBancariaUpsertArgs} args - Arguments to update or create a ContaBancaria.
     * @example
     * // Update or create a ContaBancaria
     * const contaBancaria = await prisma.contaBancaria.upsert({
     *   create: {
     *     // ... data to create a ContaBancaria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContaBancaria we want to update
     *   }
     * })
     */
    upsert<T extends ContaBancariaUpsertArgs>(args: SelectSubset<T, ContaBancariaUpsertArgs<ExtArgs>>): Prisma__ContaBancariaClient<$Result.GetResult<Prisma.$ContaBancariaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContaBancarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContaBancariaCountArgs} args - Arguments to filter ContaBancarias to count.
     * @example
     * // Count the number of ContaBancarias
     * const count = await prisma.contaBancaria.count({
     *   where: {
     *     // ... the filter for the ContaBancarias we want to count
     *   }
     * })
    **/
    count<T extends ContaBancariaCountArgs>(
      args?: Subset<T, ContaBancariaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContaBancariaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContaBancaria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContaBancariaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContaBancariaAggregateArgs>(args: Subset<T, ContaBancariaAggregateArgs>): Prisma.PrismaPromise<GetContaBancariaAggregateType<T>>

    /**
     * Group by ContaBancaria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContaBancariaGroupByArgs} args - Group by arguments.
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
      T extends ContaBancariaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContaBancariaGroupByArgs['orderBy'] }
        : { orderBy?: ContaBancariaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContaBancariaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContaBancariaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContaBancaria model
   */
  readonly fields: ContaBancariaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContaBancaria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContaBancariaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transacoesOrigem<T extends ContaBancaria$transacoesOrigemArgs<ExtArgs> = {}>(args?: Subset<T, ContaBancaria$transacoesOrigemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transacoesDestino<T extends ContaBancaria$transacoesDestinoArgs<ExtArgs> = {}>(args?: Subset<T, ContaBancaria$transacoesDestinoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ContaBancaria model
   */
  interface ContaBancariaFieldRefs {
    readonly id: FieldRef<"ContaBancaria", 'Int'>
    readonly nomeDono: FieldRef<"ContaBancaria", 'String'>
    readonly saldo: FieldRef<"ContaBancaria", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ContaBancaria findUnique
   */
  export type ContaBancariaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContaBancaria
     */
    select?: ContaBancariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContaBancaria
     */
    omit?: ContaBancariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaBancariaInclude<ExtArgs> | null
    /**
     * Filter, which ContaBancaria to fetch.
     */
    where: ContaBancariaWhereUniqueInput
  }

  /**
   * ContaBancaria findUniqueOrThrow
   */
  export type ContaBancariaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContaBancaria
     */
    select?: ContaBancariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContaBancaria
     */
    omit?: ContaBancariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaBancariaInclude<ExtArgs> | null
    /**
     * Filter, which ContaBancaria to fetch.
     */
    where: ContaBancariaWhereUniqueInput
  }

  /**
   * ContaBancaria findFirst
   */
  export type ContaBancariaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContaBancaria
     */
    select?: ContaBancariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContaBancaria
     */
    omit?: ContaBancariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaBancariaInclude<ExtArgs> | null
    /**
     * Filter, which ContaBancaria to fetch.
     */
    where?: ContaBancariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContaBancarias to fetch.
     */
    orderBy?: ContaBancariaOrderByWithRelationInput | ContaBancariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContaBancarias.
     */
    cursor?: ContaBancariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContaBancarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContaBancarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContaBancarias.
     */
    distinct?: ContaBancariaScalarFieldEnum | ContaBancariaScalarFieldEnum[]
  }

  /**
   * ContaBancaria findFirstOrThrow
   */
  export type ContaBancariaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContaBancaria
     */
    select?: ContaBancariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContaBancaria
     */
    omit?: ContaBancariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaBancariaInclude<ExtArgs> | null
    /**
     * Filter, which ContaBancaria to fetch.
     */
    where?: ContaBancariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContaBancarias to fetch.
     */
    orderBy?: ContaBancariaOrderByWithRelationInput | ContaBancariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContaBancarias.
     */
    cursor?: ContaBancariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContaBancarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContaBancarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContaBancarias.
     */
    distinct?: ContaBancariaScalarFieldEnum | ContaBancariaScalarFieldEnum[]
  }

  /**
   * ContaBancaria findMany
   */
  export type ContaBancariaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContaBancaria
     */
    select?: ContaBancariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContaBancaria
     */
    omit?: ContaBancariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaBancariaInclude<ExtArgs> | null
    /**
     * Filter, which ContaBancarias to fetch.
     */
    where?: ContaBancariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContaBancarias to fetch.
     */
    orderBy?: ContaBancariaOrderByWithRelationInput | ContaBancariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContaBancarias.
     */
    cursor?: ContaBancariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContaBancarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContaBancarias.
     */
    skip?: number
    distinct?: ContaBancariaScalarFieldEnum | ContaBancariaScalarFieldEnum[]
  }

  /**
   * ContaBancaria create
   */
  export type ContaBancariaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContaBancaria
     */
    select?: ContaBancariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContaBancaria
     */
    omit?: ContaBancariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaBancariaInclude<ExtArgs> | null
    /**
     * The data needed to create a ContaBancaria.
     */
    data: XOR<ContaBancariaCreateInput, ContaBancariaUncheckedCreateInput>
  }

  /**
   * ContaBancaria createMany
   */
  export type ContaBancariaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContaBancarias.
     */
    data: ContaBancariaCreateManyInput | ContaBancariaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContaBancaria createManyAndReturn
   */
  export type ContaBancariaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContaBancaria
     */
    select?: ContaBancariaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContaBancaria
     */
    omit?: ContaBancariaOmit<ExtArgs> | null
    /**
     * The data used to create many ContaBancarias.
     */
    data: ContaBancariaCreateManyInput | ContaBancariaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContaBancaria update
   */
  export type ContaBancariaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContaBancaria
     */
    select?: ContaBancariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContaBancaria
     */
    omit?: ContaBancariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaBancariaInclude<ExtArgs> | null
    /**
     * The data needed to update a ContaBancaria.
     */
    data: XOR<ContaBancariaUpdateInput, ContaBancariaUncheckedUpdateInput>
    /**
     * Choose, which ContaBancaria to update.
     */
    where: ContaBancariaWhereUniqueInput
  }

  /**
   * ContaBancaria updateMany
   */
  export type ContaBancariaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContaBancarias.
     */
    data: XOR<ContaBancariaUpdateManyMutationInput, ContaBancariaUncheckedUpdateManyInput>
    /**
     * Filter which ContaBancarias to update
     */
    where?: ContaBancariaWhereInput
    /**
     * Limit how many ContaBancarias to update.
     */
    limit?: number
  }

  /**
   * ContaBancaria updateManyAndReturn
   */
  export type ContaBancariaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContaBancaria
     */
    select?: ContaBancariaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContaBancaria
     */
    omit?: ContaBancariaOmit<ExtArgs> | null
    /**
     * The data used to update ContaBancarias.
     */
    data: XOR<ContaBancariaUpdateManyMutationInput, ContaBancariaUncheckedUpdateManyInput>
    /**
     * Filter which ContaBancarias to update
     */
    where?: ContaBancariaWhereInput
    /**
     * Limit how many ContaBancarias to update.
     */
    limit?: number
  }

  /**
   * ContaBancaria upsert
   */
  export type ContaBancariaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContaBancaria
     */
    select?: ContaBancariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContaBancaria
     */
    omit?: ContaBancariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaBancariaInclude<ExtArgs> | null
    /**
     * The filter to search for the ContaBancaria to update in case it exists.
     */
    where: ContaBancariaWhereUniqueInput
    /**
     * In case the ContaBancaria found by the `where` argument doesn't exist, create a new ContaBancaria with this data.
     */
    create: XOR<ContaBancariaCreateInput, ContaBancariaUncheckedCreateInput>
    /**
     * In case the ContaBancaria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContaBancariaUpdateInput, ContaBancariaUncheckedUpdateInput>
  }

  /**
   * ContaBancaria delete
   */
  export type ContaBancariaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContaBancaria
     */
    select?: ContaBancariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContaBancaria
     */
    omit?: ContaBancariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaBancariaInclude<ExtArgs> | null
    /**
     * Filter which ContaBancaria to delete.
     */
    where: ContaBancariaWhereUniqueInput
  }

  /**
   * ContaBancaria deleteMany
   */
  export type ContaBancariaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContaBancarias to delete
     */
    where?: ContaBancariaWhereInput
    /**
     * Limit how many ContaBancarias to delete.
     */
    limit?: number
  }

  /**
   * ContaBancaria.transacoesOrigem
   */
  export type ContaBancaria$transacoesOrigemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    where?: TransacaoWhereInput
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    cursor?: TransacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * ContaBancaria.transacoesDestino
   */
  export type ContaBancaria$transacoesDestinoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    where?: TransacaoWhereInput
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    cursor?: TransacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * ContaBancaria without action
   */
  export type ContaBancariaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContaBancaria
     */
    select?: ContaBancariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContaBancaria
     */
    omit?: ContaBancariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaBancariaInclude<ExtArgs> | null
  }


  /**
   * Model Transacao
   */

  export type AggregateTransacao = {
    _count: TransacaoCountAggregateOutputType | null
    _avg: TransacaoAvgAggregateOutputType | null
    _sum: TransacaoSumAggregateOutputType | null
    _min: TransacaoMinAggregateOutputType | null
    _max: TransacaoMaxAggregateOutputType | null
  }

  export type TransacaoAvgAggregateOutputType = {
    id: number | null
    contaOrigemId: number | null
    contaDestinoId: number | null
    valorTransferencia: number | null
  }

  export type TransacaoSumAggregateOutputType = {
    id: number | null
    contaOrigemId: number | null
    contaDestinoId: number | null
    valorTransferencia: number | null
  }

  export type TransacaoMinAggregateOutputType = {
    id: number | null
    contaOrigemId: number | null
    contaDestinoId: number | null
    valorTransferencia: number | null
    status: $Enums.Status | null
  }

  export type TransacaoMaxAggregateOutputType = {
    id: number | null
    contaOrigemId: number | null
    contaDestinoId: number | null
    valorTransferencia: number | null
    status: $Enums.Status | null
  }

  export type TransacaoCountAggregateOutputType = {
    id: number
    contaOrigemId: number
    contaDestinoId: number
    valorTransferencia: number
    status: number
    _all: number
  }


  export type TransacaoAvgAggregateInputType = {
    id?: true
    contaOrigemId?: true
    contaDestinoId?: true
    valorTransferencia?: true
  }

  export type TransacaoSumAggregateInputType = {
    id?: true
    contaOrigemId?: true
    contaDestinoId?: true
    valorTransferencia?: true
  }

  export type TransacaoMinAggregateInputType = {
    id?: true
    contaOrigemId?: true
    contaDestinoId?: true
    valorTransferencia?: true
    status?: true
  }

  export type TransacaoMaxAggregateInputType = {
    id?: true
    contaOrigemId?: true
    contaDestinoId?: true
    valorTransferencia?: true
    status?: true
  }

  export type TransacaoCountAggregateInputType = {
    id?: true
    contaOrigemId?: true
    contaDestinoId?: true
    valorTransferencia?: true
    status?: true
    _all?: true
  }

  export type TransacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transacao to aggregate.
     */
    where?: TransacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacaos to fetch.
     */
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transacaos
    **/
    _count?: true | TransacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransacaoMaxAggregateInputType
  }

  export type GetTransacaoAggregateType<T extends TransacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateTransacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransacao[P]>
      : GetScalarType<T[P], AggregateTransacao[P]>
  }




  export type TransacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransacaoWhereInput
    orderBy?: TransacaoOrderByWithAggregationInput | TransacaoOrderByWithAggregationInput[]
    by: TransacaoScalarFieldEnum[] | TransacaoScalarFieldEnum
    having?: TransacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransacaoCountAggregateInputType | true
    _avg?: TransacaoAvgAggregateInputType
    _sum?: TransacaoSumAggregateInputType
    _min?: TransacaoMinAggregateInputType
    _max?: TransacaoMaxAggregateInputType
  }

  export type TransacaoGroupByOutputType = {
    id: number
    contaOrigemId: number
    contaDestinoId: number
    valorTransferencia: number
    status: $Enums.Status
    _count: TransacaoCountAggregateOutputType | null
    _avg: TransacaoAvgAggregateOutputType | null
    _sum: TransacaoSumAggregateOutputType | null
    _min: TransacaoMinAggregateOutputType | null
    _max: TransacaoMaxAggregateOutputType | null
  }

  type GetTransacaoGroupByPayload<T extends TransacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransacaoGroupByOutputType[P]>
            : GetScalarType<T[P], TransacaoGroupByOutputType[P]>
        }
      >
    >


  export type TransacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contaOrigemId?: boolean
    contaDestinoId?: boolean
    valorTransferencia?: boolean
    status?: boolean
    contaOrigem?: boolean | ContaBancariaDefaultArgs<ExtArgs>
    contaDestino?: boolean | ContaBancariaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transacao"]>

  export type TransacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contaOrigemId?: boolean
    contaDestinoId?: boolean
    valorTransferencia?: boolean
    status?: boolean
    contaOrigem?: boolean | ContaBancariaDefaultArgs<ExtArgs>
    contaDestino?: boolean | ContaBancariaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transacao"]>

  export type TransacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contaOrigemId?: boolean
    contaDestinoId?: boolean
    valorTransferencia?: boolean
    status?: boolean
    contaOrigem?: boolean | ContaBancariaDefaultArgs<ExtArgs>
    contaDestino?: boolean | ContaBancariaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transacao"]>

  export type TransacaoSelectScalar = {
    id?: boolean
    contaOrigemId?: boolean
    contaDestinoId?: boolean
    valorTransferencia?: boolean
    status?: boolean
  }

  export type TransacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contaOrigemId" | "contaDestinoId" | "valorTransferencia" | "status", ExtArgs["result"]["transacao"]>
  export type TransacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contaOrigem?: boolean | ContaBancariaDefaultArgs<ExtArgs>
    contaDestino?: boolean | ContaBancariaDefaultArgs<ExtArgs>
  }
  export type TransacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contaOrigem?: boolean | ContaBancariaDefaultArgs<ExtArgs>
    contaDestino?: boolean | ContaBancariaDefaultArgs<ExtArgs>
  }
  export type TransacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contaOrigem?: boolean | ContaBancariaDefaultArgs<ExtArgs>
    contaDestino?: boolean | ContaBancariaDefaultArgs<ExtArgs>
  }

  export type $TransacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transacao"
    objects: {
      contaOrigem: Prisma.$ContaBancariaPayload<ExtArgs>
      contaDestino: Prisma.$ContaBancariaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      contaOrigemId: number
      contaDestinoId: number
      valorTransferencia: number
      status: $Enums.Status
    }, ExtArgs["result"]["transacao"]>
    composites: {}
  }

  type TransacaoGetPayload<S extends boolean | null | undefined | TransacaoDefaultArgs> = $Result.GetResult<Prisma.$TransacaoPayload, S>

  type TransacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransacaoCountAggregateInputType | true
    }

  export interface TransacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transacao'], meta: { name: 'Transacao' } }
    /**
     * Find zero or one Transacao that matches the filter.
     * @param {TransacaoFindUniqueArgs} args - Arguments to find a Transacao
     * @example
     * // Get one Transacao
     * const transacao = await prisma.transacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransacaoFindUniqueArgs>(args: SelectSubset<T, TransacaoFindUniqueArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransacaoFindUniqueOrThrowArgs} args - Arguments to find a Transacao
     * @example
     * // Get one Transacao
     * const transacao = await prisma.transacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, TransacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoFindFirstArgs} args - Arguments to find a Transacao
     * @example
     * // Get one Transacao
     * const transacao = await prisma.transacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransacaoFindFirstArgs>(args?: SelectSubset<T, TransacaoFindFirstArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoFindFirstOrThrowArgs} args - Arguments to find a Transacao
     * @example
     * // Get one Transacao
     * const transacao = await prisma.transacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, TransacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transacaos
     * const transacaos = await prisma.transacao.findMany()
     * 
     * // Get first 10 Transacaos
     * const transacaos = await prisma.transacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transacaoWithIdOnly = await prisma.transacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransacaoFindManyArgs>(args?: SelectSubset<T, TransacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transacao.
     * @param {TransacaoCreateArgs} args - Arguments to create a Transacao.
     * @example
     * // Create one Transacao
     * const Transacao = await prisma.transacao.create({
     *   data: {
     *     // ... data to create a Transacao
     *   }
     * })
     * 
     */
    create<T extends TransacaoCreateArgs>(args: SelectSubset<T, TransacaoCreateArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transacaos.
     * @param {TransacaoCreateManyArgs} args - Arguments to create many Transacaos.
     * @example
     * // Create many Transacaos
     * const transacao = await prisma.transacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransacaoCreateManyArgs>(args?: SelectSubset<T, TransacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transacaos and returns the data saved in the database.
     * @param {TransacaoCreateManyAndReturnArgs} args - Arguments to create many Transacaos.
     * @example
     * // Create many Transacaos
     * const transacao = await prisma.transacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transacaos and only return the `id`
     * const transacaoWithIdOnly = await prisma.transacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, TransacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transacao.
     * @param {TransacaoDeleteArgs} args - Arguments to delete one Transacao.
     * @example
     * // Delete one Transacao
     * const Transacao = await prisma.transacao.delete({
     *   where: {
     *     // ... filter to delete one Transacao
     *   }
     * })
     * 
     */
    delete<T extends TransacaoDeleteArgs>(args: SelectSubset<T, TransacaoDeleteArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transacao.
     * @param {TransacaoUpdateArgs} args - Arguments to update one Transacao.
     * @example
     * // Update one Transacao
     * const transacao = await prisma.transacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransacaoUpdateArgs>(args: SelectSubset<T, TransacaoUpdateArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transacaos.
     * @param {TransacaoDeleteManyArgs} args - Arguments to filter Transacaos to delete.
     * @example
     * // Delete a few Transacaos
     * const { count } = await prisma.transacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransacaoDeleteManyArgs>(args?: SelectSubset<T, TransacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transacaos
     * const transacao = await prisma.transacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransacaoUpdateManyArgs>(args: SelectSubset<T, TransacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transacaos and returns the data updated in the database.
     * @param {TransacaoUpdateManyAndReturnArgs} args - Arguments to update many Transacaos.
     * @example
     * // Update many Transacaos
     * const transacao = await prisma.transacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transacaos and only return the `id`
     * const transacaoWithIdOnly = await prisma.transacao.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, TransacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transacao.
     * @param {TransacaoUpsertArgs} args - Arguments to update or create a Transacao.
     * @example
     * // Update or create a Transacao
     * const transacao = await prisma.transacao.upsert({
     *   create: {
     *     // ... data to create a Transacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transacao we want to update
     *   }
     * })
     */
    upsert<T extends TransacaoUpsertArgs>(args: SelectSubset<T, TransacaoUpsertArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoCountArgs} args - Arguments to filter Transacaos to count.
     * @example
     * // Count the number of Transacaos
     * const count = await prisma.transacao.count({
     *   where: {
     *     // ... the filter for the Transacaos we want to count
     *   }
     * })
    **/
    count<T extends TransacaoCountArgs>(
      args?: Subset<T, TransacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransacaoAggregateArgs>(args: Subset<T, TransacaoAggregateArgs>): Prisma.PrismaPromise<GetTransacaoAggregateType<T>>

    /**
     * Group by Transacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoGroupByArgs} args - Group by arguments.
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
      T extends TransacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransacaoGroupByArgs['orderBy'] }
        : { orderBy?: TransacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transacao model
   */
  readonly fields: TransacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contaOrigem<T extends ContaBancariaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContaBancariaDefaultArgs<ExtArgs>>): Prisma__ContaBancariaClient<$Result.GetResult<Prisma.$ContaBancariaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contaDestino<T extends ContaBancariaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContaBancariaDefaultArgs<ExtArgs>>): Prisma__ContaBancariaClient<$Result.GetResult<Prisma.$ContaBancariaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transacao model
   */
  interface TransacaoFieldRefs {
    readonly id: FieldRef<"Transacao", 'Int'>
    readonly contaOrigemId: FieldRef<"Transacao", 'Int'>
    readonly contaDestinoId: FieldRef<"Transacao", 'Int'>
    readonly valorTransferencia: FieldRef<"Transacao", 'Float'>
    readonly status: FieldRef<"Transacao", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * Transacao findUnique
   */
  export type TransacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter, which Transacao to fetch.
     */
    where: TransacaoWhereUniqueInput
  }

  /**
   * Transacao findUniqueOrThrow
   */
  export type TransacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter, which Transacao to fetch.
     */
    where: TransacaoWhereUniqueInput
  }

  /**
   * Transacao findFirst
   */
  export type TransacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter, which Transacao to fetch.
     */
    where?: TransacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacaos to fetch.
     */
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transacaos.
     */
    cursor?: TransacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transacaos.
     */
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * Transacao findFirstOrThrow
   */
  export type TransacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter, which Transacao to fetch.
     */
    where?: TransacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacaos to fetch.
     */
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transacaos.
     */
    cursor?: TransacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transacaos.
     */
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * Transacao findMany
   */
  export type TransacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter, which Transacaos to fetch.
     */
    where?: TransacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacaos to fetch.
     */
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transacaos.
     */
    cursor?: TransacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacaos.
     */
    skip?: number
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * Transacao create
   */
  export type TransacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Transacao.
     */
    data: XOR<TransacaoCreateInput, TransacaoUncheckedCreateInput>
  }

  /**
   * Transacao createMany
   */
  export type TransacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transacaos.
     */
    data: TransacaoCreateManyInput | TransacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transacao createManyAndReturn
   */
  export type TransacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Transacaos.
     */
    data: TransacaoCreateManyInput | TransacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transacao update
   */
  export type TransacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Transacao.
     */
    data: XOR<TransacaoUpdateInput, TransacaoUncheckedUpdateInput>
    /**
     * Choose, which Transacao to update.
     */
    where: TransacaoWhereUniqueInput
  }

  /**
   * Transacao updateMany
   */
  export type TransacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transacaos.
     */
    data: XOR<TransacaoUpdateManyMutationInput, TransacaoUncheckedUpdateManyInput>
    /**
     * Filter which Transacaos to update
     */
    where?: TransacaoWhereInput
    /**
     * Limit how many Transacaos to update.
     */
    limit?: number
  }

  /**
   * Transacao updateManyAndReturn
   */
  export type TransacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * The data used to update Transacaos.
     */
    data: XOR<TransacaoUpdateManyMutationInput, TransacaoUncheckedUpdateManyInput>
    /**
     * Filter which Transacaos to update
     */
    where?: TransacaoWhereInput
    /**
     * Limit how many Transacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transacao upsert
   */
  export type TransacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Transacao to update in case it exists.
     */
    where: TransacaoWhereUniqueInput
    /**
     * In case the Transacao found by the `where` argument doesn't exist, create a new Transacao with this data.
     */
    create: XOR<TransacaoCreateInput, TransacaoUncheckedCreateInput>
    /**
     * In case the Transacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransacaoUpdateInput, TransacaoUncheckedUpdateInput>
  }

  /**
   * Transacao delete
   */
  export type TransacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter which Transacao to delete.
     */
    where: TransacaoWhereUniqueInput
  }

  /**
   * Transacao deleteMany
   */
  export type TransacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transacaos to delete
     */
    where?: TransacaoWhereInput
    /**
     * Limit how many Transacaos to delete.
     */
    limit?: number
  }

  /**
   * Transacao without action
   */
  export type TransacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
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


  export const ContaBancariaScalarFieldEnum: {
    id: 'id',
    nomeDono: 'nomeDono',
    saldo: 'saldo'
  };

  export type ContaBancariaScalarFieldEnum = (typeof ContaBancariaScalarFieldEnum)[keyof typeof ContaBancariaScalarFieldEnum]


  export const TransacaoScalarFieldEnum: {
    id: 'id',
    contaOrigemId: 'contaOrigemId',
    contaDestinoId: 'contaDestinoId',
    valorTransferencia: 'valorTransferencia',
    status: 'status'
  };

  export type TransacaoScalarFieldEnum = (typeof TransacaoScalarFieldEnum)[keyof typeof TransacaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    
  /**
   * Deep Input Types
   */


  export type ContaBancariaWhereInput = {
    AND?: ContaBancariaWhereInput | ContaBancariaWhereInput[]
    OR?: ContaBancariaWhereInput[]
    NOT?: ContaBancariaWhereInput | ContaBancariaWhereInput[]
    id?: IntFilter<"ContaBancaria"> | number
    nomeDono?: StringFilter<"ContaBancaria"> | string
    saldo?: FloatFilter<"ContaBancaria"> | number
    transacoesOrigem?: TransacaoListRelationFilter
    transacoesDestino?: TransacaoListRelationFilter
  }

  export type ContaBancariaOrderByWithRelationInput = {
    id?: SortOrder
    nomeDono?: SortOrder
    saldo?: SortOrder
    transacoesOrigem?: TransacaoOrderByRelationAggregateInput
    transacoesDestino?: TransacaoOrderByRelationAggregateInput
  }

  export type ContaBancariaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContaBancariaWhereInput | ContaBancariaWhereInput[]
    OR?: ContaBancariaWhereInput[]
    NOT?: ContaBancariaWhereInput | ContaBancariaWhereInput[]
    nomeDono?: StringFilter<"ContaBancaria"> | string
    saldo?: FloatFilter<"ContaBancaria"> | number
    transacoesOrigem?: TransacaoListRelationFilter
    transacoesDestino?: TransacaoListRelationFilter
  }, "id">

  export type ContaBancariaOrderByWithAggregationInput = {
    id?: SortOrder
    nomeDono?: SortOrder
    saldo?: SortOrder
    _count?: ContaBancariaCountOrderByAggregateInput
    _avg?: ContaBancariaAvgOrderByAggregateInput
    _max?: ContaBancariaMaxOrderByAggregateInput
    _min?: ContaBancariaMinOrderByAggregateInput
    _sum?: ContaBancariaSumOrderByAggregateInput
  }

  export type ContaBancariaScalarWhereWithAggregatesInput = {
    AND?: ContaBancariaScalarWhereWithAggregatesInput | ContaBancariaScalarWhereWithAggregatesInput[]
    OR?: ContaBancariaScalarWhereWithAggregatesInput[]
    NOT?: ContaBancariaScalarWhereWithAggregatesInput | ContaBancariaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContaBancaria"> | number
    nomeDono?: StringWithAggregatesFilter<"ContaBancaria"> | string
    saldo?: FloatWithAggregatesFilter<"ContaBancaria"> | number
  }

  export type TransacaoWhereInput = {
    AND?: TransacaoWhereInput | TransacaoWhereInput[]
    OR?: TransacaoWhereInput[]
    NOT?: TransacaoWhereInput | TransacaoWhereInput[]
    id?: IntFilter<"Transacao"> | number
    contaOrigemId?: IntFilter<"Transacao"> | number
    contaDestinoId?: IntFilter<"Transacao"> | number
    valorTransferencia?: FloatFilter<"Transacao"> | number
    status?: EnumStatusFilter<"Transacao"> | $Enums.Status
    contaOrigem?: XOR<ContaBancariaScalarRelationFilter, ContaBancariaWhereInput>
    contaDestino?: XOR<ContaBancariaScalarRelationFilter, ContaBancariaWhereInput>
  }

  export type TransacaoOrderByWithRelationInput = {
    id?: SortOrder
    contaOrigemId?: SortOrder
    contaDestinoId?: SortOrder
    valorTransferencia?: SortOrder
    status?: SortOrder
    contaOrigem?: ContaBancariaOrderByWithRelationInput
    contaDestino?: ContaBancariaOrderByWithRelationInput
  }

  export type TransacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransacaoWhereInput | TransacaoWhereInput[]
    OR?: TransacaoWhereInput[]
    NOT?: TransacaoWhereInput | TransacaoWhereInput[]
    contaOrigemId?: IntFilter<"Transacao"> | number
    contaDestinoId?: IntFilter<"Transacao"> | number
    valorTransferencia?: FloatFilter<"Transacao"> | number
    status?: EnumStatusFilter<"Transacao"> | $Enums.Status
    contaOrigem?: XOR<ContaBancariaScalarRelationFilter, ContaBancariaWhereInput>
    contaDestino?: XOR<ContaBancariaScalarRelationFilter, ContaBancariaWhereInput>
  }, "id">

  export type TransacaoOrderByWithAggregationInput = {
    id?: SortOrder
    contaOrigemId?: SortOrder
    contaDestinoId?: SortOrder
    valorTransferencia?: SortOrder
    status?: SortOrder
    _count?: TransacaoCountOrderByAggregateInput
    _avg?: TransacaoAvgOrderByAggregateInput
    _max?: TransacaoMaxOrderByAggregateInput
    _min?: TransacaoMinOrderByAggregateInput
    _sum?: TransacaoSumOrderByAggregateInput
  }

  export type TransacaoScalarWhereWithAggregatesInput = {
    AND?: TransacaoScalarWhereWithAggregatesInput | TransacaoScalarWhereWithAggregatesInput[]
    OR?: TransacaoScalarWhereWithAggregatesInput[]
    NOT?: TransacaoScalarWhereWithAggregatesInput | TransacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transacao"> | number
    contaOrigemId?: IntWithAggregatesFilter<"Transacao"> | number
    contaDestinoId?: IntWithAggregatesFilter<"Transacao"> | number
    valorTransferencia?: FloatWithAggregatesFilter<"Transacao"> | number
    status?: EnumStatusWithAggregatesFilter<"Transacao"> | $Enums.Status
  }

  export type ContaBancariaCreateInput = {
    nomeDono: string
    saldo: number
    transacoesOrigem?: TransacaoCreateNestedManyWithoutContaOrigemInput
    transacoesDestino?: TransacaoCreateNestedManyWithoutContaDestinoInput
  }

  export type ContaBancariaUncheckedCreateInput = {
    id?: number
    nomeDono: string
    saldo: number
    transacoesOrigem?: TransacaoUncheckedCreateNestedManyWithoutContaOrigemInput
    transacoesDestino?: TransacaoUncheckedCreateNestedManyWithoutContaDestinoInput
  }

  export type ContaBancariaUpdateInput = {
    nomeDono?: StringFieldUpdateOperationsInput | string
    saldo?: FloatFieldUpdateOperationsInput | number
    transacoesOrigem?: TransacaoUpdateManyWithoutContaOrigemNestedInput
    transacoesDestino?: TransacaoUpdateManyWithoutContaDestinoNestedInput
  }

  export type ContaBancariaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeDono?: StringFieldUpdateOperationsInput | string
    saldo?: FloatFieldUpdateOperationsInput | number
    transacoesOrigem?: TransacaoUncheckedUpdateManyWithoutContaOrigemNestedInput
    transacoesDestino?: TransacaoUncheckedUpdateManyWithoutContaDestinoNestedInput
  }

  export type ContaBancariaCreateManyInput = {
    id?: number
    nomeDono: string
    saldo: number
  }

  export type ContaBancariaUpdateManyMutationInput = {
    nomeDono?: StringFieldUpdateOperationsInput | string
    saldo?: FloatFieldUpdateOperationsInput | number
  }

  export type ContaBancariaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeDono?: StringFieldUpdateOperationsInput | string
    saldo?: FloatFieldUpdateOperationsInput | number
  }

  export type TransacaoCreateInput = {
    valorTransferencia: number
    status: $Enums.Status
    contaOrigem: ContaBancariaCreateNestedOneWithoutTransacoesOrigemInput
    contaDestino: ContaBancariaCreateNestedOneWithoutTransacoesDestinoInput
  }

  export type TransacaoUncheckedCreateInput = {
    id?: number
    contaOrigemId: number
    contaDestinoId: number
    valorTransferencia: number
    status: $Enums.Status
  }

  export type TransacaoUpdateInput = {
    valorTransferencia?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    contaOrigem?: ContaBancariaUpdateOneRequiredWithoutTransacoesOrigemNestedInput
    contaDestino?: ContaBancariaUpdateOneRequiredWithoutTransacoesDestinoNestedInput
  }

  export type TransacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    contaOrigemId?: IntFieldUpdateOperationsInput | number
    contaDestinoId?: IntFieldUpdateOperationsInput | number
    valorTransferencia?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type TransacaoCreateManyInput = {
    id?: number
    contaOrigemId: number
    contaDestinoId: number
    valorTransferencia: number
    status: $Enums.Status
  }

  export type TransacaoUpdateManyMutationInput = {
    valorTransferencia?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type TransacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    contaOrigemId?: IntFieldUpdateOperationsInput | number
    contaDestinoId?: IntFieldUpdateOperationsInput | number
    valorTransferencia?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TransacaoListRelationFilter = {
    every?: TransacaoWhereInput
    some?: TransacaoWhereInput
    none?: TransacaoWhereInput
  }

  export type TransacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContaBancariaCountOrderByAggregateInput = {
    id?: SortOrder
    nomeDono?: SortOrder
    saldo?: SortOrder
  }

  export type ContaBancariaAvgOrderByAggregateInput = {
    id?: SortOrder
    saldo?: SortOrder
  }

  export type ContaBancariaMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeDono?: SortOrder
    saldo?: SortOrder
  }

  export type ContaBancariaMinOrderByAggregateInput = {
    id?: SortOrder
    nomeDono?: SortOrder
    saldo?: SortOrder
  }

  export type ContaBancariaSumOrderByAggregateInput = {
    id?: SortOrder
    saldo?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type ContaBancariaScalarRelationFilter = {
    is?: ContaBancariaWhereInput
    isNot?: ContaBancariaWhereInput
  }

  export type TransacaoCountOrderByAggregateInput = {
    id?: SortOrder
    contaOrigemId?: SortOrder
    contaDestinoId?: SortOrder
    valorTransferencia?: SortOrder
    status?: SortOrder
  }

  export type TransacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    contaOrigemId?: SortOrder
    contaDestinoId?: SortOrder
    valorTransferencia?: SortOrder
  }

  export type TransacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    contaOrigemId?: SortOrder
    contaDestinoId?: SortOrder
    valorTransferencia?: SortOrder
    status?: SortOrder
  }

  export type TransacaoMinOrderByAggregateInput = {
    id?: SortOrder
    contaOrigemId?: SortOrder
    contaDestinoId?: SortOrder
    valorTransferencia?: SortOrder
    status?: SortOrder
  }

  export type TransacaoSumOrderByAggregateInput = {
    id?: SortOrder
    contaOrigemId?: SortOrder
    contaDestinoId?: SortOrder
    valorTransferencia?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type TransacaoCreateNestedManyWithoutContaOrigemInput = {
    create?: XOR<TransacaoCreateWithoutContaOrigemInput, TransacaoUncheckedCreateWithoutContaOrigemInput> | TransacaoCreateWithoutContaOrigemInput[] | TransacaoUncheckedCreateWithoutContaOrigemInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutContaOrigemInput | TransacaoCreateOrConnectWithoutContaOrigemInput[]
    createMany?: TransacaoCreateManyContaOrigemInputEnvelope
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
  }

  export type TransacaoCreateNestedManyWithoutContaDestinoInput = {
    create?: XOR<TransacaoCreateWithoutContaDestinoInput, TransacaoUncheckedCreateWithoutContaDestinoInput> | TransacaoCreateWithoutContaDestinoInput[] | TransacaoUncheckedCreateWithoutContaDestinoInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutContaDestinoInput | TransacaoCreateOrConnectWithoutContaDestinoInput[]
    createMany?: TransacaoCreateManyContaDestinoInputEnvelope
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
  }

  export type TransacaoUncheckedCreateNestedManyWithoutContaOrigemInput = {
    create?: XOR<TransacaoCreateWithoutContaOrigemInput, TransacaoUncheckedCreateWithoutContaOrigemInput> | TransacaoCreateWithoutContaOrigemInput[] | TransacaoUncheckedCreateWithoutContaOrigemInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutContaOrigemInput | TransacaoCreateOrConnectWithoutContaOrigemInput[]
    createMany?: TransacaoCreateManyContaOrigemInputEnvelope
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
  }

  export type TransacaoUncheckedCreateNestedManyWithoutContaDestinoInput = {
    create?: XOR<TransacaoCreateWithoutContaDestinoInput, TransacaoUncheckedCreateWithoutContaDestinoInput> | TransacaoCreateWithoutContaDestinoInput[] | TransacaoUncheckedCreateWithoutContaDestinoInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutContaDestinoInput | TransacaoCreateOrConnectWithoutContaDestinoInput[]
    createMany?: TransacaoCreateManyContaDestinoInputEnvelope
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TransacaoUpdateManyWithoutContaOrigemNestedInput = {
    create?: XOR<TransacaoCreateWithoutContaOrigemInput, TransacaoUncheckedCreateWithoutContaOrigemInput> | TransacaoCreateWithoutContaOrigemInput[] | TransacaoUncheckedCreateWithoutContaOrigemInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutContaOrigemInput | TransacaoCreateOrConnectWithoutContaOrigemInput[]
    upsert?: TransacaoUpsertWithWhereUniqueWithoutContaOrigemInput | TransacaoUpsertWithWhereUniqueWithoutContaOrigemInput[]
    createMany?: TransacaoCreateManyContaOrigemInputEnvelope
    set?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    disconnect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    delete?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    update?: TransacaoUpdateWithWhereUniqueWithoutContaOrigemInput | TransacaoUpdateWithWhereUniqueWithoutContaOrigemInput[]
    updateMany?: TransacaoUpdateManyWithWhereWithoutContaOrigemInput | TransacaoUpdateManyWithWhereWithoutContaOrigemInput[]
    deleteMany?: TransacaoScalarWhereInput | TransacaoScalarWhereInput[]
  }

  export type TransacaoUpdateManyWithoutContaDestinoNestedInput = {
    create?: XOR<TransacaoCreateWithoutContaDestinoInput, TransacaoUncheckedCreateWithoutContaDestinoInput> | TransacaoCreateWithoutContaDestinoInput[] | TransacaoUncheckedCreateWithoutContaDestinoInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutContaDestinoInput | TransacaoCreateOrConnectWithoutContaDestinoInput[]
    upsert?: TransacaoUpsertWithWhereUniqueWithoutContaDestinoInput | TransacaoUpsertWithWhereUniqueWithoutContaDestinoInput[]
    createMany?: TransacaoCreateManyContaDestinoInputEnvelope
    set?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    disconnect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    delete?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    update?: TransacaoUpdateWithWhereUniqueWithoutContaDestinoInput | TransacaoUpdateWithWhereUniqueWithoutContaDestinoInput[]
    updateMany?: TransacaoUpdateManyWithWhereWithoutContaDestinoInput | TransacaoUpdateManyWithWhereWithoutContaDestinoInput[]
    deleteMany?: TransacaoScalarWhereInput | TransacaoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TransacaoUncheckedUpdateManyWithoutContaOrigemNestedInput = {
    create?: XOR<TransacaoCreateWithoutContaOrigemInput, TransacaoUncheckedCreateWithoutContaOrigemInput> | TransacaoCreateWithoutContaOrigemInput[] | TransacaoUncheckedCreateWithoutContaOrigemInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutContaOrigemInput | TransacaoCreateOrConnectWithoutContaOrigemInput[]
    upsert?: TransacaoUpsertWithWhereUniqueWithoutContaOrigemInput | TransacaoUpsertWithWhereUniqueWithoutContaOrigemInput[]
    createMany?: TransacaoCreateManyContaOrigemInputEnvelope
    set?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    disconnect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    delete?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    update?: TransacaoUpdateWithWhereUniqueWithoutContaOrigemInput | TransacaoUpdateWithWhereUniqueWithoutContaOrigemInput[]
    updateMany?: TransacaoUpdateManyWithWhereWithoutContaOrigemInput | TransacaoUpdateManyWithWhereWithoutContaOrigemInput[]
    deleteMany?: TransacaoScalarWhereInput | TransacaoScalarWhereInput[]
  }

  export type TransacaoUncheckedUpdateManyWithoutContaDestinoNestedInput = {
    create?: XOR<TransacaoCreateWithoutContaDestinoInput, TransacaoUncheckedCreateWithoutContaDestinoInput> | TransacaoCreateWithoutContaDestinoInput[] | TransacaoUncheckedCreateWithoutContaDestinoInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutContaDestinoInput | TransacaoCreateOrConnectWithoutContaDestinoInput[]
    upsert?: TransacaoUpsertWithWhereUniqueWithoutContaDestinoInput | TransacaoUpsertWithWhereUniqueWithoutContaDestinoInput[]
    createMany?: TransacaoCreateManyContaDestinoInputEnvelope
    set?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    disconnect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    delete?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    update?: TransacaoUpdateWithWhereUniqueWithoutContaDestinoInput | TransacaoUpdateWithWhereUniqueWithoutContaDestinoInput[]
    updateMany?: TransacaoUpdateManyWithWhereWithoutContaDestinoInput | TransacaoUpdateManyWithWhereWithoutContaDestinoInput[]
    deleteMany?: TransacaoScalarWhereInput | TransacaoScalarWhereInput[]
  }

  export type ContaBancariaCreateNestedOneWithoutTransacoesOrigemInput = {
    create?: XOR<ContaBancariaCreateWithoutTransacoesOrigemInput, ContaBancariaUncheckedCreateWithoutTransacoesOrigemInput>
    connectOrCreate?: ContaBancariaCreateOrConnectWithoutTransacoesOrigemInput
    connect?: ContaBancariaWhereUniqueInput
  }

  export type ContaBancariaCreateNestedOneWithoutTransacoesDestinoInput = {
    create?: XOR<ContaBancariaCreateWithoutTransacoesDestinoInput, ContaBancariaUncheckedCreateWithoutTransacoesDestinoInput>
    connectOrCreate?: ContaBancariaCreateOrConnectWithoutTransacoesDestinoInput
    connect?: ContaBancariaWhereUniqueInput
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type ContaBancariaUpdateOneRequiredWithoutTransacoesOrigemNestedInput = {
    create?: XOR<ContaBancariaCreateWithoutTransacoesOrigemInput, ContaBancariaUncheckedCreateWithoutTransacoesOrigemInput>
    connectOrCreate?: ContaBancariaCreateOrConnectWithoutTransacoesOrigemInput
    upsert?: ContaBancariaUpsertWithoutTransacoesOrigemInput
    connect?: ContaBancariaWhereUniqueInput
    update?: XOR<XOR<ContaBancariaUpdateToOneWithWhereWithoutTransacoesOrigemInput, ContaBancariaUpdateWithoutTransacoesOrigemInput>, ContaBancariaUncheckedUpdateWithoutTransacoesOrigemInput>
  }

  export type ContaBancariaUpdateOneRequiredWithoutTransacoesDestinoNestedInput = {
    create?: XOR<ContaBancariaCreateWithoutTransacoesDestinoInput, ContaBancariaUncheckedCreateWithoutTransacoesDestinoInput>
    connectOrCreate?: ContaBancariaCreateOrConnectWithoutTransacoesDestinoInput
    upsert?: ContaBancariaUpsertWithoutTransacoesDestinoInput
    connect?: ContaBancariaWhereUniqueInput
    update?: XOR<XOR<ContaBancariaUpdateToOneWithWhereWithoutTransacoesDestinoInput, ContaBancariaUpdateWithoutTransacoesDestinoInput>, ContaBancariaUncheckedUpdateWithoutTransacoesDestinoInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type TransacaoCreateWithoutContaOrigemInput = {
    valorTransferencia: number
    status: $Enums.Status
    contaDestino: ContaBancariaCreateNestedOneWithoutTransacoesDestinoInput
  }

  export type TransacaoUncheckedCreateWithoutContaOrigemInput = {
    id?: number
    contaDestinoId: number
    valorTransferencia: number
    status: $Enums.Status
  }

  export type TransacaoCreateOrConnectWithoutContaOrigemInput = {
    where: TransacaoWhereUniqueInput
    create: XOR<TransacaoCreateWithoutContaOrigemInput, TransacaoUncheckedCreateWithoutContaOrigemInput>
  }

  export type TransacaoCreateManyContaOrigemInputEnvelope = {
    data: TransacaoCreateManyContaOrigemInput | TransacaoCreateManyContaOrigemInput[]
    skipDuplicates?: boolean
  }

  export type TransacaoCreateWithoutContaDestinoInput = {
    valorTransferencia: number
    status: $Enums.Status
    contaOrigem: ContaBancariaCreateNestedOneWithoutTransacoesOrigemInput
  }

  export type TransacaoUncheckedCreateWithoutContaDestinoInput = {
    id?: number
    contaOrigemId: number
    valorTransferencia: number
    status: $Enums.Status
  }

  export type TransacaoCreateOrConnectWithoutContaDestinoInput = {
    where: TransacaoWhereUniqueInput
    create: XOR<TransacaoCreateWithoutContaDestinoInput, TransacaoUncheckedCreateWithoutContaDestinoInput>
  }

  export type TransacaoCreateManyContaDestinoInputEnvelope = {
    data: TransacaoCreateManyContaDestinoInput | TransacaoCreateManyContaDestinoInput[]
    skipDuplicates?: boolean
  }

  export type TransacaoUpsertWithWhereUniqueWithoutContaOrigemInput = {
    where: TransacaoWhereUniqueInput
    update: XOR<TransacaoUpdateWithoutContaOrigemInput, TransacaoUncheckedUpdateWithoutContaOrigemInput>
    create: XOR<TransacaoCreateWithoutContaOrigemInput, TransacaoUncheckedCreateWithoutContaOrigemInput>
  }

  export type TransacaoUpdateWithWhereUniqueWithoutContaOrigemInput = {
    where: TransacaoWhereUniqueInput
    data: XOR<TransacaoUpdateWithoutContaOrigemInput, TransacaoUncheckedUpdateWithoutContaOrigemInput>
  }

  export type TransacaoUpdateManyWithWhereWithoutContaOrigemInput = {
    where: TransacaoScalarWhereInput
    data: XOR<TransacaoUpdateManyMutationInput, TransacaoUncheckedUpdateManyWithoutContaOrigemInput>
  }

  export type TransacaoScalarWhereInput = {
    AND?: TransacaoScalarWhereInput | TransacaoScalarWhereInput[]
    OR?: TransacaoScalarWhereInput[]
    NOT?: TransacaoScalarWhereInput | TransacaoScalarWhereInput[]
    id?: IntFilter<"Transacao"> | number
    contaOrigemId?: IntFilter<"Transacao"> | number
    contaDestinoId?: IntFilter<"Transacao"> | number
    valorTransferencia?: FloatFilter<"Transacao"> | number
    status?: EnumStatusFilter<"Transacao"> | $Enums.Status
  }

  export type TransacaoUpsertWithWhereUniqueWithoutContaDestinoInput = {
    where: TransacaoWhereUniqueInput
    update: XOR<TransacaoUpdateWithoutContaDestinoInput, TransacaoUncheckedUpdateWithoutContaDestinoInput>
    create: XOR<TransacaoCreateWithoutContaDestinoInput, TransacaoUncheckedCreateWithoutContaDestinoInput>
  }

  export type TransacaoUpdateWithWhereUniqueWithoutContaDestinoInput = {
    where: TransacaoWhereUniqueInput
    data: XOR<TransacaoUpdateWithoutContaDestinoInput, TransacaoUncheckedUpdateWithoutContaDestinoInput>
  }

  export type TransacaoUpdateManyWithWhereWithoutContaDestinoInput = {
    where: TransacaoScalarWhereInput
    data: XOR<TransacaoUpdateManyMutationInput, TransacaoUncheckedUpdateManyWithoutContaDestinoInput>
  }

  export type ContaBancariaCreateWithoutTransacoesOrigemInput = {
    nomeDono: string
    saldo: number
    transacoesDestino?: TransacaoCreateNestedManyWithoutContaDestinoInput
  }

  export type ContaBancariaUncheckedCreateWithoutTransacoesOrigemInput = {
    id?: number
    nomeDono: string
    saldo: number
    transacoesDestino?: TransacaoUncheckedCreateNestedManyWithoutContaDestinoInput
  }

  export type ContaBancariaCreateOrConnectWithoutTransacoesOrigemInput = {
    where: ContaBancariaWhereUniqueInput
    create: XOR<ContaBancariaCreateWithoutTransacoesOrigemInput, ContaBancariaUncheckedCreateWithoutTransacoesOrigemInput>
  }

  export type ContaBancariaCreateWithoutTransacoesDestinoInput = {
    nomeDono: string
    saldo: number
    transacoesOrigem?: TransacaoCreateNestedManyWithoutContaOrigemInput
  }

  export type ContaBancariaUncheckedCreateWithoutTransacoesDestinoInput = {
    id?: number
    nomeDono: string
    saldo: number
    transacoesOrigem?: TransacaoUncheckedCreateNestedManyWithoutContaOrigemInput
  }

  export type ContaBancariaCreateOrConnectWithoutTransacoesDestinoInput = {
    where: ContaBancariaWhereUniqueInput
    create: XOR<ContaBancariaCreateWithoutTransacoesDestinoInput, ContaBancariaUncheckedCreateWithoutTransacoesDestinoInput>
  }

  export type ContaBancariaUpsertWithoutTransacoesOrigemInput = {
    update: XOR<ContaBancariaUpdateWithoutTransacoesOrigemInput, ContaBancariaUncheckedUpdateWithoutTransacoesOrigemInput>
    create: XOR<ContaBancariaCreateWithoutTransacoesOrigemInput, ContaBancariaUncheckedCreateWithoutTransacoesOrigemInput>
    where?: ContaBancariaWhereInput
  }

  export type ContaBancariaUpdateToOneWithWhereWithoutTransacoesOrigemInput = {
    where?: ContaBancariaWhereInput
    data: XOR<ContaBancariaUpdateWithoutTransacoesOrigemInput, ContaBancariaUncheckedUpdateWithoutTransacoesOrigemInput>
  }

  export type ContaBancariaUpdateWithoutTransacoesOrigemInput = {
    nomeDono?: StringFieldUpdateOperationsInput | string
    saldo?: FloatFieldUpdateOperationsInput | number
    transacoesDestino?: TransacaoUpdateManyWithoutContaDestinoNestedInput
  }

  export type ContaBancariaUncheckedUpdateWithoutTransacoesOrigemInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeDono?: StringFieldUpdateOperationsInput | string
    saldo?: FloatFieldUpdateOperationsInput | number
    transacoesDestino?: TransacaoUncheckedUpdateManyWithoutContaDestinoNestedInput
  }

  export type ContaBancariaUpsertWithoutTransacoesDestinoInput = {
    update: XOR<ContaBancariaUpdateWithoutTransacoesDestinoInput, ContaBancariaUncheckedUpdateWithoutTransacoesDestinoInput>
    create: XOR<ContaBancariaCreateWithoutTransacoesDestinoInput, ContaBancariaUncheckedCreateWithoutTransacoesDestinoInput>
    where?: ContaBancariaWhereInput
  }

  export type ContaBancariaUpdateToOneWithWhereWithoutTransacoesDestinoInput = {
    where?: ContaBancariaWhereInput
    data: XOR<ContaBancariaUpdateWithoutTransacoesDestinoInput, ContaBancariaUncheckedUpdateWithoutTransacoesDestinoInput>
  }

  export type ContaBancariaUpdateWithoutTransacoesDestinoInput = {
    nomeDono?: StringFieldUpdateOperationsInput | string
    saldo?: FloatFieldUpdateOperationsInput | number
    transacoesOrigem?: TransacaoUpdateManyWithoutContaOrigemNestedInput
  }

  export type ContaBancariaUncheckedUpdateWithoutTransacoesDestinoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeDono?: StringFieldUpdateOperationsInput | string
    saldo?: FloatFieldUpdateOperationsInput | number
    transacoesOrigem?: TransacaoUncheckedUpdateManyWithoutContaOrigemNestedInput
  }

  export type TransacaoCreateManyContaOrigemInput = {
    id?: number
    contaDestinoId: number
    valorTransferencia: number
    status: $Enums.Status
  }

  export type TransacaoCreateManyContaDestinoInput = {
    id?: number
    contaOrigemId: number
    valorTransferencia: number
    status: $Enums.Status
  }

  export type TransacaoUpdateWithoutContaOrigemInput = {
    valorTransferencia?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    contaDestino?: ContaBancariaUpdateOneRequiredWithoutTransacoesDestinoNestedInput
  }

  export type TransacaoUncheckedUpdateWithoutContaOrigemInput = {
    id?: IntFieldUpdateOperationsInput | number
    contaDestinoId?: IntFieldUpdateOperationsInput | number
    valorTransferencia?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type TransacaoUncheckedUpdateManyWithoutContaOrigemInput = {
    id?: IntFieldUpdateOperationsInput | number
    contaDestinoId?: IntFieldUpdateOperationsInput | number
    valorTransferencia?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type TransacaoUpdateWithoutContaDestinoInput = {
    valorTransferencia?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    contaOrigem?: ContaBancariaUpdateOneRequiredWithoutTransacoesOrigemNestedInput
  }

  export type TransacaoUncheckedUpdateWithoutContaDestinoInput = {
    id?: IntFieldUpdateOperationsInput | number
    contaOrigemId?: IntFieldUpdateOperationsInput | number
    valorTransferencia?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type TransacaoUncheckedUpdateManyWithoutContaDestinoInput = {
    id?: IntFieldUpdateOperationsInput | number
    contaOrigemId?: IntFieldUpdateOperationsInput | number
    valorTransferencia?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
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