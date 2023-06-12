import React from 'react'
import Header from './includes/Header'
import Banner from '../components/Banner'
import Footer from './includes/Footer'
import { teams } from './VirtualData'
import Member from '../components/Member'

const TeamMembers = () => {


  return (
    <>
        <Header />
        
        <Banner page='Page Members' path={['Home', 'Page Members']} />

        <div className="my-5 px-3 px-lg-5 d-grid grid-lg-3 grid-2 gap-2">
            {
                teams.map((team) => <Member {...team} key={team.team_id}/>)
            }
        </div>

        <Footer />
    </>
  )
}

export default TeamMembers