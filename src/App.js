import logo from './logo.svg';
import '../src/style.css';

function App() {
  return (
    <div className='App'>
      <main className='flex'>
        <h3>BUTTON</h3>
        <p>Default</p>
        <button className='btn-primary btn-square'>Primary</button>
        <button className='btn-secondary btn-circle'>Secondary</button>
        <button className='btn-disabled'>Disabled</button>
        <p>Status</p>
        <button className='btn-success'>Success</button>
        <button className='btn-delete'>Delete</button>
      </main>
      {/* <section>
        <div className='box-b200'>asdasda</div>
        <div className='box-d400'>asdasda</div>
        <div className='box-w100'>asdasda</div>
        <div className='box-r100'>asdasda</div>
        <div className='box-g100'>asdasda</div>
        <div className='box-d100'>asdasda</div>
        <div className='box-d200'>asdasda</div>
        <div className='box-d300'>asdasda</div>
      </section> */}
    </div>
  );
}

export default App;
