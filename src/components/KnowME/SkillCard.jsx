import React from 'react'

const SkillCard = props => {
  return (
    <>
        <div className='skills'>React</div>
        <div className='appealing'>
            This is what I recommend the most when I help you with your work.
            With this JS-based lang, I have a lot of confidence to contribute.
            I can use its hooks, such as useState() and useEffect() the way I imagine.
            It would be a good opportunity if I could talk about React with you.
        </div>
        <div className='recent_work'>
          <p>Recent Works</p>
          <ul>
            <li>
              <p>Task-managing Board (Like Trello)</p>
            </li>
            <li>
              <p>This Site for ME</p>
            </li>
          </ul>
        </div>

        <div className='skills'>Python</div>
        <div className='appealing'>
            This must be one of your options when you would think of development with cutting-edge techs.
            I help you a lot with your project both in front ends and in back ends.
            I have so far created web-scraping apps and other RPA tools, which enable my clients to cut their burdensome manual tasks.
        </div>
        <div className='recent_work'>
          <p>Recent Works</p>
          <ul>
            <li>
              <p>Webscraping Apps</p>
            </li>
            <li>
              <p>Apps to compile several elements into one output file</p>
            </li>
          </ul>
        </div>

        <div className='skills'>UiPath</div>
        <div className='appealing'>
            For those who want to see your daily works automated on your PC screens, UiPath is one of the best options I would give you.
            I would automate what you have to do on your desk so that you would focus on more important jobs.
            This must be a chance to you if you think even a little bit of RPA.
        </div>
        <div className='recent_work'>
        <p>Recent Works</p>
          <ul>
            <li>
              <p>Robots to automatize paper works</p>
            </li>
            <li>
              <p>Robots to simplify and automatize procedures to create an official document or form</p>
            </li>
          </ul>
        </div>
    </>
  )
}

export default SkillCard