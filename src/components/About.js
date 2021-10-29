import Podcast from './Podcast.js';

const About = () => {
  return (
    <div className="about">
      <div>
        <h1>about</h1>
        <p>The Electric Power Project (EPP) is a microlearning app for the electrical industry with the mission of breaking down complex concepts to a digestable form. This includes product basics, applications and sales notes.</p>
        <p>During early deployment of EPP the content will be tailored for the electrical sales, but information remains beneficial across roles within the industry. </p>
        <br />
        <h1>coming soon...</h1>
        <h2>electric power project podcast</h2>
        <Podcast />
        <br />
      </div>

      <div className="disclaimer">
        <em>Disclaimers:</em>
        <br/>
        <em>Content includes both original and manufacturer sourced information. However, the Electric Power Project is operated independent of a manufacturer. Any comments or opinions made within the site contents are not on behalf of any company.</em>
        <br/>
        <em>Information is provided as an educational reference only. All electrical work and design still requires a licensed professional.</em>
      </div>
      <br />
      <br />
    </div>
  )
}

export default About;