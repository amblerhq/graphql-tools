import {
  GraphQLNamedType,
  GraphQLSchema,
  SelectionSetNode,
  FieldNode,
  GraphQLFieldConfig,
  GraphQLObjectType,
  GraphQLInterfaceType,
  GraphQLInputFieldConfig,
  GraphQLInputObjectType,
} from 'graphql';
import { ITypeDefinitions, TypeMap } from '@graphql-tools/utils';
import { Subschema, SubschemaConfig } from '@graphql-tools/delegate';
import { IExecutableSchemaDefinition } from '@graphql-tools/schema';

export interface MergeTypeCandidate {
  type: GraphQLNamedType;
  subschema?: GraphQLSchema | SubschemaConfig;
  transformedSubschema?: Subschema;
}

export interface MergeFieldConfigCandidate {
  fieldConfig: GraphQLFieldConfig<any, any>;
  fieldName: string;
  type: GraphQLObjectType | GraphQLInterfaceType;
  subschema?: GraphQLSchema | SubschemaConfig;
  transformedSubschema?: Subschema;
}

export interface MergeInputFieldConfigCandidate {
  inputFieldConfig: GraphQLInputFieldConfig;
  fieldName: string;
  type: GraphQLInputObjectType;
  subschema?: GraphQLSchema | SubschemaConfig;
  transformedSubschema?: Subschema;
}

export type MergeTypeFilter = (mergeTypeCandidates: Array<MergeTypeCandidate>, typeName: string) => boolean;

export interface MergedTypeInfo {
  typeName: string;
  targetSubschemas: Map<Subschema, Array<Subschema>>;
  uniqueFields: Record<string, Subschema>;
  nonUniqueFields: Record<string, Array<Subschema>>;
  typeMaps: Map<GraphQLSchema | SubschemaConfig, TypeMap>;
  selectionSets: Map<Subschema, SelectionSetNode>;
  fieldSelectionSets: Map<Subschema, Record<string, SelectionSetNode>>;
}

export interface StitchingInfo {
  subschemaMap: Map<GraphQLSchema | SubschemaConfig, Subschema>;
  selectionSetsByField: Record<string, Record<string, SelectionSetNode>>;
  dynamicSelectionSetsByField: Record<string, Record<string, Array<(node: FieldNode) => SelectionSetNode>>>;
  mergedTypes: Record<string, MergedTypeInfo>;
}

export interface IStitchSchemasOptions<TContext = any> extends Omit<IExecutableSchemaDefinition<TContext>, 'typeDefs'> {
  subschemas?: Array<GraphQLSchema | SubschemaConfig | Array<SubschemaConfig>>;
  typeDefs?: ITypeDefinitions;
  types?: Array<GraphQLNamedType>;
  onTypeConflict?: OnTypeConflict;
  mergeDirectives?: boolean;
  mergeTypes?: boolean | Array<string> | MergeTypeFilter;
  typeMergingOptions?: TypeMergingOptions;
  subschemaConfigTransforms?: Array<SubschemaConfigTransform>;
}

export type SubschemaConfigTransform = (subschemaConfig: SubschemaConfig) => SubschemaConfig;

export interface TypeMergingOptions {
  typeDescriptionsMerger?: (candidates: Array<MergeTypeCandidate>) => string;
  fieldConfigMerger?: (candidates: Array<MergeFieldConfigCandidate>) => GraphQLFieldConfig<any, any>;
  inputFieldConfigMerger?: (candidates: Array<MergeInputFieldConfigCandidate>) => GraphQLInputFieldConfig;
}

export type OnTypeConflict = (
  left: GraphQLNamedType,
  right: GraphQLNamedType,
  info?: {
    left: {
      subschema?: GraphQLSchema | SubschemaConfig;
      transformedSubschema?: Subschema;
    };
    right: {
      subschema?: GraphQLSchema | SubschemaConfig;
      transformedSubschema?: Subschema;
    };
  }
) => GraphQLNamedType;

declare module '@graphql-tools/utils' {
  interface IFieldResolverOptions<TSource = any, TContext = any, TArgs = any> {
    fragment?: string;
    selectionSet?: string | ((node: FieldNode) => SelectionSetNode);
  }
}
