// import { useState } from 'react'

// // const Cars = ({ brand, model, year }) => {
// //     const [car, setCar] = useState('')
// //     const handleClick = () => {
// //         // alert('You choose a vehicle')
// //         setCar(`My car is ${brand} ${model}`)
// //     }
// //     return (
// //         <div>
// //             <p>Car Brand: {brand}</p>
// //             <p>Car Model: {model}</p>
// //             <p>Model Year: {year}</p>
// //             <button onClick={handleClick}>Choose Me</button>
// //             <p>{car}</p>
// //             <hr />
// //         </div>
// //     );
// // }

// // export default Cars;



// import { Link } from 'react-router-dom';
// import merc from "../images/efo.jpg";
// import bmw from "../images/efo.jpg";
// import toyota from "../images/efo.jpg";
// import audi from "../images/efo.jpg";


// const Cars = () => {
//     const [cars, setCars] = useState([

//         {
//             title: "Mercedes Benz S-Class",
//             body: "Abak Atama Soup Abak Atama Soup abak atama soup Abak Atama Soup Abak Atama Soup is a delicious soup popular amongst the Ibibios of Akwa Ibom State in Southern Nigeria. Its name is derived from the two dominant ingredients: Palm Fruit Concentrate (Abak) and Atama Leaves. The base palm fruit concentrate used in preparing Abak Atama makes it similar to the Banga soup of the Niger Delta origin and the Ofe Akwu of the Igbos but the difference is in the spices and vegetables used for each of these soups and stews. How to Cook Banga Soup/Stew This video is very similar to how to cook Abak Atama Soup. Ofe Owerri The palm fruit extract used in cooking Abak Atama Soup is quite different from the red palm oil used in cooking Nigerian food recipes. Palm Oil is pure oil extracted from the palm fruit pulp at high temperatures while the palm fruit extract used for the Abak Atama Soup is extracted at a very low temperatures and is a mixture of oil and water. Palm fruit oil extracted for Abak Atama Soup contains less saturated fat than palm oils.",
//             stateOfOrigin: "Germany",
//             pix: merc,
//             id: 1
//         },
//         {
//             title: "BMW 7 Series",
//             body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita nihil et vero consequatur praesentium molestiae, eveniet ipsam voluptatem velit repellat assumenda vel atque doloremque nesciunt voluptatibus! Sapiente assumenda sequi distinctio.     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam reprehenderit, mollitia nesciunt dicta aut maxime tempora nisi animi labore, possimus magnam. Mollitia dolor debitis quisquam et? Perspiciatis atque mollitia quod, in porro officiis, sequi a iure voluptate corrupti temporibus fugiat quisquam quis iste ipsa quaerat aspernatur. Et, molestiae nemo. Ut asperiores rem repellat error. Nesciunt repudiandae fuga adipisci iste? Nemo ab, libero obcaeapiente ipsam sequi, adipisci quisquam minima. Quasi labore sequi dolorum officiis quisquam? Totam vero autem in facere iure nostrum error saepe asperiores ipsam, assumenda suscipit ",
//             stateOfOrigin: "Germany",
//             pix: bmw,
//             id: 2
//         },
//         {
//             title: "Audi A8",
//             body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita nihil et vero consequatur praesentium molestiae, eveniet ipsam voluptatem velit repellat assumenda vel atque doloremque nesciunt voluptatibus! Sapiente assumenda sequi distinctio.     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam reprehenderit, mollitia nesciunt dicta aut maxime tempora nisi animi labore, possimus magnam. Mollitia dolor debitis quisquam et? Perspiciatis atque mollitia quod, in porro officiis, sequi a iure voluptate corrupti temporibus fugiat quisquam quis iste ipsa quaerat aspernatur. Et, molestiae nemo. Ut asperiores rem repellat error. Nesciunt repudiandae fuga adipisci iste? Nemo ab, libero obcaecati qui enim deserunt animi iste, dignissimos fuga ratione labore corrupti! Sint ab harum cum veniam laborum, illum voluptatem sunt quia perferendis ipsa ad exercitationem aliquidsuscipit aperiam recusandae facilis quaerat ?",
//             stateOfOrigin: "Germaany",
//             pix: audi,
//             id: 3
//         },
//         {
//             title: "Lexus LS-550",
//             body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita nihil et vero consequatur praesentium molestiae, eveniet ipsam voluptatem velit repellat assumenda vel atque doloremque nesciunt voluptatibus! Sapiente assumenda sequi distinctio.     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam reprehenasperiores ipsam, assumenda suscipit aperiam recusandae facilis quaerat cum aliquid veniam veritatis dicta odit, sit eligendi quasi qui voluptates.sit tempore? Repellat?",
//             stateOfOrigin: "Japan",
//             pix: toyota,
//             id: 4
//         }
//     ])
//     const handleClick = () => {
//         // alert('You choose a vehicle')
//         // setCars(`My car is ${vehicle.title} ${vehicle.stateOfOrigin}`)
//     }
//     return (
//         <div>
//             <div className="row">
//                 {
//                     cars.map((vehicle) =>

//                         <div className="col-sm-6" key={vehicle.id}>
//                             <div className="card">
//                                 <div className="card-body">
//                                     <img src={vehicle.pix} alt="vehicle imaage" />
//                                     <h5 className="card-title">Car Brand: {vehicle.title}</h5>
//                                     <p className="card-text">Car Model: {vehicle.body}</p>
//                                     <p className="card-text">Model Year: {vehicle.stateOfOrigin}</p>
//                                     <Link to="/" className="btn btn-primary">Go Home</Link>
//                                     <button className="btn btn-success" onClick={handleClick}>Choose Me</button>
//                                     <p>{cars}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 }

//             </div>
//         </div>
//     );
// }

// export default Cars;
