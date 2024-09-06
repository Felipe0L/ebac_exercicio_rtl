import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://images.tcdn.com.br/img/img_prod/747391/miniatura_batmovel_batman_returns_1989_1_64_ertl_codigo_ertl1064_255_1_20200320175224.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
