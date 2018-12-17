// import React from 'react';
// import LazyHero from 'react-lazy-hero';
// import { homedir } from 'os';

// const Home = () => {
//     return (
//         <div>
//             <LazyHero img="./677982-madrid-city-wallpapers-1920x1080-screen.jpg">
//                 <h1>Generic Startup Hype Headline</h1>
//             </LazyHero>

//             {/* ... */}
//         </div>
//     );
// }
// export default Home;

















import React from 'react';
import { Parallax, Background } from 'react-parallax';
import logo from '../../img/electricar2.jpg'; 
 
import './Home.css'
const Home = () => (
    <div>
        {/* -----dynamic blur-----*/}
        <Parallax
            blur={0}
            bgImage={require('../../img/madrid-background-hd-1440x900-479579.jpg')}
            bgImageAlt="the dog"
            strength={-200}
        >

        <div className="titulo">
            <h1>Pierde el miedo a moverte por <b>Madrid!</b></h1>
            <h2 className="h2">Piensa como Carmena, sé como Carmena</h2>
            {/* <select>
                <option value="red" style={{backgroundImage:"url(https://www.elcomercio.com/files/article_main/uploads/2017/05/12/5916775bc3359.jpeg)"}}>PEPE</option>
            </select> */}
            </div>
            <div style={{ width:"100%" ,height: '300px' }} />
        </Parallax>
        <div className="infogeneral">
        <div style={{ margin: "1.2rem 0 0 0.5rem"}} >
        <img  src={logo} style={{width: "35rem" , height:"20rem"}} />
    </div>
    <div class="informationp">
        <h1 class="quienesomos">¿Quiénes somos?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum at est eget porta. Pellentesque et leo vel odio lobortis malesuada vitae et lectus. Nunc risus mi, tristique vel tortor in, malesuada finibus dui. Etiam dictum neque id tortor euismod, et interdum augue vulputate. Nam bibendum gravida diam, ut malesuada odio. Integer a magna eget est condimentum elementum. Donec sed malesuada nunc. Vestibulum et augue lectus. Phasellus sollicitudin urna sit amet turpis iaculis tempus. Aliquam vel suscipit nisi. Quisque lacinia quis sapien eu euismod. Aenean vel ullamcorper ex. Maecenas et molestie dolor, vitae posuere augue.</p>
        <button class="buttonmasinfo">Más Información</button>
    </div>

    </div>
    <div class="servicios">
    <h1>Nuestros servicios</h1>
    </div>
    </div>
);
export default Home;




// import React, {Component, Fragment} from "react";
// import Scene from "react-parallax-3d";

// export default class Parallax extends Component {
//     state = { scene: 0 };

//     render() {
//         const scene = this.state.scene;

//         return (
//             <Fragment>
//                 <Scene
//                     ID={0}
//                     scene={scene}
//                     img="../../img/677982-madrid-city-wallpapers-1920x1080-screen.jpg"
//                     title="Madrid"
//                     subTitle="Rules"
//                 />
//                 <Scene
//                     ID={1}
//                     scene={scene}
//                     img="../../img/88_City Tour of Madrid.jpg"
//                     title="SVG"
//                     subTitle="REAL HOT"
//                 />
//             </Fragment>
//         );
//     }
// }