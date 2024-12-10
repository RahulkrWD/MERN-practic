// import React, { useState } from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


// const ModalContent = ({ view, setView }) => {
//   return (
//     <>
//       {view === 'login' && (
//         <div>
//           <h5>Login</h5>
//           <input type="email" placeholder="Email" className="form-control my-2" />
//           <input type="password" placeholder="Password" className="form-control my-2" />
//           <button className="btn btn-primary">Login</button>
//           <div>
//             <a href="#" onClick={() => setView('signup')}>Sign up</a> | 
//             <a href="#" onClick={() => setView('forgotPassword')}> Forgot password</a>
//           </div>
//         </div>
//       )}
//       {view === 'signup' && (
//         <div>
//           <h5>Sign Up</h5>
//           <input type="text" placeholder="Username" className="form-control my-2" />
//           <input type="email" placeholder="Email" className="form-control my-2" />
//           <input type="password" placeholder="Password" className="form-control my-2" />
//           <button className="btn btn-primary">Sign Up</button>
//           <div>
//             <a href="#" onClick={() => setView('login')}>Already have an account? Login</a>
//           </div>
//         </div>
//       )}
//       {view === 'forgotPassword' && (
//         <div>
//           <h5>Forgot Password</h5>
//           <input type="email" placeholder="Email" className="form-control my-2" />
//           <button className="btn btn-primary">Reset Password</button>
//           <div>
//             <a href="#" onClick={() => setView('login')}>Back to Login</a>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// const AuthModal = ({ showModal, handleClose, view, setView }) => (
//   <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog" aria-hidden="true">
//     <div className="modal-dialog modal-dialog-centered" role="document">
//       <div className="modal-content">
//         <div className="modal-header">
//           <button type="button" className="close" onClick={handleClose} aria-label="Close">
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         <div className="modal-body">
//           <ModalContent view={view} setView={setView} />
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const Navbar = ({ setShowModal, setView }) => (
//   <nav className="navbar navbar-light bg-light">
//     <button className="btn btn-primary" onClick={() => { setShowModal(true); setView('login'); }}>Login</button>
//     <button className="btn btn-secondary mx-2" onClick={() => { setShowModal(true); setView('signup'); }}>Sign Up</button>
//     <button className="btn btn-warning" onClick={() => { setShowModal(true); setView('forgotPassword'); }}>Forgot Password</button>
//   </nav>
// );

// const App = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [view, setView] = useState('login');

//   const handleClose = () => setShowModal(false);

//   return (
//     <div>
//       <Navbar setShowModal={setShowModal} setView={setView} />
//       {showModal && (
//         <AuthModal showModal={showModal} handleClose={handleClose} view={view} setView={setView} />
//       )}
//     </div>
//   );
// };

// export default App;
// App.js
import React from "react";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;

