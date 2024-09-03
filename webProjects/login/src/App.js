
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='logo-box'>
        <img src='./twitter.png' alt='twitterlogo' className='twitterlogo'/>
        <h2> Sign in to continue </h2>
        <button>
          <img src='./google.png' alt='googlelogo' className='googlelogo'/>
          Sign In with Google
        </button>
        <button>
          <img src='./apple.png' alt='applelogo' className='applelogo'/>
          Sign In with Apple
        </button>
        <hr></hr>
        <span> Or </span>
        <form>
          <input type='text' placeholder='Email or phone'/>
          <button>Next</button>
        </form> 
        <button>Forgot Password</button>
        <p>
          Don't Have an Account? <a> Sign Up</a>
        </p>
        
      </div>
    </div>
  );
}

export default App;
