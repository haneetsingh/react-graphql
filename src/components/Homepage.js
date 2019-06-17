import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Recipes from './Recipes';
import Tutorials from './Tutorials';

const NODE_QUERY = gql`
  query {
    recipes: nodeQuery(filter: {conditions: {field: "type", value: ["recipe"], operator: EQUAL}}) {
      entities {
        ... on NodeRecipe {
          nid
          title
          created
          fieldIngredients
          fieldSummary {
            processed
          }
          fieldImage {
            entity {
              name
              thumbnail {
                alt
                style: derivative(style: RECIPELIST350300) {
                  url
                }
              }
            }
          }
          fieldRecipeCategory {
            ... on FieldNodeRecipeFieldRecipeCategory {
              entity {
                entityLabel
              }
            }
          }
        }
      }
    }
    tutorials: nodeQuery(limit: 5, filter: {conditions: {field: "type", value: ["tutorial"], operator: EQUAL}}) {
      entities {
        ... on NodeTutorial {
          nid
          title
          fieldTopic
          fieldSummary {
            processed
          }
          fieldLink {
            title
            uri
          }
        }
      }
    }
  }`;

export default class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <Query query={NODE_QUERY}>
          {
            ({ loading, error, data }) => {
              if (loading) return <h4 className="text-center p-4">Loading...</h4>
              if (error) console.log(error);
              // console.log(data);
              return (
                <React.Fragment>
                  <h2 className="text-center font-weight-bold">Recipes</h2>
                  <div className="row mb-4">
                    { data.recipes.entities.map(recipe => {
                        return <Recipes recipe={recipe} key={recipe.nid} />
                      })
                    }
                  </div>
                  <h2 className="text-center font-weight-bold mb-4">Tutorials</h2>
                  <div className="list-group">
                    { data.tutorials.entities.map(tutorial => {
                        return <Tutorials tutorial={tutorial} key={tutorial.nid} />
                      })
                    }
                  </div>
                </React.Fragment>
              )
            }
          }
        </Query>
      </React.Fragment>
    )
  }
}
