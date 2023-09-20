import { faker } from "@faker-js/faker";
import { useQuery } from "@tanstack/react-query";
import type {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Valos
 * Example valorant web service
 * OpenAPI spec version: 2023.9.17
 */
import axios from "axios";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { rest } from "msw";
import type {
  GetContentBadRequestResponse,
  GetContentSuccessResponse,
} from "./api.schemas";

/**
 * @summary Get contents
 */
export const contents = (
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<GetContentSuccessResponse>> => {
  return axios.get(`/api/contents`, options);
};

export const getContentsQueryKey = () => [`/api/contents`] as const;

export const getContentsQueryOptions = <
  TData = Awaited<ReturnType<typeof contents>>,
  TError = AxiosError<GetContentBadRequestResponse>,
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof contents>>, TError, TData>;
  axios?: AxiosRequestConfig;
}): UseQueryOptions<Awaited<ReturnType<typeof contents>>, TError, TData> & {
  queryKey: QueryKey;
} => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getContentsQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof contents>>> = ({
    signal,
  }) => contents({ signal, ...axiosOptions });

  return { queryKey, queryFn, ...queryOptions };
};

export type ContentsQueryResult = NonNullable<
  Awaited<ReturnType<typeof contents>>
>;
export type ContentsQueryError = AxiosError<GetContentBadRequestResponse>;

/**
 * @summary Get contents
 */
export const useContents = <
  TData = Awaited<ReturnType<typeof contents>>,
  TError = AxiosError<GetContentBadRequestResponse>,
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof contents>>, TError, TData>;
  axios?: AxiosRequestConfig;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getContentsQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const getContentsMock = () => ({
  contents: {
    version: faker.random.word(),
    characters: Array.from(
      { length: faker.datatype.number({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      id: faker.random.word(),
      assetName: faker.random.word(),
      assetPath: faker.random.word(),
      localizedNames: faker.helpers.arrayElement([
        { "en-US": faker.random.word(), "ja-JP": faker.random.word() },
        undefined,
      ]),
    })),
    maps: Array.from(
      { length: faker.datatype.number({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      id: faker.random.word(),
      assetName: faker.random.word(),
      assetPath: faker.random.word(),
      localizedNames: faker.helpers.arrayElement([
        { "en-US": faker.random.word(), "ja-JP": faker.random.word() },
        undefined,
      ]),
    })),
    chromas: Array.from(
      { length: faker.datatype.number({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      id: faker.random.word(),
      assetName: faker.random.word(),
      assetPath: faker.random.word(),
      localizedNames: faker.helpers.arrayElement([
        { "en-US": faker.random.word(), "ja-JP": faker.random.word() },
        undefined,
      ]),
    })),
    skins: Array.from(
      { length: faker.datatype.number({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      id: faker.random.word(),
      assetName: faker.random.word(),
      assetPath: faker.random.word(),
      localizedNames: faker.helpers.arrayElement([
        { "en-US": faker.random.word(), "ja-JP": faker.random.word() },
        undefined,
      ]),
    })),
    skinLevels: Array.from(
      { length: faker.datatype.number({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      id: faker.random.word(),
      assetName: faker.random.word(),
      assetPath: faker.random.word(),
      localizedNames: faker.helpers.arrayElement([
        { "en-US": faker.random.word(), "ja-JP": faker.random.word() },
        undefined,
      ]),
    })),
    equips: Array.from(
      { length: faker.datatype.number({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      id: faker.random.word(),
      assetName: faker.random.word(),
      assetPath: faker.random.word(),
      localizedNames: faker.helpers.arrayElement([
        { "en-US": faker.random.word(), "ja-JP": faker.random.word() },
        undefined,
      ]),
    })),
    gameModes: Array.from(
      { length: faker.datatype.number({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      id: faker.random.word(),
      assetName: faker.random.word(),
      assetPath: faker.random.word(),
      localizedNames: faker.helpers.arrayElement([
        { "en-US": faker.random.word(), "ja-JP": faker.random.word() },
        undefined,
      ]),
    })),
    sprays: Array.from(
      { length: faker.datatype.number({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      id: faker.random.word(),
      assetName: faker.random.word(),
      assetPath: faker.random.word(),
      localizedNames: faker.helpers.arrayElement([
        { "en-US": faker.random.word(), "ja-JP": faker.random.word() },
        undefined,
      ]),
    })),
    sprayLevels: Array.from(
      { length: faker.datatype.number({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      id: faker.random.word(),
      assetName: faker.random.word(),
      assetPath: faker.random.word(),
      localizedNames: faker.helpers.arrayElement([
        { "en-US": faker.random.word(), "ja-JP": faker.random.word() },
        undefined,
      ]),
    })),
    charms: Array.from(
      { length: faker.datatype.number({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      id: faker.random.word(),
      assetName: faker.random.word(),
      assetPath: faker.random.word(),
      localizedNames: faker.helpers.arrayElement([
        { "en-US": faker.random.word(), "ja-JP": faker.random.word() },
        undefined,
      ]),
    })),
    charmLevels: Array.from(
      { length: faker.datatype.number({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      id: faker.random.word(),
      assetName: faker.random.word(),
      assetPath: faker.random.word(),
      localizedNames: faker.helpers.arrayElement([
        { "en-US": faker.random.word(), "ja-JP": faker.random.word() },
        undefined,
      ]),
    })),
    playerCards: Array.from(
      { length: faker.datatype.number({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      id: faker.random.word(),
      assetName: faker.random.word(),
      assetPath: faker.random.word(),
      localizedNames: faker.helpers.arrayElement([
        { "en-US": faker.random.word(), "ja-JP": faker.random.word() },
        undefined,
      ]),
    })),
    playerTitles: Array.from(
      { length: faker.datatype.number({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      id: faker.random.word(),
      assetName: faker.random.word(),
      assetPath: faker.random.word(),
      localizedNames: faker.helpers.arrayElement([
        { "en-US": faker.random.word(), "ja-JP": faker.random.word() },
        undefined,
      ]),
    })),
    acts: Array.from(
      { length: faker.datatype.number({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      id: faker.random.word(),
      name: faker.random.word(),
      isActive: faker.datatype.boolean(),
      localizedNames: faker.helpers.arrayElement([
        { "en-US": faker.random.word(), "ja-JP": faker.random.word() },
        undefined,
      ]),
    })),
  },
});

export const getContentMSW = () => [
  rest.get("*/api/contents", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getContentsMock()),
    );
  }),
];
