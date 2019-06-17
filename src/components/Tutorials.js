import React from 'react'

const Tutorials = ({ tutorial }) => {
  return (
    <React.Fragment>
      <div className="list-group-item mb-4" key={tutorial.nid}>
        <p>
          <strong>{tutorial.title}</strong>
        </p>
        <p className="d-flex align-items-center">
          <span className="mr-1 text-muted">Topic: </span>
          <span>{tutorial.fieldTopic}</span>
        </p>
        <p dangerouslySetInnerHTML={{__html: tutorial.fieldSummary.processed}}/>
        <a className="btn btn-primary" href={tutorial.fieldLink.uri} target="_blank">{tutorial.fieldLink.title}</a>
      </div>
    </React.Fragment>
  )
}
export default Tutorials;