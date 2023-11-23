import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, database } from "../configs/firebaseconfig";
import { useAppDispatch } from "./../redux/hook";
import { setUser } from "../features/auth/authSlice";

const GetUser = () => {
  const [userDetail, setUserDetail] = useState<Record<string, any> | null>(
    null
  );
  const dispatch = useAppDispatch();
  const getuserDetail = async (id: string) => {
    try {
      onSnapshot(doc(database, "user", id), (snapshot) => {
        let userinfo = snapshot.data();
        if (userinfo) {
          dispatch(setUser(userinfo));
          setUserDetail(userinfo);
        }
      });
    } catch (error) {
      console.log((error as error).message);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        getuserDetail(user.uid);
      }
    });
  }, []);
  return userDetail;
};

export default GetUser;
