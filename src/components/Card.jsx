 import Profile from "../assests/ashi.jpg";


function Card() {
  return (
    <div className="card">
        <h1>My Introduction</h1>
      <img src={Profile} alt="picture" />
      <div className="card-name">Afshan Nawaz</div>
      <div className="card-intro">
        My name is Afshan Nawaz.I have done A.D.C. I am doing a Web Development course from SMIT.
        My Teacher name is Afsah Farooqui. I really like Ice-cream and Chocolate.
        In food, I love Biryani. My wish is to become a good web developer and
        earn so that I can fulfill all my wishes and my Mamma wishes.
      </div>
      <div className="card-btn">Follow</div>
    </div>
  );
}
export default Card;
