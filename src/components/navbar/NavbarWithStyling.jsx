import styles from "./NavbarWithStyling.module.css";
import About from "../about/About.jsx";

const NavbarWithStyling = ({ menu, name, age, address }) => {
  let list;

  if (menu) {
    console.log("test");
    list = (
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="#" className={styles.link}>
            Home
          </a>
        </li>
        <li className={styles.item}>
          <a href="#" className={styles.link}>
            {menu[0]}
          </a>
        </li>
        <li className={styles.item}>
          <a href="#" className={styles.link}>
            Logout
          </a>
        </li>
      </ul>
    );
  } else {
    list = <h1>List not exist</h1>;
  }

  return (
    <>
      <div className={styles.navbar}>
        <header></header>
        <h1 className={styles.title}> FSW 2 - {name}</h1>
        {list}
      </div>
      <About name={name} age={age} address={address} />
    </>
  );
};

export default NavbarWithStyling;
