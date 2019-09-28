import React from 'react'
import { Link } from 'react-router-dom'

function CoverPage() {

    return(
      <header>
        <div className="coverPageDiv">
              <Link className="btn btn-full js--scroll-to-plans" to="/venues">Enter</Link>
        </div>
      </header>
    )
}
export default CoverPage
