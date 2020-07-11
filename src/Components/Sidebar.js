import React from 'react';
import './list.scss';
import { SearchIcon, KebabHorizontalIcon } from '@primer/octicons-react';

export class Sidebar extends React.Component {

  render() {
    return (
      <div class="sidenav text-white">
        <Search />
        <Profile />
        <div className="container">
          <div className="menu-dark p-2">
            Menu
          </div>
          <a href="#">Home</a>
          <a href="#">My Tasks</a>
          <a href="#">Notifications</a> <span className="notif-count">3</span>
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
          <img src={imageLink} class="rounded-circle pic" alt="profile-pic" />
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

      <div className="d-flex task">
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
