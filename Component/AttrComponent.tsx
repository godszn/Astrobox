import React from 'react'
import attri from '../images/attri.png'

function AttrComponent() {
  return (
    <div>
      <div className="attribute-wrapper">
        <div className="attribute-container flex items-center">
            <div className="attribute-widget">
                <img src= {attri} alt="" />
            </div>
            <div className="attribute-text-wrapper flex flex-col">
                <div className="attribute-header text-white text-3xl pb-4">
                    <h1>
                     Judging Criteria
                    </h1>
                    <h1 className = 'pink text-3xl'>
                      Key attributes
                    </h1>
                </div>
                <div className="attribute-text text-white">
                <p>
                     <span className = 'pink'>
                       Innovation and Creativity:
                     </span>
                      Evaluate the uniqueness and creativity of the
                      solution. Consider whether it addresses a real-world problem in a novel 
                      way or introduces innovative features.
                   </p>
                   <p>
                     <span className = 'pink'>
                       Functionality:
                     </span>
                      Assess how well the solution works. Does it perform its 
                      intended functions effectively and without major issues? Judges would
                      consider the completeness and robustness of the solution.
                   </p>
                   <p>
                     <span className = 'pink'>
                       Impact and Relevance: 
                     </span>
                       Determine the potential impact of the solution 
                       in the real world. Does it address a significant problem, and is it relevant 
                       to the target audience? Judges would assess the potential social, 
                       economic, or environmental benefits.
                   </p>
                   <p>
                     <span className = 'pink'>
                       Technical Complexity:
                     </span>
                      Evaluate the technical sophistication of the solution. 
                      Judges would consider the complexity of the code, the use of advanced 
                      technologies or algorithms, and the scalability of the solution.
                   </p>
                   <p>
                     <span className = 'pink'>
                      Adherence to Hackathon Rules:
                     </span>
                     Judges will Ensure that the team adhered 
                     to the rules and guidelines of the hackathon, including deadlines, use of 
                     specific technologies or APIs, and any other competition-specific requirements.
                   </p>
                </div>
                <div className="read-btn text-white font-semibold">
                  <a href="">
                    Read more
                  </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AttrComponent
