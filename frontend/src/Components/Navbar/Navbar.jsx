import React, { useState, useEffect } from "react";

import {
  NavbarOuter,
  NavbarLine,
  NavbarProfileOuter,
  NavbarProfileImg,
  NavbarLinksOuter,
  Logo,
  WelcomeBack,
  NavbarProfileImgBack,
} from "./NavbarStyles";

import SeriesTrackerLogo from "../../Assets/Images/logo.png";

import { logOut, useAuth, getUserData, promiseexample } from "../../firebase.js";
import { useNavigate } from "react-router-dom";

import { getUser, postUser, postSerie, getSerie, putUser } from "../../axios/axios";
import axios from "axios";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({});

  let navigate = useNavigate();

  const currentUser = useAuth();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /**
   * color: boolean - true: show navbar background color
   * line: boolean - true: hide navbar line
   */

  let color = false;
  let line = false;

  if (scrollPosition >= 45) {
    color = true;
  }
  if (scrollPosition >= 5) {
    line = true;
  }

  const handleLogOut = () => {
    logOut();
  };

  const checkUser = async () => {
    await getUserData(currentUser?.uid).then((res) => {
      setUser(res);
    });
  };

  // Recursion until currentUser is defined
  // 200 ms timeout to prevent overflow
  useEffect(() => {
    if (currentUser) {
      fetchUser();
    } else {
      setTimeout(200);

      console.log("KEKW");
      setDone(!done);
    }
  }, [done]);

  const fetchUser = () => {
    axios
      .get(`api/users/${currentUser?.uid}`)
      .then(({ data }) => {
        console.log(data);
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavbarOuter showBgColor={color}>
        <Logo src={SeriesTrackerLogo} alt="Logo" onClick={() => navigate("/")} />
        <NavbarLinksOuter>
          <div className="findsSeries">Find Series</div>
          <div className="findfriends">Find Friends</div>
        </NavbarLinksOuter>
        <NavbarProfileOuter>
          {/* <button onClick={handlePost}>post</button>
          <button onClick={handleGet}>get</button>
          <button onClick={handlePutUser}>putUser</button> */}
          <div>
            <WelcomeBack>
              WELCOME BACK <span style={{ fontWeight: "400" }}>{user?.username}</span>
            </WelcomeBack>
          </div>
          <NavbarProfileImgBack>
            <NavbarProfileImg
              onClick={() => navigate("/profile")}
              src={user?.photoUrl ? user?.photoUrl : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
              alt="Profile pic"
            />
          </NavbarProfileImgBack>
          <span className="signout" style={{ whiteSpace: "nowrap" }} onClick={handleLogOut}>
            SIGN OUT
          </span>
        </NavbarProfileOuter>
        <NavbarLine showLine={line} />
      </NavbarOuter>
    </>
  );
};

export default Navbar;
