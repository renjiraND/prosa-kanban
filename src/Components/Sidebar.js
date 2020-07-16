import React from 'react';
import './list.scss';
import { SearchIcon, KebabHorizontalIcon, PlusIcon } from '@primer/octicons-react';
import { ReactComponent as Pic } from '../logo.svg';
import { teamsData } from '../data';

export class Sidebar extends React.Component {

  teamsData = teamsData;

  render() {
    return (
      <div className="sidenav text-white">
        <Search />
        <Profile />
        <div className="container my-1">
          <div className="menu-dark p-2">
            Menu
          </div>
          <div className="col container">
            <div className="row link">Home</div>
            <div className="row link">My Tasks</div>
            <div className="row link">Notifications <span className="notif-count rounded-pill">3</span> </div> 
          </div>
        </div>

        <div className="container my-1">
          <div className="menu-dark p-2">
            Teams
          </div>
          <div className="col container">
            {this.teamsData.teams.map((teamId,idx) => {
              const team = this.teamsData.team[teamId]
              return (
                <div key={idx} className="row">
                  <div className="col-auto link">
                    {team.name}
                  </div>
                  <div className="col">
                    <div className="row justify-content-end">
                      <Pic className="member rounded-circle"/>
                    </div>
                  </div>
                </div>
              )
            })}
            <div className="row">
              <button className="add-team p-2" onClick={this.handleButton}>
                <div className="d-inline-block">
                  <PlusIcon size={16} />
                </div>
                <div className="d-inline-block button-info px-1">
                  Add Team
                </div>
              </button>
            </div>
          </div> 
        </div>
      </div>
    );
  }

}

function Search() {
  return(
    <div className="container d-flex py-2">
      <span className="search p-3 col">
        Search
      </span>
      <span className="col-auto d-block m-auto">
        <SearchIcon size={20}/>
      </span>
    </div>
  );
}

function Profile() {
  var imageLink = "https://media-exp1.licdn.com/dms/image/C5103AQGKx-9yVO-V8w/profile-displayphoto-shrink_100_100/0?e=1599696000&v=beta&t=igp8JPO4vgYny3eSP60VQwNKcIJrSSw4wMFBESfx5sg"
  return(
    <div className="container profile py-2 px-4">
      <div className="row">
        <div className="col-auto">
          <img src={imageLink} className="rounded-circle pic" alt="profile-pic" />
        </div>
        <div className="col px-3">
          <div className="row name">
            Renjira Naufhal
          </div>
          <div className="row role">
            Front-end Engineer
          </div>
        </div>
        <div className="col-auto d-block m-auto">
          <KebabHorizontalIcon size={20}/>
        </div>
      </div>

      <div className="d-flex task my-2">
        <div className="col-6">
          <div className="row task-number">372</div>
          <div className="row task-info">Completed Tasks</div>
        </div>
        <div className="col-6">
          <div className="row task-number">11</div>
          <div className="row task-info">Open Tasks</div>          
        </div>
      </div>
    </div>
  );
}
