import Registration from "./registration form/Registration";
import {Toaster} from 'react-hot-toast';
function App() {
  return (
    <>
      <div>
        <Toaster position="top-right"
                 toastOptions={
                  {
                    success: {
                      theme: {
                        primary: "#4aed88",
                      }
                    },
                  }
                 }
        ></Toaster>
      </div>
      <div className="heading">
        <h1>Yoga Class</h1>
      </div>
      <Registration/>
    </>
  );
}

export default App;
