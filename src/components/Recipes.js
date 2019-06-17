import React from 'react';

const Recipes = ({ recipe }) => {
  return (
    <React.Fragment>
      <div className="card col-sm-4 my-2 border-0" key={recipe.nid}>
        <div className="card-body">
          <h4 className="text-center">{recipe.title}</h4>
          <img className="img-fluid" src={recipe.fieldImage.entity.thumbnail.style.url} alt={recipe.fieldImage.entity.name} />
        </div>
      </div>
    </React.Fragment>
  )
}
export default Recipes;