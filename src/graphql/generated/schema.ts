// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    Void: any,
    UUID: any,
    Int: number,
    String: string,
    Boolean: boolean,
}

export interface Query {
    stories: Story[]
    __typename: 'Query'
}

export interface Story {
    id: Scalars['UUID']
    priority: Scalars['Int']
    text: Scalars['String']
    __typename: 'Story'
}

export interface Mutation {
    createStory: Story
    updateStory: Story
    deleteStory: (Scalars['Void'] | null)
    __typename: 'Mutation'
}

export interface QueryGenqlSelection{
    stories?: StoryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StoryGenqlSelection{
    id?: boolean | number
    priority?: boolean | number
    text?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationGenqlSelection{
    createStory?: (StoryGenqlSelection & { __args: {input: CreateStoryInput} })
    updateStory?: (StoryGenqlSelection & { __args: {input: UpdateStoryInput} })
    deleteStory?: { __args: {id: Scalars['UUID']} }
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateStoryInput {priority: Scalars['Int'],text: Scalars['String']}

export interface UpdateStoryInput {id: Scalars['UUID'],priority?: (Scalars['Int'] | null),text?: (Scalars['String'] | null)}


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const Story_possibleTypes: string[] = ['Story']
    export const isStory = (obj?: { __typename?: any } | null): obj is Story => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStory"')
      return Story_possibleTypes.includes(obj.__typename)
    }
    


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    