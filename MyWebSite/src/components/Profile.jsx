import profil from "../assets/profil.png";
import "./Profile.css";
import { useLanguageContext } from "../contexts/LanguageContext";
function Profile() {
  const { texts } = useLanguageContext();

  return (
    <>
      <div className="profile-container">
        <h1>{texts.profileSection.heading}</h1>
        <div className="profile-content">
          <div className="profile-info">
            <h2>{texts.profileSection.basicInfoTitle}</h2>
            <span>
              <strong>{texts.profileSection.birthDate} </strong><p>{texts.profileSection.birthDateValue}</p>
            </span>
            <span>
              <strong>{texts.profileSection.city}</strong> <p>{texts.profileSection.cityValue}</p>
            </span>
            <span>
            <strong>{texts.profileSection.education}</strong> <p>{texts.profileSection.educationValue}</p>
            </span>
            <span>
            <strong>{texts.profileSection.preferredRole}</strong><p>{texts.profileSection.preferredRoleValue}</p>
            </span>
          </div>
          <div className="profile-img">
            <img src={profil} alt="" />
          </div>
          <div className="profile-about">
            <h2>{texts.profileSection.aboutMeTitle}</h2>
            <p>
            {texts.profileSection.aboutMeText1}
            </p>
            <p>
            {texts.profileSection.aboutMeText2}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
