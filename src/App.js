/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useState, useEffect } from "react";
import { useRef } from 'react'
import logo from './logo.svg';
import './App.css';

import MyButton from './components/MyButton';
import MyNavbar from './components/Navbar';
import MyFooter from './components/Footer';

function App() {
  // State -> kiri (getter), kanan (setter), state (jenis variabel)
  const [getText, setText] = useState("");
  const [getNav, setNav] = useState("");

  function changeNav() {
    setNav(getText);
  }

  // Props: string
  const title = "Belajar React JS";

  // Props: function
  const clicked = () => {
    return alert("Hi!");
  }

  // Props: element
  function paragraf() {
    return (
      <div class="div">
        <i>Hai Bang</i>
        <marquee>Anjay</marquee>
      </div>
    );
  }

  // State unique
  const [getCheck, setCheck] = useState(false);

  function isChekced() {
    setCheck(!getCheck)
    setTimeout(() => {
      setCheck((check) => !check);
    }, 3000);
  }

  // useEffect
  const [getJudul, setJudul] = useState("");

  useEffect(() => {
    if (getText === "React") {
      setJudul("React JavaScript");

    } else {
      setJudul("Hello World");
    }
  }, [getText]);

  // useRef
  const link = useRef(null);

  function pindah(ref) {
    window.scrollTo({
      top:ref.offsetTop,
      left: 0,
      behavior: "smooth"
    });
  }

  return (
    <div className="App">
      <MyNavbar judul={title} navValue={getNav} />
      <div class="container mx-auto">
        <img src={logo} className="App-logo mx-auto" alt="logo" />

        <button className="btn btn-info mb-2" onClick={() => pindah(link.current)}>Go to Link</button>
        <h2 className="mb-2 text-accent text-3xl" onClick={() => clicked()}>{getJudul}</h2>
        <h3 className="mb-3 text-2xl">{getText}</h3>

        <input type="text" placeholder="Type here" id="inp" className="input input-bordered w-full max-w-xs" onChange={(typing) => setText(typing.target.value)} />

        <div class="flex justify-center mt-3 gap-2">

          <button className="btn btn-primary" onClick={() => setText("Selamat Pagi")}>INA</button>
          <button className="btn btn-primary" onClick={() => setText("Ohayou Gozaimasu")}>JPN</button>
          <button className="btn btn-primary" onClick={() => changeNav()}>Nav</button>

          <MyButton clicked={clicked} paragraf={paragraf} />

          <button className="btn btn-secondary" onClick={() => isChekced()}>{getCheck ? "Hai!" : "Check"}</button>
        </div>
      </div>
      <div class="container w-1/2 mx-auto mt-10">
        <a className="link link-info" ref={link}>I'm a simple link</a>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facilis dolore ad sint, nam vitae unde odit molestias accusantium vel ex distinctio vero sit! Rem, quibusdam delectus. Aut laboriosam recusandae aspernatur architecto corrupti magnam id, molestiae fuga voluptatibus reprehenderit doloribus beatae sint vel. Harum provident repudiandae et, id exercitationem quam iste ipsam doloribus suscipit beatae quaerat laboriosam fugit animi minus recusandae voluptate quos distinctio culpa nisi sint optio. Cupiditate, beatae accusamus ratione, exercitationem, sunt architecto laborum nam facere veritatis laudantium aspernatur optio odio eos incidunt. Atque cupiditate ipsum ipsam aliquam temporibus aperiam eius vel odit ea, labore et nobis harum non molestias voluptas tenetur at itaque consectetur sunt, quisquam corporis illo! Nobis officia quae facilis fuga id magni! Quis consequuntur fuga laboriosam officia laudantium facere eligendi aut pariatur at vero cupiditate ut et culpa temporibus commodi magnam eveniet incidunt sed dolorum ipsa, aliquam quidem nesciunt soluta. Unde similique sequi excepturi voluptates deserunt assumenda optio veritatis, omnis, esse harum atque voluptatem blanditiis placeat facere, beatae perferendis autem eum quis laboriosam natus incidunt! Sed veritatis voluptatibus, placeat iure corporis cupiditate, qui, animi architecto voluptas sapiente a tempore quos rem. Distinctio cupiditate quam esse harum quod iusto debitis autem numquam ipsa ratione minima, unde mollitia consequuntur excepturi omnis ipsam aspernatur doloribus tenetur deleniti quisquam soluta recusandae quis quos magnam? Tempore, doloribus blanditiis quod odit quas dolorum assumenda molestiae reprehenderit placeat sit doloremque facere accusamus ipsam ipsa sed. Soluta quam expedita veniam minima, fugiat officiis dicta quia temporibus saepe dignissimos tempora a eos repellendus. Sit porro minus obcaecati veritatis rerum quam? Similique odit facilis natus excepturi quo voluptate ipsam minus rem ex tempora libero non, nam officiis, voluptas quod. Corrupti, voluptate. Minus, culpa. Magni ipsam aliquam iusto maiores repudiandae, ut alias. Unde, et sint accusamus quis, cum enim illo doloribus labore reprehenderit, totam laudantium.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, architecto ipsum. Dolore modi dolores, illo itaque placeat enim ipsam, harum voluptate a quo, quis animi! Modi tempora perspiciatis iure neque nobis mollitia iusto atque qui libero consectetur totam tempore necessitatibus voluptatum alias voluptas suscipit, impedit, beatae sint est doloribus inventore dolor. Magnam minima quibusdam, assumenda, deserunt quia placeat possimus ipsum expedita, eligendi incidunt non! Voluptatum impedit quod tempora ipsa ad, odio minima. Amet iste dignissimos fuga, voluptatum sapiente alias accusantium laborum quos tempora autem fugit nemo, voluptatibus voluptatem totam veniam, qui pariatur dicta temporibus? Suscipit facilis ut quibusdam expedita, cum similique quae illo aut molestiae soluta sunt enim quasi nemo quos incidunt debitis commodi praesentium dolores rem natus ipsa! Provident maiores voluptate architecto labore vero eius, molestiae dicta accusantium doloribus libero aliquam sit ut sunt consequuntur quibusdam ex voluptatum esse fugiat, assumenda deserunt iure quisquam! Vel possimus esse animi, odit fugiat exercitationem nostrum cumque saepe nesciunt. Est laudantium accusamus sed sint sit labore ducimus quidem, ullam placeat minus, doloribus libero fugiat facere eaque laboriosam? Vitae velit excepturi nihil obcaecati numquam aspernatur, voluptatum est unde autem, corporis deleniti laboriosam molestiae. Ad quidem dolor asperiores voluptatum assumenda illo inventore dolores repellendus dignissimos tempore, tempora blanditiis sint corporis quasi. Assumenda cumque, consequuntur tempora eum asperiores praesentium, quod aliquam quibusdam blanditiis maiores ipsum ducimus unde dolorem, placeat alias quo molestias ratione vel aliquid cum. Ex explicabo illum, non iusto, nobis omnis dolore pariatur illo atque quibusdam a veniam sit reprehenderit fugiat repellendus. Ipsum quo recusandae nostrum sit consequuntur. Alias facere quasi adipisci neque minus enim eveniet excepturi in. Assumenda commodi voluptates exercitationem iste provident ullam vel debitis, eaque aut minus repudiandae corporis tempore, quia, fugit ipsum sequi non natus impedit. Mollitia quas nisi temporibus quam consequatur doloribus excepturi quod eveniet ducimus, repudiandae dolores id.</p>
      </div>
      <MyFooter />
    </div>
  );
}

export default App;
