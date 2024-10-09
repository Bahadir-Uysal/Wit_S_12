import profil from "../assets/profil.png";
import "./Profile.css";
function Profile() {
  return (
    <>
      <div className="profile-container">
        <h1>Profile</h1>
        <div className="profile-content">
          <div className="profile-info">
            <h2>Basic Information</h2>
            <span>
              Doğum Tarihi <p>23.03.1995</p>
            </span>
            <span>
              İkamet Şehri <p>İstanbul</p>
            </span>
            <span>
              Eğitim Durumu <p>Hacettepe Ünv. Biyoloji Lisans, 2016</p>
            </span>
            <span>
              Tercih Ettiği Rol<p>Frontend, UI</p>
            </span>
          </div>
          <div className="profile-img">
            <img src={profil} alt="" />
          </div>
          <div className="profile-about">
            <h2>About Me</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia.
            </p>
            <p>
              Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
