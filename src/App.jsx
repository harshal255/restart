import Homepage from "./component/Homepage";
import Profile from "./component/Profile";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  function clickTest() {
    toast.success('function is called from parent component', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    console.log("test")
  }

  return (
    <>
      <Homepage data={clickTest}></Homepage>
      <Profile></Profile>
      <ToastContainer></ToastContainer>

    </>
  )
}

export default App
