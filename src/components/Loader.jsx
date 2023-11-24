// import gif from '../assets/loader.gif'


function Loader() {

  

  return (
    <div className='h-full w-full flex items-center justify-center '>
        {/* <img src={gif} alt="" /> */}
        <iframe src="https://lottie.host/embed/633bd712-1554-47fe-a1be-9e36bd1f3373/zz4FQILCmP.json" className='h-[40rem] w-[40rem]'></iframe>
    </div>
  );
}

export default Loader;