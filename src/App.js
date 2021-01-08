import ContactCard from "./ContactCard";
import Counter from "./Counter";

function App() {
  return (
    <div >
      <div id="cards">
        <ContactCard
          name="Nancy"
          mobile={123456789}
          email="nancy.bot@zheng.org"
        />
        <ContactCard
          name="Amy"
          mobile={234567890}
          email="amy.bot@zheng.org"
        />
        <ContactCard
          name="Rain"
          mobile={345689703}
          email="rain.bot@zheng.org"
        />
        <ContactCard
          name="Annie"
          mobile={541331311}
          email="annie.bot@zheng.org"
        />
        <ContactCard
          name="Sion"
          mobile={100111111}
          email="sion.bot@zheng.org"
        />
        <ContactCard
          name="Lulu"
          mobile={684611554}
          email="lulu.bot@zheng.org"
        />
      </div>
      <div id="count">
        <Counter />
      </div>
    </div>
  );
}

export default App;
