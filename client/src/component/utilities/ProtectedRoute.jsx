import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserProfileThunk } from "../../store/slice/user/user.thunk";
const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, screenLoading } = useSelector(
    (state) => state.userReducer,
  );

  useEffect(() => {
    (async () => {
      await dispatch(getUserProfileThunk());
      // await dispatch(getOtherUsersThunk())
    })();
  }, [dispatch]);

  useEffect(() => {
    if (!screenLoading && !isAuthenticated) {
      navigate("/login");
    }
    // console.log(isAuthenticated,screenLoading);
  }, [isAuthenticated, screenLoading,navigate]);

  return children;
};

export default ProtectedRoute;

// const ProtectedRoute = ({ children }) => {
//   const { isAuthenticated, screenLoading } = useSelector(
//     (state) => state.userReducer
//   );

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!screenLoading && !isAuthenticated) {
//       navigate("/login");
//     }
//   }, [isAuthenticated, screenLoading]);

//   if (screenLoading) {
//     return <h1>Loading...</h1>;
//   }

//   return isAuthenticated ? children : null;
// };

// export default ProtectedRoute;
